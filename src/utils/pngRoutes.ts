export interface PngPage {
  file: string;
  path: string;
  name: string;
}

export const pngPages: PngPage[] = [
  { file: "Home Page 1.png", path: "/", name: "Home" },
  { file: "Home Page 2.png", path: "/", name: "Home" },
  { file: "About page.png", path: "/about", name: "About" },
  { file: "Services page.png", path: "/services", name: "Services" },
  { file: "Products page 1.png", path: "/products", name: "Products" },
  { file: "Products page 2.png", path: "/products", name: "Products" },
  { file: "Portfolio page.png", path: "/portfolio", name: "Portfolio" },
  { file: "blog page.png", path: "/blog", name: "Blog" },
  { file: "Join Our team page.png", path: "/careers", name: "Careers" },
  { file: "Contact Us page.png", path: "/contact", name: "Contact" }
];

export const getUniqueRoutes = () => {
  const unique = new Map<string, PngPage>();
  pngPages.forEach((page) => {
    if (!unique.has(page.path)) {
      unique.set(page.path, page);
    }
  });
  return Array.from(unique.values());
};
