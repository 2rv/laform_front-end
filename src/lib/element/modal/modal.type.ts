import { USER_ROLE } from '../../common/auth';

export interface ModalMenuPropsType {
  active: boolean;
  role: USER_ROLE;
  userItems: IModalItems[];
  adminUserItems: IModalItems[];
  onClose: Function;
}

interface IModalItems {
  id: number;
  tid: string;
  path: string;
}
