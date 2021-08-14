import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { SliderEditPreviewComponent, SliderEditFormContainer } from './frames';

export function SliderEditComponent(props) {
  const { slideFieldsData, previewSlideData } = props;
  return (
    <SectionLayout type="SMALL">
      <TitlePrimary tid="Редактирование слайдера" />
      <SectionLayout type="MEDIUM">
        <SliderEditPreviewComponent {...previewSlideData} />
        <SliderEditFormContainer slideFieldsData={slideFieldsData} />
      </SectionLayout>
    </SectionLayout>
  );
}
