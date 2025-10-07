import { FormInstructions } from './FormInstructions';
import { HeadNavPanel } from './HeadNavPanel';
import { HeadRestrictions } from './HeadRestrictions';
import { HeadTitle } from './HeadTitle';

export const Header = () => {
  return (
    <header>
      {/* <HeadNavPanel /> */}
      <HeadTitle />
      <FormInstructions />
      <HeadRestrictions />
    </header>
  );
};
