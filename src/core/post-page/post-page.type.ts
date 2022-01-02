import { BasicReactEditorType } from 'src/lib/basic-types';
import { CardMultiType } from 'src/lib/element/card';

export enum POST_PAGE_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export type PostType = {
  id: string;
  type: 4;
  name: string;
  postArticle: BasicReactEditorType;
  createdDate: Date;
  recommendations: CardMultiType[];
};
export type PostPageStateType = {
  pending: boolean;
  post?: PostType;
  error?: string;
};
export type PostPageActionType = {
  type: POST_PAGE_ACTION_TYPE;
  post?: PostType;
  error?: string;
};
export type PostPageComponentProps = {
  state: PostPageStateType;
};
