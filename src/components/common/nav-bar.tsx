import React, { useState } from "react";
import { Separator } from "@/components/separator"; // Importe o Separator
import { useTranslation } from "react-i18next";
import { MenuItem, Select, Menu } from "@mui/material";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Ícones de menu
import { RxHamburgerMenu } from "react-icons/rx";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Ícone de seta
import { Popover, PopoverTrigger, PopoverContent } from "@/components/popover";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../button";
import { FiLogIn } from "react-icons/fi";

// interface NavbarProps {
//   toggleSidebar: () => void;
//   isSidebarOpen: boolean;
// }

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu suspenso

  const [servicesMenuAnchor, setServicesMenuAnchor] =
    useState<null | HTMLElement>(null); // Estado para controlar o menu de serviços
  const [servicesMenuHamburguerAnchor, setServicesMenuHamburguerAnchor] =
    useState<null | HTMLElement>(null); // Estado para controlar o menu de serviços

  // const services = [
  //   { title: t("services.processAutomation"), href: "/services/automation" },
  //   {
  //     title: t("services.fullStackDevelopment"),
  //     href: "/services/development",
  //   },
  //   { title: t("services.cloudComputing"), href: "/services/cloud-computing" },
  //   {
  //     title: t("services.dataEngineering"),
  //     href: "/services/data-engineering",
  //   },
  //   { title: t("services.webCrawling"), href: "/services/crawlers" },
  //   { title: t("services.chatbots"), href: "/services/chatbots" },
  // ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen); // Alterna entre abrir e fechar o menu
  // };

  // Funções para abrir/fechar o submenu de serviços
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
    <nav className="w-full flex py-6 fixed top-0 bg-white dark:bg-gray-900 shadow-lg z-50 max-h-20 ">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center align-middle">
          <Link href="/" className="" passHref>
            <Image
              src="/assets/images/logo.png"
              alt="NextGen Solutions"
              className="w-28 h-28"
              width={112}
              height={112}
            />
          </Link>
        </div>
        <Link href="/" passHref>
          <Button
            variant={"ghost"}
            className="text-2xl font-bold text-light-primary dark:text-white flex hidden lg:flex md:flex items-center"
            style={{ cursor: "pointer" }}
          >
            Next Generation
          </Button>
        </Link>

        {/* Menu de navegação - visível em telas grandes */}
        <div className="hidden lg:flex items-center py-5">
          <Link href="/about" passHref>
            <span className="text-light-primary dark:text-white px-4">
              {t("nav.about")}
            </span>
          </Link>
          <Separator orientation="vertical" size="2px" length="24px" />

          {/* Botão de Serviços com seta e submenu */}
          <div className="relative px-4">
            <button
              onClick={openServicesMenu}
              className="text-light-primary dark:text-white px-4 flex items-center"
              style={{
                border: "none",
                background: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              {t("nav.services")}
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
              {/* Redirecionamento para páginas de serviços */}
              <MenuItem onClick={closeServicesMenu}>
                <Link href="/services/automation" passHref>
                  <span>{t("services.processAutomation")}</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeServicesMenu}>
                <Link href="/services/development" passHref>
                  <span>{t("services.fullStackDevelopment")}</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeServicesMenu}>
                <Link href="/services/cloud-computing" passHref>
                  <span>{t("services.cloudComputing")}</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeServicesMenu}>
                <Link href="/services/data-engineering" passHref>
                  <span>{t("services.dataEngineering")}</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeServicesMenu}>
                <Link href="/services/crawlers" passHref>
                  <span>{t("services.webCrawling")}</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeServicesMenu}>
                <Link href="/services/chatbots" passHref>
                  <span>{t("services.chatbots")}</span>
                </Link>
              </MenuItem>
            </Menu>
          </div>

          {/* Navigation Menu for Services */}
          {/* <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("nav.services")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                    {services.map((service) => (
                      <ListItem component="div" key={service.title}>
                        <Link href={service.href} passHref>
                          <p>{service.title}</p>
                        </Link>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu> */}

          <Separator orientation="vertical" size="2px" length="24px" />
          <Link href="#contact" passHref>
            <span className="text-light-primary dark:text-white px-4">
              {t("nav.contact")}
            </span>
          </Link>
        </div>

        {/* Sign In Button - visível em telas grandes */}
        <div className="hidden lg:flex items-center ml-4">
          <Link href="/auth/sign-in" passHref>
            <Button className="w-full bg-light-primary-200 dark:bg-dark-primary-400 text-black dark:text-white px-4 py-2 rounded-md hover:opacity-80 transition flex items-center justify-between">
              {t("nav.signIn")}
              <FiLogIn className="w-6 h-6 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Menu hambúrguer - visível em todas as telas */}
        <Popover>
          <PopoverTrigger>
            <Button
              variant="ghost"
              className="text-light-primary dark:text-white"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <RxHamburgerMenu className="w-6 h-6" />
              )}
            </Button>
          </PopoverTrigger>

          {/* <div className="relative">
          <button
            onClick={toggleMenu}
            className="text-light-primary dark:text-white"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" /> // Ícone de fechar quando o menu está aberto
            ) : (
              <RxHamburgerMenu className="w-6 h-6" /> // Ícone de menu quando está fechado
            )}
          </button> */}

          <PopoverContent
            side="bottom"
            className="absolute right-0 mt-2 bg-white dark:bg-gray-900 shadow-lg rounded-lg"
            onPointerDownOutside={() => setIsMenuOpen(false)} // Fecha ao clicar fora
          >
            {/* Submenu suspenso - exibe itens conforme o estado */}
            {/* <div
            className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-lg ${
              isMenuOpen ? "block" : "hidden"
            }`}
          > */}
            {/* Em telas pequenas, mostrar os itens de navegação aqui */}
            <div className="lg:hidden flex flex-col p-4 py-4">
              <Link href="/about" passHref>
                <span className="text-light-primary dark:text-white px-4 py-2">
                  {t("nav.about")}
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
                  className="text-light-primary dark:text-white px-4 flex items-center"
                  style={{
                    border: "none",
                    background: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  {t("nav.services")}
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
                    <Link href="/services/automation" passHref>
                      <span>{t("services.processAutomation")}</span>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={closeServicesMenuHamburguer}>
                    <Link href="/services/development" passHref>
                      <span>{t("services.fullStackDevelopment")}</span>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={closeServicesMenuHamburguer}>
                    <Link href="/services/cloud-computing" passHref>
                      <span>{t("services.cloudComputing")}</span>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={closeServicesMenuHamburguer}>
                    <Link href="/services/data-engineering" passHref>
                      <span>{t("services.dataEngineering")}</span>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={closeServicesMenuHamburguer}>
                    <Link href="/services/crawlers" passHref>
                      <span>{t("services.webCrawling")}</span>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={closeServicesMenuHamburguer}>
                    <Link href="/services/chatbots" passHref>
                      <span>{t("services.chatbots")}</span>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
              <Separator orientation="horizontal" size="1px" length="100%" />
            </div>
            {/* 
            <div className="px-4 flex justify-center">
              <ThemeToggle />
            </div> */}

            {/* Language Selector */}
            <div className="px-4 flex justify-center">
              <Select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="mr-1 text-black dark:text-white"
                sx={{
                  border: 0,
                  borderRadius: 2,
                  justifyContent: "center",
                  "& .MuiSelect-icon": {
                    color: "black", // Define a cor da seta no tema claro
                  },
                  ".dark & .MuiSelect-icon": {
                    color: "white", // Define a cor da seta no tema escuro
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remove a borda ao passar o mouse
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid white", // Adiciona borda branca ao focar
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remove a borda padrão
                  },
                }}
                inputProps={{
                  style: {
                    color: "white",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              >
                <MenuItem value="pt_BR">
                  <div className="flex justify-center items-center w-full">
                    <Image
                      src="https://flagsapi.com/BR/shiny/64.png"
                      alt="Portuguese"
                      className="w-7 h-6"
                      width={28}
                      height={24}
                    />
                  </div>
                </MenuItem>
                <MenuItem value="en">
                  <div className="flex justify-center items-center w-full">
                    <Image
                      src="https://flagsapi.com/US/shiny/64.png"
                      alt="English"
                      className="w-7 h-6"
                      width={28}
                      height={24}
                    />
                  </div>
                </MenuItem>
              </Select>
            </div>
            <Separator orientation="horizontal" size="1px" length="100%" />
            {/* <div className="flex items-center justify-center w-full"> */}
            <div className="px-4 py-2">
              <Link href="/auth/sign-in" passHref>
                <Button className="w-full bg-light-primary-200 dark:bg-dark-primary-400 text-black dark:text-white px-4 py-2 rounded-md hover:opacity-80 transition flex items-center justify-between">
                  {t("nav.signIn")}
                  <FiLogIn className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            </div>
            {/* </div> */}
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
