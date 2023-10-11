import { ReactNode } from "react";
import { atom } from "recoil";

export type ModalConfigType = {
  isOpen?: boolean;
  children?: ReactNode
}

export const modalConfigState = atom({
  key :'modalConfigState',
  default: {} as ModalConfigType
})

export type PopupConfigType = {
  isOpen?: boolean;
  children?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const popupConfigState = atom({
  key: 'popupConfigState',
  default: {} as PopupConfigType
})