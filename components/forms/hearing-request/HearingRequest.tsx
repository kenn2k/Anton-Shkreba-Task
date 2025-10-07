import { SelectGroup } from '@/UI/SelectGroup';

export const HearingRequest = () => {
  return (
    <>
      <h2 className="-mx-4 border-y border-black bg-gray-300 px-4 py-2 text-sm md:py-3 md:text-base">
        5. HEARING REQUEST – Check <span className="underline">one</span> box
        only.
      </h2>

      <div className="-mx-4 flex flex-col p-4 md:flex-row">
        <div className="flex-1 space-y-2">
          <SelectGroup
            name="hearingRequest.type"
            options={[
              {
                value: 'paper',
                label:
                  'Review on papers submitted WITHOUT an in-person hearing',
              },
              { value: 'manhattan', label: 'In-person hearing in Manhattan' },
              { value: 'telephone', label: 'Telephone hearing' },
              {
                value: 'video',
                label: 'Video conference using Microsoft Teams',
              },
            ]}
            rules={{ required: 'Select one option' }}
          />
        </div>

        <div className="mt-2 w-full bg-gray-200 p-2 text-center md:mt-0 md:w-64 md:p-4">
          <p className="text-xs font-bold md:text-sm">DATE RECEIVED</p>
        </div>
      </div>
    </>
  );
};
