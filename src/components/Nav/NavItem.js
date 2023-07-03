const NavItem = ({ item }) => {
    const { label, icon, href } = item;

    return (
        <li
            className={`md:mr-4 flex p-2 justify-end items-center cursor-pointer hover:border-primary hover:border-b-2
            }`}
        >
            <a href={href} className="mr-2 text-3xl">
                {label}
            </a>
            {icon}
        </li>
    );
};

export default NavItem;
