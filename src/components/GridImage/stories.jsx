import { GridImage } from '.';

import mock from './mock';

export default {
  title: 'Components/GridImage',
  component: GridImage,
  args: mock,
  argTypes: {
    title: { type: 'string' },
    description: { type: 'string' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
