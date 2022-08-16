import	React, {ReactElement}				from	'react';
import	Link								from	'next/link';
import	{Card, ModalMobileMenu}				from	'@yearn-finance/web-lib/components';
import	{Hamburger}							from	'@yearn-finance/web-lib/icons';
import	LogoYearn							from	'components/icons/LogoYearn';
import type * as NavbarTypes 				from    'components/Navbar.d';

function	NavbarMenuItem({option}: NavbarTypes.TMenuItem): ReactElement {
	return (
		<div className={'mobile-nav-item'}>
			<p className={'font-bold'}>
				{option.label}
			</p>
		</div>
	);
}

function	MobileHeader({options, wrapper}: any): ReactElement {
	const	[hasMobileMenu, set_hasMobileMenu] = React.useState(false);

	return (
		<div className={'sticky top-0 z-30 w-full p-0 md:hidden'}>
			<Card className={'flex h-auto items-center justify-between !bg-neutral-100 md:h-20'}>
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
					return (
						<div key={option.route} onClick={(): void => set_hasMobileMenu(false)}>
							{React.cloneElement(
								wrapper,
								{href: option.route},
								<a>
									<NavbarMenuItem 
										option={option} 
										isSelected={false} />
								</a>
							)}
						</div>
					);
				})}
			</ModalMobileMenu>
		</div>
	);
}

export default MobileHeader;