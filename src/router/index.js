import Vue from 'vue';
import Router from 'vue-router';
import Register from '../views/register/register.vue'; // 注册页面
import Login from '../views/login/login.vue'; // 登陆页面
import Forget from '../views/login/forget.vue'; // 忘记密码页面
import Index from '../views/index/index.vue'; // 首页
import Search from '../views/search/index.vue'; // 搜索
import Mine from '../views/mine/mine.vue'; // 我的页面
import MineInfo from '../views/mine/mine-info.vue'; // 个人信息页面
import MineInfoEdit from '../views/mine/mine-info-edit.vue'; // 个人信息修改页面
import PackageList from '../views/package/list.vue'; // 套餐列表页面
import QueryData from '../views/query/data.vue'; // 查询流量页面
import RecordList from '../views/query/record-list.vue'; // 消费记录页面
import EditPhone from '../views/edit/phone.vue'; // 修改手机号页面
import EditPassword from '../views/edit/password.vue'; // 修改密码页面

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/register',
			name: 'Register',
			component: Register,
			meta: {
				title: '注册'
			}
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
			meta: {
				title: '登陆'
			}
		},
		{
			path: '/forget',
			name: 'Forget',
			component: Forget,
			meta: {
				title: '忘记密码'
			}
		},
		{
			path: '/index',
			name: 'Index',
			component: Index,
			meta: {
				title: '首页'
			}
		},
		{
			path: '/search',
			name: 'Search',
			component: Search,
			meta: {
				title: '搜索'
			}
		},
		{
			path: '/package/list',
			name: 'PackageList',
			component: PackageList,
			meta: {
				title: '套餐列表'
			}
		},
		{
			path: '/query/data',
			name: 'QueryData',
			component: QueryData,
			meta: {
				title: '查询流量'
			}
		},
		{
			path: '/query/record-list',
			name: 'RecordList',
			component: RecordList,
			meta: {
				title: '消费记录'
			}
		},
		{
			path: '/mine',
			name: 'Mine',
			component: Mine,
			meta: {
				title: '我的'
			}
		},
		{
			path: '/mine/info',
			name: 'MineInfo',
			component: MineInfo,
			meta: {
				title: '个人信息'
			}
		},
		{
			path: '/edit/phone',
			name: 'EditPhone',
			component: EditPhone,
			meta: {
				title: '修改手机号'
			}
		},
		{
			path: '/edit/password',
			name: 'EditPassword',
			component: EditPassword,
			meta: {
				title: '修改密码'
			}
		},
		{
			path: '/mine/info-edit',
			name: 'MineInfoEdit',
			component: MineInfoEdit,
			meta: {
				title: '个人信息修改'
			}
		},
		{
			path: '*',
			redirect: {
				name: 'Index'
			}
		}
	]
});
