import styled from 'styled-components';
import { ButtonPrimary, ButtonSecondary } from 'src/lib/element/button';
import { FieldLayout } from 'src/lib/element/layout';
import { Popup } from 'src/lib/element/popup';
import { TextSecondary } from 'src/lib/element/text';
import { spacing } from 'src/lib/theme';

type DeleteProductProps = {
  isNull?: boolean;
  deleteFn: () => void;
  disabled?: boolean;
};

export function DeleteProduct(props: DeleteProductProps) {
  const { isNull, deleteFn, disabled } = props;

  if (isNull) {
    return (
      <ButtonSecondary
        tid="MASTER_CLASSES.CREATE.FORM.BUTTON.RESET"
        type="reset"
      />
    );
  }

  return (
    <Popup
      mobileRight
      isLeft
      content={(close: (v: false) => void) => (
        <Content>
          <TextSecondary tid="OTHER.ARE_YOU_SURE_TO_DELETE_THIS_PRODUCT" />
          <FieldLayout type="double">
            <ButtonSecondary
              tid="OTHER.YES"
              onClick={() => {
                deleteFn();
                close(false);
              }}
            />
            <ButtonPrimary tid="OTHER.CANCEL" onClick={() => close(false)} />
          </FieldLayout>
        </Content>
      )}
      children={
        <ButtonPrimary tid="OTHER.DELETE_THIS_PRODUCT" disabled={disabled} />
      }
    />
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: ${spacing(2)};
  line-height: 1.5;
`;
