import {defHttp} from '/@/utils/http/axios';
import { useMessage } from "/@/hooks/web/useMessage";

const { createConfirm } = useMessage();

enum Api {
  list = '/ddf/plorder/list',
  save='/ddf/plorder/add',
  edit='/ddf/plorder/edit',
  deleteOne = '/ddf/plorder/delete',
  matchPlOrder = '/ddf/plorder/matchOrder',
  deleteBatch = '/ddf/plorder/deleteBatch',
  importExcel = '/ddf/plorder/importExcel',
  exportXls = '/ddf/plorder/exportXls',
  ddfPlOrderdetailList = '/ddf/plorder/listDdfPlOrderdetailByMainId',
  ddfPlOrderdetailSave='/ddf/plorder/addDdfPlOrderdetail',
  ddfPlOrderdetailEdit='/ddf/plorder/editDdfPlOrderdetail',
  ddfPlOrderdetailDelete = '/ddf/plorder/deleteDdfPlOrderdetail',
  ddfPlOrderdetailDeleteBatch = '/ddf/plorder/deleteBatchDdfPlOrderdetail',
}
/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;

/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;
/**
 * 列表接口
 * @param params
 */
export const list = (params) =>
  defHttp.get({url: Api.list, params});

/**
 * 删除单个
 */
export const deleteOne = (params,handleSuccess) => {
  return defHttp.delete({url: Api.deleteOne, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}

export const matchPlOrder = (params,handleSuccess) => {
  return defHttp.put({url: Api.matchPlOrder, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}
/**
 * 批量删除
 * @param params
 */
export const batchDelete = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({url: Api.deleteBatch, data: params}, {joinParamsToUrl: true}).then(() => {
        handleSuccess();
      });
    }
  });
}
/**
 * 保存或者更新
 * @param params
 */
export const saveOrUpdate = (params, isUpdate) => {
  let url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({url: url, params});
}
/**
 * 列表接口
 * @param params
 */
export const ddfPlOrderdetailList = (params) => {
  if(params['orderId']){
    return defHttp.get({url: Api.ddfPlOrderdetailList, params});
  }
  return Promise.resolve({});
}


/**
 * 删除单个
 */
export const ddfPlOrderdetailDelete = (params,handleSuccess) => {
  return defHttp.delete({url: Api.ddfPlOrderdetailDelete, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}
/**
 * 批量删除
 * @param params
 */
export const ddfPlOrderdetailDeleteBatch = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({url: Api.ddfPlOrderdetailDeleteBatch, data: params}, {joinParamsToUrl: true}).then(() => {
        handleSuccess();
      });
    }
  });
}
/**
 * 保存或者更新
 * @param params
 */
export const  ddfPlOrderdetailSaveOrUpdate = (params, isUpdate) => {
  let url = isUpdate ? Api.ddfPlOrderdetailEdit : Api.ddfPlOrderdetailSave;
  return defHttp.post({url: url, params});
}
/**
 * 导入
 */
export const ddfPlOrderdetailImportUrl = '/ddf/plorder/importDdfPlOrderdetail'

/**
 * 导出
 */
export const ddfPlOrderdetailExportXlsUrl = '/ddf/plorder/exportDdfPlOrderdetail'
