import	{ReactElement}	from	'react';

export type TNavbarOption = {
	route: string;
	values: string | string[];
	label: string;
	icon?: ReactElement;
	options?: TNavbarOption[];
}
  
export type TNavbar = {
	options: TNavbarOption[];
	logo?: ReactElement;
	title?: string;
	selected?: string;
	children?: ReactElement;
	wrapper: ReactElement;
}

export type TMenuItem = {
	option: TNavbarOption;
	isSelected: boolean;
}
