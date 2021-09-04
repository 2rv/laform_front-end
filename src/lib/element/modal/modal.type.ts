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
  onClose: Function;
  children: React.ReactElement<any | null>;
}
