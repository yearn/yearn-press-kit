import	React, {ReactElement, ReactNode}	from	'react';
import	{motion}							from	'framer-motion';
import	{slideInTransition}					from	'utils/framerAnimations';

type TContent = {
	title?: string; //todo: What if no title, how does that impact the layout?
	description?: string; //todo: What if no title, how does that impact the layout?
	children: ReactNode;
}

function	ContentCard({
	title = '',
	description = '',
	children
}: TContent): ReactElement {
	return (
		<motion.div
			initial={'initial'}
			whileInView={'enter'}
			className={'flex flex-col'}
			variants={slideInTransition}>
			<h3 className={'text-xl font-bold text-neutral-900'}>{title}</h3>
			<p className={'mt-4 whitespace-pre-line text-neutral-500'}>{description}</p>
			{children}
		</motion.div>
	);
}

export default ContentCard;