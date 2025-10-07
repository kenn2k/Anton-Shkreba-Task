import { FormSection } from '@/UI/form-section/FormSection';
import { SignatureFields } from './SignatureFields';
import { useSyncPropertyData } from './useSyncPropertyData';

export const Signature = () => {
  useSyncPropertyData();
  return (
    <>
      <div className="-mx-4 bg-gray-300 px-4">
        <FormSection
          inlineTitle
          title="10. SIGNATURE AND CERTIFICATION See Instr. and TC600 Who May Sign"
          fields={[
            [
              {
                type: 'input',
                name: 'signature.borough',
                placeholder: 'BOROUGH',
                colSpan: 2,
              },
              {
                type: 'input',
                name: 'signature.block',
                placeholder: 'BLOCK',
                colSpan: 2,
              },
              {
                type: 'input',
                name: 'signature.lot',
                placeholder: 'LOT',
                colSpan: 2,
              },
            ],
          ]}
        />
      </div>
      <SignatureFields />
    </>
  );
};
