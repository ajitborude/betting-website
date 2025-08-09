
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }
  render() {
    return (
      <Html data-theme='dark' lang='en' className='debug-screens'>
        < Head >
          {/* 
          <link
            href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          /> 
          */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Days+One&display=swap"
            rel="stylesheet"
          /> */}
        </Head >
        <body>
          <Main />
          <NextScript />
        </body>
      </Html >
    );
  }
}

export default MyDocument;
