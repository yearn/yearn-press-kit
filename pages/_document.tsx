import React, {ReactElement} from 'react';
import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document';

const modeScript = `
  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    document.documentElement.classList.remove('dark')
    delete window.localStorage.isDarkMode
  }

  function updateModeWithoutTransitions() {
    updateMode()
  }
`;

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render(): ReactElement {
		return (
			<Html lang={'en'}>
				<Head>
					<script dangerouslySetInnerHTML={{__html: modeScript}} />
					<link rel={'preconnect'} href={'https://brand.yearn.finance'} crossOrigin={'true'} />
					<link href={'https://brand.yearn.finance/fonts/fonts.css'} rel={'stylesheet'} />
				</Head>
				<body className={'bg-neutral-0 transition-colors duration-150'} data-theme={'light'}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;