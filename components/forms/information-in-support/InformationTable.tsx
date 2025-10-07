import { InformationRow } from './InformationRow';

interface InformationTableProps {
  isDisabled: boolean;
}

export const InformationInSupportTable = ({
  isDisabled,
}: InformationTableProps) => {
  const rows = [
    { label: 'Sale Date', name: 'saleDate', type: 'date' },
    { label: 'Sales Price', name: 'salesPrice', type: 'number' },
    { label: 'Address', name: 'address', type: 'text' },
    { label: 'Block/Lot', name: 'blockLot', type: 'text' },
    {
      label: 'Total dwelling units',
      name: 'totalDwellingUnits',
      type: 'number',
    },
  ];

  return (
    <div
      className={`${isDisabled ? 'pointer-events-none opacity-60' : ''} overflow-x-auto`}
    >
      <table className="w-full min-w-[600px] md:min-w-0">
        <thead>
          <tr className="">
            <th className="py-3 text-left text-xs md:text-sm"></th>
            <th className="py-3 text-center text-xs md:text-sm">Sale 1</th>
            <th className="py-3 text-center text-xs md:text-sm">Sale 2</th>
            <th className="py-3 text-center text-xs md:text-sm">Sale 3</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <InformationRow key={row.name} row={row} isDisabled={isDisabled} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
