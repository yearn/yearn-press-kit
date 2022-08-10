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
	srcScreen = '',
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
			</div>
		</motion.div>
	);
}

function	Templates(): ReactElement {
	return (
		<section aria-label={'Templates'}>
			<h2 className={'mb-6 text-3xl font-bold text-neutral-900'}>
				{'Templates'}
			</h2>
			<h3 className={'font-bold'}>
				{'Twitter'}
			</h3>
			<div className={'grid grid-cols-1 gap-x-20 pb-20'}>
				<Content>
					<div className={'my-6 h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/templates/twitter.png'}
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

export default Templates;
