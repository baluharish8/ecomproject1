import React from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom"
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'

const Carousel = () => {
  const CustomPrevArrow = (props) => (
    <button {...props} className="custom-prev-arrow">
      Previous
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="custom-next-arrow">
      Next
    </button>
  );
  const settings = {
    // dots: true,
    infinite: false,
    // centerPadding: '10px',
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: false,
    draggable: true,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    responsive: [
      {
        dots: true,
        breakpoint: 992,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        dots: false,
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        }
      }, {
        dots: false,
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        }
      },
    ],

  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // "3 4 6 9"
  return (

    <div className='multicarousel pb-4 navbarsmall '  >
      <div className="carousel-container ps-4 mt-4" >
        <Slider {...settings} >
          <div className=''>
            <Link className='linktext text-center'>
              <img src="images/linkfashion.jpg" alt="Image 1" className='imagesize' /> Fashion
            </Link>
          </div>
          <div className='' >
            <Link to="/mobiles" className='linktext sss list1'>
              <img src="images/linkmobile2.jpg" alt="Image 3" className='imagesize  ' />
              Mobiles
            </Link>
          </div>
          <div>
           
            <Link className='linktext text-center'>
              <img src="images/linkelectronic.jpg" alt="Image 4" className='imagesize' />Electronics
           
            </Link>
          </div>
          <div>
            <Link className='linktext'>
              <img src="images/linkappliances.jpg" alt="Image 5" className='imagesize' />
              Aplliances

            </Link>
          </div>
          <div>
            <Link className='linktext'>
              <img src="images/linkhome.jpg" alt="Image 6" className='imagesize' />Furniture
            </Link>
          </div>
          <div>
            <Link className='linktext'>
              <img src="images/linksports.jpg" alt="Image 7" className='imagesize' />
              Sport&Fitness

            </Link>
          </div>
          <div>
            <Link className='linktext'>
              <img src="images/linkkitchen.jpg" alt="Image 8" className='imagesize' /> Kitchen
            </Link>
          </div>
          <div>
            <Link className='linktext'>
              <img src="images/linktoy.jpg" alt="Image 9" className='imagesize' />Kid Toys
            </Link>
          </div>
          <div>
            <Link className='linktext'>
              <img src="images/linkfootware.jpg" alt="Image 2" className='imagesize' />
              Footware

            </Link>
          </div>
        </Slider>
      </div>

    </div>



  );
};

export default Carousel;
