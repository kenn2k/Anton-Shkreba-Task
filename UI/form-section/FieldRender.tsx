import { useFormContext } from 'react-hook-form';
import { getColSpanClass } from './utils';
import { FieldProps } from '../types';
import clsx from 'clsx';

export const FieldRender = ({ field, isLast }: FieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const colClass = getColSpanClass(field.colSpan);
  const error = field.name ? errors[field.name] : undefined;

  if (field.type === 'static') {
    return (
      <div
        className={clsx(
          colClass,
          !isLast && 'border-black',
          'flex h-full items-center justify-center bg-gray-300 px-2 py-2 text-xs font-bold uppercase'
        )}
      >
        {field.label}
      </div>
    );
  }

  if (
    (field.type === 'input' ||
      field.type === 'date' ||
      field.type === 'number') &&
    field.name
  ) {
    const baseValidation: Record<string, any> = {};

    if (field.required === true)
      baseValidation.required = `${field.placeholder || 'Field'} is required`;
    else if (typeof field.required === 'string')
      baseValidation.required = field.required;

    if (field.pattern && field.type !== 'number') {
      baseValidation.pattern = field.pattern;
    }

    if (field.type === 'number') {
      baseValidation.valueAsNumber = true;
    }

    return (
      <div
        className={clsx(
          colClass,
          !isLast && 'border-black md:border-r',
          'flex flex-col p-1'
        )}
      >
        <input
          type={field.type}
          {...register(field.name, baseValidation)}
          placeholder={field.placeholder}
          className={clsx(
            'h-full w-full bg-white px-3 py-2 text-sm outline-none',
            error && 'border border-red-500'
          )}
        />

        {error && (
          <span className="mt-1 text-xs text-red-600">
            {(error as any).message}
          </span>
        )}
      </div>
    );
  }

  return null;
};
