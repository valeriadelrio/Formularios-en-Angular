import { FormulariosEnAngularPage } from './app.po';

describe('formularios-en-angular App', () => {
  let page: FormulariosEnAngularPage;

  beforeEach(() => {
    page = new FormulariosEnAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
