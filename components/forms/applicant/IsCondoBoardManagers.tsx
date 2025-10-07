import { SelectGroup } from '@/UI/SelectGroup';

export const IsCondoBoardManagers = () => {
  return (
    <div className="mt-2 ml-6">
      <p className="font-semibold">Source of Board's authority (check one):</p>
      <SelectGroup
        name="applicant.boardAuthority"
        options={[
          { value: 'bylaws', label: 'By-laws' },
          {
            value: 'individualAuth',
            label: 'Individual authorization, valid under applicable law',
          },
          { value: 'powerOfAttorney', label: 'Power-of-Attorney' },
        ]}
        rules={{ required: 'Select one option' }}
      />
    </div>
  );
};
