import { defaultTheme } from '@vuepress/theme-default'
import {navbarConfigFunc} from "./navbar"

export default {
	lang: 'zh-CN',
	title: 'heartllo',
	description: '这是我的第一个 VuePress 站点',
	base:'/',
	//指定 vuepress build 的输出目录
	dest: "./dist",
	plugins: [
		
	],
	theme: defaultTheme({
		// Public 文件路径
		logo: '/logo2.png',
		// 在这里进行配置
		navbar: navbarConfigFunc(),
		// github目录
		repo: 'https://github.com/chenys-boy/heartllo',
	}),
}