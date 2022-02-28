import { useEffect, Dispatch, useReducer, ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { httpRequest } from 'src/main/http';
import { AUTH_STORE_NAME, USER_ROLE } from 'src/lib/common/auth';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { IconButton } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { SectionLayout } from 'src/lib/element/layout';
import { LinkPrimary } from 'src/lib/element/link';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { ReactComponent as ChangeIcon } from 'src/asset/svg/change.svg';

enum PHONE_ACTION_TYPE {
  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  SAVE_PENDING = 'SAVE_PENDING',
  SAVE_SUCCESS = 'SAVE_SUCCESS',
  SAVE_ERROR = 'SAVE_ERROR',

  CHANGE = 'CHANGE',
}
type PhoneStateType = {
  getPending: boolean;
  phone: string;
  getError?: string;
  savePending: boolean;
  saveSuccess: boolean;
  saveError?: string;
};
type PhoneActionType = {
  type: PHONE_ACTION_TYPE;
  error?: string;
  phone?: string;
};
const initialState = {
  getPending: false,
  phone: '',
  getError: '',
  savePending: false,
  saveSuccess: false,
  saveError: '',
};
function PhoneReducer(state: PhoneStateType, action: PhoneActionType) {
  switch (action.type) {
    case PHONE_ACTION_TYPE.GET_PENDING:
      return {
        ...state,
        getPending: true,
        getError: '',
      };
    case PHONE_ACTION_TYPE.GET_SUCCESS:
      return {
        ...state,
        getPending: false,
        phone: action.phone || '',
      };
    case PHONE_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        getPending: false,
        getError: action.error,
      };
    case PHONE_ACTION_TYPE.SAVE_PENDING:
      return {
        ...state,
        savePending: true,
        saveError: '',
      };
    case PHONE_ACTION_TYPE.SAVE_SUCCESS:
      return {
        ...state,
        savePending: false,
        phone: action.phone || '',
        saveSuccess: true,
      };
    case PHONE_ACTION_TYPE.SAVE_ERROR:
      return {
        ...state,
        savePending: false,
        saveError: action.error,
      };
    case PHONE_ACTION_TYPE.CHANGE:
      return {
        ...state,
        phone: action.phone || '',
        saveSuccess: false,
      };
    default:
      return state;
  }
}
function getPhoneAction() {
  return async (dispatch: Dispatch<PhoneActionType>) => {
    dispatch({
      type: PHONE_ACTION_TYPE.GET_PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: '/footer/get',
      });

      dispatch({
        type: PHONE_ACTION_TYPE.GET_SUCCESS,
        phone: response.data[0]?.phone,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PHONE_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
function savePhoneAction(phone: string) {
  return async (dispatch: Dispatch<PhoneActionType>) => {
    dispatch({
      type: PHONE_ACTION_TYPE.SAVE_PENDING,
    });
    try {
      await httpRequest({
        method: 'POST',
        url: '/footer/save',
        data: { phone: phone },
      });

      dispatch({
        type: PHONE_ACTION_TYPE.SAVE_SUCCESS,
        phone: phone,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PHONE_ACTION_TYPE.SAVE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function BlockPhone() {
  const isAdmin = useSelector(
    (state: any) => state[AUTH_STORE_NAME].user?.role === USER_ROLE.ADMIN,
  );
  const [state, setState] = useReducer(PhoneReducer, initialState);
  useEffect(() => {
    getPhoneAction()(setState);
  }, []);
  const [isEdit, setEdit] = useState(false);
  if (isAdmin) {
    function onChange(e: ChangeEvent<HTMLInputElement>) {
      setState({
        type: PHONE_ACTION_TYPE.CHANGE,
        phone: e.currentTarget.value.trim(),
      });
    }
    function toggleEdit() {
      if (isEdit) {
        savePhoneAction(state.phone)(setState);
      }
      setEdit(!isEdit);
    }
    return (
      <Container>
        <SectionLayout type="SMALL">
          <Text tid="FOOTER.PHONE.TITLE" />

          {isEdit ? (
            <Field
              placeholderTid="FOOTER.PHONE.PHONE_NUMBER_PLACEHOLDER"
              value={state.phone}
              onChange={onChange}
              disabled={state.savePending}
            />
          ) : (
            <Link
              tid={state.phone}
              path={`tel:${state.phone}`}
              pathConfig={{ local: false }}
            />
          )}
        </SectionLayout>
        <Button onClick={toggleEdit} disabled={state.savePending}>
          <ChangeIcon />
        </Button>
        {state.saveSuccess && <SuccessAlert tid="FOOTER.PHONE.SUCCESS" />}
        {state.saveError && <ErrorAlert tid={state.saveError} />}
      </Container>
    );
  } else {
    if (!state.phone) return null;
    return (
      <SectionLayout type="SMALL">
        <Text tid="FOOTER.PHONE.TITLE" />
        <Link
          tid={state.phone}
          path={`tel:${state.phone}`}
          pathConfig={{ local: false }}
        />
      </SectionLayout>
    );
  }
}
const Field = styled(BasicField)`
  background-color: ${THEME_COLOR.WHITE};
`;
const Text = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Link = styled(LinkPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  width: fit-content;
`;
const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: flex-end;
  @media screen and (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;
const Button = styled(IconButton)`
  padding: 0;
  background-color: ${THEME_COLOR.WHITE};
`;
