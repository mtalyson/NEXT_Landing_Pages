import { NavLinks } from '.';
import links from './mock';

export default {
  title: 'Components/NavLinks',
  component: NavLinks,
  args: {
    links,
  },
  argTypes: {
    links: {
      table: {
        disable: true,
      },
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
