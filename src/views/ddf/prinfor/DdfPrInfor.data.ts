import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '用户ID',
    align:"center",
    dataIndex: 'userId'
   },
   {
    title: '营业执照名称',
    align:"center",
    dataIndex: 'prName'
   },
   {
    title: '经营地址',
    align:"center",
    dataIndex: 'address'
   },
   {
    title: '到期日期',
    align:"center",
    dataIndex: 'endTime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '注册日期',
    align:"center",
    dataIndex: 'startTime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '联系人',
    align:"center",
    dataIndex: 'contact'
   },
   {
    title: '联系电话',
    align:"center",
    dataIndex: 'phone'
   },
   {
    title: '座机',
    align:"center",
    dataIndex: 'tel'
   },
   {
    title: '图片1',
    align:"center",
    dataIndex: 'img1'
   },
   {
    title: '图片2',
    align:"center",
    dataIndex: 'img2'
   },
   {
    title: '图片3',
    align:"center",
    dataIndex: 'img3'
   },
   {
    title: '图片4',
    align:"center",
    dataIndex: 'img4'
   },
   {
    title: '审核状态',
    align:"center",
    dataIndex: 'status'
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
    label: '用户ID',
    field: 'userId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入用户ID!'},
          ];
     },
  },
  {
    label: '营业执照名称',
    field: 'prName',
    component: 'Input',
  },
  {
    label: '经营地址',
    field: 'address',
    component: 'Input',
  },
  {
    label: '到期日期',
    field: 'endTime',
    component: 'DatePicker',
  },
  {
    label: '注册日期',
    field: 'startTime',
    component: 'DatePicker',
  },
  {
    label: '联系人',
    field: 'contact',
    component: 'Input',
  },
  {
    label: '联系电话',
    field: 'phone',
    component: 'Input',
  },
  {
    label: '座机',
    field: 'tel',
    component: 'Input',
  },
  {
    label: '图片1',
    field: 'img1',
    component: 'Input',
  },
  {
    label: '图片2',
    field: 'img2',
    component: 'Input',
  },
  {
    label: '图片3',
    field: 'img3',
    component: 'Input',
  },
  {
    label: '图片4',
    field: 'img4',
    component: 'Input',
  },
  {
    label: '审核状态',
    field: 'status',
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



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}