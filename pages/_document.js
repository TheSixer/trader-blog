import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* 添加 base 标签，确保所有相对路径都从根目录开始 */}
          <base href="/" />
          
          {/* CSS 文件 */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="/assets/css/fontawesome-5.14.0.min.css" />
          <link rel="stylesheet" href="/assets/css/flaticon.min.css" />
          <link rel="stylesheet" href="/assets/css/animate.min.css" />
          <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
          <link rel="stylesheet" href="/assets/css/slick.min.css" />
          <link rel="stylesheet" href="/assets/css/nice-select.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;