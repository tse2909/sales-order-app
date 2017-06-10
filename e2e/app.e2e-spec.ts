import { InvoiceAppPage } from './app.po';

describe('invoice-app App', () => {
  let page: InvoiceAppPage;

  beforeEach(() => {
    page = new InvoiceAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
