import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "@routes/AnimatedRoutes";
import { ScrollToTop } from "./ScrollToTop";


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
