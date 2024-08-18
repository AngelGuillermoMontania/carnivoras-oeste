import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  HiChevronDown,
  HiBars3,
  HiMiniXMark,
  HiChevronUp,
} from "react-icons/hi2";
import imageLogo from "../assets/images/logo.jfif";
import { Link, useNavigate } from "react-router-dom";

const nestedMenuItems = [
  {
    title: "Hero",
  },
  {
    title: "Features",
  },
  {
    title: "Testimonials",
  },
  {
    title: "Ecommerce",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenuDroseras, setOpenMenuDroseras] = useState(false);
  const [openMenuVenus, setOpenMenuVenus] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem className="pl-2">{title}</MenuItem>
    </a>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Plantas
              <HiChevronDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <HiChevronDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openMenuDroseras}
            handler={setOpenMenuDroseras}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Droseras
                <HiChevronUp
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl">{renderItems}</MenuList>
          </Menu>
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openMenuVenus}
            handler={setOpenMenuVenus}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Venus
                <HiChevronUp
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl">{renderItems}</MenuList>
          </Menu>
          <MenuItem>Sarracenias</MenuItem>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openMenuDroseras}
            handler={setOpenMenuDroseras}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Droseras
                <HiChevronUp
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem>React</MenuItem>
          <MenuItem>TailwindCSS</MenuItem>
        </Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <NavListMenu />
      <Typography variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link to="/listaPrecios">Lista De Precios</Link>
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contacto
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div
          className="flex items-center justify-around"
          onClick={() => navigate("/")}
        >
          <img
            className="h-16 w-16 rounded-full object-cover object-center"
            src={imageLogo}
            alt="nature image"
          />
          <Typography
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            Carnívoras Oeste
          </Typography>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        {/* <div className="hidden gap-2 lg:flex">
          <Button size="sm">Get Started</Button>
          <Button variant="outlined" size="sm">
            Log In
          </Button>
        </div> */}
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <HiMiniXMark className="h-6 w-6" strokeWidth={2} />
          ) : (
            <HiBars3 className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
