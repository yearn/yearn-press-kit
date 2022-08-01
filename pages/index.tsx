import	React, {ReactElement}	from	'react';
import	{motion}				from	'framer-motion';

const variants = {
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'linear'
		}
	},
	initial: {y: 60, opacity: 0}
};

function	Content({
	title = '',
	description = '',
	srcScreen = '',
	srcPrint = '',
	children = <div />
}): ReactElement {
	return (
		<motion.div
			initial={'initial'}
			whileInView={'enter'}
			className={'flex flex-col'}
			variants={variants}>
			<h3 className={'text-xl font-bold text-neutral-900'}>{title}</h3>
			<p className={'mt-4 whitespace-pre-line text-neutral-500'}>{description}</p>
			{children}
			<div className={'flex flex-row items-center space-x-6'}>
				<a href={srcScreen} download className={'h-10 w-[184px] border border-primary py-2 text-center font-bold text-primary'}>{'Download for Screen'}</a>
				<a href={srcPrint} download className={'h-10 w-[184px] border border-primary py-2 text-center font-bold text-primary'}>{'Download for Print'}</a>
			</div>
		</motion.div>
	);
}

function	Index(): ReactElement {
	return (
		<section aria-label={'Logo and Symbols'}>
			<h2 className={'mb-10 text-3xl font-bold text-neutral-900'}>
				{'Logo'}
			</h2>
			<div className={'grid grid-cols-1 gap-x-20 gap-y-14 pb-20 md:grid-cols-2'}>
				<Content
					title={'Primary Logo'}
					description={'Our default, full-color landscape logo only ever appears\non white background.'}
					srcScreen={'/blue-pill.jpg'}
					srcPrint={'/blue-pill.jpg'}>
					<div className={'my-6 h-[315px] border border-neutral-400 bg-white'}>

					</div>
				</Content>
				<div />


				<Content
					title={'White logo on dark background'}
					description={'In cases where the logo appears on a dark background,\nuse the white logo version.'}
					srcScreen={'/blue-pill.jpg'}
					srcPrint={'/blue-pill.jpg'}>
					<div className={'my-6 h-[315px] border border-black bg-black'}>

					</div>
				</Content>
				<Content
					title={'White logo on dark background'}
					description={'In cases where the logo cannot be printed in full colour\nuse the black logo version.'}
					srcScreen={'/blue-pill.jpg'}
					srcPrint={'/blue-pill.jpg'}>
					<div className={'my-6 h-[315px] border border-neutral-400 bg-white'}>

					</div>
				</Content>


				<Content
					title={'Clearspace'}
					description={'Our logo should always be prominent and legible. The clear space exists to prevent other elements from being placed too close.\nClear space is equal to x1 Yearn symbol.'}
					srcScreen={'/blue-pill.jpg'}
					srcPrint={'/blue-pill.jpg'}>
					<div className={'my-6 h-[315px] border border-neutral-400 bg-white'}>

					</div>
				</Content>
				<Content
					title={'Minimum size'}
					description={'The minimum recommended size of the logo is 85 pixels wide (on screen) or 30mm wide (in print).\n​'}
					srcScreen={'/blue-pill.jpg'}
					srcPrint={'/blue-pill.jpg'}>
					<div className={'my-6 h-[315px] border border-neutral-400 bg-white'}>

					</div>
				</Content>

			</div>
		</section>
	);
}

export default Index;
