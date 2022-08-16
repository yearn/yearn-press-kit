import	React, {ReactElement}	from	'react';
import	Image					from	'next/image';
import	ContentCard				from	'components/ContentCard';

function	Frames(): ReactElement {
	return (
		<section aria-label={'Frames'}>
			<h2 className={'mb-6 text-3xl font-bold text-neutral-900'}>
				{'Frames'}
			</h2>
			<div className={'grid grid-cols-1 gap-x-20 pb-20'}>
				<ContentCard
					description={'Flexible frames can help deliver a broad spectrum of creative output.\nFrom full bleed images to crops, and oval to lozenge can support all aesthetic art forms.'}>
					<div className={'my-6 md:h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/frames/frames.png'}
							width={1200}
							height={680}
							quality={90} />
					</div>
				</ContentCard>
			</div>
		</section>
	);
}

export default Frames;
