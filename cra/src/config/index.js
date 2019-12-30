const {
    NODE_ENV,
    REACT_APP_DEV_API_SERVER_URL,
    REACT_APP_PROD_API_SERVER_URL,
} = process.env;

export const API_SERVER_URL =
    NODE_ENV === 'production'
        ? REACT_APP_DEV_API_SERVER_URL
        : REACT_APP_PROD_API_SERVER_URL;
