import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../lib/theme';
import { ContentLayout, IndentLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { LinkPrimary } from '../../lib/element/link';
import { ButtonPrimary } from '../../lib/element/button';
import { TitlePrimary } from '../../lib/element/title';
import { SliderEditPreviewComponent, SliderEditFormContainer } from './frames';

export function SliderEditComponent(props) {
  const { slideFieldsData, previewSlideData } = props;
  return (
    <Container>
      <PaddingLayout>
        <IndentLayout type="small">
          <TitlePrimary tid="Редактирование слайдера" />
          <IndentLayout type="medium">
            <SliderEditPreviewComponent {...previewSlideData} />
            <SliderEditFormContainer slideFieldsData={slideFieldsData} />
          </IndentLayout>
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
