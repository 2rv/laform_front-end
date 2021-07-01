import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../lib/theme';
import { ContentLayout, IndentLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';
import { LinkPrimary } from '../../lib/element/link';
import { ButtonPrimary } from '../../lib/element/button';
import { SliderEditPreviewComponent, SliderEditFormContainer } from './frames';
import { TEST_SLIDE_INFO } from './slider-edit.constant';

export function SliderEditComponent() {
  return (
    <Container>
      <PaddingLayout>
        <IndentLayout type="small">
          <SliderEditPreviewComponent {...TEST_SLIDE_INFO} />
          {/* <SliderEditFormContainer/> */}
        </IndentLayout>
      </PaddingLayout>
    </Container>
  );
}
const PaddingLayout = styled(ContentLayout)`
  padding: 0 ${spacing(6)};
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
