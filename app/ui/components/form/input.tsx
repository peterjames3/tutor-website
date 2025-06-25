import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  containerClass?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, containerClass, ...props }, ref) => {
    return (
      <div className={`w-full ${containerClass || ""}`}>
        <div className=" w-full flex items-center justify-between">
          <div>
            {label && (
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
            )}
          </div>
          <div>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>
        </div>
        <input
          className={`w-full px-4 py-3 bg-white border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent ${
            className || ""
          }`}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
