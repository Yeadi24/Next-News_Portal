import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export const Navbar = () => {
  return (
    <header className="py-4 shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div className="w-12 h-10">
          <Link href="/" className="flex">
            <img src="Next Portal Logo Icon 2.jpg" alt="logo" />
            <h1 className="font-bold text-blue-700">Next Portal</h1>
          </Link>
        </div>
        {/* menu-bar */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex space-x-8 items-center">
              <NavigationMenuLink className="hover:text-red-600" href="/news">
                News
              </NavigationMenuLink>
              <NavigationMenuTrigger className="hover:text-red-600">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="hover:text-red-600">
                  Web Dev
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:text-red-600">
                  SEO
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:text-red-600">
                  Mobile Apps
                </NavigationMenuLink>
              </NavigationMenuContent>
              <NavigationMenuLink className="hover:text-red-600" href="/news">
                About
              </NavigationMenuLink>

              <NavigationMenuLink className="hover:text-red-600" href="/news">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};
