import React, { useEffect, useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const[isOpen, setIsOpen] = useState(false);
  
   const toggleNavbar = () => {
     setIsOpen(!isOpen);
   };



  
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <>
      <header className="py-3 shadow bg-gray-200 rounded-xl">
        <Container className="bg-primary-300">
          <nav className="flex  ">
            <div className=" mr-4">
              <Link to="/">
                <Logo />
              </Link>
            </div>

            <div className="justify-end  flex-auto mr-[25px] ">
              <div className="hidden md:block justify-end">
                <ul className="flex ml-auto flex-wrap justify-end ">
                  {navItems.map((item) =>
                    item.active ? (
                      <li key={item.name}>
                        <button
                          onClick={() => {
                            setActive(item.name);
                            navigate(item.slug);
                          }}
                          className={`${
                            active === item.name
                              ? "text-primary-700"
                              : "text-secondary"
                          } inline-bock px-6 py-2 duration-200   border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                        >
                          {item.name}
                        </button>
                      </li>
                    ) : null
                  )}
                  {authStatus && (
                    <li className="justify-items-end">
                      <LogoutBtn />
                    </li>
                  )}
                </ul>
              </div>

              <div className="mr-2 flex md:hidden justify-end place-items-center justify-items-end">
                <button
                  onClick={toggleNavbar}
                  type="button"
                  className="bg-gray-200   inline-flex place-items-center mt-2  p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28"
                      viewBox="0 -960 960 960"
                      width="28"
                    >
                      <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28"
                      viewBox="0 -960 960 960"
                      width="28"
                    >
                      <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                    </svg>
                  )}
                </button>
              </div>

              <div
                className={`${isOpen ? "block" : "hidden"} md:hidden `}
              >
                <ul className=" sm:px-3 ">
                  {navItems.map((item) =>
                    item.active ? (
                      <li key={item.name}>
                        <button
                          onClick={() => {
                            setActive(item.name);
                            navigate(item.slug);
                          }}
                          className={`${
                            active === item.name
                              ? "text-white"
                              : "text-secondary"
                          }  px-6 py-2 duration-200 w-[150px] border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                        >
                          {item.name}
                        </button>
                      </li>
                    ) : null
                  )}
                  {authStatus && (
                    <li>
                      <LogoutBtn />
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Header;
