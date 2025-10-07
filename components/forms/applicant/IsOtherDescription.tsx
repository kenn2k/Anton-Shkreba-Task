import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IsOtherDesc {
  register: UseFormRegister<FieldValues>;
  isOther: boolean;
}
export const IsOtherDescription = ({ register, isOther }: IsOtherDesc) => {
  return (
    <div className="mt-2 ml-6">
      <input
        {...register('applicant.otherSpecify', {
          required: isOther ? 'Please specify the type' : false,
        })}
        type="text"
        className="w-full border border-gray-400 px-2 py-1"
        placeholder="Specify other type"
      />
      <p className="mt-1 text-sm text-gray-600">
        (Attach TC200 and documentation specified in Part 2 of TC200.)
      </p>
      <p className="mt-1 text-sm font-bold text-red-600 uppercase">
        IF YOU DON'T SUBMIT FORM TC200, YOUR APPLICATION WILL NOT BE REVIEWED.
      </p>
    </div>
  );
};
