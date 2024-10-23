<template></template>
<script>

export default {
  data() {
    return {
      crudId: this.$uid()
    };
  },
  computed: {
    crudData() {
      return {
        crudId: this.crudId,
        entityName: config('main.qretail.entityNames.transactions'),
        apiRoute: 'apiRoutes.qretail.transactions',
        permission: 'iretail.transactions',
        extraFormFields: 'iretail.crud-fields.transactions',
        create: {
          title: this.$tr('iretail.cms.newTransaction')
        },
        read: {
          columns: []
        },
        update: {
          title: this.$tr('iretail.cms.updateTransaction')
        },
        delete: true,
        formLeft: {
          id: { value: '' },
          userId: { value: this.$store.state.quserAuth.userId },
          itemId: {
            type: 'select',
            required: true,
            props: {
              label: this.$tr('isite.cms.label.item') + '*'
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qretail.items',
              select: {
                id: 'id',
                label: item => `(${item.quantity}) ${item.title}`,
                sublabel: item => `$ ${this.$trn(item.salePrice)}`
              }
            }
          },
          typeId: {
            type: 'select',
            required: true,
            props: {
              label: this.$tr('isite.cms.label.type') + '*'
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qretail.types'
            }
          },
          quantity: {
            type: 'input',
            required: true,
            props: {
              label: this.$tr('isite.cms.label.quantity') + '*',
              type: 'number'
            }
          },
          comment: {
            value: null,
            type: 'input',
            props: {
              label: this.$tr('isite.cms.label.comment'),
              type: 'textarea',
              rows: '3'
            }
          }
        }
      };
    },
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {};
    }
  }
};
</script>
