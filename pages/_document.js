import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Fonts Google */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Merriweather:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
