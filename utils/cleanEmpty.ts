export const cleanEmpty = (obj: any): any => {
  if (Array.isArray(obj)) {
    const cleanedArray = obj
      .map(item => cleanEmpty(item))
      .filter(item => item && Object.keys(item).length > 0);
    return cleanedArray.length > 0 ? cleanedArray : undefined;
  }

  if (typeof obj === 'object' && obj !== null) {
    const cleanedObj: Record<string, any> = {};
    Object.entries(obj).forEach(([key, value]) => {
      const cleanedValue = cleanEmpty(value);
      if (
        cleanedValue !== undefined &&
        cleanedValue !== '' &&
        !(
          typeof cleanedValue === 'object' &&
          Object.keys(cleanedValue).length === 0
        )
      ) {
        cleanedObj[key] = cleanedValue;
      }
    });
    return Object.keys(cleanedObj).length > 0 ? cleanedObj : undefined;
  }

  if (obj === '' || obj === null || obj === undefined) return undefined;
  return obj;
};
