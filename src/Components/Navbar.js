/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo1 from "../Assets/Giwang/logoGiwang.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import AllInboxIcon from "@mui/icons-material/AllInbox";

import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Beranda",
      icon: <HomeIcon />,
      to: "/",
    },
    {
      text: "Semua Produk",
      icon: <AllInboxIcon />,
      to: "/Produk",
    },
    {
      text: "Tentang",
      icon: <InfoIcon />,
      to: "/Tentang",
    },
    {
      text: "Kontak",
      icon: <PhoneRoundedIcon />,
      to: "/Kontak",
    },
  ];
  return (
    <>
      <nav>
        <div className="nav-logo-container">
          <img src={Logo1} alt="giwang" width="75px" height="75px" />
        </div>
        {/* <span className="primary-text-company">PT GIWANG KANAKA</span> */}

        <div className="navbar-links-container">
          <a href="/" className="Link">
            Beranda
          </a>
          <Dropdown className="d-inline mx-2" autoClose="inside">
            <Dropdown.Toggle
              id="dropdown-autoclose-inside"
              variant="white"
              className="Link"
            >
              <a>Produk</a>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/produk-aqms" className="Link">
                AERTRAX
              </Dropdown.Item>
              <Dropdown.Item href="/produk-sfc" className="Link">
                SFC Energy EFOY
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a href="/Tentang" className="Link">
            Tentang
          </a>
          <a href="/Kontak" className="Link">
            Kontak
          </a>
          <Link to="/Produk">
            <button className="primary-button">Semua Produk</button>
          </Link>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <Link to={item.to} className="Link">
                      <ListItemText primary={item.text} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;
