import styled from 'styled-components';

import { ReactComponent as QuestionMark } from 'src/asset/svg/question-mark.svg';

import { TextSecondary } from 'src/lib/element/text';
import { FieldSelect } from 'src/lib/element/field';
import { ButtonSecondary } from 'src/lib/element/button';

import { spacing, THEME_COLOR } from 'src/lib/theme';

export function EditProductComponent() {
  return (
    <>
      <FieldContainer>
        <span>
          <TextSecondary tid="BASKET.TABLE.PARAMETERS.SIZE" />
          <QuestionMarkIcon />
        </span>
        <FieldSelect
          options={[{ id: 1, tid: '15/170 250' }]}
          name="size"
        />
      </FieldContainer>
      <FieldContainer>
        <TextSecondary tid="BASKET.TABLE.PARAMETERS.COLORS.TITLE" />
        <FieldSelect
          options={[{ id: 1, tid: 'BASKET.TABLE.PARAMETERS.COLORS.RED' }]}
          name="color"
        />
      </FieldContainer>
      <ApplyChangesButton tid="BASKET.TABLE.PARAMETERS.APPLY_CHANGES" />
    </>
  );
}

const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  margin-bottom: ${spacing(3)};
`;

const ApplyChangesButton = styled(ButtonSecondary)`
  width: 100%;
`;

const QuestionMarkIcon = styled(QuestionMark)`
  margin-left: ${spacing(1)};
  vertical-align: middle;
`;
