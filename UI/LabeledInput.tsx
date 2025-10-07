'use client';

import clsx from 'clsx';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface LabeledInput {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  registerOptions?: RegisterOptions;
}

export const LabeledInput = ({
  label,
  name,
  placeholder,
  type = 'text',
  required,
  registerOptions,
}: LabeledInput) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const fieldError = errors && (errors as any)[name];
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-4">
      <label
        htmlFor={name}
        className={clsx(
          'text-sm font-semibold md:text-base',
          required && 'after:ml-1 after:text-red-500'
        )}
      >
        {label}
      </label>

      <div className="flex w-full flex-col md:w-96">
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name, {
            required: required ? `${placeholder || label} is required` : false,
            ...registerOptions,
          })}
          className={clsx(
            'border-b border-gray-400 px-2 py-1 text-sm outline-none',
            fieldError && 'border-red-500'
          )}
        />

        {fieldError && (
          <p className="mt-1 text-xs text-red-600">
            {fieldError.message as string}
          </p>
        )}
      </div>
    </div>
  );
};
