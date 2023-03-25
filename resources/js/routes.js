const Welcome = () => import('./components/Welcome.vue')
const ProductList = () => import('./components/product/List.vue')
const ProductCreate = () => import('./components/product/Add.vue')
const ProductEdit = () => import('./components/product/Edit.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'productList',
        path: '/product',
        component: ProductList
    },
    {
        name: 'productEdit',
        path: '/product/:id/edit',
        component: ProductEdit
    },
    {
        name: 'productAdd',
        path: '/product/add',
        component: ProductCreate
    }
]