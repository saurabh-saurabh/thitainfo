import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import CommingSoon from "./components/products/CommingSoon";
import Template1 from "./components/resume/Template1";

// Articles
import ArticlesMaster from "./components/article/ArticlesMaster";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products" component={CommingSoon} />
        <Route exact path="/javaArticle" component={ArticlesMaster} />
        <Route exact path="/python100" component={ArticlesMaster} />
        <Route exact path="/portfolio/:teamplateName" component={Template1} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
