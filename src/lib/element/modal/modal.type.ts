import { USER_ROLE } from '../../common/auth';

export interface ModalMenuPropsType {
  active: boolean;
  role: USER_ROLE;
  items: IModalItems[];
  onClose: Function;
}

interface IModalItems {
  id: number;
  tid: string;
  tvalue: string;
  path: string;
}
