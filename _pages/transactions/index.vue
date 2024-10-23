<template>
  <div id="retail-inventories-page">
    <!--Crud transactions-->
    <crud :crud-data="import('modules/qretail/_crud/transactions.vue')"
          ref="transactionCrud" type="update"
          @created="$refs.transactionList.getData({page: 1})" />
    <!--Dynamic List-->
    <dynamic-list :list-config="listConfig" @new="$refs.transactionCrud.create()"
                  ref="transactionList" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import controller from './controller';
import dynamicList from 'modules/qsite/_components/master/dynamicList';

export default defineComponent({
  props: {},
  components: { dynamicList },
  setup (props, { emit })
  {
    return controller(props, emit);
  }
});
</script>
<style lang="scss">
</style>
