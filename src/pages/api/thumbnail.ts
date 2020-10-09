import { NextApiRequest, NextApiResponse } from 'next'
import { getScreenshot } from './_lib/chromium'
import { getHtml } from './_lib/thumbnailTemplate'

const isDev = !process.env.AWS_REGION
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    const query = req.query
    const json = JSON.parse(String(query.json))

    if (
      !json.title ||
      !json.preacher ||
      !json.time ||
      !json.date ||
      !json.church.name ||
      !json.church.address ||
      !json.images.first ||
      !json.images.second
    ) {
      throw new Error('All fields is required');
    }

    const html = getHtml(json)

    if (isHtmlDebug) {
      res.setHeader('Content-Type', 'text/html')
      res.end(html)

      return
    }

    const file = await getScreenshot(html, isDev)

    res.statusCode = 200

    res.setHeader('Content-Type', `image/png`)
    /*res.setHeader(
      'Cache-Control',
      'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
    )*/

    res.end(file)
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>')
    console.error(e)
  }
}
