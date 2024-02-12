import	React, {ReactElement}	            from	'react';
import	{motion}							from	'framer-motion';

function    DownloadButtons({
	srcScreen = '',
	srcPrint = '',
	srcPng = ''
}): ReactElement {
	return (
		<motion.div
			initial={'initial'}
			whileInView={'enter'}>
			<div className={'flex flex-col items-center space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0'}>
				{srcScreen && <a href={srcScreen} download className={'h-10 w-full border border-primary py-2 text-center font-bold text-primary hover:bg-light-blue lg:w-[184px] lg:pt-3 lg:text-xs xl:py-2 xl:text-base'}>{'Download for Screen'}</a>}
				{srcPrint && <a href={srcPrint} download className={'h-10 w-full border border-primary py-2 text-center font-bold text-primary hover:bg-light-blue lg:w-[184px] lg:pt-3 lg:text-xs xl:py-2 xl:text-base'}>{'Download for Print'}</a>}
				{srcPng && <a href={srcPng} download className={'h-10 w-full border border-primary py-2 text-center font-bold text-primary hover:bg-light-blue lg:w-[184px] lg:pt-3 lg:text-xs xl:py-2 xl:text-base'}>{'Download PNG'}</a>}
			</div>
		</motion.div>
	);
}

export default DownloadButtons;