import { AngularTutsPage } from './app.po';

describe('angular-tuts App', function() {
  let page: AngularTutsPage;

  beforeEach(() => {
    page = new AngularTutsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
