/**
 * 
 * Use the useEffect hook to manage the current slide and transition.
Add few images atleast 10 in public folder to populate the slideshow.
Allow users to pause, play the slideshow.
Include a time interval option to control the automatic slideshow progression.


 */

import { useEffect, useState } from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";

const style = {
  height: "100%",
  width: "100%",
  margin: "auto",
};

const SlideShow = () => {
  const imgArr = [image1, image2, image3, image4, image5];

  let [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(isPlaying);
    if (isPlaying === false) {
      setIndex((prevIndex) => prevIndex);
      return;
    }
    let interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div
      style={{
        alignItems: "center",
        margin: "auto",
        width: "50%",
      }}
    >
      <img src={imgArr[index]} alt="img" style={style} />
      <br />
      <button
        onClick={() => setIsPlaying(true)}
        style={{
          margin: "auto",
          width: "50%",
        }}
      >
        Play
      </button>
      <button
        onClick={() => setIsPlaying(false)}
        style={{
          margin: "auto",
          width: "50%",
        }}
      >
        Pause
      </button>
    </div>
  );
};

export default SlideShow;
