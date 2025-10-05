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
import { AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  return (
    <header className="py-4 shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div className="w-12 h-10">
          <Link href="/" className="flex">
            <img src="Next Portal Logo Icon 2.jpg" alt="logo" />
            <h1 className="font-bold">Next Portal</h1>
          </Link>
        </div>
        {/* menu-bar */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex space-x-8 items-center">
              <NavigationMenuLink className="hover:text-red-600" href="/news">
                News
              </NavigationMenuLink>
              <NavigationMenuLink
                className="hover:text-red-600"
                href="/services"
              >
                <NavigationMenuTrigger className="hover:text-red-600">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="shadow-md rounded-md px-5 py-4 space-y-2">
                    <li>
                      <NavigationMenuLink
                        href="/services/web"
                        className="hover:text-red-600"
                      >
                        Web Dev
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/seo"
                        className="hover:text-red-600"
                      >
                        SEO
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/mobile"
                        className="hover:text-red-600"
                      >
                        Mobile Apps
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuLink>

              <NavigationMenuLink className="hover:text-red-600" href="/about">
                About
              </NavigationMenuLink>

              <NavigationMenuLink
                className="hover:text-red-600"
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
          <Button variant="default">
            <AiOutlineMenu />
          </Button>
        </div>
      </nav>
    </header>
  );
};
