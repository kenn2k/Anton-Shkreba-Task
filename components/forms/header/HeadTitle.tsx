import Image from 'next/image';

export const HeadTitle = () => {
  return (
    <section>
      <div className="mb-4 flex flex-col items-center justify-center py-4 md:flex-row md:items-start md:justify-between">
        <div className="mb-4 flex-shrink-0 md:mr-6 md:mb-0">
          <Image
            src="/tc108-001.png"
            alt="NYC Seal"
            width={100}
            height={90}
            className="w-20 md:w-28 lg:w-34"
          />
        </div>

        <div className="flex-grow px-4 text-center leading-tight">
          <h1 className="text-lg md:text-xl lg:text-2xl">
            TAX COMMISSION OF THE CITY OF NEW YORK
            <br />1 Centre Street, Room 2400, New York, NY 10007
          </h1>
          <h1 className="mt-4 text-base md:mt-6 md:text-lg lg:text-xl">
            APPLICATION FOR CORRECTION OF ASSESSED VALUE FOR ONE,
            <br />
            TWO OR THREE-FAMILY HOUSE OR OTHER CLASS ONE PROPERTY{' '}
            <span className="underline">ONLY</span>
          </h1>
        </div>

        <div className="mt-4 flex-shrink-0 md:mt-0 md:ml-6">
          <div className="border-4 border-gray-400 px-4 py-2 md:border-6 md:px-5 md:py-3">
            <div className="text-center font-bold">
              <div className="text-base md:text-lg">TC108</div>
              <div className="text-xs md:text-sm">2025/26</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-black md:-mx-4 md:px-4">
        <div className="px-4 py-2">
          <h2 className="text-sm md:text-base lg:text-lg">
            YOUR COMPLETED FORM TC108{' '}
            <span className="underline">MUST BE RECEIVED</span> BY THE NYC TAX
            COMMISSION AT 1 CENTRE ST., RM. 2400, NEW YORK, NY 10007{' '}
            <span className="underline">BY 5:00 P.M. MARCH 17, 2025.</span> See
            Instructions "Filing TC108".
          </h2>
        </div>
      </div>
    </section>
  );
};
