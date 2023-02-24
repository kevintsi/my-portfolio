import { useState, useEffect } from "react";

// const useHideOnScrolled = () => {
//   const [lastScrollTop, setLastScrollTop] = useState(0);
//   const [hidden, setHidden] = useState(false);
//   const handleScroll = () => {
//     // const top = window.pageYOffset || document.documentElement.scrollTop;
//     // setHidden(top !== 0);

//     // console.log("Hidden before update : " + hidden)
//     // console.log("Before update last top : " + lastScrollTop)
//     const top = window.pageYOffset || document.documentElement.scrollTop;
//     // console.log("current Top : " + top)
//     // console.log("Result bool condition : " + (!hidden && top > lastScrollTop))
//     if (!hidden && top > lastScrollTop) {
//       console.log("In non hidden")
//       setHidden(true)
//     } else {
//       console.log("In hidden")
//       setHidden(false)
//     }

//     // console.log("Hidden : " + hidden)
//     lastScrollTop = top;
//     // console.log("Last top : " + lastScrollTop)
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return hidden;
// };

// export default useHideOnScrolled;


export default function useScroll() {
  // storing this to get the scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // the offset of the document.body
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  // the vertical direction
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  // the horizontal direction
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  // scroll direction would be either up or down
  const [scrollDirection, setScrollDirection] = useState();

  const listener = e => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection
  };
}