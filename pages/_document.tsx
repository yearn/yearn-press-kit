import React, {ReactElement} from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

type TInitialProps = {
    html: string;
    head?: (JSX.Element | null)[] | undefined;
    styles?: React.ReactElement[] | React.ReactFragment | undefined;
}

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<TInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps} as any; // eslint-disable-line
	}

	render(): ReactElement {
		return (
			<Html lang={'en'}>
				<Head />
				<body className={'bg-neutral-0 transition-colors duration-150'} data-theme={'light'}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;