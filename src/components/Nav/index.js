import { useState } from 'react';
import { BiHomeAlt, BiPhoneCall, BiMenu, BiTrendingUp } from 'react-icons/bi';
import NavItem from './NavItem';

const defaultIconSize = '1.875rem';

const items = [
    { label: 'ホーム', icon: <BiHomeAlt size={defaultIconSize} />, href: '#' },
    { label: 'トレンド', icon: <BiTrendingUp size={defaultIconSize} />, href: '#Trending' },
    { label: 'お問合せ', icon: <BiPhoneCall size={defaultIconSize} />, href: '#contact' },
];

const NavItemsContainer = () => (
    <>
        {items.map((item, index) => (
            <NavItem item={item} key={index} />
        ))}
    </>
);

const Index = () => {
    const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false);

    return (
        <nav className="col-span-1 bg-cyan-200 z-10">
            <div className="flex mx-4 justify-between items-center md:flex">
                <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right">
                    Fashion World
                </h4>
                <BiMenu
                    className="cursor-pointer md:hidden"
                    size={defaultIconSize}
                    onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}
                />
                <ul className={`hidden md:flex`}>
                    <NavItemsContainer />
                </ul>
            </div>

            <ul className={`flex flex-col items-center mx-4 my-2${isNavMenuMobileOpen ? '' : ' hidden'} md:none`}>
                <NavItemsContainer />
            </ul>
        </nav>
    );
};

export default Index;
