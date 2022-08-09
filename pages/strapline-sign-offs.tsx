import	React, {ReactElement}	from	'react';
import	{motion}				from	'framer-motion';
import	Image					from	'next/image';


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
		</motion.div>
	);
}

function	StraplineSignOffs(): ReactElement {
	return (
		<section aria-label={'Strapline and Sign-offs'}>
			<h2 className={'mb-6 text-3xl font-bold text-neutral-900'}>
				{'Strapline and Sign-offs'}
			</h2>
			<div className={'grid grid-cols-1 gap-x-20 pb-20'}>
				<Content
					description={'This is our strapline, we use it for the majority of messaging.'}>
					<div className={'my-6 h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/straplines_and_signoffs/strapline.jpg'}
							width={1200}
							height={680}
							quality={90}
							loading={'eager'}
							priority />
					</div>
				</Content>

				<Content
					description={'A flexible sign-off can house bespoke messaging when needing to talk about specific product points or target different audiences.'}>
					<div className={'my-6 h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/straplines_and_signoffs/sign_off.jpg'}
							width={1200}
							height={680}
							quality={90}
							loading={'eager'}
							priority />
					</div>
				</Content>

			</div>
		</section>
	);
}

export default StraplineSignOffs;
