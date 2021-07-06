import "./App.css";
import Base from "./core/base";
import styled from "styled-components";

function App() {
return (
    <Base>
      <div className="App">
        Main Focus
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
			<h3>re·lax·a·tion</h3>
		</div>
    </li>

    <li>
		<span>Image 03</span>
		<div>
			<h3>re·lax·a·tion</h3>
		</div>
    </li>

    <li>
		<span>Image 04</span>
		<div>
			<h3>re·lax·a·tion</h3>
		</div>
    </li>
    </ul>
       </CourselBackGround>
      </div>
    </Base>
  );
}
const CourselBackGround = styled.div`
  min-height:100vh;
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
  content: '';
    
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
  z-index: 0;
  animation: imageAnimation 36s linear infinite 0s; 
}
.cb-slideshow li div { 
  z-index: 1000;
  position: absolute;
  bottom: 30px;
  left: 0px;
  width: 100%;
  text-align: center;
  opacity: 0;
  color: #fff;
  animation: titleAnimation 36s linear infinite 0s; 
}
.cb-slideshow li div h3 { 
  font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif;
  font-size: 120px;
  padding: 0;
  line-height: 200px; 
}

.cb-slideshow li:nth-child(1) span { 
  background-image: url(https://image.freepik.com/free-photo/hydroponics-system-planting-vegetables-herbs-without-using-soil-health_1150-8154.jpg) 
}
.cb-slideshow li:nth-child(2) span { 
  background-image: url("/images/h2.jpg");
  animation-delay: 6s; 
}
.cb-slideshow li:nth-child(3) span { 
  background-image: url("/images/h3.jpg");
  animation-delay: 12s; 
}
.cb-slideshow li:nth-child(4) span { 
  background-image: url("/images/h4.jpg");
  animation-delay: 18s; 
}
.cb-slideshow li:nth-child(5) span { 
  background-image: url(../images/5.jpg);
  animation-delay: 24s; 
}
.cb-slideshow li:nth-child(6) span { 
  background-image: url(../images/6.jpg);
  animation-delay: 30s; 
}

.cb-slideshow li:nth-child(2) div { 
  animation-delay: 6s; 
}
.cb-slideshow li:nth-child(3) div { 
  animation-delay: 12s; 
}
.cb-slideshow li:nth-child(4) div { 
  animation-delay: 18s; 
}
.cb-slideshow li:nth-child(5) div { 
  animation-delay: 24s; 
}
.cb-slideshow li:nth-child(6) div { 
  animation-delay: 30s; 
}

@keyframes imageAnimation { 
  0% { opacity: 0; animation-timing-function: ease-in; }
  8% { opacity: 1; animation-timing-function: ease-out; }
  17% { opacity: 1 }
  25% { opacity: 0 }
  100% { opacity: 0 }
}

@keyframes titleAnimation { 
  0% { opacity: 0 }
  8% { opacity: 1 }
  17% { opacity: 1 }
  19% { opacity: 0 }
  100% { opacity: 0 }
}
.no-cssanimations .cb-slideshow li span{
	opacity: 1;
}
@media screen and (max-width: 1140px) { 
  .cb-slideshow li div h3 { font-size: 140px }
}
@media screen and (max-width: 600px) { 
  .cb-slideshow li div h3 { font-size: 80px }
}
`;

export default App;


// Dotted  url(https://tympanus.net/Tutorials/CSS3FullscreenSlideshow/images/pattern.png)