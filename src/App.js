import "./App.css";
import Base from "./core/base";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {

  const images =  [{
    url : "https://www.google.com/search?q=images+hydroponics&tbm=isch&source=iu&ictx=1&fir=ee853Rojq-rw-M%252CbpY7sTMQYmwFWM%252C_&vet=1&usg=AI4_-kQt4MH-FVbR2w66sSm3x_hZ5KA8vA&sa=X&ved=2ahUKEwihv9DzmczxAhWI7XMBHVurA7sQ9QF6BAgOEAE#imgrc=ee853Rojq-rw-M"
  },
  {
    url : "https://www.google.com/search?q=images+hydroponics&tbm=isch&source=iu&ictx=1&fir=194YG0VNerTxPM%252CbpY7sTMQYmwFWM%252C_&vet=1&usg=AI4_-kQKaHlulous-1X3fubjGmXi-Pc9cA&sa=X&ved=2ahUKEwihv9DzmczxAhWI7XMBHVurA7sQ9QF6BAgNEAE#imgrc=194YG0VNerTxPM"
  },
  {
    url : "https://www.google.com/search?q=images+hydroponics&tbm=isch&source=iu&ictx=1&fir=SfstVdnRCuq2lM%252CR8_1dhrT2mZzDM%252C_&vet=1&usg=AI4_-kTwBmsVSD6wBXjKO3OZNkvbU2y09w&sa=X&ved=2ahUKEwihv9DzmczxAhWI7XMBHVurA7sQ9QF6BAgMEAE#imgrc=SfstVdnRCuq2lM"
  },
  {
    url : "https://www.google.com/search?q=images+hydroponics&tbm=isch&source=iu&ictx=1&fir=O3RY20NQOhgb5M%252CZmfNXFLApP5cBM%252C_&vet=1&usg=AI4_-kRX84g2RVddxLdGecn7WOLIwcwO4A&sa=X&ved=2ahUKEwihv9DzmczxAhWI7XMBHVurA7sQ9QF6BAgJEAE#imgrc=O3RY20NQOhgb5M"
  }
];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Base>
      <div className="App">
        Main Focus
        <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
      </div>
    </Base>
  );
}

export default App;
