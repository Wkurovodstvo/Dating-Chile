const mode = process.env.NODE_ENV;

export const baseURL = mode === "production" ? 'http://192.168.0.116' : 'http://192.168.0.116:3000';
export const restURL = `${baseURL}/api`;
export const publicURL = mode === "production" ? `${baseURL}/images` : `${baseURL}/public/images`;