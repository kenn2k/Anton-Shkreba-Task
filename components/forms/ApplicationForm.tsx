'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { Header } from './header';
import { ContactForm } from './contact-information';
import { TaxCommissionForm } from './tax-commission';
import { HearingRequest } from './hearing-request';
import {
  PropertyDescriptionForm,
  PropertyTypeSectionForm,
} from './property-description';
import { NonresidentialActivity } from './nonresidential-activity';
import { SaleConstructionForm } from './sale-construction';
import { InformationInSupportForm } from './information-in-support';
import { Signature } from './signature';
import { cleanEmpty } from '@/utils';
import { importFormFromJSON, saveFormAsJSON } from '@/utils/saveImportUtils';
import { ApplicantForm } from './applicant';
import { PropertyForm } from './property-identification';

export const ApplicationForm = () => {
  const methods = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });

  const onSubmit = (data: any) => {
    const cleanedData = cleanEmpty(data);
    saveFormAsJSON(cleanedData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Header />
        <PropertyForm />
        <ApplicantForm />
        <ContactForm />
        <TaxCommissionForm />
        <HearingRequest />
        <PropertyDescriptionForm />
        <PropertyTypeSectionForm />
        <NonresidentialActivity />
        <SaleConstructionForm />
        <InformationInSupportForm />
        <Signature />

        <div className="mt-10 flex flex-col gap-3 border-t border-gray-300 py-4 pt-4 md:flex-row md:justify-between">
          <button
            type="submit"
            className="rounded-md border bg-purple-200 px-4 py-2 font-semibold hover:bg-purple-300"
          >
            Save as JSON
          </button>

          <label className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 bg-gray-100 px-4 py-2 hover:bg-gray-200">
            Import JSON
            <input
              type="file"
              accept=".json"
              className="hidden"
              onChange={e => importFormFromJSON(e, methods)}
            />
          </label>
        </div>
      </form>
    </FormProvider>
  );
};
