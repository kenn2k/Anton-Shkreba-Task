import { useFormContext, useWatch } from 'react-hook-form';
import { InformationInSupportTable } from './InformationTable';

export const InformationInSupportForm = () => {
  const { control, register } = useFormContext();

  const reviewOnPapers = useWatch({
    control,
    name: 'hearingRequest.type',
  });

  const isPaperReview = reviewOnPapers === 'paper';
  const isDisabled = !isPaperReview;

  return (
    <>
      <div className="-mx-4 border-y border-black bg-gray-300 px-4 py-3 md:px-6 md:py-4">
        <h2 className="text-sm md:text-base">
          9. INFORMATION IN SUPPORT{' '}
          <span className="underline">
            – You must complete this part if you checked “Review on Papers” in
            Part 5.
          </span>
        </h2>

        <div className="mt-2 flex items-center">
          <input
            type="checkbox"
            disabled={isDisabled}
            {...register('informationInSupport.hasAttachedProof')}
            className="form-checkbox rounded border-gray-300"
          />
          <h2 className="ml-2 text-sm md:text-base">
            Check here if sales or other proof of market value is provided on
            attached sheets.
          </h2>
        </div>

        <h2
          className={`ml-2 text-sm md:text-base ${isDisabled ? 'text-gray-500' : ''} mt-2`}
        >
          If you are requesting an in-person hearing, you may provide this
          information at the hearing.
        </h2>
      </div>

      <InformationInSupportTable isDisabled={isDisabled} />
    </>
  );
};
