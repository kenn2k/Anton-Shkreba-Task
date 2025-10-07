import { UseFormReturn } from 'react-hook-form';

export const saveFormAsJSON = (data: any, filename = 'application.json') => {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
};

export const importFormFromJSON = async (
  event: React.ChangeEvent<HTMLInputElement>,
  methods: UseFormReturn<any>
) => {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const text = await file.text();
    const json = JSON.parse(text);
    methods.reset(json);
  } catch (err) {
    console.error('Invalid JSON file:', err);
    alert('Invalid JSON file. Please check your file and try again.');
  }
};
