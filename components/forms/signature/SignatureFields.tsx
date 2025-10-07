import { LabeledInput } from '@/UI';
import { useFormContext, useWatch } from 'react-hook-form';

export const SignatureFields = () => {
  const { register, control } = useFormContext();
  const signerRole = useWatch({ control, name: 'signature.role' });

  return (
    <div className="space-y-6 py-4">
      <h4>
        This application must be signed by an individual having personal
        knowledge of the facts who is: the owner or other Applicant named in
        Part 2, a fiduciary, or another authorized individual acting for the
        Applicant.
      </h4>

      <LabeledInput
        label="a) Print clearly name of person signing:"
        name="signature.signerName"
        placeholder="ENTER FULL NAME"
        required
        registerOptions={{
          required: 'Name of person signing is required',
        }}
      />

      <div>
        <h4>
          b) The person signing is (check <span className="underline">one</span>{' '}
          box only):
        </h4>

        <div className="mt-2 ml-4 space-y-3">
          {[
            {
              value: 'applicant',
              label: 'The Applicant (only if Applicant is an individual)',
            },
            {
              value: 'fiduciary',
              label: "Fiduciary. Specify fiduciary's relationship:",
            },
            {
              value: 'corporateOfficer',
              label: 'An officer of a corporate Applicant. Title:',
            },
            {
              value: 'condoOfficer',
              label: 'An officer of the condominium board of managers. Title:',
            },
            {
              value: 'generalPartner',
              label: 'General partner of partnership Applicant',
            },
            {
              value: 'llc',
              label: 'Member/manager or officer of LLC Applicant. Title:',
            },
            {
              value: 'agent',
              label:
                'Attorney, employee, property manager or other agent (TC244 required)',
            },
          ].map(({ value, label }) => (
            <label key={value} className="flex items-start gap-2">
              <input
                type="radio"
                value={value}
                {...register('signature.role')}
              />
              <span>{label}</span>
            </label>
          ))}

          {signerRole === 'fiduciary' && (
            <div className="space-y-2">
              <input
                {...register('signature.fiduciaryRelationship')}
                placeholder="e.g. Executor, Trustee"
                className="w-64 border-b border-black bg-transparent px-1 text-sm outline-none"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
