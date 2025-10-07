import { useFormContext } from 'react-hook-form';

export const HeadNavPanel = () => {
  const { register } = useFormContext();
  return (
    <div className="-mx-4 grid grid-cols-6 border-b-1 border-black text-sm">
      <div className="flex flex-col items-start border-r border-black p-2">
        <label className="font-semibold uppercase">YEAR</label>
        <span className="mt-1 font-bold">2025/26</span>
      </div>

      <div className="flex flex-col border-r border-black p-2">
        <label className="font-semibold uppercase">BOROUGH</label>
        <input
          {...register('head.borough')}
          type="text"
          placeholder="ENTER BOROUGH"
          className="mt-1 border-b border-black bg-transparent px-1 outline-none"
        />
      </div>

      <div className="flex flex-col border-r border-black p-2">
        <label className="font-semibold uppercase">BLOCK</label>
        <input
          {...register('head.block')}
          type="text"
          placeholder="ENTER BLOCK"
          className="mt-1 border-b border-black bg-transparent px-1 outline-none"
        />
      </div>

      <div className="flex flex-col border-r border-black p-2">
        <label className="font-semibold uppercase">LOT</label>
        <input
          {...register('head.lot')}
          type="text"
          placeholder="ENTER LOT"
          className="mt-1 border-b border-black bg-transparent px-1 outline-none"
        />
      </div>

      <div className="flex flex-col border-r border-black p-2">
        <label className="font-semibold uppercase">GROUP #</label>
        <input
          {...register('head.group')}
          type="text"
          placeholder="ENTER GROUP #"
          className="mt-1 border-b border-black bg-transparent px-1 outline-none"
        />
      </div>

      <div className="flex flex-col p-2">
        <label className="font-semibold uppercase">REVIEWED BY</label>
        <input
          {...register('head.reviewedBy')}
          type="text"
          placeholder="ENTER REVIEWER"
          className="mt-1 border-b border-black bg-transparent px-1 outline-none"
        />
      </div>
    </div>
  );
};
