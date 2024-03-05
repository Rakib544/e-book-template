"use client";
import { navLinks } from "@/lib/data/navigation-data";
import Link from "next/link";
import { useState } from "react";
import { MobileNavIcon } from "./icons";
import { Button, buttonVariants } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Sheet, SheetContent } from "./ui/sheet";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <Button
        aria-label="Open Navigation"
        variant="ghost"
        onClick={() => setIsOpen(true)}
      >
        <MobileNavIcon />
      </Button>

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
