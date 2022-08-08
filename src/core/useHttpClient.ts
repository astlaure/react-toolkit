import axios from 'axios';

function useHttpClient() {
  return {
    async get<T>(url: string): Promise<T> {
      const response = await axios.get(url);
      return response.data;
    },
    async post<T>(url: string, data: any): Promise<T> {
      const response = await axios.post(url, data);
      return response.data;
    },
    async put<T>(url: string, data: any): Promise<T> {
      const response = await axios.put(url, data);
      return response.data;
    },
    async patch<T>(url: string, data: any): Promise<T> {
      const response = await axios.patch(url, data);
      return response.data;
    },
    async delete<T>(url: string): Promise<T> {
      const response = await axios.delete(url);
      return response.data;
    },
  };
}

export default useHttpClient;
