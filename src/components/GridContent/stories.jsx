import { GridContent } from '.';

import mock from './mock';

export default {
  title: 'Components/GridContent',
  component: GridContent,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
