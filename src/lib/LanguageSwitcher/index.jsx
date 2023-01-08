import {
  Button,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const index = () => {
  const [menu, setMenu] = useState(null);
  const [currentLanguage, setCurrentLangueg] = useState({
    id: "en",
    title: "English",
    flag: "US",
  });
  const [language, setLanguage] = useState([
    { id: "en", title: "English", flag: "US" },
    { id: "tr", title: "Turkish", flag: "TR" },
    { id: "ar", title: "Arabic", flag: "SA" },
  ]);
  const langMenuClick = (event) => {
    setMenu(event.currentTarget);
  };
  const langMenuClose = () => {
    setMenu(null);
  };

  function handleLanguageChange(lng) {
    setCurrentLangueg(lng.id);

    langMenuClose();
  }

  return (
    <>
      <Button className="h-40 w-64" onClick={langMenuClick}>
        <img
          className="mx-4 min-w-20"
          src={`assets/images/flags/${currentLanguage.flag}.svg`}
          alt="US.svg"
        />

        <Typography
          className="mx-4 font-semibold uppercase"
          color="text.secondary"
        >
          {currentLanguage.title}
        </Typography>
      </Button>

      <Popover
        open={Boolean(menu)}
        anchorEl={menu}
        onClose={langMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{
          paper: "py-8",
        }}
      >
        {language.map((lng) => (
          <MenuItem key={lng.id} onClick={() => handleLanguageChange(lng)}>
            <ListItemIcon className="min-w-40">
              <img
                className="min-w-20"
                src={`assets/images/flags/${lng.flag}.svg`}
                alt={lng.title}
              />
            </ListItemIcon>
            <ListItemText primary={lng.title} />
          </MenuItem>
        ))}

        <MenuItem
          component={Link}
          href="/documentation/configuration/multi-language"
          onClick={langMenuClose}
          role="button"
        >
          <ListItemText primary="Learn More" />
        </MenuItem>
      </Popover>
    </>
  );
};

export default index;
