import { FormSection } from '@/UI/form-section/FormSection';

export const PropertyForm = () => {
  return (
    <>
      <FormSection
        title="1. PROPERTY IDENTIFICATION –"
        description="A separate application is required for each tax lot."
        fields={[
          [
            {
              type: 'input',
              name: 'property.borough',
              label: 'BOROUGH',
              placeholder: 'ENTER BOROUGH',
              colSpan: 2,
              required: true,
            },
            {
              type: 'input',
              name: 'property.block',
              label: 'BLOCK',
              placeholder: 'ENTER BLOCK',
              colSpan: 2,
              required: true,
            },
            {
              type: 'input',
              name: 'property.lot',
              label: 'LOT',
              placeholder: 'ENTER LOT',
              colSpan: 2,
              required: true,
            },
            {
              type: 'static',
              label: 'YEAR 2025/26',
              colSpan: 2,
            },
          ],
          [
            {
              type: 'input',
              name: 'property.fullAddress',
              label: 'FULL ADDRESS OF PROPERTY (INCLUDING ZIP CODE)',
              placeholder: 'ENTER FULL ADDRESS...',
              colSpan: 8,
              required: true,
            },
          ],
        ]}
      />
    </>
  );
};
