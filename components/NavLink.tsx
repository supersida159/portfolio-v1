
'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavLinkProps {
    link: {
      url: string;
      title: string;
    };
  }
const NavLink: React.FC<NavLinkProps> = ( { link } ) => { // Desctructure link prop directly
    const pathName = usePathname(); // Corrected hook usage
    return (
        <Link href={link.url}>
            <p className={`text-sm rounded-md font-semibold p-1 ${pathName === link.url ? 'bg-black text-white' : 'text-black'}`}>{link.title}</p> {/* Changed Link to anchor tag */}
        </Link>
    );
};

export default NavLink;
