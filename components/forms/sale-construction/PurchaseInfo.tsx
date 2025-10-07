import { useFormContext, useWatch } from 'react-hook-form';
import { SelectGroup } from '@/UI/SelectGroup';

export const PurchaseInfo = () => {
  const { control, register } = useFormContext();
  const answer = useWatch({
    control,
    name: 'saleConstruction.purchase.answer',
  });

  const isYes = answer === 'yes';

  return (
    <div>
      <h4 className="text-sm md:text-base">
        a) Did the current owner buy this property after January 5, 2023?
      </h4>

      <SelectGroup
        name="saleConstruction.purchase.answer"
        options={[
          { value: 'no', label: 'NO' },
          { value: 'yes', label: 'YES' },
        ]}
        rules={{ required: 'Select one option' }}
      />

      {isYes && (
        <div className="mt-2 flex flex-col gap-3 border bg-gray-50 p-2 md:flex-row md:flex-wrap md:gap-6 md:p-3">
          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base">Seller's Name:</span>
            <input
              {...register('saleConstruction.purchase.sellerName', {
                required: isYes ? 'Seller name is required' : false,
              })}
              type="text"
              className="w-full border p-1 md:w-40"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base">Closing Date:</span>
            <input
              {...register('saleConstruction.purchase.closingDate', {
                required: isYes ? 'Closing date is required' : false,
              })}
              type="date"
              className="w-full border p-1 md:w-auto"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base">Price: $</span>
            <input
              {...register('saleConstruction.purchase.price', {
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
