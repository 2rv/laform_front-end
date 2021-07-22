import { ARTICLE_DATA_NAME, ARTICLE_DATA_KEY } from './home-articles.type';

export const performHomeArticlesLoadData = (data) => {
  data.map((article) => ({
    [ARTICLE_DATA_KEY.ID]: article[ARTICLE_DATA_NAME.ID],
    [ARTICLE_DATA_KEY.DATE]: article[ARTICLE_DATA_NAME.DATE],
    [ARTICLE_DATA_KEY.IMAGE]: article[ARTICLE_DATA_NAME.IMAGE],
    [ARTICLE_DATA_KEY.TITLE]: article[ARTICLE_DATA_NAME.TITLE],
    [ARTICLE_DATA_KEY.LIKED]: article[ARTICLE_DATA_NAME.LIKED],
  }));
};
