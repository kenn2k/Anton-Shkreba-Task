# Conditional field in ApplicantForm
_Exported on 10/7/2025 at 17:39:36 GMT+3 from Cursor (1.6.45)_

---

**User**

How to create the field of form wich accesseble after putting flag in checkbox. I need to implement it in ApplicantForm.tsx(with no state, just form)

---

**Cursor**

I'll help you implement conditional fields in the ApplicantForm.tsx that become accessible after checking a checkbox. Let me first examine the current form structure and then show you how to implement this functionality.


Now I'll implement the conditional fields based on the form structure shown in the image. I'll create a form with checkboxes that reveal additional fields when selected, using HTML form elements without React state management.


```typescriptreact
export const ApplicantForm = () => {
  return (
    <>
      <h2 className="-mx-4 border-b-1 border-black bg-gray-300 px-4">
        2. APPLICANT - The Applicant must be an owner or other person
        directly affected by the assessment. An attorney or agent,
        other than the board of managers of a condo, cannot be the
        Applicant
      </h2>
      
      <form className="space-y-4 p-4">
        {/* Applicant's Name */}
        <div>
          <label className="block font-semibold mb-2">
            a) APPLICANT'S NAME:
          </label>
          <input
            type="text"
            name="applicantName"
            className="w-full border border-gray-400 px-2 py-1"
            placeholder="Enter applicant's name"
          />
        </div>

        {/* Applicant Description */}
        <div>
          <label className="block font-semibold mb-2">
            b) APPLICANT DESCRIPTION (CHECK ONE):
          </label>
          
          <div className="space-y-2">
            {/* Owner */}
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="applicantType" value="owner" />
              <span>Owner</span>
            </label>

            {/* Tenant paying all taxes */}
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="applicantType" value="tenant" />
              <span>Tenant paying all taxes</span>
            </label>

            {/* Other (specify) - Conditional field */}
            <div>
              <label className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  name="applicantType" 
                  value="other"
                  onchange="toggleOtherField(this)"
                />
                <span>Other (specify):</span>
              </label>
              <div id="otherSpecifyField" className="ml-6 mt-2 hidden">
                <input
                  type="text"
                  name="otherSpecify"
                  className="w-full border border-gray-400 px-2 py-1"
                  placeholder="Specify other type"
                />
                <p className="text-sm text-gray-600 mt-1">
                  (Attach TC200 and documentation specified in Part 2 of TC200.)
                </p>
                <p className="text-sm font-bold uppercase text-red-600 mt-1">
                  IF YOU DON'T SUBMIT FORM TC200, YOUR APPLICATION WILL NOT BE REVIEWED.
                </p>
              </div>
            </div>

            {/* Condo board of managers - Conditional field */}
            <div>
              <label className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  name="applicantType" 
                  value="condoBoard"
                  onchange="toggleCondoBoardField(this)"
                />
                <span>Condo board of managers designated as agent for condo unit owner to contest assessment (Attach list of covered lots).</span>
              </label>
              <div id="condoBoardField" className="ml-6 mt-2 hidden">
                <p className="font-semibold mb-2">Source of Board's authority (check one):</p>
                <div className="space-y-1">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" name="boardAuthority" value="bylaws" />
                    <span>By-laws</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" name="boardAuthority" value="individualAuth" />
                    <span>Individual authorization, valid under applicable law</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" name="boardAuthority" value="powerOfAttorney" />
                    <span>Power-of-Attorney</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* JavaScript for conditional field visibility */}
      <script dangerouslySetInnerHTML={{
        __html: `
          function toggleOtherField(checkbox) {
            const field = document.getElementById('otherSpecifyField');
            if (checkbox.checked) {
              field.classList.remove('hidden');
            } else {
              field.classList.add('hidden');
              // Clear the input when hiding
              field.querySelector('input[name="otherSpecify"]').value = '';
            }
          }

          function toggleCondoBoardField(checkbox) {
            const field = document.getElementById('condoBoardField');
            if (checkbox.checked) {
              field.classList.remove('hidden');
            } else {
              field.classList.add('hidden');
              // Clear all checkboxes when hiding
              const checkboxes = field.querySelectorAll('input[name="boardAuthority"]');
              checkboxes.forEach(cb => cb.checked = false);
            }
          }
        `
      }} />
    </>
  );
};

```

