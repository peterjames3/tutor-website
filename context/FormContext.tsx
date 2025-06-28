"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import { FormData } from "@/lib/zod-schema";

// Define state structure
type FormState = {
  step: number;
  submitted: boolean;
  data: Partial<FormData>;
};

// Define action types
type FormAction =
  | { type: "NEXT_STEP"; payload: Partial<FormData> }
  | { type: "PREV_STEP" }
  | { type: "SET_DATA"; payload: Partial<FormData> }
  | { type: "SUBMIT" } // New action type
  | { type: "RESET" };

const initialState: FormState = {
  step: 0,
  submitted: false,
  data: {},
};

// Reducer function
const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SUBMIT":
      return {
        ...initialState,
        submitted: true, // Set submitted to true
      };
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
// Update FormProvider
export function FormProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Update localStorage persistence
  useEffect(() => {
    const savedData = localStorage.getItem("studentFormData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      dispatch({
        type: "SET_DATA",
        payload: {
          ...parsedData,
          step: parsedData.step || 0,
        },
      });
    }
  }, []);

  useEffect(() => {
    // Don't persist when submitted
    if (
      !state.submitted &&
      (Object.keys(state.data).length > 0 || state.step > 0)
    ) {
      localStorage.setItem(
        "studentFormData",
        JSON.stringify({
          ...state.data,
          step: state.step,
        })
      );
    }
  }, [state.data, state.step, state.submitted]);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

// Custom hook to use the form context
export const useFormContext = () => useContext(FormContext);
