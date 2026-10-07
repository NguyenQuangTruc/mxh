
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080', // Đường dẫn gốc tới Spring Boot
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Hủy request nếu quá 10 giây
  withCredentials: true,
});

export default axiosClient;