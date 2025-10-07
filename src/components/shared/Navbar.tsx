"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="py-4 shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div className="w-12 h-10">
          <Link href="/" className="flex">
            <img src="Next Portal Logo Icon 2.jpg" alt="logo" />
            <h1 className="font-bold">Next News</h1>
          </Link>
        </div>
        {/* menu-bar */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex space-x-8 items-center">
              <NavigationMenuLink
                className={` ${
                  pathname === "/news" ? "text-blue-700 font-semibold" : ""
                }`}
                href="/news"
              >
                News
              </NavigationMenuLink>
              <NavigationMenuLink
                className={` ${
                  pathname === "/services" ? "text-blue-700 font-semibold" : ""
                }`}
                href="/services"
              >
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="shadow-md rounded-md px-5 py-4 space-y-2">
                    <li>
                      <NavigationMenuLink
                        href="/services/web"
                        className={` ${
                          pathname === "/services/web"
                            ? "text-blue-700 font-semibold"
                            : ""
                        }`}
                      >
                        Web Dev
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/seo"
                        className={` ${
                          pathname === "/services/seo"
                            ? "text-blue-700 font-semibold"
                            : ""
                        }`}
                      >
                        SEO
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/mobile"
                        className={` ${
                          pathname === "/services/mobile"
                            ? "text-blue-700 font-semibold"
                            : ""
                        }`}
                      >
                        Mobile Apps
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuLink>

              <NavigationMenuLink
                className={` ${
                  pathname === "/about" ? "text-blue-700 font-semibold" : ""
                }`}
                href="/about"
              >
                About
              </NavigationMenuLink>

              <NavigationMenuLink
                className={`${
                  pathname === "/contact" ? "text-blue-700 font-semibold" : ""
                }`}
                href="/contact"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* button and dark mode */}
        <div className="hidden lg:flex">
          <div className="flex justify-center items-center">
            <h1 className="mr-3 text-black">Dark Mode</h1>
            <Switch className="mr-4" />
            <Button variant="default">Login</Button>
          </div>
        </div>
        {/* mobile hamburger menu */}
        <div className="lg:hidden flex">
          <Button onClick={toggleMenuOpen} variant="default">
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </Button>
        </div>
      </nav>
    </header>
  );
};
