import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import { TaxCommissionFields } from '@/UI/types';

export const MarketValueInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TaxCommissionFields>();

  return (
    <div className="flex flex-col items-start gap-2 md:flex-row md:items-start md:gap-4">
      <h4 className="flex-1 text-sm md:text-base">
        a) Applicant's estimate of market value:
      </h4>
      <div className="flex w-full items-center gap-2 md:w-auto">
        {errors.taxCommission?.marketValue && (
          <p className="mt-1 text-xs text-red-600">
            {errors.taxCommission.marketValue.message as string}
          </p>
        )}
        <h4>$</h4>
        <input
          type="number"
          {...register('taxCommission.marketValue', {
            required: 'Market value is required',
            min: { value: 1, message: 'Must be greater than 0' },
          })}
          className={clsx(
            'w-full border-b border-black bg-transparent px-1 text-sm outline-none md:w-64',
            errors.taxCommission?.marketValue && 'border-red-500'
          )}
          placeholder="Market Value"
        />
      </div>
    </div>
  );
};
