import styled from 'styled-components';

import { FieldSelect } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { IndentLayout } from '../../../../lib/element/layout';

export function SettingsFormChangePaymentMethodComponent(props) {
  const { options } = props;

  const logger = (e) => console.log(e.target.value);

  return (
    <IndentLayout type="small">
      <TitlePrimary tid="SETTINGS.CHANGE_PAYMENT_METHOD.TITLE" />
      <FieldSelect options={options} onChange={logger} />
      <Submit tid="SETTINGS.CHANGE_PAYMENT_METHOD.SUBMIT" />
    </IndentLayout>
  );
}

const Submit = styled(ButtonSecondary)`
  width: 50%;
`;
