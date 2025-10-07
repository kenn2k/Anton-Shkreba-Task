import { PurchaseInfo } from './PurchaseInfo';
import { SaleContract } from './SaleContract';
import { CurrentOffering } from './CurrentOffering';
import { RefinanceInfo } from './RefinanceInfo';
import { ConstructionInfo } from './ConstructionInfo';

export const SaleConstructionForm = () => {
  return (
    <>
      <h2 className="-mx-4 border-y border-black bg-gray-300 px-4 py-2 text-sm md:py-3 md:text-base">
        8. SALE, CONSTRUCTION, DEMOLITION OR REFINANCING – COMPLETE ALL ITEMS.
        <span className="italic"> Attach extra pages if needed.</span>
      </h2>

      <div className="space-y-6 py-4">
        <PurchaseInfo />
        <SaleContract />
        <CurrentOffering />
        <RefinanceInfo />
        <ConstructionInfo />
      </div>
    </>
  );
};
