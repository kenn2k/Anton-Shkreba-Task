import { useEffect } from 'react';
import { useController, useFormContext, useWatch } from 'react-hook-form';

export const CalculatedMultiplyLine = () => {
  const { control } = useFormContext();

  const marketValue = useWatch({ control, name: 'taxCommission.marketValue' });

  const {
    field: { value: multiplyLine, onChange: setMultiplyLine },
  } = useController({
    name: 'taxCommission.multiplyLine',
    control,
  });

  useEffect(() => {
    const parsed = parseFloat(marketValue);
    if (!isNaN(parsed)) {
      const result = (parsed * 0.06).toFixed(2);
      setMultiplyLine(result);
    } else {
      setMultiplyLine('');
    }
  }, [marketValue, setMultiplyLine]);

  return (
    <div className="flex flex-col items-start gap-2 md:flex-row md:items-start md:gap-4">
      <h4 className="flex-1 text-sm md:text-base">
        b) Multiply line a by 6% (.06)
      </h4>
      <div className="flex w-full items-center gap-2 md:w-auto">
        <h4>$</h4>
        <input
          type="text"
          value={multiplyLine || ''}
          readOnly
          className="w-full border-b border-black bg-gray-100 px-1 text-sm outline-none md:w-64"
          placeholder="6% of Market Value"
        />
      </div>
    </div>
  );
};
