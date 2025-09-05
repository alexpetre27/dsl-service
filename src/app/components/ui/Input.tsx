import { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={`w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all duration-200 ease-out placeholder:text-gray-500 ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
