import	React, {ReactElement}				from	'react';
import	{AppProps}							from	'next/app';
import	{AnimatePresence, motion}			from	'framer-motion';
import	{WithYearn}							from	'@yearn-finance/web-lib/contexts';
import	Meta								from	'components/Meta';
import	Header								from	'components/Header';

import	'../style.css';

const transition = {duration: 0.3, ease: [0.17, 0.67, 0.83, 0.67]};
const variants = {
	initial: {y: 20, opacity: 0},
	enter: {y: 0, opacity: 1, transition},
	exit: {y: -20, opacity: 0, transition}
};

function	MyApp(props: AppProps): ReactElement {
	const	{Component, router, pageProps} = props;
	
	function handleExitComplete(): void {
		if (typeof window !== 'undefined') {
			document.getElementById('app')?.scrollIntoView({behavior: 'smooth'});
			// window.scrollTo({top: 800, behavior: 'smooth'});
		}
	}

	return (
		<WithYearn
			options={{
				ui: {
					shouldUseThemes: false
				},
				web3: {
					shouldUseWallets: false,
					shouldUseStrictChainMode: false,
					defaultChainID: 1,
					supportedChainID: [1, 1337, 31337]
				}
			}}>
			<React.Fragment>
				<Meta />
				<Header />
				<div id={'app'} className={'mx-auto mt-14 mb-0 max-w-6xl'}>
					<AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
						<motion.div
							key={router.asPath}
							initial={'initial'}
							animate={'enter'}
							exit={'exit'}
							className={'h-full min-h-[110vh]'}
							variants={variants}>
							<Component
								key={router.route}
								router={router}
								{...pageProps} />
						</motion.div>
					</AnimatePresence>
				</div>
			</React.Fragment>
		</WithYearn>
	);
}

export default MyApp;
