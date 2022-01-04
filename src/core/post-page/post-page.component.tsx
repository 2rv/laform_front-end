import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR } from 'src/lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { CardListBlock } from 'src/lib/element/card-list';
import { TitlePrimary } from 'src/lib/element/title';
import { BlockReactEditor } from 'src/lib/common/block-react-editor';
import { ConvertTime } from 'src/lib/common/time';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { BlockComment } from 'src/lib/common/block-comment';
import { PostPageComponentProps } from './post-page.type';

export function PostPageComponent(props: PostPageComponentProps) {
  const {
    state: { pending, post },
  } = props;

  if (!post)
    return (
      <SectionLayout>
        <CenteredSpinner />
      </SectionLayout>
    );

  const { id, type, name, postArticle, createdDate, recommendations } = post;

  return (
    <SectionLayout>
      {pending && <CenteredSpinner />}
      <HeaderCase>
        <Title tid={name} />
        <TextLight tid={ConvertTime(createdDate)} />
      </HeaderCase>
      <BlockReactEditor data={postArticle} enableReInitialize readOnly />
      <CardListBlock
        isLoading={pending}
        title="ARTICLE_CREATE_FORM.RECOMENDATIONS.TITLE"
        items={recommendations}
      />
      <BlockComment type={type} id={id} />
    </SectionLayout>
  );
}

const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5;
`;
const TextLight = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
