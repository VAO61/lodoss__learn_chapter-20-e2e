import puppeteer from 'puppeteer';

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true
  };
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {};
};

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch(isDebugging());
  page = await browser.newPage();

  await page.goto('http://localhost:3000/search');
  await page.setViewport({ width: 1000, height: 500 });
  await page.screenshot({ path: 'src/assets/img/tests/seach-page.jpg' });
});

describe('e2e test', () => {
  test('testing search component', async () => {
    await page.waitForSelector('section.search'), 1000;
    // await page.click('[id="react-select-2-input"]');
    // await page.type('[id="react-select-2-input"]', 'repositories');
    // await page.click('[id="react-select-3-input"]'), 3000;
    // await page.type('[id="react-select-3-input"]', 'Javascript'), 3000;
    // await page.click('[id="select-lang"]'), 3000;
    // await page.type('[id="select-lang"]', 'Javascript'), 3000;
    await page.click('[id="search-input"]', 1000);
    await page.type('[id="search-input"]', 'aaa', 1000);
    await page.click('[id="search-submit"]', 1000);
    await page.waitForSelector(
      'main.app__main > section.result-list > div.result > div.result__main > p.result__title'
    );

    const repoLang = await page.$eval(
      'section.result-list > div.result-list__result > div.result-details > p.result-details__language',
      e => e.innerHTML
    );
    expect(repoLang).toBe('JavaScript');
  }, 16000);

  test('testing SET_THEME', async () => {
    await page.waitForSelector('section.result-list-control');
    await page.click('[alt="icon tile"]', 3000);
    await page.waitForSelector(
      'main.app__main > section.result-list > div.result-tile'
    );

    await page.screenshot({
      path: 'src/assets/img/tests/seach-page-search-list.jpg'
    });
  });
});

afterAll(() => {
  if (isDebugging()) {
    browser.close();
  }
});
