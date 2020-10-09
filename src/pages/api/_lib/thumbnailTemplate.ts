interface GetHtmlProps {
  church: Church;
  date: string;
  images: Images;
  preacher: string;
  time: string;
  title: string;
}

interface Images {
  first: string;
  second: string;
}

interface Church {
  name: string;
  address: string;
}


export function getHtml({
  title,
  preacher,
  time,
  date,
  church,
  images
}: GetHtmlProps) {
  const css = `
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    color: #f0f0f0;
    background: #0f0f0f;
    background-size: 100px 100px;
    height: 100vh;
    width: 100vw;
  }
  
  #wrapper.container {
    position: relative;
    width: 1080px;
    height: 1080px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  footer {
    position: absolute;
    width: 999px;
    height: 121px;
    left: 41px;
    top: 938px;
  
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  #church.details-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 738px;
    height: 71px;
  
    filter: drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.3));
  }
  #church.name {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 29px;
    line-height: 34px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.01em;
    text-transform: uppercase;
  
    color: #ffffff;
  }
  #church.address {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 29px;
    line-height: 34px;
    display: flex;
    align-items: center;
    text-align: center;
  
    color: #ffffff;
  }
  #church.logo {
    width: 120px;
    height: 116.25px;
    object-fit: cover;
    filter: drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.3));
  }
  #church.second-logo {
    width: 157px;
    height: 106px;
    object-fit: cover;
  }
  
  #infos.container {
    /* Infos */
  
    text-align: center;
    position: absolute;
    width: 1080px;
    height: 123px;
    left: 0px;
    top: 726px;
  }
  #infos.preacher {
    /* Palavra: [preletor] */
    width: 1080px;
    height: 56px;

    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 55px;
    line-height: 64px;
    text-align: center;
    text-transform: capitalize;

    color: #FFFFFF;
  }
  #infos.date {
    /* 25/07 */
    width: 425px;
    height: 52px;

    /* Date */
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 41px;
    text-align: right;
    text-transform: capitalize;

    color: #FFFFFF;
  }
  #infos.time {
    /* 19h30 */
    width: 425px;
    height: 46px;

    /* Date */
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 41px;
    text-align: left;
    text-transform: capitalize;

    color: #FFFFFF;
  }
  
  #infos.sub-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  }
  #wrapper.background {
    position: absolute;
    width: 1080px;
    height: 1080px;
    left: 0px;
    top: 0px;
    z-index: -1;
  }
  #wrapper.title {
    /* CULTO TAL */
  
    position: absolute;
    width: 1080px;
    height: 112px;
    left: 0px;
    top: 99px;
  
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 105px;
    line-height: 157px;
    text-align: center;
    text-transform: uppercase;
  
    color: #ffffff;
  }
  `
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
        rel="stylesheet"
      />
      <title>${title}</title>
      <link rel="stylesheet" href="/style.css" />
      <style>${css}</style>
    </head>
    <body>
      <div id="wrapper" class="container">
        <div id="wrapper" class="title" style="top: 25px">${title}</div>
        <div id="infos" class="container">
          <div id="infos" class="preacher">Palavra: ${preacher}</div>
          <div id="infos" class="sub-container">
            <div id="infos" class="date">${date}</div>
            <div id="infos" class="time">${time}</div>
          </div>
        </div>
  
        <footer>
          <img
            id="church"
            class="logo"
            src="${images.first}"
          ></img>
          <div id="church" class="details-container">
            <div id="church" class="name">${church.name}</div>
            <div id="church" class="address">${church.address}</div>
          </div>
          <img
            id="church"
            class="second-logo"
            src="${images.second}"
          ></img>
        </footer>
        <div
          id="wrapper"
          class="background"
          style="
            background: linear-gradient(
                180deg,
                #0e0e0e 0%,
                #0000000f 48.44%,
                #0e0e0e 100%
              ),
              url('https://picsum.photos/1080');
          "
        ></div>
      </div>
    </body>
  </html>
  `
}
