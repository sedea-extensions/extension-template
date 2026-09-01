import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
	stories: ['../webview-src/**/*.stories.@(ts|tsx)'],
	addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	staticDirs: [],
	async viteFinal(config) {
		return mergeConfig(config, {
			esbuild: {
				jsx: 'automatic',
			},
		});
	},
};

export default config;
