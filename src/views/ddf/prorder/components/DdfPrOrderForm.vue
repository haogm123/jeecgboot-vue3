<template>
  <div>
  <!-- 子表单区域 -->
    <a-tabs v-model:activeKey="activeKey" animated @change="handleChangeTabs">
     <!--主表区域 -->
     <a-tab-pane tab="订单中心" :key="refKeys[0]" :forceRender="true" :style="tabsStyle">
       <BasicForm @register="registerForm" ref="formRef"/>
     </a-tab-pane>
  <!--子表单区域 -->
      <a-tab-pane tab="订单发票" key="ddfPrInvoice" :forceRender="true" :style="tabsStyle">
        <JVxeTable
          keep-source
          resizable
          ref="ddfPrInvoice"
          v-if="ddfPrInvoiceTable.show"
          :loading="ddfPrInvoiceTable.loading"
          :columns="ddfPrInvoiceTable.columns"
          :dataSource="ddfPrInvoiceTable.dataSource"
          :height="340"
          :disabled="formDisabled"
          :rowNumber="true"
          :rowSelection="true"
          :toolbar="true"
          />
      </a-tab-pane>
      <a-tab-pane tab="订单明细" key="ddfPrOrderdetail" :forceRender="true" :style="tabsStyle">
        <JVxeTable
          keep-source
          resizable
          ref="ddfPrOrderdetail"
          v-if="ddfPrOrderdetailTable.show"
          :loading="ddfPrOrderdetailTable.loading"
          :columns="ddfPrOrderdetailTable.columns"
          :dataSource="ddfPrOrderdetailTable.dataSource"
          :height="340"
          :disabled="formDisabled"
          :rowNumber="true"
          :rowSelection="true"
          :toolbar="true"
          />
      </a-tab-pane>
    </a-tabs>

    <div style="width: 100%;text-align: center;margin-top: 10px;" v-if="showFlowSubmitButton">
      <a-button preIcon="ant-design:check-outlined" style="width: 126px" type="primary" @click="handleSubmit">提 交</a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
    import { defHttp } from '/@/utils/http/axios';
    import {ref, computed, unref,reactive, onMounted, defineProps } from 'vue';
    import {BasicForm, useForm} from '/@/components/Form/index';
    import { JVxeTable } from '/@/components/jeecg/JVxeTable'
    import { useJvxeMethod } from '/@/hooks/system/useJvxeMethods.ts'
    import {formSchema,ddfPrInvoiceColumns,ddfPrOrderdetailColumns} from '../DdfPrOrder.data';
    import {saveOrUpdate,ddfPrInvoiceList,ddfPrOrderdetailList} from '../DdfPrOrder.api';
    import { VALIDATE_FAILED } from '/@/utils/common/vxeUtils'
    const refKeys = ref(['ddfPrOrder','ddfPrInvoice', 'ddfPrOrderdetail', ]);
    const activeKey = ref('ddfPrOrder');
    const ddfPrInvoice = ref();
    const ddfPrOrderdetail = ref();
    const tableRefs = {ddfPrInvoice, ddfPrOrderdetail, };
    const ddfPrInvoiceTable = reactive({
          loading: false,
          dataSource: [],
          columns:ddfPrInvoiceColumns,
          show: false
    })
    const ddfPrOrderdetailTable = reactive({
          loading: false,
          dataSource: [],
          columns:ddfPrOrderdetailColumns,
          show: false
    })

    const props = defineProps({
      formData: { type: Object, default: ()=>{} },
      formBpm: { type: Boolean, default: true }
    });
    const formDisabled = computed(()=>{
      if(props.formBpm === true){
        if(props.formData.disabled === false){
          return false;
        }
      }
      return true;
    });
    // 是否显示提交按钮
    const showFlowSubmitButton = computed(()=>{
      if(props.formBpm === true){
        if(props.formData.disabled === false){
          return true
        }
      }
      return false
    });
    
    //表单配置
    const [registerForm, {setProps,resetFields, setFieldsValue, validate}] = useForm({
        labelWidth: 150,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: {span: 24}
    });

    onMounted(()=>{
      initFormData();
    });
    //渲染流程表单数据
    const queryByIdUrl = '/ddfprorder/ddfPrOrder/queryById';
    async function initFormData(){
      if(props.formBpm === true){
        await reset();
        let params = {id: props.formData.dataId};
        const data = await defHttp.get({url: queryByIdUrl, params});
        //表单赋值
        await setFieldsValue({
          ...data
        });
        requestSubTableData(ddfPrInvoiceList, {id: data.id}, ddfPrInvoiceTable, ()=>{
          ddfPrInvoiceTable.show = true;
        })
        requestSubTableData(ddfPrOrderdetailList, {id: data.id}, ddfPrOrderdetailTable, ()=>{
          ddfPrOrderdetailTable.show = true;
        })
        // 隐藏底部时禁用整个表单
        setProps({ disabled: formDisabled.value })
      }
    }

    //方法配置
    const [handleChangeTabs,handleSubmit,requestSubTableData,formRef] = useJvxeMethod(requestAddOrEdit,classifyIntoFormData,tableRefs,activeKey,refKeys);
    // 弹窗tabs滚动区域的高度
    const tabsStyle = computed(() => {
      let height: Nullable<string> = null
      let minHeight = '100px'
      // 弹窗wrapper
      let overflow = 'auto';
      return {height, minHeight, overflow};
    })

    async function reset(){
      await resetFields();
      activeKey.value = 'ddfPrOrder';
      ddfPrInvoiceTable.dataSource = [];
      ddfPrOrderdetailTable.dataSource = [];
    }
    function classifyIntoFormData(allValues) {
         let main = Object.assign({}, allValues.formValue)
         return {
           ...main, // 展开
           ddfPrInvoiceList: allValues.tablesValue[0].tableData,
           ddfPrOrderdetailList: allValues.tablesValue[1].tableData,
         }
       }
    //表单提交事件
    async function requestAddOrEdit(values) {
      //提交表单
      await saveOrUpdate(values, true);
    }
</script>

<style lang="less" scoped>
/** 时间和数字输入框样式 */
    :deep(.ant-input-number){
        width: 100%
    }

    :deep(.ant-calendar-picker){
        width: 100%
    }
</style>

<style lang="less">
// Online表单Tab风格专属样式
.j-cgform-tab-modal {
  .ant-modal-header {
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: none !important;
  }

  .ant-modal .ant-modal-body > .scrollbar,
  .ant-tabs-nav .ant-tabs-tab {
    padding-top: 0;
  }

  .ant-tabs-top-bar {
    width: calc(100% - 55px);
    position: relative;
    left: -14px;
  }

  .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane {
    overflow: hidden auto;
  }
}
</style>