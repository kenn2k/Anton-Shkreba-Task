export const HeadRestrictions = () => {
  return (
    <div className="border-t border-black py-3 md:-mx-4 md:px-4 md:py-4">
      <h2 className="text-sm font-normal md:text-base">
        <span className="underline">YOU CANNOT USE THIS FORM TO: </span>
        (i) request a change in the estimated market value, physical description
        or building class of your property; (ii) apply for a reduction in the
        assessed value of a class 2, 3 or 4 property; (iii) request a change in
        tax class; or (iv) claim an exemption.
      </h2>

      <h2 className="mt-2 text-sm md:text-base">
        READ TC600 AND ALL INSTRUCTIONS BEFORE COMPLETING THIS FORM. TYPE OR
        PRINT IN INK. DO NOT USE PENCIL. COMPLETE ALL PARTS 1 THROUGH 10.{' '}
        <span className="font-normal">
          Go to{' '}
          <a
            href="http://www.nyc.gov/html/taxcomm"
            className="text-blue-700 underline"
          >
            www.nyc.gov/html/taxcomm
          </a>{' '}
          for forms and instructions.
        </span>
      </h2>

      <h2 className="mt-2 text-sm underline md:text-base">
        NEW: NONRESIDENTIAL RENTAL ACTIVITY MUST BE REPORTED ON TC201 OR TC203.
        See Part 7 below.
      </h2>

      <h4 className="mt-2 text-xs md:text-sm">
        <span className="font-bold">NOTE:</span> A $175 FEE applies to
        applications if the 2025/26{' '}
        <span className="underline">assessed value</span> is $2 million or more.
        Do NOT pay the fee with this application; it will be included in your
        property tax bill. See TC600 for more information about the fee.
      </h4>
    </div>
  );
};
