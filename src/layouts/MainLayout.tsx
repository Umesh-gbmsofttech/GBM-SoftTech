import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Navbar } from "@components/nav/Navbar";
import { Footer } from "@components/nav/Footer";

const PageShell = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: "flex",
  flexDirection: "column"
}));

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingTop: theme.spacing(2)
}));

export const MainLayout = () => {
  return (
    <PageShell>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </PageShell>
  );
};
