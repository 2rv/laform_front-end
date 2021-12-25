import { MouseEventHandler, ReactNode } from 'react';

export interface ModalMenuPropsType {
  active: boolean;
  role: any;
  items: IModalItems[];
  onClose: Function;
}

interface IModalItems {
  id: number;
  tid: string;
  tvalue: string;
  path: string;
  divider: boolean;
}

export interface ModalPopupProps {
  modalVisibilty: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  children: React.ReactElement<any | null>;
}

export interface ModalFullProps {
  id?: string;
  onOpen: boolean;
  className?: string;
  children: ReactNode;
}
