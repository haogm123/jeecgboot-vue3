import {BasicColumn, TableImg } from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {Random} from "mockjs";
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '平台名称',
    align:"center",
    dataIndex: 'caName'
   },
   {
    title: '厂家',
    align:"center",
    dataIndex: 'cjGoods'
   },
   {
    title: '规格',
    align:"center",
    dataIndex: 'ggGoods'
   },
   {
    title: '批准文号',
    align:"center",
    dataIndex: 'pzGoods'
   },
   {
    title: '条码',
    align:"center",
    dataIndex: 'barCode'
   },
  // {
  //   title: '自定义',
  //   dataIndex: 'img',
  //   key: 'img',
  //   width: 60,
  //   align: "center",
  //   slots: {customRender: function (t, r, index) {
  //     // alert(t)
  //     var imgarr={t};
  //     //imgarr转string
  //
  //     console.log(imgarr.toString());
  //     console.log("aaaaaaa");
  //     console.log(imgarr);
  //     return ['https://alijkc.oss-cn-beijing.aliyuncs.com/07c019cf-aca9-11e7-b661-3497f634edda.jpg'];
  //   }
  // }},
   {
    title: '图片',
     dataIndex: 'imgarr',
     helpMessage: ['这是简单模式的图片列表', '只会显示一张在表格中', '但点击可预览多张图片'],
     width: 140,
     slots: { customRender: 'img'},
    // align:"center",
    // dataIndex: 'img'
   },
   {
    title: '描述',
    align:"center",
    dataIndex: 'content'
   },
   {
    title: '状态',
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
    label: '平台名称',
    field: 'caName',
    component: 'Input',
  },
  {
    label: '厂家',
    field: 'cjGoods',
    component: 'Input',
  },
  {
    label: '规格',
    field: 'ggGoods',
    component: 'Input',
  },
  {
    label: '批准文号',
    field: 'pzGoods',
    component: 'Input',
  },
  {
    label: '条码',
    field: 'barCode',
    component: 'Input',
  },
  {
    label: '图片',
    field: 'img',
    component: 'Input',
  },
  {
    label: '描述',
    field: 'content',
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

function getRandomPics(): string[] {
  const arr: string[] = [];
  arr.push("https://alijkc.oss-cn-beijing.aliyuncs.com/07c019cf-aca9-11e7-b661-3497f634edda.jpg");
  // for (let i = 0; i < count; i++) {
  //   arr.push(Random.image('800x600', Random.color(), Random.color(), Random.title()));
  // }
  console.log(arr);
  return arr;
}
