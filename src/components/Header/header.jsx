import React from "react";
import { Box, Typography, Button } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GroupsIcon from "@mui/icons-material/Groups";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PartnerCompanies from "../../assets/partnercompanies.jpg";

function LookingForCards() {
  const cards = [
    {
      title: "College",
      subtitle: "Connect with students",
      description: "Explore colleges, courses, fees, placements & more.",
      icon: <SchoolIcon />,
      color: "#2563EB",
      bg: "#EFF6FF",
      features: [
        "Search by course, location, fees",
        "Connect directly with colleges",
        "Improve student placements",
      ],
      button: "Join Wishlist",
      buttonIcon: <NotificationsActiveIcon />,
    },
    {
      title: "I'm Looking for a Job",
      subtitle: "Discover career opportunities",
      description: "Upload your resume. We'll find jobs that fit you.",
      icon: <WorkIcon />,
      color: "#0D9488",
      bg: "#F0FDFA",
      features: [
        "Jobs from 1000+ sources",
        "WhatsApp & email alerts",
        "Discover relevant opportunities",
      ],
      button: "Explore Jobs",
      buttonIcon: <ArrowForwardIcon />,
    },
    {
      title: "I'm Hiring",
      subtitle: "Find the right talent",
      description:
        "Connect with colleges and find candidates — from students to graduates.",
      icon: <BusinessCenterIcon />,
      color: "#9333EA",
      bg: "#FAF5FF",
      features: [
        "Connect directly with colleges",
        "Find the right candidates",
        "Simplify your hiring",
      ],
      button: "Join Waitlist",
      buttonIcon: <NotificationsActiveIcon />,
    },
  ];

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Typography
        component="h2"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
          fontSize: { xs: 20, sm: 26, md: 30 },
          fontWeight: 800,
          color: "#172554",
          mb: 3,
        }}
      >
        <AutoAwesomeIcon sx={{ color: "#2563EB", fontSize: 30 }} />
        What are you{" "}
        <Box component="span" sx={{ color: "#2563EB" }}>
          looking for?
        </Box>
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          },
          gap: { xs: 2, md: 2.5 },
          alignItems: "stretch",
          textAlign: "left",
        }}
      >
        {cards.map((card) => (
          <Box
            key={card.title}
            sx={{
              position: "relative",
              isolation: "isolate",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              height: "100%",
              boxSizing: "border-box",
              p: 2.5,
              border: `1px solid ${card.color}25`,
              borderRadius: "22px",
              background: `linear-gradient(145deg, #FFFFFF 5%, ${card.bg} 100%)`,
              boxShadow: `0 8px 28px ${card.color}12`,
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: `0 16px 36px ${card.color}22`,
                borderColor: `${card.color}65`,
              },
              "&::before": {
                content: '""',
                position: "absolute",
                width: 180,
                height: 180,
                borderRadius: "50%",
                backgroundColor: card.color,
                opacity: 0.07,
                filter: "blur(42px)",
                top: -75,
                right: -65,
                zIndex: -1,
                pointerEvents: "none",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: 100,
                height: 100,
                borderRadius: "50%",
                backgroundColor: card.color,
                opacity: 0.045,
                filter: "blur(30px)",
                bottom: 55,
                left: -50,
                zIndex: -1,
                pointerEvents: "none",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 58,
                height: 58,
                flexShrink: 0,
                borderRadius: "17px",
                color: card.color,
                background: `linear-gradient(135deg, ${card.color}20, ${card.color}10)`,
                mb: 2,
                "& .MuiSvgIcon-root": { fontSize: 32 },
              }}
            >
              {card.icon}
            </Box>

            <Typography
              component="h3"
              sx={{
                fontSize: { xs: 18, md: 19 },
                fontWeight: 800,
                color: "#111827",
                lineHeight: 1.4,
                mb: 0.5,
              }}
            >
              {card.title}
            </Typography>

            <Typography
              sx={{
                color: "#7183A5",
                fontWeight: 600,
                fontSize: 13,
                mb: 2,
              }}
            >
              {card.subtitle}
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                color: "#475569",
                lineHeight: 1.8,
                mb: 2.5,
                minHeight: { sm: 70 },
              }}
            >
              {card.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                mb: 3,
              }}
            >
              {card.features.map((feature) => (
                <Box
                  key={feature}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.2,
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#10B981",
                      fontSize: 20,
                      flexShrink: 0,
                      mt: "1px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 12.5,
                      color: "#475569",
                      lineHeight: 1.65,
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              fullWidth
              endIcon={card.buttonIcon}
              onClick={() => {
                if (card.title === "I'm Looking for a Job") {
                  window.location.href = "/jobs";
                } else {
                  window.alert(
                    card.title === "College"
                      ? "College wishlist coming soon!"
                      : "Hiring waitlist coming soon!"
                  );
                }
              }}
              sx={{
                mt: "auto",
                py: 1.35,
                px: 1.5,
                borderRadius: "12px",
                background: `linear-gradient(100deg, ${card.color}, ${card.color}E6)`,
                color: "#FFFFFF",
                fontSize: 13,
                fontWeight: 700,
                textTransform: "none",
                boxShadow: `0 5px 14px ${card.color}25`,
                "&:hover": {
                  background: card.color,
                  boxShadow: `0 8px 20px ${card.color}35`,
                },
                "&:active": { transform: "scale(0.98)" },
                "&:focus-visible": {
                  outline: `2px solid ${card.color}`,
                  outlineOffset: 3,
                },
              }}
            >
              {card.button}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function StatsBar() {
  const stats = [
    {
      value: "800+",
      label: "Students",
      icon: <GroupsIcon />,
      color: "#2563EB",
    },
    {
      value: "130+",
      label: "Colleges",
      icon: <ApartmentIcon />,
      color: "#0D9488",
    },
    {
      value: "100+",
      label: "Jobs & Internships",
      icon: <WorkHistoryIcon />,
      color: "#9333EA",
    },
    {
      value: "100%",
      label: "Safe & Trusted",
      icon: <VerifiedUserIcon />,
      color: "#16A34A",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, minmax(0, 1fr))",
          md: "repeat(4, minmax(0, 1fr))",
        },
        alignItems: "center",
        width: "100%",
        mt: { xs: 4, md: 5 },
        p: { xs: 2, md: 2.5 },
        border: "1px solid #E5E7EB",
        borderRadius: 3,
        backgroundColor: "rgba(255,255,255,0.85)",
        boxShadow: "0 8px 24px rgba(37,99,235,0.05)",
        boxSizing: "border-box",
      }}
    >
      {stats.map((stat, index) => (
        <Box
          key={stat.label}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
            py: 1.5,
            px: 1,
            borderRight: {
              xs: "none",
              md: index < stats.length - 1 ? "1px solid #E5E7EB" : "none",
            },
            borderBottom: {
              xs: index < 2 ? "1px solid #E5E7EB" : "none",
              md: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              width: 42,
              height: 42,
              borderRadius: 2,
              color: stat.color,
              backgroundColor: `${stat.color}12`,
            }}
          >
            {stat.icon}
          </Box>

          <Box sx={{ textAlign: "left", minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: 19, md: 23 },
                fontWeight: 800,
                lineHeight: 1.3,
                color: "#172554",
              }}
            >
              {stat.value}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 11, sm: 12 },
                color: "#64748B",
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function WhatsAppPanel() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1.5,
        p: 2,
        border: "1px solid #BBF7D0",
        borderRadius: 3,
        backgroundColor: "#F0FDF4",
        width: { xs: "100%", md: 220 },
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      <WhatsAppIcon sx={{ color: "#25D366", fontSize: 28, mt: 0.5 }} />

      <Box>
        <Typography sx={{ fontWeight: 700, color: "#1B1818", fontSize: 16 }}>
          WhatsApp
        </Typography>

        <Typography sx={{ fontWeight: 700, color: "#1B1818", fontSize: 12 }}>
          Get notified on WhatsApp
        </Typography>

        <Typography
          sx={{ color: "#6B7280", mt: 0.5, lineHeight: 1.6, fontSize: 13 }}
        >
          You will get all important updates on your WhatsApp.
        </Typography>
      </Box>
    </Box>
  );
}

