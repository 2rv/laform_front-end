import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { articlePageUploadData } from './article-page.action';
import { ArticlePageComponent } from './article-page.component';
import { ARTICLE_PAGE_STORE_NAME } from './article-page.constant';

export function ArticlePageContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ARTICLE_PAGE_STORE_NAME].articlePage,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // React.useEffect(() => {
  //   dispatch(articlePageUploadData());
  // }, []);

  return (
    <ArticlePageComponent
      isPending={isRequestPending(state)}
      isError={isRequestError(state)}
      isSuccess={isRequestSuccess(state)}
      errorMessage={getRequestErrorMessage(state)}
      pageLoading={pageLoading}
      data={testArticleData}
      listItems={testArticlesListItems}
      comments={testCommentsItems}
    />
  );
}

export const testArticleData = {
  name: 'Как выбрать размер',
  date: '25.05.2021',
  content: [
    {
      type: 3,
      title: '* Таблица соответствия размеров',
      media: 'Таблица',
    },
    {
      type: 3,
      title: '* Таблица соответствия размеров LaForme Plus',
      media: 'Таблица',
      description:
        '* Если величина Ог попадает в межразмерный интервал, например, Ог=98см (между 48 и 50 размерами), то при выборе размера ориентируйтесь на сравнительные данные От и Об, выбирая размер в большую или меньшую сторону.  Если в вашей фигуре разница между Об и Ог находится в пределах  4 — 12 см, то в группе плечевых изделий удобнее корректировать выкройку,  выбранную по Ог  (как и принято в размерной типологии). Группу поясных изделий рекомендуется выбирать по Об и корректировать по От в зоне талиевых вытачек, в рельефах и боковых швах.',
    },
  ],
  descriptions: [
    `Ростовые группы в сдвоенных ростах: 158-164 включает роста от 155 см до 167 см, 170-176 включает роста от 168 см до 179 см. Разница по длинам в изделиях составляет ок.6-7 см по низу (длинные модели, брюки) и ок.4 см по длине рукава.`,
    `Все выкройки LaForme проектируются на перегибистую фигуру с удлиненным передом и укороченной спинкой. Разница Дтп и Дтс в конструкции от 6 см. Если ваша фигура сутулая, то необходимо вносить изменения в лекала до кроя для корректного баланса изделия.`,
    `Некоторые из вас привыкли считать свой размер по европейской системе. В российской же размер это всего лишь Ог/2. Есть ещё полнотные группы, о них читайте ниже.`,
    `Почему не стоит основываться на европейской системе? Потому что у всех марок/брендов разные параметры. Пример, на днях я примеряла пальто Баленсиаги, о котором грежу давно, мне подошёл р.36. По вашим представлениям, 36+6= 42 мой российский. Но мой Ог 90! И взяв выкройку р.42 я бы пролетела (в том числе и в бёдрах)! Потому что мои выкройки четко соответствуют обхватам 2й полнотной группы.`,
    `Что такое полнотные группы — ПГ? Это разница Обхвата Груди и Обхвата Бёдер.`,
    `Выкройки LaForme не большемерят и не маломерят. Они идут размер в размер. Если выкройка 44го размера, то она соответствует Ог 88, Об 96. Обхват талии величина вариативная, зависит от степени прилегания модели и ,внимание, от роста! (Чем выше рост, тем длиннее торс и внутренние органы и грудная клетка растянуты по телу, следовательно талии у высоких тоньше), но чаще всего так же соответствует размерной сетке, в 44м р-ре около 65-67.`,
    `Прибавки. Большая часть моделей LaForme имеет прилегающий силуэт, следовательно, прибавки минимальны. Также могут немного изменяться от размера к размеру. Мы не указываем прибавки к каждой модели, чтобы вы не рассчитывали на их «запас» выбирая меньший размер — это искажает посадку.`,
    `Балансовые показатели. Да, фигура по Гост изрядно устарела. Сейчас самый актуальный и частый тип фигуры — перегибистая. Так как в моде женские формы: ягодицы и грудь. Как это отражается в конструкции: сокращается длина спины Дтс и увеличивается длина переда Дтп. Наши выкройки именно на такие фигуры.`,
    `Как выбрать размер выкройки?!  Грудь важнее всего! Первоначально нужно разделить ваш Ог пополам, например, Ог 96 см, размер 48. Далее сравниваем, проходят ли ваши бёдра в 96+8 (2я полнота) = 104 см. Чаще всего выкройку по бёдрам можно откорректировать без большого опыта в конструировании. Поэтому этот показатель не основной. Как и обхват талии, также легко меняется за счёт раствора вытачек`,
  ],
};
export const testArticlesListItems = [
  {
    id: 1,
    name: 'Сарафан 0445',
    image: '/static/test/popular-gods-1.png',
    like: true,
    date: '1 неделю назад',
  },

  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    image: '/static/test/popular-gods-2.png',
    like: false,
    date: '1 неделю назад',
  },
  {
    id: 3,
    name: 'Батист',
    image: '/static/test/popular-gods-3.png',

    like: false,
    date: '2 недели назад',
  },
];
export const testCommentsItems = [
  {
    me: false,
    id: 1,
    username: 'Людмила Азонова',
    date: '25.05.2021',
    message: `Подходит для пальтово-костюмной группы тканей.
		  Очень удгобная и хорошая вещь, спасибо! Хотелось бы сказать что вещь правда хороашая и дошла очень быстро, буду заказывать ещё. Из минусов – дороговато, всё таки.`,
  },
  {
    me: false,
    id: 1,
    username: 'Людмила Азонова',
    date: '25.05.2021',
    message: `Подходит для пальтово-костюмной группы тканей. Очень удгобная и хорошая вещь, спасибо!`,
  },
  {
    me: true,
    id: 1,
    username: 'Людмила Азонова',
    date: '25.05.2021',
    message: `Подходит для пальтово-костюмной группы тканей. Очень удгобная и хорошая вещь, спасибо!`,
  },
];
