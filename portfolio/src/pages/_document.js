import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="description" content="Portfolio d'un ingénieur en Intelligence Artificielle et développeur de bots d'automatisation" />
        <meta name="theme-color" content="#0B132B" />
      </Head>
      <body className="bg-deep-black text-white font-inter">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
