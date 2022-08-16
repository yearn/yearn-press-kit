import	React, {ReactElement}	from	'react';
import	Image					from	'next/image';
import	ContentCard				from	'components/ContentCard';

function	ToneOfVoice(): ReactElement {
	return (
		<section aria-label={'Tone of voice'}>
			<h2 className={'mb-6 text-3xl font-bold text-neutral-900'}>
				{'Tone of voice'}
			</h2>
			<div className={'grid grid-cols-1 gap-x-20 pb-20'}>
				<ContentCard
					description={'Learn the language of the future of finance'}>
					<div className={'my-6 md:h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/tone-of-voice/tone_of_voice.png'}
							width={1200}
							height={680}
							quality={90} />
					</div>
					<div className={'flex flex-row items-center space-x-6'}>
						<a href={'TODO: NOT SET'} download className={'h-10 w-full border border-primary py-2 text-center font-bold text-primary hover:bg-light-blue lg:w-[184px] lg:pt-3 lg:text-xs xl:py-2 xl:text-base'}>{'Download PDF'}</a>
					</div>
				</ContentCard>
			</div>
		</section>
	);
}

export default ToneOfVoice;
