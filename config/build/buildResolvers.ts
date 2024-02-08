import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers(option: BuildOptions): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [option.paths.src, 'mode_modules'],
		mainFields: ['index'],
		alias: {},
	}
}
