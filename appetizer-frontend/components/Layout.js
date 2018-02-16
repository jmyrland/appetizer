import Head from 'next/head'
import Link from 'next/link'

export default props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="noindex" />
      <title>Appetizer</title>

      <meta name="apple-mobile-web-app-title" content="Appetizer" />
      <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/static/icons/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/static/icons/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/icons/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/icons/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/static/icons/apple-touch-icon-60x60.png" />
      <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/static/icons/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/static/icons/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/static/icons/apple-touch-icon-152x152.png" />
      <link rel="icon" type="image/png" href="/static/icons/favicon-196x196.png" sizes="196x196" />
      <link rel="icon" type="image/png" href="/static/icons/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="/static/icons/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/static/icons/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/static/icons/favicon-128.png" sizes="128x128" />
      <meta name="application-name" content="Appetizer"/>
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="/static/icons/mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="/static/icons/mstile-70x70.png" />
      <meta name="msapplication-square150x150logo" content="/static/icons/mstile-150x150.png" />
      <meta name="msapplication-wide310x150logo" content="/static/icons/mstile-310x150.png" />
      <meta name="msapplication-square310x310logo" content="/static/icons/mstile-310x310.png" />

      <link rel='stylesheet' href='/static/css/bundle.css' />
    </Head>
    <main id="main">
      {props.children}
    </main>
  </div>
)