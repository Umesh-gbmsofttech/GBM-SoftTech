import { HomePage } from "@pages/HomePage";
import { AboutPage } from "@pages/AboutPage";
import { ServicesPage } from "@pages/ServicesPage";
import { ProductsPage } from "@pages/ProductsPage";
import { ContactPage } from "@pages/ContactPage";
import { CareersPage } from "@pages/CareersPage";
import { getUniqueRoutes } from "@utils/pngRoutes";

export interface RouteItem {
  name: string;
  path: string;
  component: () => JSX.Element;
}

const componentMap: Record<string, () => JSX.Element> = {
  Home: HomePage,
  About: AboutPage,
  Services: ServicesPage,
  Products: ProductsPage,
  Careers: CareersPage,
  Contact: ContactPage
};

export const routeConfig: RouteItem[] = getUniqueRoutes().map((page) => ({
  name: page.name,
  path: page.path,
  component: componentMap[page.name] ?? HomePage
}));
