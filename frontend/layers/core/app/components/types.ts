import type { LucideIcon } from "lucide-vue-next";

export interface Action {
  title: string;
  icon?: LucideIcon;
  action: () => void;
  destructive?: boolean;
}

export interface ModalInject {
  close: () => void;
}