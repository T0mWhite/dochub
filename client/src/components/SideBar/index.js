import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";

// ============ QUERIES =============

import { useQuery } from "@apollo/client";
import { QUERY_TECHNOLOGIES_SIDEBAR } from "../../utils/queries";

// =========== CUSTOM STYLES =============
import "./style.css";

const iconData = [
  { icon: <People />, label: "Authentication" },
  { icon: <Dns />, label: "Database" },
  { icon: <PermMedia />, label: "Storage" },
  { icon: <Public />, label: "Hosting" },
];

const SideNav = styled(List)(({ theme }) => ({
  ...theme.palette.text.secondary,
  backgroundColor: alpha(theme.palette.background.paper, 1.0),
  "&:hover": {
    backgroundColor: alpha(theme.palette.background.paper, 1.0),
  },
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
}));

export default function CustomizedList() {
  const [open, setOpen] = React.useState(true);

  const { loading, data } = useQuery(QUERY_TECHNOLOGIES_SIDEBAR);
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          height: "100vh",
        }}
      >
        <SideNav component="nav" disablePadding>
          <Divider />
          <ListItem component="div" disablePadding>
            <ListItemButton sx={{ height: 56 }}>
              <ListItemIcon>
                <Home color="secondary" />
              </ListItemIcon>
            </ListItemButton>
            <Tooltip title="Filter">
              <IconButton
                size="large"
                sx={{
                  "& svg": {
                    color: "rgba(255,255,255,0.8)",
                    transition: "0.2s",
                    transform: "translateX(0) rotate(0)",
                  },
                  "&:hover, &:focus": {
                    bgcolor: "unset",
                    "& svg:first-of-type": {
                      transform: "translateX(-4px) rotate(-20deg)",
                    },
                    "& svg:last-of-type": {
                      right: 0,
                      opacity: 1,
                    },
                  },
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    height: "80%",
                    display: "block",
                    left: 0,
                    width: "1px",
                    bgcolor: "divider",
                  },
                }}
              >
                <Settings />
                <ArrowRight
                  sx={{ position: "absolute", right: 4, opacity: 0 }}
                />
              </IconButton>
            </Tooltip>
          </ListItem>
          <Divider />
          <Box>
            {open &&
              data.technologiesArray.map((technology) => (
                <>
                  
                </>
              ))}
          </Box>
        </SideNav>
      </Paper>
    </>
  );
}
