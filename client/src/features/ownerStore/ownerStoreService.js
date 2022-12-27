import axiosMu from '../../utils/axiosInterceptors';

export const getStoreApi = async (storeId) => {
  try {
    console.log(storeId);
    const { data } = await axiosMu.get(`/store/getByID/${storeId}`);
    return data;
  } catch (error) {
    return error;
  }
};
export const createStoreApi = async (store) => {
  try {
    const { data } = await axiosMu.post(`/store`, store);
    return data;
  } catch (error) {
    return error;
  }
};
export const getStoresApi = async () => {
  try {
    const { data } = await axiosMu.get(`/store`);
    return data;
  } catch (error) {
    return error;
  }
};
export const updateStoreApi = async (storeId, store) => {
  try {

    const { data } = await axiosMu.put(`/store/${storeId}`, store);
    return data;
  } catch (error) {
    return error;
  }
};
export const deleteStoreApi = async (storeId) => {
  try {

    const { data } = await axiosMu.delete(`/store/${storeId}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getStoreProductApi = async (productId) => {
  try {
    const { data } = await axiosMu.get(`/product/${productId}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getStoreProductsApi = async (storeId) => {
  try {
    const { data } = await axiosMu.get(`/product/store/${storeId}`);
    return data;
  } catch (error) {
    return error;
  }
};
export const getDepartmentsApi = async () => {
  try {
    const { data } = await axiosMu.get(`/department`);
    return data;
  } catch (error) {
    return error;
  }
};




