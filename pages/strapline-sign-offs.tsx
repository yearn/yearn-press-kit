import	React, {ReactElement}	from	'react';
import	Image					from	'next/image';
import	ContentCard				from	'components/ContentCard';

function	StraplineSignOffs(): ReactElement {
	return (
		<section aria-label={'Strapline and Sign-offs'}>
			<h2 className={'mb-6 text-3xl font-bold text-neutral-900'}>
				{'Strapline and Sign-offs'}
			</h2>
			<div className={'grid grid-cols-1 gap-x-20 pb-20'}>
				<ContentCard
					description={'This is our strapline, we use it for the majority of messaging.'}>
					<div className={'my-6 md:h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/straplines-and-signoffs/straline.png'}
							width={1200}
							height={680}
							quality={90} />
					</div>
				</ContentCard>

				<ContentCard
					description={'A flexible sign-off can house bespoke messaging when needing to talk about specific product points or target different audiences.'}>
					<div className={'my-6 md:h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/straplines-and-signoffs/sign_off.png'}
							width={1200}
							height={680}
							quality={90} />
					</div>
				</ContentCard>
			</div>
		</section>
	);
}

export default StraplineSignOffs;
