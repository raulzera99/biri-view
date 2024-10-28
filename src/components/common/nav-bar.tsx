import React, { useState } from "react";
import { Separator } from "@/components/separator";
import { MenuItem, Menu } from "@mui/material";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Ícones de menu
import { RxHamburgerMenu } from "react-icons/rx";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Ícone de seta
import { Popover, PopoverTrigger, PopoverContent } from "@/components/popover";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../button";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesMenuAnchor, setServicesMenuAnchor] =
    useState<null | HTMLElement>(null);
  const [servicesMenuHamburguerAnchor, setServicesMenuHamburguerAnchor] =
    useState<null | HTMLElement>(null);

  const openServicesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setServicesMenuAnchor(event.currentTarget);
  };

  const openServicesMenuHamburguer = (event: React.MouseEvent<HTMLElement>) => {
    setServicesMenuHamburguerAnchor(event.currentTarget);
  };

  const closeServicesMenu = () => {
    setServicesMenuAnchor(null);
  };
  const closeServicesMenuHamburguer = () => {
    setServicesMenuHamburguerAnchor(null);
  };

  return (
    <nav className="w-full flex py-6 fixed top-0 bg-white dark:bg-gray-900 shadow-lg z-50 max-h-24">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center align-middle">
          <Link href="/" className="" passHref>
            <Image
              src="/assets/imgs/logo.png"
              alt="BiriView"
              className="w-28 h-28"
              width={112}
              height={112}
            />
          </Link>
        </div>
        {/*         <Link href="/" passHref>
          <Button
            variant={"ghost"}
            className="text-2xl font-bold text-black dark:text-white hidden lg:flex md:flex items-center"
            style={{ cursor: "pointer" }}
          >
            BiriView
          </Button>
        </Link> */}

        {/* Menu de navegação - visível em telas grandes */}
        <div className="hidden lg:flex items-center py-5">
          <Link href="/about" passHref>
            <span className="text-black dark:text-white px-4">Sobre</span>
          </Link>
          <Separator orientation="vertical" size="2px" length="24px" />

          {/* Botão de Serviços com submenu */}
          <div className="relative px-4">
            <button
              onClick={openServicesMenu}
              className="text-black dark:text-white px-4 flex items-center"
              style={{
                border: "none",
                background: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              Serviços
              <ArrowDropDownIcon fontSize="small" className="ml-1" />
            </button>
            <Menu
              anchorEl={servicesMenuAnchor}
              open={Boolean(servicesMenuAnchor)}
              onClose={closeServicesMenu}
              MenuListProps={{
                "aria-labelledby": "services-button",
              }}
              className="mt-2"
            >
              {/* Links para serviços */}
              <MenuItem onClick={closeServicesMenu}>
                <Link href="/services/lojas-de-calcados" passHref>
                  <span>Lojas de Calçados</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeServicesMenu}>
                <Link href="/services/historia-de-birigui" passHref>
                  <span>História de Birigui</span>
                </Link>
              </MenuItem>
            </Menu>
          </div>

          <Separator orientation="vertical" size="2px" length="24px" />
          <Link href="#contact" passHref>
            <span className="text-black dark:text-white px-4">Contato</span>
          </Link>
          <Separator orientation="vertical" size="2px" length="24px" />
          <Link href="/shop" passHref>
            <span className="text-black dark:text-white px-4 flex items-center">
              Loja
              <FaShoppingCart size={20} className="ml-2" />
            </span>
          </Link>
        </div>

        {/* Menu hambúrguer - visível em todas as telas */}
        <Popover>
          <PopoverTrigger>
            <Button variant="ghost" className="text-black dark:text-white">
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <RxHamburgerMenu className="w-6 h-6" />
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent
            side="bottom"
            className="absolute right-0 mt-2 bg-white dark:bg-gray-900 shadow-lg rounded-lg"
            onPointerDownOutside={() => setIsMenuOpen(false)}
          >
            {/* Submenu suspenso - navegação para telas pequenas */}
            <div className="lg:hidden flex flex-col p-4 py-4">
              <Link href="/about" passHref>
                <span className="text-black dark:text-white px-4 py-2">
                  Sobre
                </span>
              </Link>
              <Separator
                orientation="horizontal"
                size="1px"
                length="100%"
                className="my-2"
              />
              <div className="relative px-4 pb-2">
                <button
                  onClick={openServicesMenuHamburguer}
                  className="text-black dark:text-white px-4 flex items-center"
                  style={{
                    border: "none",
                    background: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  Serviços
                  <ArrowDropDownIcon fontSize="small" className="ml-1" />
                </button>
                <Menu
                  anchorEl={servicesMenuHamburguerAnchor}
                  open={Boolean(servicesMenuHamburguerAnchor)}
                  onClose={closeServicesMenuHamburguer}
                  MenuListProps={{
                    "aria-labelledby": "services-button",
                  }}
                  className="mt-2 py-5"
                >
                  <MenuItem onClick={closeServicesMenuHamburguer}>
                    <Link href="/services/lojas-de-calcados" passHref>
                      <span>Lojas de Calçados</span>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={closeServicesMenuHamburguer}>
                    <Link href="/services/historia-de-birigui" passHref>
                      <span>História de Birigui</span>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
