import { useFormContext, useWatch } from 'react-hook-form';
import { SelectGroup } from '@/UI/SelectGroup';
import { IsOtherPropertyDescription } from './IsOtherPropertyDescription';

export const PropertyTypeSectionForm = () => {
  const { register, control } = useFormContext();

  const propertyType = useWatch({
    control,
    name: 'propertyDescription.type',
  });

  const isOtherSelected = propertyType === 'other';

  return (
    <div className="mb-4">
      <h4 className="-mx-4 mb-2 border-t px-4 pt-4">a) The property is:</h4>

      <SelectGroup
        name="propertyDescription.type"
        options={[
          { value: '1-family', label: '1-family house' },
          { value: '2-family', label: '2-family house' },
          { value: '3-family', label: '3-family house' },
          {
            value: 'vacantLot',
            label:
              'Vacant lot zoned residential and located outside Manhattan.',
          },
          {
            value: 'condo',
            label:
              'Class One condominium unit (A condominium board filing for unit owners must attach a schedule including a detailed physical description and condition of each unit covered by the application. Include special features and alteration data.)',
          },
          { value: 'other', label: 'Other (describe):' },
        ]}
        rules={{ required: 'Select one option' }}
      />

      {isOtherSelected && (
        <IsOtherPropertyDescription
          register={register}
          isOtherSelected={isOtherSelected}
        />
      )}

      <div className="mt-6">
        <h4 className="mb-2">b) Is there a basement?</h4>
        <SelectGroup
          name="propertyDescription.basement"
          options={[
            { value: 'no', label: 'No' },
            { value: 'unfinished', label: 'Yes, unfinished space only' },
            { value: 'finished', label: 'Yes, finished living space' },
          ]}
          rules={{ required: 'Select one option' }}
        />
      </div>
    </div>
  );
};
