import { useFormContext } from 'react-hook-form';

export const NonresidentialActivity = () => {
  const { register, watch, setValue } = useFormContext();

  const value = watch('nonresidentialActivity.answer');

  return (
    <>
      <h2 className="-mx-4 border-y border-black bg-gray-300 px-4 py-2 text-sm md:py-3 md:text-base">
        7. NONRESIDENTIAL RENTAL ACTIVITY – THIS PART MUST BE COMPLETED
      </h2>

      <div className="py-4">
        <h4>
          Was any portion of the property rented or offered for rent for any{' '}
          <span className="underline">nonresidential</span> use (for example,
          commercial, retail or office use) in 2024?
        </h4>

        <div className="mt-2 flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="no"
              checked={value === 'no'}
              onChange={() => setValue('nonresidentialActivity.answer', 'no')}
              className="border border-black"
            />
            <span>No</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="yes"
              checked={value === 'yes'}
              onChange={() => setValue('nonresidentialActivity.answer', 'yes')}
              className="border border-black"
            />
            <span>Yes</span>
          </label>

          <h2 className="text-sm">
            <span className="underline">NEW:</span> IF YES, YOU MUST FILE TC201
            (or TC203 for a condo board of managers).
          </h2>
        </div>
      </div>
    </>
  );
};
