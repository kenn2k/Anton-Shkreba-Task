import { useFormContext } from 'react-hook-form';

export const FormInstructions = () => {
  const { register } = useFormContext();
  return (
    <section className="py-3 md:py-4">
      <h4 className="text-xs md:text-sm">
        <span className="font-bold">However,</span> if you received a Revised
        Notice of Property Value <span className="underline">increasing</span>{' '}
        your assessed value or a notice of apportionment from the Dept. of
        Finance dated <span className="underline">after</span> February 1, 2025,
        you have 20 calendar days after the date of the notice to file Form
        TC108. Check the box next to the type of notice you received and attach
        a copy of the notice:
      </h4>
      <div className="mt-2 flex flex-col gap-2 md:flex-row md:gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            {...register('head.notices.yes')}
            className="border border-black"
          />
          <span className="text-xs md:text-sm">Apportionment notice</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            {...register('head.notices.no')}
            className="border border-black"
          />
          <span className="text-xs md:text-sm">
            Notice of increased assessment
          </span>
        </label>
      </div>
    </section>
  );
};
