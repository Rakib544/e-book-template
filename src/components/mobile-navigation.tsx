"use client";
import { navLinks } from "@/lib/data/navigation-data";
import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Sheet, SheetContent } from "./ui/sheet";

function MobileNavIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700"
      {...props}
    >
      <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
    </svg>
  );
}

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* <SheetTrigger asChild> */}
      <Button
        aria-label="Open Navigation"
        variant="ghost"
        onClick={() => setIsOpen(true)}
      >
        <MobileNavIcon />
      </Button>
      {/* </SheetTrigger> */}
      <SheetContent>
        <NavigationMenu>
          <NavigationMenuList className="flex-col items-start mt-8 w-full">
            {navLinks.map((link) => (
              <NavigationMenuItem
                key={link.id}
                className="block w-full"
                onClick={() => setIsOpen(false)}
              >
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({
                      className: "w-full",
                    })}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            <li>
              <Link
                href="#pricing"
                className={buttonVariants({ className: "mt-1" })}
              >
                Buy Book
              </Link>
            </li>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
}
