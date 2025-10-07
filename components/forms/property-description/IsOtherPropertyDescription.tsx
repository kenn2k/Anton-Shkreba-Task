import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IsOtherPropertyDescriptionProps {
  register: UseFormRegister<FieldValues>;
  isOtherSelected: boolean;
}

export const IsOtherPropertyDescription = ({
  register,
  isOtherSelected,
}: IsOtherPropertyDescriptionProps) => {
  return (
    <div className="mt-3 ml-6 space-y-3 border-l-2 border-gray-300 pl-4">
      <div className="flex flex-wrap items-center gap-3">
        <input
          {...register('propertyDescription.otherDescription', {
            required: isOtherSelected ? 'Description is required' : false,
          })}
          type="text"
          className="flex-1 border-b border-black px-1 text-sm outline-none"
          placeholder="Describe..."
        />
        <span>
          If <b>OTHER</b>, enter number of residential units:
        </span>
        <input
          {...register('propertyDescription.residentialUnits', {
            required: isOtherSelected
              ? 'Number of residential units is required'
              : false,
          })}
          type="number"
          className="w-16 border-b border-black px-1 text-sm outline-none"
        />
        <span>and number of commercial units:</span>
        <input
          {...register('propertyDescription.commercialUnits', {
            required: isOtherSelected
              ? 'Number of commercial units is required'
              : false,
          })}
          type="number"
          className="w-16 border-b border-black px-1 text-sm outline-none"
        />
      </div>
    </div>
  );
};
