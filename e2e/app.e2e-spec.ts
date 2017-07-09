import { ProductivFrontEndPage } from './app.po';

describe('productiv-front-end App', () => {
  let page: ProductivFrontEndPage;

  beforeEach(() => {
    page = new ProductivFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