Perfect! I've implemented the conditional fields in your ApplicantForm.tsx. Here's what I've created:

## Key Features:

1. **Conditional Field for "Other (specify)":**
   - When the "Other" checkbox is checked, a text input field appears
   - Includes the required TC200 documentation notice
   - When unchecked, the field is hidden and cleared

2. **Conditional Field for "Condo board of managers":**
   - When this checkbox is checked, a sub-section appears with three authority options
   - When unchecked, the sub-section is hidden and all checkboxes are cleared

## How it Works:

- **No React State**: Uses vanilla JavaScript with `onchange` event handlers
- **CSS Classes**: Uses Tailwind's `hidden` class to show/hide fields
- **Form Structure**: Maintains proper HTML form semantics with `name` attributes
- **Auto-cleanup**: Clears input values when fields are hidden

## The Implementation:

1. **Checkbox with `onchange`**: Each conditional checkbox has an `onchange` handler
2. **Hidden Divs**: Conditional content is wrapped in divs with `hidden` class initially
3. **JavaScript Functions**: `toggleOtherField()` and `toggleCondoBoardField()` handle the visibility
4. **Form Data**: All fields have proper `name` attributes for form submission

The form now matches the structure from your image, with fields that become accessible only after checking the appropriate checkboxes, exactly as you requested!

---

**User**

Add to folders index.ts with export *, and import in ApplicationForm

---

**Cursor**

I'll check the `components/forms` structure and the current imports in `ApplicationForm.tsx`, then add `index.ts` barrel files to those folders and update imports to use them.

I'll add barrel `index.ts` files to the form subfolders and update `ApplicationForm.tsx` imports to use them.

```typescript
export * from './ApplicantForm';
export * from './IsCondoBoardManagers';
export * from './IsOtherDescription';


```

```typescript
export * from './ContactForm';
export * from './HasRepresentative';
export * from './RepresentativeForm';


```

```typescript
export * from './FormInstructions';
export * from './Header';
export * from './HeadNavPanel';
export * from './HeadRestrictions';
export * from './HeadTitle';


```

```typescript
export * from './HearingRequest';


```

```typescript
export * from './InformationInSupportForm';
export * from './InformationRow';
export * from './InformationTable';


```

```typescript
export * from './NonresidentialActivity';


```

```typescript
export * from './PropertyDescriptionForm';
export * from './PropertyTypeSectionForm';
export * from './IsOtherPropertyDescription';


```

```typescript
export * from './PropertyForm';


```

```typescript
export * from './ConstructionInfo';
export * from './CurrentOffering';
export * from './PurchaseInfo';
export * from './RefinanceInfo';
export * from './SaleConstructionForm';
export * from './SaleContract';


```

```typescript
export * from './Signature';
export * from './SignatureFields';
export * from './useSyncPropertyData';


```

```typescript
export * from './AssessedValueInput';
export * from './CalculatedMultiplyLine';
export * from './MarketValueInput';
export * from './TaxCommissionForm';


```

```typescript
export * from './applicant';
export * from './contact-information';
export * from './header';
export * from './hearing-request';
export * from './information-in-support';
export * from './nonresidential-activity';
export * from './property-description';
export * from './property-identification';
export * from './sale-construction';
export * from './signature';
export * from './tax-commission';


```

```typescriptreact
'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { Header } from './header';
import { ContactForm } from './contact-information';
import { TaxCommissionForm } from './tax-commission';
import { HearingRequest } from './hearing-request';
import { PropertyDescriptionForm, PropertyTypeSectionForm } from './property-description';
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

```

I added barrel index.ts files to all relevant form folders and updated ApplicationForm imports.

- Created index.ts in:
  - components/forms
  - components/forms/applicant
  - components/forms/contact-information
  - components/forms/header
  - components/forms/hearing-request
  - components/forms/information-in-support
  - components/forms/nonresidential-activity
  - components/forms/property-description
  - components/forms/property-identification
  - components/forms/sale-construction
  - components/forms/signature
  - components/forms/tax-commission

- Updated ApplicationForm.tsx to import from barrels:
  - Replaced deep imports like `./header/Header` with `./header`
  - Collapsed grouped imports where applicable, e.g., `{ PropertyDescriptionForm, PropertyTypeSectionForm }` from `./property-description`
  - Updated `ApplicantForm` and `PropertyForm` to import from their folder barrels

All files lint clean.

I’ll stop here.

