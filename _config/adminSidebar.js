import pages from 'src/setup/pages'; // Get Pages from config

//Blog
export default [
  {
    title: 'iretail.cms.sidebar.adminGroup',
    icon: 'fa-light fa-cash-register',
    children: [
      pages.qretail.items,
      pages.qretail.transactions,
    ]
  }
];
