import { TextareaHTMLAttributes, forwardRef } from 'react';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all duration-200 ease-out placeholder:text-gray-500 resize-vertical min-h-[120px] ${className}`}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
