export const routes = [
  {
    path: '/providers/',
    component: () =>  import ('@controleonline/ui-layout/src/vue/layouts/AdminLayout.vue'),
    children: [
      {
        name: 'ProvidersIndex',
        path: '',
        component: () =>  import ('../pages/Provider/Index.vue')
      },
      {
        name: 'ProviderDetails',
        path: 'id/:id',
        component: () =>  import ('../pages/Provider/Details.vue')
      },
    ]
  },
];