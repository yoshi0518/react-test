import type { Meta, StoryObj } from '@storybook/react';
import axios from 'axios';

import UserItem from './UserItem';

const meta = {
  title: 'Common/UserItem',
  render: (props) => <UserItem {...props} />,
  tags: ['autodocs'],
} satisfies Meta<typeof UserItem>;

export default meta;

type Story = StoryObj<typeof UserItem>;

export const Default: Story = {
  args: {
    id: '1',
    name: 'John Doe',
  },
};

export const Loader: Story = {
  loaders: [
    async () => ({
      user: (await axios.get('https://jsonplaceholder.typicode.com/users/10')).data,
    }),
  ],
  render: (_, { loaded: { user } }) => <UserItem id={user.id} name={user.name} />,
  args: {
    id: '',
    name: '',
  },
};
