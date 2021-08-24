import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { SliderEditPreviewComponent, SliderEditFormComponent } from './frames';

export function SliderEditComponent(props) {
  const {
    sliderData,
    pickImage,
    removeSlide,
    sliderImage,
    titleTextColorOptions,
    buttonColorOptions,
    buttonTextColorOptions,

    formikObject,

    isPending,
    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  return (
    <SectionLayout type="SMALL">
      <TitlePrimary tid="Редактирование слайдера" />
      <SectionLayout>
        <SliderEditPreviewComponent
          sliderData={sliderData}
          pickImage={pickImage}
          sliderImage={sliderImage}
          values={formikObject.values}
          titleTextColorOptions={titleTextColorOptions}
          buttonColorOptions={buttonColorOptions}
          buttonTextColorOptions={buttonTextColorOptions}
        />
        <SliderEditFormComponent
          titleTextColorOptions={titleTextColorOptions}
          buttonColorOptions={buttonColorOptions}
          buttonTextColorOptions={buttonTextColorOptions}
          removeSlide={removeSlide}
          isPending={isPending}
          formikObject={formikObject}
          dataPending={dataPending}
          formPending={formPending}
          formSuccess={formSuccess}
          formError={formError}
          errorMessage={errorMessage}
        />
      </SectionLayout>
    </SectionLayout>
  );
}
