"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import { FormData } from "@/lib/schemas";

// Define state structure
type FormState = {
  step: number;
  data: Partial<FormData>;
};

// Define action types
type FormAction =
  | { type: "NEXT_STEP"; payload: Partial<FormData> }
  | { type: "PREV_STEP" }
  | { type: "SET_DATA"; payload: Partial<FormData> }
  | { type: "RESET" };

const initialState: FormState = {
  step: 0,
  data: {},
};

// Reducer function
const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
        data: { ...state.data, ...action.payload },
      };
    case "PREV_STEP":
      return { ...state, step: Math.max(0, state.step - 1) };
    case "SET_DATA":
      return { ...state, data: { ...state.data, ...action.payload } };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

// Create context
const FormContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Context provider component
export function FormProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Persist form state to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("studentFormData");
    if (savedData) {
      dispatch({
        type: "SET_DATA",
        payload: JSON.parse(savedData),
      });
    }
  }, []);

  useEffect(() => {
    if (Object.keys(state.data).length > 0) {
      localStorage.setItem("studentFormData", JSON.stringify(state.data));
    }
  }, [state.data]);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

// Custom hook to use the form context
export const useFormContext = () => useContext(FormContext);
