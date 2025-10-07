import { useFormContext, useWatch } from 'react-hook-form';
import { SelectGroup } from '@/UI/SelectGroup';

export const ConstructionInfo = () => {
  const { control, register } = useFormContext();
  const answer = useWatch({
    control,
    name: 'saleConstruction.construction.answer',
  });

  const isYes = answer === 'yes';

  return (
    <div className="space-y-2">
      <h4 className="text-sm md:text-base">
        e) Since January 5, 2023 has there been any construction, demolition or
        major alteration work, or plans for a new building filed?
      </h4>

      <SelectGroup
        name="saleConstruction.construction.answer"
        options={[
          { value: 'no', label: 'NO' },
          { value: 'yes', label: 'YES' },
        ]}
        rules={{ required: 'Select one option' }}
      />

      {isYes && (
        <div className="mt-3 flex flex-col flex-wrap items-baseline gap-6 border bg-gray-50 p-2 md:flex-row md:flex-wrap md:gap-6 md:p-3">
          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base">
              (1) What work was done?
            </span>
            <input
              {...register('saleConstruction.construction.workDescription', {
                required: isYes ? 'Work description is required' : false,
              })}
              type="text"
              className="w-full border p-1 md:w-64"
            />
          </div>

          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <span className="text-sm md:text-base">(2) Date started:</span>
            <input
              {...register('saleConstruction.construction.dateStarted', {
                required: isYes ? 'Start date is required' : false,
              })}
              type="date"
              className="w-full border p-1 md:w-auto"
            />
            <span className="text-sm md:text-base">Completed:</span>
            <input
              {...register('saleConstruction.construction.dateCompleted', {
                required: isYes ? 'Completion date is required' : false,
              })}
              type="date"
              className="w-full border p-1 md:w-auto"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base">(3) Cost: $</span>
            <input
              {...register('saleConstruction.construction.cost', {
                required: isYes ? 'Cost is required' : false,
              })}
              type="number"
              className="w-full border p-1 md:w-28"
            />
          </div>
        </div>
      )}
    </div>
  );
};
