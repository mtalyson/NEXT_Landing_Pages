import { TextComponent } from '.';

export default {
  title: 'Components/TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam neque tempore dicta recusandae, harum in praesentium, illo vero ullam cupiditate laudantium, assumenda reiciendis facere unde vitae quos saepe sapiente vel!.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
