import { browser, element, by } from 'protractor';

export class FinanceAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vers-root h1')).getText();
  }
}
