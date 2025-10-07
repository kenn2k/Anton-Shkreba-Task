import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

export const useSyncPropertyData = () => {
  const { control, setValue } = useFormContext();

  const propertyBorough = useWatch({ control, name: 'property.borough' });
  const propertyBlock = useWatch({ control, name: 'property.block' });
  const propertyLot = useWatch({ control, name: 'property.lot' });

  useEffect(() => {
    if (propertyBorough) setValue('signature.borough', propertyBorough);
    if (propertyBlock) setValue('signature.block', propertyBlock);
    if (propertyLot) setValue('signature.lot', propertyLot);
  }, [propertyBorough, propertyBlock, propertyLot, setValue]);
};
