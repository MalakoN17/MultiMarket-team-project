import axiosMu from '../../utils/axiosInterceptors';

export const getStoreApi = async (storeId) => {
  try {
    const { data } = await axiosMu.get(`/store/getByID/${storeId}`);
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




