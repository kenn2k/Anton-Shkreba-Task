import { useFormContext, useWatch } from 'react-hook-form';
import { HasRepresentative } from './HasRepresentative';
import { SelectGroup } from '@/UI/SelectGroup';

export const RepresentativeForm = () => {
  const { control, setValue } = useFormContext();

  const hasRepresentative = useWatch({
    control,
    name: 'contact.hasRepresentative',
  });

  const representativeType = useWatch({
    control,
    name: 'contact.representativeType',
  });

  const otherSpecify = useWatch({
    control,
    name: 'contact.otherSpecify',
  });

  return (
    <div className="-mx-4 border-t border-black p-4 px-4 py-2 md:px-4 md:py-4">
      <h2 className="text-sm md:text-base">
        Will an appointed Representative handle this application for the
        Applicant? <span className="font-normal">(Check One):</span>
      </h2>

      <SelectGroup
        name="contact.hasRepresentative"
        options={[
          { value: 'no', label: 'No' },
          { value: 'yes', label: 'Yes' },
        ]}
        rules={{ required: 'Please select an option' }}
      />

      {hasRepresentative === 'yes' && (
        <HasRepresentative
          representativeType={representativeType}
          setValue={setValue}
          otherSpecify={otherSpecify}
        />
      )}
    </div>
  );
};
