import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '购买用户id',
    align:"center",
    dataIndex: 'payUserId'
   },
   {
    title: '商家用户id',
    align:"center",
    dataIndex: 'prUserId'
   },
   {
    title: '订单类型',
    align:"center",
    dataIndex: 'orderType'
   },
   {
    title: '订单地址',
    align:"center",
    dataIndex: 'orderAddr'
   },
   {
    title: '订单电话',
    align:"center",
    dataIndex: 'orderPhone'
   },
   {
    title: '订单数量',
    align:"center",
    dataIndex: 'orderNumber'
   },
   {
    title: '订单金额',
    align:"center",
    dataIndex: 'orderPrice'
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
   {
    title: '扩展字段3',
    align:"center",
    dataIndex: 'ext3'
   },
   {
    title: '扩展字段4',
    align:"center",
    dataIndex: 'ext4'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '购买用户id',
    field: 'payUserId',
    component: 'Input',
  },
  {
    label: '商家用户id',
    field: 'prUserId',
    component: 'Input',
  },
  {
    label: '订单类型',
    field: 'orderType',
    component: 'Input',
  },
  {
    label: '订单地址',
    field: 'orderAddr',
    component: 'Input',
  },
  {
    label: '订单电话',
    field: 'orderPhone',
    component: 'Input',
  },
  {
    label: '订单数量',
    field: 'orderNumber',
    component: 'InputNumber',
  },
  {
    label: '订单金额',
    field: 'orderPrice',
    component: 'InputNumber',
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
  {
    label: '扩展字段3',
    field: 'ext3',
    component: 'Input',
  },
  {
    label: '扩展字段4',
    field: 'ext4',
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
//子表单数据
//子表表格配置
export const ddfPrInvoiceColumns: JVxeColumn[] = [
    {
      title: '开票金额',
      key: 'amount',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '发票号',
      key: 'invoiceCode',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '发票地址',
      key: 'url',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '发票图片',
      key: 'img',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '发票类型',
      key: 'invoiceType',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '商家税号',
      key: 'prCode',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '开票说明',
      key: 'context',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '开票状态',
      key: 'status',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '扩展字段1',
      key: 'ext1',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '扩展字段2',
      key: 'ext2',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]
export const ddfPrOrderdetailColumns: JVxeColumn[] = [
    {
      title: '商家id',
      key: 'prGoodsid',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '平台商品id',
      key: 'caGoodsid',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '数量',
      key: 'number',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '单价',
      key: 'unitPrice',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '总价',
      key: 'price',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '商品名称',
      key: 'goodsname',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '扫描编码',
      key: 'barCode',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '扩展字段1',
      key: 'ext1',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '扩展字段2',
      key: 'ext2',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]
