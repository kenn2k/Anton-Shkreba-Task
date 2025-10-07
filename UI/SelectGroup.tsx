'use client';

import { useFormContext, useController } from 'react-hook-form';
import { SelectGroupProps } from './types';

export const SelectGroup = ({ name, options, rules }: SelectGroupProps) => {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: '',
    rules,
  });

  return (
    <div className="mt-2 space-y-2">
      {options.map(opt => (
        <label key={opt.value} className="flex items-center space-x-2">
          <input
            type="radio"
            value={opt.value}
            checked={field.value === opt.value}
            onChange={() => field.onChange(opt.value)}
            className="border border-black"
          />
          <span>{opt.label}</span>
        </label>
      ))}
      {error && (
        <p className="mt-1 text-xs font-bold text-red-600 md:text-sm">
          {error.message}
        </p>
      )}
    </div>
  );
};
