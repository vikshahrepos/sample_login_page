import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export function InputField({ icon, className = '', ...props }: InputFieldProps) {
  return (
    <div className="relative rounded-md shadow-sm">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        className={`block w-full ${
          icon ? 'pl-10' : 'pl-4'
        } pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm ${className}`}
        {...props}
      />
    </div>
  );
}