import { SelectGroup } from '@/UI/SelectGroup';
import { useFormContext, useWatch } from 'react-hook-form';

export const RefinanceInfo = () => {
  const { control } = useFormContext();
  const answer = useWatch({
    control,
    name: 'saleConstruction.refinance.answer',
  });

  return (
    <div>
      <h4 className="text-sm md:text-base">
        d) Since January 5, 2023 has the property been refinanced?
      </h4>

      <SelectGroup
        name="saleConstruction.refinance.answer"
        options={[
          { value: 'no', label: 'NO' },
          { value: 'yes', label: 'YES' },
        ]}
        rules={{ required: 'Select one option' }}
      />

      {answer === 'yes' && (
        <p className="mt-2 ml-4 italic">
          If YES, attach documents showing what the property was appraised at
          when it was refinanced.
        </p>
      )}
    </div>
  );
};
