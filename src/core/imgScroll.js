import styled from "styled-components";
import React from "react";

const ImageSlider = () => {
  return (
    <CourselBackGround>
      <ul class="cb-slideshow">
        <li>
          <span>Image 01</span>
          <div>
            <h3>The Future Of Farming</h3>
          </div>
        </li>
        <li>
          <span>Image 02</span>
          <div>
            <h3>No · Soil</h3>
          </div>
        </li>

        <li>
          <span>Image 03</span>
          <div>
            <h3>Faster · Growth</h3>
          </div>
        </li>
      </ul>
    </CourselBackGround>
  );
};
const CourselBackGround = styled.div`
  min-height: 100vh;
  background-image: url(https://tympanus.net/Tutorials/CSS3FullscreenSlideshow/images/pattern.png);

  .cb-slideshow,
  .cb-slideshow:after {
    list-style: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 70px;
    left: 0px;
    z-index: 0;
  }
  .cb-slideshow:after {
    content: "";
  }
  .cb-slideshow li span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    color: transparent;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: none;
    opacity: 0;
    z-index: -1;
    animation: imageAnimation 24s linear infinite 0s;
  }
  .cb-slideshow li div {
    z-index: 1000;
    position: absolute;
    bottom: 80px;
    left: 0px;
    width: 100%;
    text-align: center;
    opacity: 0;
    color: #fff;
    overflow: hidden;
    z-index: 1000;
    animation: titleAnimation 24s linear infinite 0s;
  }
  .cb-slideshow li div h3 {
    max-width: 100vw;
    object-fit: contain;
    overflow: hidden;
    color: rgb(0, 26, 87);
    font-size: 100px;
    font-family: "Times New Roman", Times, serif;
    padding: 0;
    line-height: 200px;
  }

  .cb-slideshow li:nth-child(1) span {
    filter: blur(2.4px);
    background-image: url(https://image.freepik.com/free-photo/hydroponics-system-planting-vegetables-herbs-without-using-soil-health_1150-8154.jpg);
  }
  .cb-slideshow li:nth-child(2) span {
    filter: blur(1px);
    background-image: url("/images/h-h3.jpg");
    animation-delay: 8s;
  }
  .cb-slideshow li:nth-child(3) span {
    filter: blur(2.4px);
    background-image: url("/images/h-h2.jpg");
    animation-delay: 16s;
  }

  .cb-slideshow li:nth-child(2) div {
    animation-delay: 8s;
  }
  .cb-slideshow li:nth-child(3) div {
    animation-delay: 16s;
  }

  @keyframes imageAnimation {
    0% {
      opacity: 0;
      animation-timing-function: ease-in;
    }
    8% {
      opacity: 1;
    }
    17% {
      opacity: 0.7;
      animation-timing-function: ease-out;
    }
    35% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes titleAnimation {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    8% {
      opacity: 1;
    }
    17% {
      opacity: 1;
      transform: scale(1);
    }
    29% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  .no-cssanimations .cb-slideshow li span {
    opacity: 1;
  }
  @media screen and (max-width: 1140px) {
    .cb-slideshow li div h3 {
      font-size: 140px;
    }
  }
  @media screen and (max-width: 600px) {
    .cb-slideshow li div h3 {
      font-size: 80px;
    }
  }
`;
export default ImageSlider;
