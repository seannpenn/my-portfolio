interface AnchorProps {
  name: string;
}

const Anchor = ({ name }: AnchorProps) => {
  return (
    <a
      href="#"
      className="rounded-md px-3 py-2 text-xl font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
    >
      {name}
    </a>
  );
};

export const NavBar = () => {
  return (
    <header className="bg-white md:sticky top-0">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <h2>
            <a href="/">Seanpen</a>
          </h2>
        </div>
        <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 py-6">
            <li>
              <a className="hover:text-gray-500 text-xl" href="#about_section">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-xl" href="#">
                Porfolio
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-xl" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

{
  /* <nav>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div class="flex h-24 items-center justify-center">
            <div class="flex items-center">
              <div class="hidden md:block">
                <div class="ml-10 flex items-center space-x-4">
                  <Anchor name={"About"} />
                  <Anchor name={"Portfolio"} />
                  <Anchor name={"Contact"} />
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button
                type="button"
                class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="md:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a
              href="#"
              class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Reports
            </a>
          </div>
        </div>
      </nav> */
}
