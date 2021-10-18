import { CategoriesComponent } from './categories.component';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
} from 'src/main/store/store.service';
import { useEffect } from 'react';
import {
  uploadCategoriesAction,
  createCategoryAction,
  deleteCategotyAction,
} from './categories.action';
import { LANG_STORE_NAME } from 'src/lib/common/lang';
import { useDispatch, useSelector } from 'react-redux';
import { CATEGORIES_STORE_NAME } from './categories.constant';
import { performData } from './categories.convert';
import { CategoriesContainerProps } from './categories.type';

export function CategoriesContainer(props: CategoriesContainerProps) {
  const { values } = props;
  const dispatch = useDispatch();

  const { uploadCategories, createCategory, deleteCategory, currentLang } =
    useSelector((state: any) => ({
      uploadCategories: state[CATEGORIES_STORE_NAME].uploadCategories,
      createCategory: state[CATEGORIES_STORE_NAME].createCategory,
      deleteCategory: state[CATEGORIES_STORE_NAME].deleteCategory,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    }));

  useEffect(() => {
    dispatch(uploadCategoriesAction(currentLang));
  }, []);

  const handleCreateCategory = (value: string) => {
    dispatch(createCategoryAction(value));
  };
  const handleDeleteCategory = (id: string) => {
    dispatch(deleteCategotyAction(id, getRequestData(uploadCategories, [])));
  };

  return (
    <CategoriesComponent
      categories={performData(getRequestData(uploadCategories, []))}
      uploadPending={isRequestPending(uploadCategories)}
      uploadError={isRequestError(uploadCategories)}
      uploadErrorMessage={getRequestErrorMessage(uploadCategories)}
      createCategory={handleCreateCategory}
      createPending={isRequestPending(createCategory)}
      createError={isRequestError(createCategory)}
      createErrorMessage={getRequestErrorMessage(createCategory)}
      deleteCategory={handleDeleteCategory}
      deletePending={isRequestPending(deleteCategory)}
      deleteError={isRequestError(deleteCategory)}
      deleteErrorMessage={getRequestErrorMessage(deleteCategory)}
      values={values}
    />
  );
}
