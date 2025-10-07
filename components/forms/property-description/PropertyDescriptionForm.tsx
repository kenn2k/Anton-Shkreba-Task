import { FormSection } from '@/UI/form-section/FormSection';

export const PropertyDescriptionForm = () => {
  return (
    <>
      <FormSection
        title="6. PROPERTY DESCRIPTION AS OF JANUARY 5, 2025"
        description="– Complete every item. Note: The Tax Commission cannot change the physical description of your property that appears on your Notice of Property Value. See Instructions."
        fields={[
          [
            {
              type: 'number',
              name: 'propertyDescription.kitchens',
              placeholder: 'NUMBER OF KITCHENS',
              colSpan: 2,
              required: true,
            },
            {
              type: 'number',
              name: 'propertyDescription.baths',
              placeholder: 'NUMBER OF BATHS',
              colSpan: 2,
              required: true,
            },
            {
              type: 'number',
              name: 'propertyDescription.bedrooms',
              placeholder: 'NUMBER OF BEDROOMS',
              colSpan: 2,
              required: true,
            },
            {
              type: 'number',
              name: 'propertyDescription.otherRooms',
              placeholder: 'NUMBER OF OTHER ROOMS',
              colSpan: 2,
              required: true,
            },
          ],
          [
            {
              type: 'number',
              name: 'propertyDescription.stories',
              placeholder: 'NUMBER OF STORIES (ABOVE BASEMENT)',
              colSpan: 4,
              required: true,
            },
            {
              type: 'input',
              name: 'propertyDescription.constructionYear',
              placeholder: 'YEAR OF CONSTRUCTION (IF KNOWN)',
              colSpan: 4,
            },
          ],
          [
            {
              type: 'number',
              name: 'propertyDescription.parkingIndoor',
              placeholder:
                'NUMBER OF PARKING SPACES ON THE PROPERTY Indoor (garage):',
              colSpan: 4,
              required: true,
            },
            {
              type: 'number',
              name: 'propertyDescription.parkingOutdoor',
              placeholder: 'NUMBER OF PARKING SPACES ON THE PROPERTY Outdoor:',
              colSpan: 4,
              required: true,
            },
          ],
          [
            {
              type: 'number',
              name: 'propertyDescription.lastAlteration',
              placeholder:
                'YEAR AND DESCRIPTION OF LAST PHYSICAL ALTERATION OR ADDITION SINCE APPLICANT ACQUIRED THE PROPERTY',
              colSpan: 8,
              required: true,
            },
          ],
        ]}
      />
    </>
  );
};
