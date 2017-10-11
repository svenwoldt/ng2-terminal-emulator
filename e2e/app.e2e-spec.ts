import { TerminalPage } from './app.po';

describe('terminal App', function() {
  let page: TerminalPage;

  beforeEach(() => {
    page = new TerminalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
