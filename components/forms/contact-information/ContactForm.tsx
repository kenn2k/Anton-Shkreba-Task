import { FormSection } from '@/UI';
import { RepresentativeForm } from './RepresentativeForm';

export const ContactForm = () => {
  return (
    <>
      <FormSection
        title="3. CONTACT INFORMATION –"
        description="Supply information for Representative or Applicant, if self-represented. (See Instr.)"
        fields={[
          [
            {
              type: 'input',
              name: 'contact.name',
              placeholder: 'NAME OF INDIVIDUAL OR FIRM TO BE CONTACTED',
              colSpan: 4,
              required: true,
            },
            {
              type: 'input',
              name: 'contact.group',
              placeholder: 'GROUP #, IF ANY',
              colSpan: 2,
              required: true,
            },
            {
              type: 'number',
              name: 'contact.phone',
              placeholder: 'PHONE NO.:',
              colSpan: 2,
              required: true,
            },
          ],
          [
            {
              type: 'input',
              name: 'contact.address',
              placeholder: 'MAILING ADDRESS:',
              colSpan: 4,
              required: true,
            },
            {
              type: 'input',
              name: 'contact.email',
              placeholder: 'EMAIL ADDRESS:',
              colSpan: 4,
              required: true,
            },
          ],
        ]}
      />

      <RepresentativeForm />
    </>
  );
};
