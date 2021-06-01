export interface ModalMenuPropsType {
  active: boolean;
  items: { tid: string; tvalue: string; action: Function }[];
  onClose: Function;
}
