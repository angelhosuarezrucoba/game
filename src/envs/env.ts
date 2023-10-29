const getPropertyValue = (key: string) => {
    return (window as any).env ? (window as any).env[key] : process.env[key];
}

export const API_URL = getPropertyValue("REACT_APP_BACKEND_URL");