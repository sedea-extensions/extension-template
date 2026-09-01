import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

const meta = {
	title: 'Components/StatusBadge',
	component: StatusBadge,
	tags: ['autodocs'],
	args: {
		label: 'Ready',
		variant: 'default',
	},
} satisfies Meta<typeof StatusBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Ready',
		variant: 'default',
	},
};

export const Loading: Story = {
	args: {
		label: 'Loading…',
		variant: 'loading',
	},
};

export const Empty: Story = {
	args: {
		label: 'No items',
		variant: 'empty',
	},
};

export const Error: Story = {
	args: {
		label: 'Request failed',
		variant: 'error',
	},
};
