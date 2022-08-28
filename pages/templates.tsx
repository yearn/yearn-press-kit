import	React, {ReactElement}	from	'react';
import	Image					from	'next/image';
import	ContentCard				from	'components/ContentCard';

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
				<ContentCard>
					<div className={'my-6 md:h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/templates/twitter_pics.png'}
							width={1200}
							height={680}
							quality={90} />
					</div>
					<div className={'flex flex-row items-center space-x-6'}>
						<a
							href={'https://www.figma.com/community/file/1138409921045069837'}
							target={'_blank'}
							rel={'noreferrer'}
							className={'h-10 w-full border border-primary py-2 text-center font-bold text-primary hover:bg-light-blue lg:w-[184px] lg:pt-3 lg:text-xs xl:py-2 xl:text-base'}>
							{'Explore Figma files'}
						</a>
					</div>
				</ContentCard>

			</div>
		</section>
	);
}

export default Templates;
