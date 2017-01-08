import { FinanceAngularPage } from './app.po';

describe('finance-angular App', function() {
  let page: FinanceAngularPage;

  beforeEach(() => {
    page = new FinanceAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('vers works!');
  });
});
