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
        entityName: config('main.qretail.entityNames.items'),
        apiRoute: 'apiRoutes.qretail.items',
        permission: 'iretail.items',
        extraFormFields: 'iretail.crud-fields.items',
        create: {
          title: this.$tr('iretail.cms.newItem')
        },
        read: {
          columns: [
            { name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', style: 'width: 50px' },
            { name: 'title', label: this.$tr('isite.cms.form.title'), field: 'title', align: 'rigth' },
            { name: 'quantity', label: this.$tr('isite.cms.form.quantity'), field: 'quantity', align: 'rigth' },
            {
              name: 'status',
              label: this.$tr('isite.cms.form.status'),
              field: 'status',
              align: 'left',
              isTranslatable: true
            },
            {
              name: 'purchasePrice',
              label: this.$tr('iretail.cms.purchasePrice'),
              field: 'purchasePrice',
              align: 'left',
              format: val => '$' + this.$trn(val || 0)
            },
            {
              name: 'salePrice', label: this.$tr('iretail.cms.salePrice'),
              field: 'salePrice', align: 'left', format: val => '$' + this.$trn(val || 0)
            },
            {
              name: 'created_at', label: this.$tr('isite.cms.form.createdAt'), field: 'createdAt', align: 'left',
              format: val => val ? this.$trd(val) : '-'
            },
            { name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left' }
          ]
        },
        update: {
          title: this.$tr('iretail.cms.updateItems')
        },
        delete: true,
        formLeft: {
          id: { value: '' },
          userId: { value: this.$store.state.quserAuth.userId },
          title: {
            value: '',
            type: 'input',
            isTranslatable: true,
            required: true,
            props: {
              label: `${this.$tr('isite.cms.form.title')}*`
            }
          },
          status: {
            value: '1',
            type: 'select',
            props: {
              label: `${this.$tr('isite.cms.form.status')}:`,
              rules: [
                val => !!val || this.$tr('isite.cms.message.fieldRequired')
              ],
              options: [
                { label: this.$tr('isite.cms.label.enabled'), value: 1 },
                { label: this.$tr('isite.cms.label.disabled'), value: 0 }
              ]
            }
          },
          purchasePrice: {
            value: null,
            type: 'input',
            required: true,
            props: {
              label: `${this.$tr('iretail.cms.purchasePrice')}*`,
              type: 'number'
            }
          },
          salePrice: {
            value: null,
            type: 'input',
            required: true,
            props: {
              label: `${this.$tr('iretail.cms.salePrice')}*`,
              type: 'number'
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
