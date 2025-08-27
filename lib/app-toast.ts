import { toast } from 'react-hot-toast';

export const AppToast = {
  success: (message: string, options?: { duration?: number }) => {
    toast.success(message, { duration: options?.duration ?? 3000 });
  },
  error: (message: string, options?: { duration?: number }) => {
    toast.error(message, { duration: options?.duration ?? 3000 });
  },
  custom: (message: string, options?: { duration?: number }) => {
    toast(message, { duration: options?.duration ?? 3000 });
  },
};
