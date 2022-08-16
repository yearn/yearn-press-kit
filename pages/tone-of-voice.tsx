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
				<a href={srcScreen} download className={'h-10 w-full border border-primary py-2 text-center font-bold text-primary lg:w-[184px] lg:pt-3 lg:text-xs xl:py-2 xl:text-base'}>{'Download PDF'}</a>
			</div>
		</motion.div>
	);
}

function	ToneOfVoice(): ReactElement {
	return (
		<section aria-label={'Tone of voice'}>
			<h2 className={'mb-6 text-3xl font-bold text-neutral-900'}>
				{'Tone of voice'}
			</h2>
			<div className={'grid grid-cols-1 gap-x-20 pb-20'}>
				<Content
					description={'Learn the language of the future of finance'}>
					<div className={'my-6 md:h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/tone-of-voice/tone_of_voice.png'}
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

export default ToneOfVoice;
