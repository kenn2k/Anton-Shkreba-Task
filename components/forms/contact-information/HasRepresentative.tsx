import { FieldValues, UseFormSetValue } from 'react-hook-form';

interface HasRepresentativeProps {
  representativeType: string;
  setValue: UseFormSetValue<FieldValues>;
  otherSpecify: string;
}

export const HasRepresentative = ({
  representativeType,
  setValue,
  otherSpecify,
}: HasRepresentativeProps) => {
  return (
    <div className="mt-3 ml-4 space-y-2">
      <p className="text-sm">If “Yes”, check type of Representative:</p>

      <div className="flex flex-wrap items-center gap-6 py-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            className="border border-black"
            checked={representativeType === 'attorney'}
            onChange={() => setValue('contact.representativeType', 'attorney')}
          />
          <span>Attorney</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            className="border border-black"
            checked={representativeType === 'other'}
            onChange={e =>
              setValue(
                'contact.representativeType',
                e.target.checked ? 'other' : ''
              )
            }
          />
          <span>Other (specify):</span>
        </label>

        {representativeType === 'other' && (
          <input
            type="text"
            value={otherSpecify || ''}
            onChange={e => setValue('contact.otherSpecify', e.target.value)}
            placeholder="Specify other type"
            className="border-b border-black px-1 outline-none"
          />
        )}
      </div>
    </div>
  );
};
