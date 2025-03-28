import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import changdi from '@/views/modules/changdi/list'
    import changdiCollection from '@/views/modules/changdiCollection/list'
    import changdiLiuyan from '@/views/modules/changdiLiuyan/list'
    import changdiYuyue from '@/views/modules/changdiYuyue/list'
    import dianzhang from '@/views/modules/dianzhang/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import jianshenkecheng from '@/views/modules/jianshenkecheng/list'
    import jianshenkechengCollection from '@/views/modules/jianshenkechengCollection/list'
    import jianshenkechengLiuyan from '@/views/modules/jianshenkechengLiuyan/list'
    import jianshenkechengOrder from '@/views/modules/jianshenkechengOrder/list'
    import jianshenqichai from '@/views/modules/jianshenqichai/list'
    import jianshenqichaiChuruInout from '@/views/modules/jianshenqichaiChuruInout/list'
    import jianshenqichaiChuruInoutList from '@/views/modules/jianshenqichaiChuruInoutList/list'
    import jiaolian from '@/views/modules/jiaolian/list'
    import news from '@/views/modules/news/list'
    import qiantai from '@/views/modules/qiantai/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhuchang from '@/views/modules/zhuchang/list'
    import zifei from '@/views/modules/zifei/list'
    import config from '@/views/modules/config/list'
    import dictionaryChangdi from '@/views/modules/dictionaryChangdi/list'
    import dictionaryChangdiCollection from '@/views/modules/dictionaryChangdiCollection/list'
    import dictionaryChangdiYuyueYesno from '@/views/modules/dictionaryChangdiYuyueYesno/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryJianshenkecheng from '@/views/modules/dictionaryJianshenkecheng/list'
    import dictionaryJianshenkechengCollection from '@/views/modules/dictionaryJianshenkechengCollection/list'
    import dictionaryJianshenkechengOrder from '@/views/modules/dictionaryJianshenkechengOrder/list'
    import dictionaryJianshenkechengOrderPayment from '@/views/modules/dictionaryJianshenkechengOrderPayment/list'
    import dictionaryJianshenqichai from '@/views/modules/dictionaryJianshenqichai/list'
    import dictionaryJianshenqichaiChuruInout from '@/views/modules/dictionaryJianshenqichaiChuruInout/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryZifei from '@/views/modules/dictionaryZifei/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryChangdi',
        name: '场地类型',
        component: dictionaryChangdi
    }
    ,{
        path: '/dictionaryChangdiCollection',
        name: '收藏表类型',
        component: dictionaryChangdiCollection
    }
    ,{
        path: '/dictionaryChangdiYuyueYesno',
        name: '预约状态',
        component: dictionaryChangdiYuyueYesno
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryJianshenkecheng',
        name: '健身课程类型',
        component: dictionaryJianshenkecheng
    }
    ,{
        path: '/dictionaryJianshenkechengCollection',
        name: '收藏表类型',
        component: dictionaryJianshenkechengCollection
    }
    ,{
        path: '/dictionaryJianshenkechengOrder',
        name: '订单类型',
        component: dictionaryJianshenkechengOrder
    }
    ,{
        path: '/dictionaryJianshenkechengOrderPayment',
        name: '订单支付类型',
        component: dictionaryJianshenkechengOrderPayment
    }
    ,{
        path: '/dictionaryJianshenqichai',
        name: '健身器材类型',
        component: dictionaryJianshenqichai
    }
    ,{
        path: '/dictionaryJianshenqichaiChuruInout',
        name: '出入库类型',
        component: dictionaryJianshenqichaiChuruInout
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryZifei',
        name: '资费类型',
        component: dictionaryZifei
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/changdi',
        name: '场地信息',
        component: changdi
      }
    ,{
        path: '/changdiCollection',
        name: '场地收藏',
        component: changdiCollection
      }
    ,{
        path: '/changdiLiuyan',
        name: '场地留言',
        component: changdiLiuyan
      }
    ,{
        path: '/changdiYuyue',
        name: '场地预约申请',
        component: changdiYuyue
      }
    ,{
        path: '/dianzhang',
        name: '店长',
        component: dianzhang
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '交流论坛',
        component: forum
      }
    ,{
        path: '/jianshenkecheng',
        name: '健身课程',
        component: jianshenkecheng
      }
    ,{
        path: '/jianshenkechengCollection',
        name: '课程收藏',
        component: jianshenkechengCollection
      }
    ,{
        path: '/jianshenkechengLiuyan',
        name: '课程留言',
        component: jianshenkechengLiuyan
      }
    ,{
        path: '/jianshenkechengOrder',
        name: '课程订单',
        component: jianshenkechengOrder
      }
    ,{
        path: '/jianshenqichai',
        name: '健身器材',
        component: jianshenqichai
      }
    ,{
        path: '/jianshenqichaiChuruInout',
        name: '出入库',
        component: jianshenqichaiChuruInout
      }
    ,{
        path: '/jianshenqichaiChuruInoutList',
        name: '出入库详情',
        component: jianshenqichaiChuruInoutList
      }
    ,{
        path: '/jiaolian',
        name: '教练',
        component: jiaolian
      }
    ,{
        path: '/news',
        name: '公告通知',
        component: news
      }
    ,{
        path: '/qiantai',
        name: '前台',
        component: qiantai
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhuchang',
        name: '驻场人员',
        component: zhuchang
      }
    ,{
        path: '/zifei',
        name: '资费',
        component: zifei
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
