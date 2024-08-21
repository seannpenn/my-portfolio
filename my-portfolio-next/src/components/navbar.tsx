import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button, Link } from "@nextui-org/react";
export const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Seanpen</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Porfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
  // return (
  //   <header className="bg-white md:sticky top-0">
  //     <nav className="flex justify-between items-center w-[92%] mx-auto">
  //       <div>
  //         <h2>
  //           <a href="/">Seanpen</a>
  //         </h2>
  //       </div>
  //       <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
  //         <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 py-6">
  //           <li>
  //             <a className="hover:text-gray-500 text-xl" href="#about_section">
  //               About
  //             </a>
  //           </li>
  //           <li>
  //             <a className="hover:text-gray-500 text-xl" href="#">
  //               Porfolio
  //             </a>
  //           </li>
  //           <li>
  //             <a className="hover:text-gray-500 text-xl" href="#">
  //               Contact
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //       <div className="flex items-center gap-6">
  //         <button
  //           data-collapse-toggle="navbar-default"
  //           type="button"
  //           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //           aria-controls="navbar-default"
  //           aria-expanded="false"
  //         >
  //           <span className="sr-only">Open main menu</span>
  //           <svg
  //             className="w-5 h-5"
  //             aria-hidden="true"
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 17 14"
  //           >
  //             <path
  //               stroke="currentColor"
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               stroke-width="2"
  //               d="M1 1h15M1 7h15M1 13h15"
  //             />
  //           </svg>
  //         </button>
  //       </div>
  //     </nav>
  //   </header>
  // );
};
