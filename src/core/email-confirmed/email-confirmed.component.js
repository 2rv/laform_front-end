import styled from 'styled-components';
import { THEME_COLOR } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { ButtonPrimary } from '../../lib/element/button';
import { ErrorAlert, SuccessAlert } from '../../lib/element/alert';
import { LoaderPrimary } from '../../lib/element/loader';

export function EmailConfirmedComponent(props) {
  const { isPending, isSuccess, isError, errorMessage, onClick } = props;

  const isSubmitDisabled = () => {
    return isPending || isSuccess;
  };

  return (
    <SectionLayout type="SMALL">
      <Button
        tid="AUTH.EMAIL_CONFIRMED.I_DID_CONFIRMED"
        type="button"
        onClick={onClick}
        disabled={isSubmitDisabled()}
      />
      {isSuccess && <SuccessAlert tid="AUTH.EMAIL_CONFIRMED.SUCCESS" />}
      {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}
      {isPending && <LoaderPrimary />}
    </SectionLayout>
  );
}

const Button = styled(ButtonPrimary)`
  background-color: #306844;
  color: ${THEME_COLOR.WHITE};
`;
