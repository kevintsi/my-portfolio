import { useState, useEffect } from "react";

const useHideOnScrolled = () => {
  let lastScrollTop = 0;
  const [hidden, setHidden] = useState(false);
  const handleScroll = () => {
    // const top = window.pageYOffset || document.documentElement.scrollTop;
    // setHidden(top !== 0);

    // console.log("Hidden before update : " + hidden)
    // console.log("Before update last top : " + lastScrollTop)
    const top = window.pageYOffset || document.documentElement.scrollTop;
    // console.log("current Top : " + top)
    // console.log("Result bool condition : " + (!hidden && top > lastScrollTop))
    if (!hidden && top > lastScrollTop) {
      console.log("In non hidden")
      setHidden(true)
    } else {
      console.log("In hidden")
      setHidden(false)
    }

    // console.log("Hidden : " + hidden)
    lastScrollTop = top;
    // console.log("Last top : " + lastScrollTop)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return hidden;
};

export default useHideOnScrolled;
