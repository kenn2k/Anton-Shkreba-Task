import { useFormContext, useWatch } from 'react-hook-form';
import clsx from 'clsx';
import { TaxCommissionFields } from '@/UI/types';

export const AssessedValueInput = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<TaxCommissionFields>();

  const multiplyLine = useWatch({
    name: 'taxCommission.multiplyLine',
    control,
  });

  return (
    <div className="flex flex-col items-start gap-2 md:flex-row md:items-start md:gap-4">
      <h4 className="flex-1 text-sm md:text-base">
        c) Assessed Value (from Notice of Property Value)
      </h4>
      <div className="flex w-full items-start gap-2 md:w-auto">
        {errors.taxCommission?.assessedValue && (
          <p className="mt-1 text-xs text-red-600">
            {errors.taxCommission.assessedValue.message as string}
          </p>
        )}
        <h4>$</h4>
        <input
          type="number"
          {...register('taxCommission.assessedValue', {
            required: 'Assessed value is required',
            validate: value =>
              parseFloat(value) >= parseFloat(multiplyLine || '0') ||
              'Assessed Value cannot be less than 6% of Market Value',
          })}
          className={clsx(
            'w-full border-b border-black bg-transparent px-1 text-sm outline-none md:w-64',
            errors.taxCommission?.assessedValue && 'border-red-600'
          )}
          placeholder="Assessed Value"
        />
      </div>
    </div>
  );
};
