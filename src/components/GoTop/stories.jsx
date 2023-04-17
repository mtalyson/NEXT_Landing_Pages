import { GoTop } from '.';

export default {
  title: 'Components/GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at qui
        assumenda ratione, nihil quo, illum quod, illo recusandae dolore sed
        deserunt. A debitis ipsum libero nemo optio. Provident, culpa.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at qui
        assumenda ratione, nihil quo, illum quod, illo recusandae dolore sed
        deserunt. A debitis ipsum libero nemo optio. Provident, culpa.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at qui
        assumenda ratione, nihil quo, illum quod, illo recusandae dolore sed
        deserunt. A debitis ipsum libero nemo optio. Provident, culpa.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at qui
        assumenda ratione, nihil quo, illum quod, illo recusandae dolore sed
        deserunt. A debitis ipsum libero nemo optio. Provident, culpa.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at qui
        assumenda ratione, nihil quo, illum quod, illo recusandae dolore sed
        deserunt. A debitis ipsum libero nemo optio. Provident, culpa.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at qui
        assumenda ratione, nihil quo, illum quod, illo recusandae dolore sed
        deserunt. A debitis ipsum libero nemo optio. Provident, culpa.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at qui
        assumenda ratione, nihil quo, illum quod, illo recusandae dolore sed
        deserunt. A debitis ipsum libero nemo optio. Provident, culpa.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at qui
        assumenda ratione, nihil quo, illum quod, illo recusandae dolore sed
        deserunt. A debitis ipsum libero nemo optio. Provident, culpa.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at qui
        assumenda ratione, nihil quo, illum quod, illo recusandae dolore sed
        deserunt. A debitis ipsum libero nemo optio. Provident, culpa.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at qui
        assumenda ratione, nihil quo, illum quod, illo recusandae dolore sed
        deserunt. A debitis ipsum libero nemo optio. Provident, culpa.
      </p>
      <GoTop {...args} />
    </div>
  );
};
