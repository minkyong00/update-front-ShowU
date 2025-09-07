// 상수

export const API_URL = 
  process.env.NODE_ENV === "production" 
  ? process.env.REACT_APP_CLOUDTYPE 
  : process.env.REACT_APP_LOCAL