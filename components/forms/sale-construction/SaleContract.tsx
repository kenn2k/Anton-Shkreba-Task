import { useFormContext, useWatch } from 'react-hook-form';
import { SelectGroup } from '@/UI/SelectGroup';

export const SaleContract = () => {
  const { control, register } = useFormContext();
  const answer = useWatch({
    control,
    name: 'saleConstruction.contract.answer',
  });
  const isYes = answer === 'yes';
  return (
    <div className="space-y-2">
      <h4 className="text-sm md:text-base">
        b) Has the current owner signed a contract to sell it?
      </h4>

      <SelectGroup
        name="saleConstruction.contract.answer"
        options={[
          { value: 'no', label: 'NO' },
          { value: 'yes', label: 'YES' },
        ]}
        rules={{ required: 'Select one option' }}
      />

      {isYes && (
        <div className="mt-2 flex flex-col gap-3 border bg-gray-50 p-2 md:flex-row md:flex-wrap md:gap-6 md:p-3">
          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base">Buyer’s Name:</span>
            <input
              {...register('saleConstruction.contract.buyerName', {
                required: isYes ? 'Buyer name is required' : false,
              })}
              type="text"
              className="w-full border p-1 md:w-40"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base">Contract Date:</span>
            <input
              {...register('saleConstruction.contract.contractDate', {
                required: isYes ? 'Contract date is required' : false,
              })}
              type="date"
              className="w-full border p-1 md:w-auto"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base">Price: $</span>
            <input
              {...register('saleConstruction.contract.contractPrice', {
                required: isYes ? 'Price is required' : false,
              })}
              type="number"
              className="w-full border p-1 md:w-24"
            />
          </div>
        </div>
      )}
    </div>
  );
};
