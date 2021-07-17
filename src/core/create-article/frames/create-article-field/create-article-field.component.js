import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { CreateArticleFieldItemComponent } from './create-article-field-item.component';

export function CreateArticleFieldComponent({
  handleChange,
  handleBlur,
  errors,
  values,
  handleSubmit,
  fieldsData,
}) {
  return (
    <IndentLayout>
      <IndentLayout type="small">
        <Title tid="Описание" />
        <FieldContainer>
          {fieldsData.description.map(
            ({ type, title, fullWidth, name, options }, index) => {
              return (
                <CreateArticleFieldItemComponent
                  key={name || index}
                  type={type}
                  title={title}
                  options={options}
                  fullWidth={fullWidth}
                  name={name}
                  value={values[name]}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                />
              );
            },
          )}
        </FieldContainer>
      </IndentLayout>
      <IndentLayout type="small">
        <Title tid="Цена" />
        <FieldContainer>
          {fieldsData.price.map(
            ({ type, title, name, fullWidth, options }, index) => {
              return (
                <CreateArticleFieldItemComponent
                  key={name || index}
                  type={type}
                  title={title}
                  options={options}
                  fullWidth={fullWidth}
                  name={name}
                  value={values[name]}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                />
              );
            },
          )}
        </FieldContainer>
      </IndentLayout>
      <IndentLayout type="small">
        <Title tid="Контент" />
        <FieldContainer>
          {fieldsData.content.map(
            ({ type, title, fullWidth, name, options }, index) => {
              return (
                <CreateArticleFieldItemComponent
                  key={name || index}
                  type={type}
                  title={title}
                  options={options}
                  name={name}
                  fullWidth={fullWidth}
                  value={values[name]}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                />
              );
            },
          )}
        </FieldContainer>
      </IndentLayout>
      <FieldContainer>
        <Button tid="Создать" type="submit" />
        <Button altType={true} tid="Отменить создание" />
      </FieldContainer>
    </IndentLayout>
  );
}
const Button = styled(ButtonSecondary)`
  ${({ altType }) =>
    altType &&
    `background-color: ${THEME_COLOR.BACKGROUND.GRAY}
	color: ${THEME_COLOR.SECONDARY_DARK}
	`}
`;
const FieldContainer = styled.div`
  display: grid;
  gap: ${spacing(3)};
  grid-template-columns: repeat(2, 1fr);
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
