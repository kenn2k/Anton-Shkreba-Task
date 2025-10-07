interface Option {
  value: string;
  label: string;
}

export interface SelectGroupProps {
  name: string;
  options: Option[];
  rules?: Record<string, string | boolean | number>;
}

interface Field {
  type: 'input' | 'static' | 'date' | 'number';
  name?: string;
  label?: string;
  placeholder?: string;
  colSpan?: number;
  required?: boolean | string;
  pattern?: { value: RegExp; message: string };
}

export interface FormSectionProps {
  title: string;
  description?: string;
  fields: Field[][];
}

export interface FieldProps {
  field: Field;
  isLast: boolean;
}

export interface TaxCommissionFields {
  taxCommission: {
    marketValue: string;
    multiplyLine: string;
    assessedValue: string;
  };
}
