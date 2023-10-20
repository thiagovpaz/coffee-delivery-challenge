import React, { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  helpText?: string;
}

const Input: React.FC<InputProps> = ({ className, helpText, ...props }) => {
  return (
    <div className={twMerge('relative flex flex-1', className)}>
      <input
        className={twMerge(
          'flex flex-1 rounded-md border border-gray-400 bg-gray-300 p-3 placeholder-gray-600 outline-none',
          'focus-within:border-yellow-900 focus-within:ring-1 focus-within:ring-yellow-900',
          helpText && 'pr-20',
          className,
        )}
        {...props}
      />
      {helpText && (
        <span className="absolute right-4 top-3 italic text-gray-600">
          {helpText}
        </span>
      )}
    </div>
  );
};

export { Input };
