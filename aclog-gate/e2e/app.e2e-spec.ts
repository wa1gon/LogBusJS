import { AclogGatePage } from './app.po';

describe('aclog-gate App', () => {
  let page: AclogGatePage;

  beforeEach(() => {
    page = new AclogGatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
