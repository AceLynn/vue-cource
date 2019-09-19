export const baseURL = process.env.NODE_ENV === 'production' ? 'http://productions.api.com' : 'http://localhost:4000'; 
// 如果没有设置proxy，这边写服务端url，后端可能需要设置跨域头
