import styled from 'styled-components';

import { FieldPrimary, FieldSelect } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { FieldLayout, IndentLayout } from '../../../../lib/element/layout';
import { THEME_SIZE } from '../../../../lib/theme';

export function SettingsFormChangeDeliveryInfoComponent(props) {
  const { deliveryTypeOptions } = props;

  return (
    <form>
      <IndentLayout type="small">
        <Title tid="SETTINGS.CHANGE_DELIVERY_INFO.TITLE" />
        <FieldLayout>
          <FieldPrimary
            titleTid="SETTINGS.CHANGE_DELIVERY_INFO.FULL_NAME.TITLE"
            placeholderTid="SETTINGS.CHANGE_DELIVERY_INFO.FULL_NAME.PLACEHOLDER"
          />
          <FieldPrimary
            titleTid="SETTINGS.CHANGE_DELIVERY_INFO.PHONE_NUMBER.TITLE"
            placeholderTid="SETTINGS.CHANGE_DELIVERY_INFO.PHONE_NUMBER.PLACEHOLDER"
          />
          <FieldPrimary
            titleTid="SETTINGS.CHANGE_DELIVERY_INFO.ADDRESS.TITLE"
            placeholderTid="SETTINGS.CHANGE_DELIVERY_INFO.ADDRESS.PLACEHOLDER"
          />
          <FieldSelect
            titleTid="SETTINGS.CHANGE_DELIVERY_INFO.DELIVERY_TYPE.TITLE"
            options={deliveryTypeOptions}
          />
        </FieldLayout>
        <Submit tid="SETTINGS.CHANGE_DELIVERY_INFO.SUBMIT" />
      </IndentLayout>
    </form>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const Submit = styled(ButtonSecondary)`
  width: 50%;
`;
