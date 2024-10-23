import { computed, reactive, ref, onMounted, toRefs, watch, getCurrentInstance } from 'vue';
import service from './services';
import store from './store';
import { store, i18n } from 'src/plugins/utils';

export default function controller (props: any, emit: any)
{
  const proxy = getCurrentInstance()!.appContext.config.globalProperties;
  // Refs
  const refs = {
    // refKey: ref(defaultValue)
  };

  // States
  const state = reactive({
    listConfig: {
      apiRoute: 'apiRoutes.qretail.transactions',
      permission: 'iretail.transactions',
      pageActions: {
        extraActions: proxy.$hasAccess('iretail.transactions.create') ? ['new'] : []
      },
      read: {
        title: i18n.trp('iretail.cms.transaction'),
        columns: [
          { name: 'id', field: 'id', label: 'ID' },
          {
            name: 'item',
            label: i18n.tr('isite.cms.form.item'),
            field: 'item',
            align: 'left',
            format: val => val?.title ?? '-'
          },
          {
            name: 'type',
            label: i18n.tr('isite.cms.form.type'),
            field: 'type',
            align: 'left',
            format: val => `<i class="${val.icon}" style="color: ${val.color}" /> <span class="q-ml-sm">${val.title}</span>`
          },
          {
            name: 'quantity',
            label: i18n.tr('isite.cms.quantity'),
            field: 'quantity',
            align: 'left'
          },
          {
            name: 'price',
            label: i18n.tr('isite.cms.label.price'),
            field: 'price',
            align: 'left',
            format: val => '$' + i18n.trn(val),
          },
          {
            name: 'total',
            label: i18n.tr('isite.cms.total'),
            field: 'total',
            align: 'left',
            format: (val, row) =>
            {
              let config = row.transactions.length ?
                { color: '#007bff', icon: 'fal fa-check-square' } :
                { color: '#f39c12', icon: 'fal fa-hourglass-half' };

              return `<i class="${config.icon}" style="color: ${config.color}" /> <span>$ ${i18n.trn(val)}</span>`;
            },
            dynamicField: row =>
            {
              if (row.transactions.length) return null;
              return {
                name: 'pocketId',
                type: 'select',
                props: {
                  label: i18n.tr('iwallet.cms.pocket')
                },
                loadOptions: {
                  apiRoute: 'apiRoutes.qwallet.pockets'
                }
              };
            }
          },
          {
            name: 'comment',
            label: i18n.tr('isite.cms.label.comment'),
            field: 'comment',
            align: 'left',
            style: 'max-width : 250px',
            format: val => val ?? '...'
          },
          {
            name: 'createdAt',
            label: i18n.tr('isite.cms.form.createdAt'),
            field: 'createdAt',
            align: 'left',
            format: val => i18n.trd(val, {type: 'long'})
          }
        ],
        requestParams: { include: 'item,transactions' },
        filters: {
          date: {
            value: null,
            type: 'dateRange',
            quickFilter: true,
            props: {
              label: i18n.tr('isite.cms.label.date'),
              clearable: true
            }
          },
          itemId: {
            value: null,
            type: 'select',
            quickFilter: true,
            props: {
              label: i18n.tr('isite.cms.item'),
              clearable: true
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qretail.items'
            }
          }
        }
      }
    }
  });

  // Computed
  const computeds = {
    // key: computed(() => {})
  };

  // Methods
  const methods = {
    // methodKey: () => {}
  };

  // Mounted
  onMounted(() =>
  {
  });

  // Watch
  // watch(key, (newField, oldField): void => {
  //
  // }, {deep: true})

  return { ...refs, ...(toRefs(state)), ...computeds, ...methods, store };
}
