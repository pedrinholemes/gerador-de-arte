import puppeteer, { Page } from 'puppeteer-core'
import { getOptions } from './chromeOptions'

let _page: Page | null

async function getPage(isDev: boolean): Promise<Page> {
  if (_page) {
    return _page
  }

  const options = await getOptions(isDev)
  const browser = await puppeteer.launch(options)

  _page = await browser.newPage()

  return _page
}

export async function getScreenshot(
  html: string,
  isDev: boolean
): Promise<Buffer> {
  const page = await getPage(isDev)

  await page.setViewport({ width: 1080, height: 1080 })
  await page.setContent(html)

  let file = await page.screenshot({ type: 'png' })

  return file
}
