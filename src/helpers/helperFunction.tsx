import { StatusTag } from "src/components/Badge";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ClearSession = () => sessionStorage.removeItem("muftar-token");
export const ErrorNotification = (error: string) => toast.error(error);
export const SuccessNotification = (success: string) => toast.success(success);

const baseURL = process.env.REACT_APP_IMG_URL;

export function handleFormData(values: any) {
  const formData = new FormData();

  for (const key in values) {
    formData.set(key, values[key]);
  }
  return formData;
}

interface ResponseProps {
  status: boolean | "FETCH_ERROR" | "error" | 422 | 401;
  message?: string;
  error?: string;
  errors: string[];
}

export function handleResponse(response: ResponseProps) {
  switch (response?.status) {
    case false:
      ErrorNotification(response?.message || "");
      break;
    case "FETCH_ERROR":
      ErrorNotification(response?.errors[0] || response?.message || "");
      break;
    case "error":
      ErrorNotification(response?.errors[0] || response?.message || "");
      break;
    case 422:
      ErrorNotification(response?.errors[0] || response?.message || "");
      break;
    case 401:
      ErrorNotification(response?.errors[0] || response?.message || "");
      break;
    default:
      SuccessNotification(response?.message || "");
      break;
  }
}

export const timeOutRedirect = (path: string) => {
  return setTimeout(() => {
    window.location.href = path;
  }, 500);
};

export const convertToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const stausTag = (val: string) => {
  if (val === "filled") {
    return (
      <StatusTag
        text="filled"
        background="bg-muftar-success-50"
        color="text-muftar-success-700"
      />
    );
  }
  if (val === "pending") {
    return (
      <StatusTag
        text="pending"
        background="bg-muftar-warning-50"
        color="text-muftar-warning-700"
      />
    );
  }
  if (val === "on Hold") {
    return (
      <StatusTag
        text="on Hold"
        background="bg-muftar-error-50"
        color="text-muftar-error-700"
      />
    );
  }
};

export const imageUrlMerger = (val: string) => {
  console.log(baseURL + val);
  return baseURL + val;
};

export const getCurrentTime = (): string => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes}`;
};
