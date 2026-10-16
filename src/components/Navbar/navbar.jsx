import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Link,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

import campuspelogo from "../../assets/campuspelogo.png";

export default function Navbar() {
  const navItems = [
    { label: "College", icon: <SchoolIcon /> },
    { label: "Employer", icon: <BusinessIcon /> },
    { label: "Jobs", icon: <WorkIcon /> },
    { label: "Blogs", icon: <ArticleIcon /> },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
       sx={{
    background:
      "radial-gradient(ellipse at top center, #cce3fe 0%, #fbfbfb 65%)",
    color: "#000000",
    boxShadow: "none",
  }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, md: "5%" },
          py: 2,
          minHeight: { xs: 90, md: 110 },
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {/* Logo */}
      
<Box
  component="img"
  src={campuspelogo}
  alt="CampusPe Logo"
  sx={{
    marginTop:"-70px",
    width: { xs: 170, sm: 200, md: 300 },
    height: { xs: 75, sm: 90, md: 250 },
    objectFit: "contain",
    flexShrink: 0,
  }}
/>

        {/* Navigation Links */}
        <Box
                  sx={{
                        color: "#b8b5b5aa",
                  marginTop:"-70px",
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, md: 3.5 },
            flexWrap: "wrap",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={`#${item.label.toLowerCase()}`}
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#1b7667",
                fontFamily: '"Poppins", "Roboto", sans-serif',
                fontSize: { xs: 16, md: 18 },
                fontWeight: 600,
                whiteSpace: "nowrap",
                transition: "color 0.2s ease",
                "&:hover": {
                  color: "#007FFC",
                },
                "& .MuiSvgIcon-root": {
                  fontSize: { xs: 21, md: 24 },
                },
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </Box>

        {/* Authentication Buttons */}
        <Box
                  sx={{
                  marginTop:"-70px",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Button
            variant="outlined"
            startIcon={<LoginIcon />}
            sx={{
              color: "#111111",
              borderColor: "#d1d5db",
              fontFamily: '"Poppins", "Roboto", sans-serif',
              fontSize: 16,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: 2,
              px: 2.5,
              py: 1.2,
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                borderColor: "#000000",
              },
            }}
          >
            Sign In
          </Button>

          <Button
            variant="contained"
            startIcon={<PersonAddAlt1Icon />}
            sx={{
              backgroundColor: "#007FFC",
              color: "#ffffff",
              fontFamily: '"Poppins", "Roboto", sans-serif',
              fontSize: 16,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: 2,
              px: 2.5,
              py: 1.2,
              whiteSpace: "nowrap",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#0066cc",
                boxShadow: "none",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}