function ResumeBuilderPanel() {
  return (
    <Box
      sx={{
        border: "1px solid #BFDBFE",
        borderRadius: 3,
        p: 2,
        width: { xs: "100%", md: 260 },
        flexShrink: 0,
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 6px 20px rgba(37,99,235,0.06)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        <FlashOnIcon sx={{ color: "#2563EB", fontSize: 26 }} />

        <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#1B1818" }}>
          Resume Builder
        </Typography>
      </Box>

      <Typography
        sx={{ pl: "35px", fontWeight: 700, fontSize: 13, color: "#1B1818" }}
      >
        Build Your Resume
      </Typography>

      <Typography
        sx={{
          pl: "35px",
          mt: 0.5,
          color: "#6B7280",
          lineHeight: 1.6,
          fontSize: 12,
        }}
      >
        Our resume builder gives you dynamic options to build better and faster
        resumes that get you hired.
      </Typography>
    </Box>
  );
}

function PartnerCompaniesSection() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        mt: { xs: 4, md: 5 },
        px: { xs: 1, sm: 2 },
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: 18, sm: 22 },
          fontWeight: 800,
          color: "#172554",
          mb: 1,
        }}
      >
        Our Partner Companies
      </Typography>

      <Typography sx={{ color: "#64748B", fontSize: 13, mb: 2.5 }}>
        Trusted by companies creating career opportunities.
      </Typography>

      <Box
        component="img"
        src={PartnerCompanies}
        alt="CampusPe partner companies"
        sx={{
          display: "block",
          width: "100%",
          maxWidth: 1000,
          height: "auto",
          maxHeight: { xs: 120, sm: 180, md: 220 },
          objectFit: "contain",
          mx: "auto",
          borderRadius: 2,
        }}
      />
    </Box>
  );
}

export default function Header() {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        p: { xs: 2, md: 3 },
        boxSizing: "border-box",
        background:
          "radial-gradient(ellipse at top center, #EFF6FF 0%, #FFFFFF 65%)",
      }}
    >
      {/* Main three-column layout */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: { xs: 3, md: 3 },
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <WhatsAppPanel />

        {/* Hero, cards and stats */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            textAlign: "center",
            py: 2,
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mb: 2,
            }}
          >
            <SmartToyIcon sx={{ color: "#2563EB", fontSize: 30 }} />

            <Typography
              sx={{ color: "#2563EB", fontSize: 14, fontWeight: 600 }}
            >
              AI-powered Campus Assistant
            </Typography>
          </Box>

          <Typography
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: 28, sm: 36, md: 42 },
              lineHeight: 1.2,
              color: "#1B1818",
            }}
          >
            Connect{" "}
            <Box component="span" sx={{ color: "#2563EB" }}>
              10X Faster
            </Box>
          </Typography>

          <Typography
            sx={{ color: "#6B7280", mt: 2, fontSize: 14, lineHeight: 1.8 }}
          >
            One platform connecting students, colleges & employers — faster.
          </Typography>

          <LookingForCards />
          <StatsBar />
        </Box>

        <ResumeBuilderPanel />
      </Box>

      {/* Full-width section below the main layout */}
      <PartnerCompaniesSection />
    </Box>
  );
}
