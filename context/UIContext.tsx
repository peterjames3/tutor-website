"use client";
import { createContext, useReducer, useContext, ReactNode } from "react";

// 1. State & Action types
type UIState = {
  isVisible: boolean;
};

type UIAction = { type: "SHOW_HELP" } | { type: "HIDE_HELP" };

// 2. Reducer
const initialState: UIState = { isVisible: false };

function uiReducer(state: UIState, action: UIAction): UIState {
  switch (action.type) {
    case "SHOW_HELP":
      return { isVisible: true };
    case "HIDE_HELP":
      return { isVisible: false };
    default:
      return state;
  }
}

// 3. Contexts
const UIStateContext = createContext<UIState | undefined>(undefined);
const UIDispatchContext = createContext<React.Dispatch<UIAction> | undefined>(
  undefined
);

// 4. Provider
export function UIProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  return (
    <UIStateContext.Provider value={state}>
      <UIDispatchContext.Provider value={dispatch}>
        {children}
      </UIDispatchContext.Provider>
    </UIStateContext.Provider>
  );
}

// 5. Custom hooks
export function useUIState() {
  const context = useContext(UIStateContext);
  if (context === undefined)
    throw new Error("useUIState must be used within UIProvider");
  return context;
}

export function useUIDispatch() {
  const context = useContext(UIDispatchContext);
  if (context === undefined)
    throw new Error("useUIDispatch must be used within UIProvider");
  return context;
}
