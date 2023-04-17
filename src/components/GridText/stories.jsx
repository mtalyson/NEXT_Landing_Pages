import { GridText } from '.';

import mock from './mock';

export default {
  title: 'Components/GridText',
  component: GridText,
  args: mock,
  argTypes: {
    background: { type: 'boolean' },
    title: { type: 'string' },
    description: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};
