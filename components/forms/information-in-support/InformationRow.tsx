import { useFormContext } from 'react-hook-form';

interface InformationRowProps {
  row: { label: string; name: string; type: string };
  isDisabled: boolean;
}

export const InformationRow = ({ row, isDisabled }: InformationRowProps) => {
  const { register } = useFormContext();

  return (
    <tr>
      <td className="py-2 pr-4 text-xs font-semibold md:text-sm">
        {row.label}
      </td>

      {[0, 1, 2].map(index => (
        <td key={index} className="px-2 py-2 md:px-6">
          <input
            type={row.type}
            disabled={isDisabled}
            {...register(`informationInSupport.sales.${index}.${row.name}`)}
            className="block w-full border-b border-gray-400 bg-transparent p-1 text-xs focus:outline-none md:text-sm"
          />
        </td>
      ))}
    </tr>
  );
};
