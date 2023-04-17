import { SectionBackground } from '.';

export default {
  title: 'Components/SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et
          accusamus nemo omnis praesentium officia autem reprehenderit aliquam!
          Vel quasi, modi officia rem illum alias porro nesciunt fugit
          exercitationem tempore.
        </p>
      </div>
    ),
    background: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
