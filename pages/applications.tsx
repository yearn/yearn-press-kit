import	React, {ReactElement}	from	'react';
import	Image					from	'next/image';
import	ContentCard				from	'components/ContentCard';

function	Applications(): ReactElement {
	return (
		<section aria-label={'Applications'}>
			<h2 className={'mb-6 text-3xl font-bold text-neutral-900'}>
				{'Applications'}
			</h2>
			<div className={'grid grid-cols-1 gap-x-20 pb-20'}>
				<ContentCard
					description={'Events (Look and Feel)'}>
					<div className={'my-6 md:h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/applications/YEARN_EVENT_WEB_1.png'}
							width={1200}
							height={680}
							quality={90} />
					</div>
				</ContentCard>

				<ContentCard
					description={'Merch (Look and Feel)'}>
					<div className={'my-6 md:h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/applications/YEARN_MERCH_1_2.png'}
							width={1200}
							height={680}
							quality={90} />
					</div>
				</ContentCard>

				<ContentCard
					description={'Merch (Look and Feel)'}>
					<div className={'my-6 md:h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/applications/YEARN_MERCH_2_2.png'}
							width={1200}
							height={680}
							quality={90} />
					</div>
				</ContentCard>

			</div>
		</section>
	);
}

export default Applications;
