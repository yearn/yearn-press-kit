import	React, {ReactElement}				from	'react';
import type * as NavbarTypes 				from    './Navbar.d';
import	Link								from	'next/link';
import	{useWeb3}							from	'@yearn-finance/web-lib/contexts';
import	{Card, ModalMobileMenu}				from	'@yearn-finance/web-lib/components';
import	{Hamburger}							from	'@yearn-finance/web-lib/icons';
import	LogoYearn							from	'components/icons/LogoYearn';

function	NavbarMenuItem({option}: NavbarTypes.TMenuItem): ReactElement {
	return (
		<div className={'mobile-nav-item'}>
			<p className={'font-bold'}>
				{option.label}
			</p>
		</div>
	);
}

function	MobileHeader({
	options,
	selected,
	set_selected,
	wrapper
}: any): ReactElement {
	const	{chainID, isActive} = useWeb3();
	const	[selectedOption, set_selectedOption] = React.useState(options[0]);
	const	[hasMobileMenu, set_hasMobileMenu] = React.useState(false);


	React.useEffect((): void => {
		const	_selectedOption = options.find((e: any): boolean => e.value === Number(chainID)) || options[0];
		set_selectedOption(_selectedOption);
	}, [chainID, isActive, options]);

	return (
		<div className={'absolute top-0 z-30 w-full p-4 md:hidden'}>
			<Card className={'flex h-auto items-center justify-between md:h-20'}>
				<div className={'flex w-full flex-row items-center'}>
					<Link href={'/'} scroll={false}>
						<div className={'cursor-pointer'}>
							<LogoYearn />
						</div>
					</Link>
				</div>
				<div className={'flex flex-row items-center space-x-4 md:hidden'}>
					<button onClick={(): void => set_hasMobileMenu(true)}>
						<Hamburger />
					</button>
				</div>
			</Card>
			<ModalMobileMenu
				shouldUseWallets={false}
				shouldUseNetworks={false}
				isOpen={hasMobileMenu}
				onClose={(): void => set_hasMobileMenu(false)}>
				{options.map((option: any): ReactElement  => {
					if (wrapper) {
						return (
							<div key={option.route}>
								{React.cloneElement(
									wrapper,
									{href: option.route},
									<a>
										<NavbarMenuItem 
											option={option} 
											selected={selectedOption}/>
									</a>
								)}
							</div>
						);
					}
					return (
						<div
							key={option.route}
							onClick={(): void => set_selected(option.route)}
							className={'space-y-2'}>
							<NavbarMenuItem option={option} selected={selected} />
						</div>
					);
				})}
			</ModalMobileMenu>
		</div>
	);
}

export default MobileHeader;