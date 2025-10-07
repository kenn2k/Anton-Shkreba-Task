'use client';

import { useFormContext, useWatch } from 'react-hook-form';
import Link from 'next/link';

import { MarketValueInput } from './MarketValueInput';
import { CalculatedMultiplyLine } from './CalculatedMultiplyLine';
import { AssessedValueInput } from './AssessedValueInput';

export const TaxCommissionForm = () => {
  const { control } = useFormContext();

  const multiplyLine = useWatch({
    control,
    name: 'taxCommission.multiplyLine',
  });

  const assessedValue = useWatch({
    control,
    name: 'taxCommission.assessedValue',
  });

  const isInvalidComparison =
    parseFloat(assessedValue) < parseFloat(multiplyLine || '0');

  return (
    <>
      <h2 className="-mx-4 border-y border-black bg-gray-300 px-4 py-2 text-sm font-bold md:py-3 md:text-base">
        4. VALUATION CLAIM – IF YOU DO NOT FULLY COMPLETE THIS PART 4, YOUR
        APPLICATION WILL BE DISMISSED. <br />
        The Tax Commission cannot change the estimate of market value shown on
        your Notice of Property Value. See instructions for an explanation of
        market value.
      </h2>

      <div className="space-y-3 py-3 md:space-y-4 md:py-4">
        <MarketValueInput />
        <CalculatedMultiplyLine />
        <AssessedValueInput />

        {isInvalidComparison && (
          <p className="text-xs font-bold text-red-600 md:text-sm">
            Line c is less than line b. DO NOT FILE TC108.
          </p>
        )}
      </div>

      <div className="mt-3 space-y-2 text-xs md:mt-4 md:text-sm">
        <h4 className="font-bold">
          If line c is less than line b, DO NOT FILE TC108.
        </h4>
        <h4>
          You have the right to allege an assessment ratio lower than the 6%
          ratio used in setting the assessment and seek a lower assessment in a
          proceeding for judicial review. See TC600 at{' '}
          <Link
            href="http://www.nyc.gov/html/taxcomm"
            className="text-blue-700 underline"
          >
            www.nyc.gov/html/taxcomm
          </Link>
          .
        </h4>
      </div>
    </>
  );
};
