import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout, FieldLayout } from '../../lib/element/layout';
import { InfoAlert } from '../../lib/element/alert';
import { ButtonSecondary } from '../../lib/element/button';
import { useState } from 'react';
import {
  useSaveCallback,
  useLoadData,
  options,
  useSetData,
  useClearDataCallback,
  Editor,
} from './editor';

export function BlockEditor(props) {
  const [showManual, setShowManual] = useState(false);

  const { formikOnChange, notification } = props;
  const [editor, setEditor] = useState(null);
  const onEditorSave = useSaveCallback(editor);
  const { data, loading } = useLoadData(formikOnChange);

  useSetData(editor, data);
  const clearData = useClearDataCallback(editor);
  const disabled = editor === null || loading;

  return (
    <SectionLayout>
      <SectionLayout type="SMALL">
        <FieldLayout type="double" adaptive>
          <InfoAlert tid="Перед созданием контента публикации ознакомтесь с инструкцией" />
          <Button
            type="button"
            onClick={() => setShowManual(!showManual)}
            tid={showManual ? 'Скрыть' : 'Показать'}
          />
        </FieldLayout>
        {showManual ? (
          <ManualContainer>
            <SectionLayout type="SMALL">
              <div>
                Чтобы добавить новый блок установите курсор на свободное место
                на полотне редактора и нажмите кнопку{' '}
                <ManualEditorButton>Добавить</ManualEditorButton> или{' '}
                <ManualButton>Tab</ManualButton>. Нажимайте{' '}
                <ManualButton>Tab</ManualButton> или используйте{' '}
                <ManualButton>&#129046;</ManualButton> и{' '}
                <ManualButton>&#129044;</ManualButton> чтобы переключаться между
                доступными блоками. Нажмите <ManualButton>Enter</ManualButton>{' '}
                чтобы выбрать нужный блок.
              </div>{' '}
              <div>
                После выбора блока вы можете редактировать его. Установите
                курсор на нужном блоке и нажмите{' '}
                <ManualButton>Tab</ManualButton> или кнопку{' '}
                <ManualEditorButton>четыре точки</ManualEditorButton> чтобы
                открыть инструменты редактирования. Наведите на инструмент чтобы
                ознакомться с ним
                <br /> Выделите текст чтобы открыть меню редактирования текста.
              </div>
            </SectionLayout>
          </ManualContainer>
        ) : null}
      </SectionLayout>
      <SectionLayout type="SMALL">
        <Title tid="Контент" />
        <Editor
          notification={notification}
          reInit
          formikOnChange={formikOnChange}
          editorRef={setEditor}
          options={options}
          data={data}
          read={false}
          onEditorSave={onEditorSave}
        />
      </SectionLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const Button = styled(ButtonSecondary)`
  min-height: 100%;
`;

const ManualContainer = styled.div`
  line-height: 1.8;
`;

const ManualButton = styled.span`
  background: none;
  border: 2px solid #e8e6e5;
  border-radius: 2px;
  padding: 1px 3px;
`;

const ManualEditorButton = styled.span`
  color: ${THEME_COLOR.TEXT.BLUE};
`;
