import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
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
    title: '订单状态',
    align:"center",
    dataIndex: 'plStatus'
   },
   {
    title: '原订单id',
    align:"center",
    dataIndex: 'plPid'
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
    label: '订单状态',
    field: 'plStatus',
    component: 'InputNumber',
  },
  {
    label: '原订单id',
    field: 'plPid',
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

//子表列表数据
export const ddfPlOrderdetailColumns: BasicColumn[] = [
   {
    title: '商家id',
    align:"center",
    dataIndex: 'prId'
   },
   {
    title: '商家商品id',
    align:"center",
    dataIndex: 'prGoodsid'
   },
   {
    title: '平台商品id',
    align:"center",
    dataIndex: 'caGoodsid'
   },
   {
    title: '数量',
    align:"center",
    dataIndex: 'number'
   },
   {
    title: '单价',
    align:"center",
    dataIndex: 'unitPrice'
   },
   {
    title: '总价',
    align:"center",
    dataIndex: 'price'
   },
   {
    title: '商品名称',
    align:"center",
    dataIndex: 'goodsname'
   },
   {
    title: '扫描编码',
    align:"center",
    dataIndex: 'barCode'
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
//子表表单数据
export const ddfPlOrderdetailFormSchema: FormSchema[] = [
  // TODO 子表隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false
  },
  {
    label: '商家id',
    field: 'prId',
    component: 'Input',
  },
  {
    label: '商家商品id',
    field: 'prGoodsid',
    component: 'Input',
  },
  {
    label: '平台商品id',
    field: 'caGoodsid',
    component: 'Input',
  },
  {
    label: '数量',
    field: 'number',
    component: 'InputNumber',
  },
  {
    label: '单价',
    field: 'unitPrice',
    component: 'InputNumber',
  },
  {
    label: '总价',
    field: 'price',
    component: 'InputNumber',
  },
  {
    label: '商品名称',
    field: 'goodsname',
    component: 'Input',
  },
  {
    label: '扫描编码',
    field: 'barCode',
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
];
