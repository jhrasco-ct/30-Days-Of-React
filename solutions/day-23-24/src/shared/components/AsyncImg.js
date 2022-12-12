// Reference: https://dev.to/diraskreact/react-async-image-loading-lka

import { useEffect, useState } from "react";

const AsyncImg = (props) => {
  const [loadedSrc, setLoadedSrc] = useState();

  useEffect(() => {
    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src);
      };

      const image = new Image();
      image.addEventListener("load", handleLoad);
      image.src = props.src;

      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [props.src]);

  return loadedSrc === props.src ? <img {...props} alt={props.alt} /> : null;
};

export default AsyncImg;
