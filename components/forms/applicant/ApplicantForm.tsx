import { LabeledInput } from '@/UI';
import { SelectGroup } from '@/UI/SelectGroup';
import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { IsOtherDescription } from './IsOtherDescription';
import { IsCondoBoardManagers } from './IsCondoBoardManagers';

export const ApplicantForm = () => {
  const { register, control, setValue } = useFormContext();

  const applicantType = useWatch({
    control,
    name: 'applicant.type',
  });

  const isOther = applicantType === 'other';
  const isCondoBoard = applicantType === 'condoBoard';

  useEffect(() => {
    if (!isOther) setValue('applicant.otherSpecify', '');
  }, [isOther, setValue]);

  return (
    <>
      <h2 className="-mx-4 border-y border-black bg-gray-300 px-4 py-2 text-sm md:py-3 md:text-base">
        2. APPLICANT – The Applicant must be an owner or other person directly
        affected by the assessment. <br /> An attorney or agent, other than the
        board of managers of a condo, cannot be the Applicant.
      </h2>

      <div className="space-y-4 py-4">
        <LabeledInput
          label="a) APPLICANT'S NAME:"
          {...register('applicant.name', {
            required: 'This field is required',
          })}
          placeholder="ENTER APPLICANT'S NAME"
        />

        <div>
          <label className="block text-sm font-semibold md:text-base">
            b) APPLICANT DESCRIPTION (CHECK ONE):
          </label>

          <SelectGroup
            name="applicant.type"
            options={[
              { value: 'owner', label: 'Owner' },
              { value: 'tenant', label: 'Tenant paying all taxes' },
              { value: 'other', label: 'Other (specify)' },
              { value: 'condoBoard', label: 'Condo board of managers ...' },
            ]}
            rules={{ required: 'Select one option' }}
          />

          {isOther && (
            <IsOtherDescription register={register} isOther={isOther} />
          )}

          {isCondoBoard && <IsCondoBoardManagers />}
        </div>
      </div>
    </>
  );
};
