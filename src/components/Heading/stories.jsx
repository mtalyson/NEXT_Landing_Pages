import { Heading } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
    colorDark: true,
    uppercase: false,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const TemplateLight = (args) => <Heading {...args} />;
export const TemplateDark = (args) => <Heading {...args} />;

TemplateLight.parameters = {
  backgrounds: {
    default: 'light',
  },
};

TemplateDark.args = {
  children: 'O texto está claro',
  colorDark: false,
};
