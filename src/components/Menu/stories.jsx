import { Menu } from '.';

import linksMock from '../NavLinks/mock';

export default {
  title: 'Components/Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
  argTypes: {
    links: {
      table: {
        disable: true,
      },
    },
    logoData: {
      table: {
        disable: true,
      },
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
