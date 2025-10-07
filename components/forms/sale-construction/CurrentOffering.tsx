import { useFormContext, useWatch } from 'react-hook-form';
import { SelectGroup } from '@/UI/SelectGroup';

export const CurrentOffering = () => {
  const { control, register } = useFormContext();
  const answer = useWatch({
    control,
    name: 'saleConstruction.offering.answer',
  });

  const isYes = answer === 'yes';
  return (
    <div>
      <h4 className="text-sm md:text-base">
        c) Is the property being offered for sale now?
      </h4>

      <SelectGroup
        name="saleConstruction.offering.answer"
        options={[
          { value: 'no', label: 'NO' },
          { value: 'yes', label: 'YES' },
        ]}
        rules={{ required: 'Select one option' }}
      />

      {isYes && (
        <div className="mt-2 ml-4">
          <h4>If YES, report details including asking price:</h4>
          <textarea
            {...register('saleConstruction.offering.details', {
              required: isYes ? 'Details are required' : false,
            })}
            className="mt-1 w-full border p-1"
          />
        </div>
      )}
    </div>
  );
};
