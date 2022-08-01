import	React, {ReactElement}				from	'react';
import	Link								from	'next/link';
import	Image								from	'next/image';
import	{useRouter}							from	'next/router';
import	{motion, useInView}					from	'framer-motion';
import	LogoYearn							from	'components/icons/LogoYearn';

const variants = {
	enter: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	},
	initial: {
		x: -600,
		opacity: 0,
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	}
};

function	Header(): ReactElement {
	const	router = useRouter();
	const	ref = React.useRef(null);
	const	isInView = useInView(ref);

	return (
		<>
			<header className={'h-[728px] w-full bg-neutral-100'}>
				<div className={'flex h-full w-full flex-col items-center px-4 pt-8 pb-0'}>
					<Link href={'/'} scroll={false}>
						<div className={'cursor-pointer'}>
							<LogoYearn />
						</div>
					</Link>
					<div ref={ref} className={'mt-[105px]'}>
						<h1 className={'mb-4 text-center text-7xl font-bold text-neutral-900'}>
							{'Yearn Press Kit'}
						</h1>
						<div className={'text-center text-lg text-neutral-500'}>
							<p>{'A centralized asset bank for a decentralized brand.'}</p>
							<p>{'Take the blue pill and enter the world of yearn.'}</p>
						</div>
					</div>
					<div className={'flex w-full items-center justify-center'}>
						<Image
							objectFit={'contain'}
							src={'/blue-pill.jpg'}
							width={536}
							height={348}
							quality={90}
							loading={'eager'}
							priority />
					</div>
				</div>
			</header>
			<div className={'sticky top-0 z-50 mt-auto bg-neutral-100 pt-6'}>
				<nav className={'mx-auto flex w-full max-w-6xl flex-row items-center justify-between'}>
					<div>
						<Link href={'/'} scroll={false}>
							<motion.div
								initial={'initial'}
								animate={isInView ? 'initial' : 'enter'}
								className={'cursor-pointer pb-3.5'}
								variants={variants}>
								<LogoYearn />
							</motion.div>
						</Link>
					</div>
					<div className={'flex flex-row items-center justify-center'}>
						<Link href={'/'} scroll={false}>
							<div className={'header-nav-item'} aria-selected={router.pathname === '/'}>
								<p>{'Logo & Symbols'}</p>
								<div />
							</div>
						</Link>
						<Link href={'/colors'} scroll={false}>
							<div className={'header-nav-item'} aria-selected={router.pathname === '/colors'}>
								<p>{'Colors'}</p>
								<div />
							</div>
						</Link>
						<Link href={'/typography'} scroll={false}>
							<div className={'header-nav-item'} aria-selected={router.pathname === '/typography'}>
								<p>{'Typography'}</p>
								<div />
							</div>
						</Link>
						<Link href={'/strapline-sign-offs'} scroll={false}>
							<div className={'header-nav-item'} aria-selected={router.pathname === '/strapline-sign-offs'}>
								<p>{'Straplines & Sign-offs'}</p>
								<div />
							</div>
						</Link>
						<Link href={'/frames'} scroll={false}>
							<div className={'header-nav-item'} aria-selected={router.pathname === '/frames'}>
								<p>{'Frames'}</p>
								<div />
							</div>
						</Link>
						<Link href={'/templates'} scroll={false}>
							<div className={'header-nav-item'} aria-selected={router.pathname === '/templates'}>
								<p>{'Templates'}</p>
								<div />
							</div>
						</Link>
						<Link href={'/tone-of-voice'} scroll={false}>
							<div className={'header-nav-item'} aria-selected={router.pathname === '/tone-of-voice'}>
								<p>{'Tone of Voice'}</p>
								<div />
							</div>
						</Link>
						<Link href={'/applications'} scroll={false}>
							<div className={'header-nav-item'} aria-selected={router.pathname === '/applications'}>
								<p>{'Applications'}</p>
								<div />
							</div>
						</Link>
					</div>
					<div className={'w-16'} />
				</nav>
			</div>
		</>
	);
}


export default Header;