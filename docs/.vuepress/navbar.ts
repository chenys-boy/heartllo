// 导航栏配置
function navbarConfigFunc() {
	return [
		 {
			text: '首页',
			link: '/',
		},
		{
			text: '文章',
			link: '/myblog/',
		},
		{
			text: '读书会',
			link: '/readbook/',
		},
		{
			text: 'github掘金',
			link: '/github/',
		},
		// 嵌套 Group - 最大深度为 2
		// 控制元素何时被激活
		{
		text: 'Group 2',
		children: [
		  {
			text: 'Always active',
			link: '/',
			// 该元素将一直处于激活状态
			activeMatch: '/',
		  },
		  {
			text: 'Active on /foo/',
			link: '/not-foo/',
			// 该元素在当前路由路径是 /foo/ 开头时激活
			// 支持正则表达式
			activeMatch: '^/foo/',
		  },
		],
		},
		];
}
export {
	navbarConfigFunc
}