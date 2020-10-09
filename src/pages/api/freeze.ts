import { NextApiRequest, NextApiResponse } from 'next'
import { getScreenshot } from './_lib/chromium'

const isDev = !process.env.AWS_REGION
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    const query = req.query
    let currentLang = 'en'
    const lang = String(query.lang)
    if (lang === 'pt') currentLang = 'pt'
    if (lang === 'es') currentLang = 'es'
    if (lang === 'en') currentLang = 'en'

    const langs = {
      en: `
        <div class="title">Hi!<br/>Welcome to</div>
        <div class="name">Art generator for churches</div>
        <div class="desc">Insert the data and the art will appear here in this preview</div>
      `,

      pt: `
        <div class="title">Olá!<br/>Seja bem-vindo ao</div>
        <div class="name">Gerador de artes para igrejas</div>
        <div class="desc">Insira os dados e a arte irá aparecer aqui neste preview</div>
      `,

      es: `
        <div class="title">¡Hola!<br/>Bienvenido a</div>
        <div class="name">Generador de arte para iglesias</div>
        <div class="desc">Inserte los datos y el arte aparecerá aquí en esta vista previa</div>
      `
    }

    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Preview</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <style>
          body {
            position: relative;
            width: 1080px;
            height: 1080px;
    
            background: linear-gradient(
                180deg,
                #000000 0%,
                #0000005F 48.44%,
                #000000 100%
              ),
              url("https://picsum.photos/1080");
          }
          .title {
            position: absolute;
            width: 930px;
            height: 211px;
            left: 72px;
            top: 92px;
    
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 90px;
            line-height: 134%;
            /* or 121px */
            text-align: center;
            text-transform: uppercase;
    
            color: #ffffff;
          }
          .desc {
            position: absolute;
            width: 930px;
            height: 349px;
            left: 79px;
            top: 639px;
    
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 77px;
            line-height: 134%;
            /* or 103px */
            text-align: center;
            text-transform: uppercase;
    
            color: #ffffff;
          }
          .name {
            position: absolute;
            width: 923px;
            height: 310px;
            left: 86px;
            top: 329px;
    
            font-family: 'Poppins';
            font-style: normal;
            font-weight: bold;
            font-size: 95px;
            line-height: 134%;
            /* or 127px */
            text-align: center;
            text-transform: uppercase;
    
            color: #ffffff;
          }
        </style>
      </head>
      <body>
        ${langs[currentLang]}
      </body>
    </html>
    `

    if (isHtmlDebug) {
      res.setHeader('Content-Type', 'text/html')
      res.end(html)

      return
    }

    const file = await getScreenshot(html, isDev)

    res.statusCode = 200

    res.setHeader('Content-Type', `image/png`)
    res.setHeader(
      'Cache-Control',
      'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
    )

    res.end(file)
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>')
    console.error(e)
  }
}
