import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function SmoothScroll({ children }) {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== "POP") {
      gsap.to(window, {
        scrollTo: {
          y: 0,              
          autoKill: false,    
          ease: "power3.out"  
        },
        duration: 1         
      });
    }
  }, [location, navType]);

  return <>{children}</>;
}

export default SmoothScroll;
