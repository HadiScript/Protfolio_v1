
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SEO from "react-seo-component";
import Home from "./pages/Home";
import WorkDetail from "./pages/WorkDetail";
import mine from './assets/mine.jpeg'

function App() {



  return (
    <BrowserRouter>
      <SEO
        title="Hadi - Portolio"
        titleTemplate="hadiraza.com"
        description={'Syed Hadi Raza Portolio'}
        image={mine}
        pathname="hadiraza.com"
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:id" element={<WorkDetail />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
