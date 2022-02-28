import { SectionLayout } from 'src/lib/element/layout';
import { ButtonSecondary } from 'src/lib/element/button';
import { BlockReactEditor } from 'src/lib/common/block-react-editor';
import { SuccessAlert } from 'src/lib/element/alert';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { FaqLinks } from './faq-links';
import { FaqArticleComponentProps } from './faq-article.type';

export function FaqArticleComponent(props: FaqArticleComponentProps) {
  const {
    isAdmin,
    state: { data, getPending, savePending, saveSuccess, saveError },
    handleSave,
    handleChange,
    disabled,
    titleTid,
  } = props;

  return (
    <SectionLayout>
      {!titleTid && <FaqLinks />}
      <BlockReactEditor
        titleTid={titleTid}
        handleChange={handleChange}
        data={data}
        error={saveError}
        enableIsEdit={isAdmin}
        readOnly={!isAdmin}
        enableReInitialize={!isAdmin}
      />
      {isAdmin && (
        <ButtonSecondary
          tid="OTHER.SAVE"
          disabled={disabled}
          onClick={handleSave}
        />
      )}
      {(getPending || savePending) && <CenteredSpinner />}
      {saveSuccess && <SuccessAlert tid="FAQ_LIST.SUCCESSFULLY_UPDATED" />}
    </SectionLayout>
  );
}
