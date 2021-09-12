import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';

export function MasterClassPageComponent(props) {
  const { name, descriptions, date, content } = props.data;

  return (
    <SectionLayout>
      <HeaderCase>
        <Title tid={name} />
        <TextLight tid={date} />
      </HeaderCase>
    </SectionLayout>
  );
}

const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  line-height: 1.5;
`;
const TextLight = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
