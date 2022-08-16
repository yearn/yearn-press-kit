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

function	Applications(): ReactElement {
	return (
		<section aria-label={'Applications'}>
			<h2 className={'mb-6 text-3xl font-bold text-neutral-900'}>
				{'Applications'}
			</h2>
			<div className={'grid grid-cols-1 gap-x-20 pb-20'}>
				<Content
					description={'Events (Look and Feel)'}>
					<div className={'my-6 md:h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/applications/YEARN_EVENT_WEB_1.png'}
							width={1200}
							height={680}
							quality={90} />
					</div>
				</Content>

				<Content
					description={'Merch (Look and Feel)'}>
					<div className={'my-6 md:h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/applications/YEARN_MERCH_1_2.png'}
							width={1200}
							height={680}
							quality={90} />
					</div>
				</Content>

				<Content
					description={'Merch (Look and Feel)'}>
					<div className={'my-6 md:h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/applications/YEARN_MERCH_2_2.png'}
							width={1200}
							height={680}
							quality={90} />
					</div>
				</Content>

			</div>
		</section>
	);
}

export default Applications;
