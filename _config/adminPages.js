export default {
  items: {
    permission: 'iretail.items.manage',
    activated: true,
    authenticated: true,
    path: '/retail/items/index',
    name: 'qretail.admin.items',
    crud: import('modules/qretail/_crud/items'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'iretail.cms.sidebar.adminItems',
    icon: 'fa-light fa-newspaper'
  },
  transactions: {
    permission: 'iretail.transactions.manage',
    activated: true,
    authenticated: true,
    path: '/retail/transactions/index',
    name: 'qretail.admin.transactions',
    page: () => import('modules/qretail/_pages/transactions'),
    layout: () => import('layouts/master.vue'),
    title: 'iretail.cms.sidebar.adminTransactions',
    icon: 'fal fa-boxes'
  }
};
