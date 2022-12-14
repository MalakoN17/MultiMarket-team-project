import axiosMu from "../../utils/axiosInterceptors";

export const getStoreProductApi = async (productId) => {
    try {
      const { data } = await axiosMu.get(`/product/${productId}`);
      return data;
    } catch (error) {
      return error;
    }
  };


  export const createProductToStoreApi = async (product) => {
    try {
      
      const { data } = await axiosMu.post(`/product`, product);
      return data;
    } catch (error) {
      return error;
    }
  };

  export const updateProductToStoreApi = async (product, productId) => {
    try {
      const { data } = await axiosMu.put(`/product/${productId}`, product);
      return data;
    } catch (error) {
      return error;
    }
  };

  export const deleteProductToStoreApi = async (productId) => {
    try {
      const { data } = await axiosMu.delete(`/product/${productId}`);
      return data;
    } catch (error) {
      return error;
    }
  };