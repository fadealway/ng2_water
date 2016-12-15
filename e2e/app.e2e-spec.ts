import { Ng2WaterPage } from './app.po';

describe('ng2-water App', function() {
  let page: Ng2WaterPage;

  beforeEach(() => {
    page = new Ng2WaterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
