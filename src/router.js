import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home';
import Index from './pages/index';
import Product from './pages/product';
import Detail from './pages/detail';
import Cart from './pages/cart';
import Order from './pages/order';
import OrderComfirm from './pages/orderComfirm';
import OrderPay from './pages/orderPay';
import OrderList from './pages/orderList';

Vue.use(Router);

//这个vue-router的语法，代表导出
export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index
                },
                {
                    path:'/product',
                    name:'product',
                    component:Product
                },
                {
                    path:'/detail',
                    name:'detail',
                    component:Detail
                }
            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'/list',
                    name:'order-list',
                    component:OrderList
                },
                {
                    path:'/comfirm',
                    name:'order-comfirm',
                    component:OrderComfirm
                },
                {
                    path:'/pay',
                    name:'order-pay',
                    component:OrderPay
                }
            ]

        }
    ]
})