import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import { ep_menu } from "../../assets";

export function MenuDefault() {
  return (
    <Menu>
      <MenuHandler>
        <div className="mb-2 flex items-center gap-4 p-4">
          <img src={ep_menu} alt="brand" className="h-8 w-8 " />
        </div>
        {/* <Button>Menu</Button> */}
      </MenuHandler>
      <MenuList>
        <MenuItem>
          <a href="#inicio">Inicio</a>
        </MenuItem>
        <MenuItem>
          <a href="#acerca">Acerca de mi</a>
        </MenuItem>
        <MenuItem>
          <a href="#proyectos">Proyectos</a>
        </MenuItem>
        <MenuItem>
          <a href="#habilidades">Habilidades</a>
        </MenuItem>
        <MenuItem>
          <a href="#contactame">Contactame</a>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
