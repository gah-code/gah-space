// import React from 'react';
import Title from '../typography/Title'; // Adjust the import path based on your project's structure

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Title {...args} />;

// Story 1
export function Default(args) {
  const { color } = args;
  const titleStyle = {
    color: color,
  };
  return <Title style={titleStyle} {...args} />;
}

Default.args = {
  children: 'Title',
  level: 1,
  color: 'color',
};

// Default.args = {
//   children: 'Title',
//   level: 2,
//   color: '#593',
// };

// Story 2
export const Primary = Template.bind({});
// Primary.args = {
//   children: 'Primary',
//   level: 1,
//   variant: 'primary',
//   color: '#555',
// };

// Primary.decorators = [
//   ()=> {
//     return (
//       <>
// <h1>{...Primary.args as } </h1>
//       </>
//     )
//   }
// ]

// export const heading = {
//   args: {
//     ...Primary.args,
//     component: Primary,
//     children: 'Primary',
//     level: 1,
//     color: '#555',

//     label: 'Button',
//   },
// };

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };
