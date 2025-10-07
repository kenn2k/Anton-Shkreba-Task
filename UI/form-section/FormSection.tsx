import clsx from 'clsx';
import { FormSectionProps } from '../types';
import { FieldRender } from './FieldRender';

export const FormSection = ({
  title,
  description,
  fields,
  inlineTitle = false,
}: FormSectionProps & { inlineTitle?: boolean }) => {
  return (
    <div className="-mx-4 border-t border-black">
      {!inlineTitle && (
        <h2 className="border-black bg-gray-300 px-4 py-2 text-sm md:py-3 md:text-base">
          {title} {description}
        </h2>
      )}

      {inlineTitle && (
        <div className="grid grid-cols-1 border-b border-black bg-gray-300 md:grid-cols-12">
          <h2 className="col-span-1 px-4 py-2 text-sm md:col-span-6 md:py-3 md:text-base">
            {title} {description}
          </h2>

          <div className="col-span-1 grid grid-cols-1 border-black bg-white md:col-span-6 md:grid-cols-6 md:border-l">
            {fields[0]?.map((field, i) => (
              <FieldRender
                key={i}
                field={field}
                isLast={i === fields[0].length - 1}
              />
            ))}
          </div>
        </div>
      )}

      {fields.slice(inlineTitle ? 1 : 0).map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={clsx(
            'grid grid-cols-1 border-t border-black md:grid-cols-8'
          )}
        >
          {row.map((field, i) => (
            <FieldRender key={i} field={field} isLast={i === row.length - 1} />
          ))}
        </div>
      ))}
    </div>
  );
};
