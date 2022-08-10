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

function	Typography(): ReactElement {
	return (
		<section aria-label={'Typography'}>
			<h2 className={'mb-6 text-3xl font-bold text-neutral-900'}>
				{'Typography'}
			</h2>
			<div className={'grid grid-cols-1 gap-x-20 gap-y-14 pb-6'}>
				<div className={'flex flex-col'}>
					{'Our professional typeface is Aeonik, it is the same typeface used in the logo but is available in different weights for flexibility of use. We use this  whenever possible though professional and publishing software. Licence for Aeonik can be purchased here cotypefoundry.com'}
				</div>
			</div>
			<div className={'grid grid-cols-1 gap-x-20 pb-6 md:grid-cols-2'}>
				<Content
					description={'Aeonik is our primary typeface and is used in both headlines and body copy. It is purposeful, elegant and timeless in design.'}>
					<div className={'my-6 h-[315px]'}>
						<Image
							objectFit={'contain'}
							src={'/typography/aeonik.svg'}
							width={560}
							height={316}
							quality={90}
							loading={'eager'}
							priority />
					</div>
				</Content>
				<Content
					description={'Aeonik Fono is our supporting typeface and can be used in sign-offs, headlines and numeral use. Do not set long paragraphs or body copy in Fono.'}>
					<div className={'my-6 h-[315px]'}>
						<Image
							objectFit={'contain'}
							src={'/typography/aeonik_fono.svg'}
							width={560}
							height={316}
							quality={90}
							loading={'eager'}
							priority />
					</div>
				</Content>


				<Content
					description={'Aeonik Mono is our supporting typeface and can be used in web applications, in particular, numerals set in Mono work very well. '}>
					<div className={'my-6 h-[315px]'}>
						<Image
							objectFit={'contain'}
							src={'/typography/aeonik_mono.svg'}
							width={560}
							height={316}
							quality={90}
							loading={'eager'}
							priority />
					</div>
				</Content>

			</div>
			<div className={'grid grid-cols-1 gap-x-20 pb-20'}>
				<Content
					description={'Aeonik can be set in a variety of weights and cases to create visual interest in our messaging, all underpinned by a consistent sign-off.'}>
					<div className={'my-6 h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/typography/promo_1.png'}
							width={1200}
							height={680}
							quality={90}
							loading={'eager'}
							priority />
					</div>
				</Content>

				<Content
					description={'Web app using Aeonik Mono for numerals'}>
					<div className={'my-6 h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/typography/ui.png'}
							width={1200}
							height={680}
							quality={90}
							loading={'eager'}
							priority />
					</div>
				</Content>

				<Content
					description={'Single line sub-brands or titles using the Yearn logo and Aeonik Fono'}>
					<div className={'my-6 h-[680px] border bg-black'}>
						<Image
							objectFit={'contain'}
							src={'/typography/promo_2.png'}
							width={1200}
							height={680}
							quality={90}
							loading={'eager'}
							priority />
					</div>
				</Content>

				<Content>
					<div className={'my-6 h-[680px]'}>
						<Image
							objectFit={'contain'}
							src={'/typography/promo_3.png'}
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

export default Typography;
