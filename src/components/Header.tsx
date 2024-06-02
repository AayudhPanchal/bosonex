"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Track active link index

  const menuItems = [
    {
      title: "Home",
      link: "Home",
    },
    {
      title: "About Us",
      link: "About",
    },
    {
      title: "Pricing",
      link: "Pricing",
    },
    {
      title: "Contact Us",
      link: "Contact",
    },
  ];

  const getMobileOS = () => {
    if (typeof window !== "undefined" && window.navigator) {
      const ua = window.navigator.userAgent;

      if (
        /iPad|iPhone|iPod/.test(ua) ||
        (window.navigator.platform === "MacIntel" &&
          window.navigator.maxTouchPoints > 1)
      ) {
        return "https://apps.apple.com/in/app/bosone/id6502510427";
      }
    }

    return "https://play.google.com/apps/internaltest/4700693509249740035";
  };

  let AppLink = getMobileOS();

  const handleLinkClick = (index: number) => {
    setActiveIndex(index); // Update active link index on click
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="flex justify-center items-center"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarContent>
          <p className="font-bold text-2xl md:text-3xl">
            Bosonex<span className="text-blue-600">.</span>
          </p>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={index === activeIndex}>
            <Link
              color={index === activeIndex ? "primary" : "foreground"}
              href={`#${item.link}`}
              onClick={() => handleLinkClick(index)}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <Button
          color="primary"
          className="font-semibold"
          as={Link}
          href={AppLink}
          variant="flat"
        >
          Try the App!
        </Button>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={index === activeIndex ? "primary" : "foreground"}
              className="w-full"
              href={`#${item.link}`}
              size="lg"
              onClick={() => handleLinkClick(index)}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
