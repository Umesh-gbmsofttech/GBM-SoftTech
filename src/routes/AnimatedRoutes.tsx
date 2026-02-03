import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MainLayout } from "@layouts/MainLayout";
import { routeConfig } from "@routes/routeConfig";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          {routeConfig.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
