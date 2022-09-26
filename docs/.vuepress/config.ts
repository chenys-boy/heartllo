import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import {navbarConfigFunc} from "./navbar"

export default {
	lang: 'zh-CN',
	title: 'heartllo',
	description: '这是我的第一个 VuePress 站点',
	base:'/',
	//指定 vuepress build 的输出目录
	dest: "./dist",
	plugins: [
		backToTopPlugin(),
		nprogressPlugin(),
	],
	theme: defaultTheme({
		// Public 文件路径
		logo: '/logo2.png',
		// 在这里进行配置
		navbar: navbarConfigFunc(),
		// github目录
		repoLabel:'GitHub',
		repo: 'https://github.com/chenys-boy/heartllo',
		docsRepo: 'https://github.com/chenys-boy/heartllo',
		docsBranch: 'main',
		docsDir: 'docs',
		editLinkText: '编辑此页',
		editLinkPattern: ':repo/edit/:branch/:path',
		lastUpdatedText: '上次更新',
		contributorsText: '贡献者',
		backToHome: '回到首页',
	}),
}