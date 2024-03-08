"use client";
import { navLinks } from "@/lib/data/navigation-data";
import Image from "next/image";
import Link from "next/link";
import MobileNavigation from "./mobile-navigation";
import { buttonVariants } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function Navbar() {
  return (
    <NavigationMenu className="max-w-6xl mx-auto flex justify-between items-center py-4 lg:px-7">
      <Link aria-label="Home" href="" className="text-2xl font-extrabold ">
        <Image src="/logo.svg" alt="logo" width={213} height={57} priority />
      </Link>
      <NavigationMenuList className="hidden lg:flex">
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.id}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {link.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <Link
        href="#pricing"
        className={buttonVariants({
          className: "hidden lg:inline-flex",
        })}
      >
        Buy Book
      </Link>
      <div className="lg:hidden">
        <MobileNavigation />
      </div>
    </NavigationMenu>
  );
}
