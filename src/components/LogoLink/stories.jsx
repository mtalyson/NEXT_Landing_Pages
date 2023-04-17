import { LogoLink } from '.';

export default {
  title: 'Components/LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg:
      'https://res.cloudinary.com/dfolkslhs/image/upload/v1681420184/landing_page_2_c6baa21725_492084b23f_12cbc8b6f9.svg',
    link: 'http://localhost',
  },
};

export const TemplateImage = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TemplateText = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TemplateText.args = {
  srcImg: '',
};

TemplateText.argTypes = {
  srcImg: {
    table: {
      disable: true,
    },
  },
};
