import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '名称',
    align: 'left',
    dataIndex: 'name'
  },
  {
    title: '图标链接',
    align: 'center',
    dataIndex: 'src'
  },
  {
    title: '描述',
    align: 'center',
    dataIndex: 'description'
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'status'
  },
  {
    title: '扩展字段1',
    align: 'center',
    dataIndex: 'ext1'
  },
  {
    title: '排序',
    align: 'center',
    dataIndex: 'menuorder'
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '图标链接',
    field: 'src',
    component: 'Input',
  },
  {
    label: '描述',
    field: 'description',
    component: 'Input',
  },
  {
    label: '状态',
    field: 'status',
    component: 'InputNumber',
  },
  {
    label: '扩展字段1',
    field: 'ext1',
    component: 'Input',
  },
  {
    label: '父级节点',
    field: 'pid',
    component: 'JTreeSelect',
    componentProps: {
      dict: "ddf_categories,name,id",
      pidField: "pid",
      pidValue: "0",
      hasChildField: "has_child",
    },
  },
  {
    label: '排序',
    field: 'menuorder',
    component: 'InputNumber',
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
