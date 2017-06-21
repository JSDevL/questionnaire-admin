import { QuestionnaireAdminPage } from './app.po';

describe('questionnaire-admin App', () => {
  let page: QuestionnaireAdminPage;

  beforeEach(() => {
    page = new QuestionnaireAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
