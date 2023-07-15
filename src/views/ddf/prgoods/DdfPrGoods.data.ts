import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '名称',
    align:"center",
    dataIndex: 'prName'
  },
  {
    title: '库存',
    align:"center",
    dataIndex: 'prInventory'
  },
  {
    title: '参考价格',
    align:"center",
    dataIndex: 'price'
  },
  {
    title: '成本价',
    align:"center",
    dataIndex: 'rePrice'
  },
  {
    title: '促销价',
    align:"center",
    dataIndex: 'saPrice'
  },
  {
    title: '商家id',
    align:"center",
    dataIndex: 'prId'
  },
  {
    title: '平台id',
    align:"center",
    dataIndex: 'caId'
  },
  {
    title: '商家描述',
    align:"center",
    dataIndex: 'prDesc'
  },
  {
    title: '商家自定义',
    align:"center",
    dataIndex: 'prCustom'
  },
  {
    title: '平台标签',
    align:"center",
    dataIndex: 'caLabel'
  },
  {
    title: '有效日期',
    align:"center",
    dataIndex: 'endTime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
  },
  {
    title: '同步编码',
    align:"center",
    dataIndex: 'erpId'
  },
  {
    title: '状态',
    align:"center",
    dataIndex: 'status'
  },
  {
    title: '扫描条码',
    align:"center",
    dataIndex: 'barcode'
  },
  {
    title: '扩展字段1',
    align:"center",
    dataIndex: 'ext1'
  },
  {
    title: '扩展字段2',
    align:"center",
    dataIndex: 'ext2'
  },

];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '名称',
    field: 'prName',
    component: 'Input',
  },
  {
    label: '库存',
    field: 'prInventory',
    component: 'InputNumber',
  },
  {
    label: '参考价格',
    field: 'price',
    component: 'InputNumber',
  },
  {
    label: '成本价',
    field: 'rePrice',
    component: 'InputNumber',
  },
  {
    label: '促销价',
    field: 'saPrice',
    component: 'InputNumber',
  },
  {
    label: '商家id',
    field: 'prId',
    component: 'Input',
  },
  {
    label: '平台id',
    field: 'caId',
    component: 'Input',
  },
  {
    label: '商家描述',
    field: 'prDesc',
    component: 'Input',
  },
  {
    label: '商家自定义',
    field: 'prCustom',
    component: 'Input',
  },
  {
    label: '平台标签',
    field: 'caLabel',
    component: 'Input',
  },
  {
    label: '有效日期',
    field: 'endTime',
    component: 'DatePicker',
  },
  {
    label: '状态',
    field: 'status',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入状态!'},
      ];
    },
  },
  {
    label: '扫描条码',
    field: 'barcode',
    component: 'Input',
  },
  {
    label: '同步编码',
    field: 'erpId',
    component: 'Input',
  },
  {
    label: '扩展字段1',
    field: 'ext1',
    component: 'Input',
  },
  {
    label: '扩展字段2',
    field: 'ext2',
    component: 'Input',
  },

  // TODO 主键隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false
  },
];



/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
