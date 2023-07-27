// import React from 'react';
import Title from './Title'; // Adjust the import path based on your project's structure

export default {
  title: 'Components/Title',
  component: Title,
};

// const Template = (args) => <Title {...args} />;

// Story 1
export function Default(args) {
  return <Title {...args} />;
}

Default.args = {
  children: 'Title ',
};

// Story 2
// export const CustomTitle = Template.bind({});
// CustomTitle.args = {
//   text: 'Custom Title',
// };
