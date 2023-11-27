import React, {useEffect} from 'react';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Guard from "./Guard";
import Footer from "./Footer";

//TODO INTERSECTION OBSERVER API
  
function App() {
  useEffect(() => {
    function observerFunc(entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    }

    const sectionObserver = new IntersectionObserver(observerFunc, {
      root: null,
      threshold: 0.15,
    });

    const allSections = document.querySelectorAll('.section');
    allSections.forEach(function (section) {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    });

    return () => {
      allSections.forEach(function (section) {
        sectionObserver.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Services />
      <Carousel />
      <Contact />
      <Guard />
      <Footer />
    </div>
  );
}

export default App;
