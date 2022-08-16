import	React, {ReactElement}	from	'react';
import	Image					from	'next/image';
import	ContentCard				from	'components/ContentCard';
import	DownloadButtons				from	'components/DownloadButtons';

function	Index(): ReactElement {
	return (
		<section aria-label={'Logo and Symbols'}>
			<h2 className={'mb-10 text-3xl font-bold text-neutral-900'}>
				{'Logo'}
			</h2>
			<div className={'grid grid-cols-1 gap-x-20 gap-y-14 pb-20 md:grid-cols-2'}>
				<ContentCard
					title={'Primary Logo'}
					description={'Our default, full-color landscape logo only ever appears\non white background.'}>
					<div className={'my-6 lg:h-[315px]'}>
						<Image
							objectFit={'contain'}
							src={'/index/logo_primary.svg'}
							width={560}
							height={316}
							quality={90} />
					</div>
					<DownloadButtons					
						srcScreen={'/downloads/YEARN_LOGO_BLUE_RGB.svg'}
						srcPrint={'/downloads/YEARN_LOGO_BLUE_CMYK.eps'}
						srcPng={'/downloads/YEARN_LOGO_BLUE_RGB.png'} />
				</ContentCard>
				<div />


				<ContentCard
					title={'White logo on dark background'}
					description={'In cases where the logo appears on a dark background,\nuse the white logo version.'}>
					<div className={'my-6 lg:h-[315px]'}>
						<Image
							objectFit={'contain'}
							src={'/index/logo_black_background.svg'}
							width={560}
							height={316}
							quality={90} />
					</div>
					<DownloadButtons
						srcScreen={'/downloads/YEARN_LOGO_WHITE_RGB.svg'}
						srcPrint={'downloads/YEARN_LOGO_WHITE_CMYK.eps'}
						srcPng={'/downloads/YEARN_LOGO_WHITE_RGB.png'} />
				</ContentCard>
				<ContentCard
					title={'Black logo on white background'}
					description={'In cases where the logo cannot be printed in full colour\nuse the black logo version.'}>
					<div className={'my-6 lg:h-[315px]'}>
						<Image
							objectFit={'contain'}
							src={'/index/logo_white_background.svg'}
							width={560}
							height={316}
							quality={90} />
					</div>
					<DownloadButtons
						srcScreen={'/downloads/YEARN_LOGO_BLACK_RGB.svg'}
						srcPrint={'/downloads/YEARN_LOGO_BLACK_CMYK.eps'}
						srcPng={'/downloads/YEARN_LOGO_BLACK_RGB.png'} />
				</ContentCard>


				<ContentCard
					title={'Clearspace'}
					description={'Our logo should always be prominent and legible. The clear space exists to prevent other elements from being placed too close.\nClear space is equal to x1 Yearn symbol.'}>
					<div className={'mt-6 md:my-6 lg:h-[315px]'}>
						<Image
							objectFit={'contain'}
							src={'/index/logo_clearspace.svg'}
							width={560}
							height={316}
							quality={90} />
					</div>
				</ContentCard>
				<ContentCard
					title={'Minimum size'}
					description={'The minimum recommended size of the logo is 85 pixels wide (on screen) or 30mm wide (in print).\n​'}>
					<div className={'mt-6 md:my-6 lg:h-[315px]'}>
						<Image
							objectFit={'contain'}
							src={'/index/logo_minimum_size.svg'}
							width={560}
							height={316}
							quality={90} />
					</div>
				</ContentCard>

			</div>
			<h2 className={'mb-10 text-3xl font-bold text-neutral-900'}>
				{'Symbol'}
			</h2>
			<div className={'grid grid-cols-1 gap-x-20 gap-y-14 pb-20 md:grid-cols-2'}>
				<ContentCard
					title={'Primary Symbol'}
					description={'Our default, full-color symbol only ever appears\non white background.'}>
					<div className={'my-6 lg:h-[315px]'}>
						<Image
							objectFit={'contain'}
							src={'/index/symbol.svg'}
							width={560}
							height={316}
							quality={90} />
					</div>
					<DownloadButtons
						srcScreen={'/downloads/YEARN_SYMBOL_BLUE_RGB.svg'}
						srcPrint={'/downloads/YEARN_SYMBOL_BLUE_CMYK.eps'}
						srcPng={'/downloads/YEARN_SYMBOL_BLUE_RGB.png'} />
				</ContentCard>
				<div />


				<ContentCard
					title={'White symbol on dark background'}
					description={'In cases where the symbol appears on a dark background,\nuse the white symbol version.'}>
					<div className={'my-6 lg:h-[315px]'}>
						<Image
							objectFit={'contain'}
							src={'/index/symbol_black_background.svg'}
							width={560}
							height={316}
							quality={90} />
					</div>
					<DownloadButtons
						srcScreen={'/downloads/YEARN_SYMBOL_WHITE_RGB.svg'}
						srcPrint={'/downloads/YEARN_SYMBOL_WHITE_CMYK.eps'}
						srcPng={'/downloads/YEARN_SYMBOL_WHITE_RGB.png'} />
				</ContentCard>
				<ContentCard
					title={'Black symbol on white background'}
					description={'In cases where the symbol cannot be printed in full colour\nuse the black symbol version.'}>
					<div className={'my-6 bg-white lg:h-[315px]'}>
						<Image
							objectFit={'contain'}
							src={'/index/symbol_white_background.svg'}
							width={560}
							height={316}
							quality={90} />
					</div>
					<DownloadButtons
						srcScreen={'/downloads/YEARN_SYMBOL_BLACK_RGB.svg'}
						srcPrint={'/downloads/YEARN_SYMBOL_BLACK_CMYK.eps'}
						srcPng={'/downloads/YEARN_SYMBOL_BLACK_RGB.png'} />
				</ContentCard>


				<ContentCard
					title={'Clearspace'}
					description={'Our symbol should always be prominent and legible. The clear space exists to prevent other elements from being placed too close.\nClear space is equal to x1 Yearn symbol.'}>
					<div className={'mt-6 md:my-6 lg:h-[315px]'}>
						<Image
							objectFit={'cover'}
							src={'/index/symbol_clearspace.svg'}
							width={560}
							height={316}
							quality={90} />
					</div>
				</ContentCard>
				<ContentCard
					title={'Minimum size'}
					description={'The minimum recommended size of the symbol is 40 pixels wide (on screen) or 15mm wide (in print).\n\n'}>
					<div className={'mt-6 md:my-6 lg:h-[315px]'}>
						<Image
							objectFit={'cover'}
							src={'/index/symbol_minimum_size.svg'}
							width={560}
							height={316}
							quality={90} />
					</div>
				</ContentCard>
	

			</div>
			<h2 className={'mb-10 text-3xl font-bold text-neutral-900'}>
				{'Token symbol'}
			</h2>
			<div className={'grid grid-cols-1 gap-x-20 gap-y-14 pb-20 md:grid-cols-2'}>
				<ContentCard
					title={'Token'}
					description={'Our full-color token symbol can also be used as our social avatar.'}>
					<div className={'my-6 bg-white lg:h-[315px]'}>
						<Image
							objectFit={'cover'}
							src={'/index/token_symbol.svg'}
							width={560}
							height={316}
							quality={90} />
					</div>
					<DownloadButtons
						srcScreen={'/downloads/YEARN_TOKEN_BLUE_RGB.svg'}
						srcPrint={'/downloads/YEARN_TOKEN_BLUE_CMYK.eps'}
						srcPng={'/downloads/YEARN_TOKEN_BLUE_RGB.png'} />
				</ContentCard>
				<ContentCard
					title={''}
					description={''}>
					<div className={'mb-6 md:mt-20 lg:h-[315px]'}>
						<Image
							objectFit={'cover'}
							src={'/index/token_symbol_grid.svg'}
							width={560}
							height={316}
							quality={90} />
					</div>
				</ContentCard>


			</div>

		</section>
	);
}

export default Index;
