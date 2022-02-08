import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import { BrowserRouter as Router } from "react-router-dom";

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
  backgroundColor: alpha(theme.palette.background.paper, 0.0),
  "&:hover": {
    backgroundColor: alpha(theme.palette.background.paper, 0.0),
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
  const technologies = data?.technologies || [];

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          height: "100vh",
          bgcolor: "primary.main",
        }}
      >
        <SideNav
          component="nav"
          disablePadding
          sx={{
            bgcolor: "primary.main",
          }}
        >
          <Divider />
          <ListItemText
            sx={{
              marginLeft: 1,
              padding: 2,
              border: 1,
              borderColor: "secondary.contrastText",
            }}
          >
            Traverse The Dom
          </ListItemText>
          <Box>
            {technologies.map((technology, i) => (
              <Accordion
                expanded={expanded === `panel${i}`}
                onChange={handleChange(`panel${i}`)}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "secondary.contrastText",
                      }}
                    />
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{
                    bgcolor: "primary.main",
                    borderRight: 1,
                    borderColor: "secondary.contrastText",
                  }}
                >
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      fontSize: "1.0rem",
                      color: "secondary.main",
                    }}
                  >
                    <div>{technology.technologyName}</div>
                  </Typography>
                </AccordionSummary>
                {technology.technologyContents.map((technologyContent) => (
                  <AccordionDetails
                    sx={{
                      bgcolor: "primary.main",
                      border: 1,
                      borderTop: 0,
                      borderColor: "primary.contrastText",
                    }}
                  >
                    <Typography
                      sx={{
                        paddingLeft: 1,
                        color: "primary.contrastText",
                        fontSize: ".90rem",
                      }}
                    >
                      {technologyContent.contentTitle}
                    </Typography>
                  </AccordionDetails>
                ))}
              </Accordion>
            ))}
          </Box>
        </SideNav>
      </Paper>
    </>
  );
}
