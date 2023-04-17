import { Footer } from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
  args: {
    footerHtml: `<p>Feito com ❤ por Talyson Moreira</p>`,
  },
  argTypes: {
    footerHtml: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
