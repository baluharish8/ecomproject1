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
    arrows: true,
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
            <a href='https://www.amazon.in/s?k=fashion&crid=330VC5AC7RPB2&sprefix=fashion%2Caps%2C526&ref=nb_sb_noss_1' className='linktext text-center'>
              <img src="images/linkfashion.jpg" alt="Image 1" className='imagesize' /> Fashion
            </a>
          </div>
          <div className='' >
            <Link to="/mobiles" className='linktext sss list1'>
              <img src="images/linkmobile2.jpg" alt="Image 3" className='imagesize  ' />
              Mobiles
            </Link>
          </div>
          <div>
           
            <a href='https://www.amazon.in/gp/browse.html?node=976419031&ref_=nav_em_sbc_tvelec_all_elec_0_2_9_13' className='linktext text-center'>
              <img src="images/linkelectronic.jpg" alt="Image 4" className='imagesize' />Electronics
           
            </a>
          </div>
          <div>
            <a href='https://www.amazon.in/gp/browse.html?node=5122348031&ref_=nav_em_sbc_tvelec_all_appliance_0_2_9_20' className='linktext'>
              <img src="images/linkappliances.jpg" alt="Image 5" className='imagesize' />
              Aplliances

            </a>
          </div>
          <div>
            <a href='https://www.amazon.in/s?k=furniture&ref=nb_sb_noss_1' className='linktext'>
              <img src="images/linkhome.jpg" alt="Image 6" className='imagesize' />Furniture
            </a>
          </div>
          <div>
            <a href='https://www.amazon.in/gp/browse.html?node=1984443031&ref_=nav_em_sbc_sportslugg_all_sports_0_2_14_15' className='linktext'>
              <img src="images/linksports.jpg" alt="Image 7" className='imagesize' />
              Sport&Fitness

            </a>
          </div>
          <div>
            <a href='https://www.amazon.in/gp/browse.html?node=5925789031&ref_=nav_em_sbc_hk_kitchendining_0_2_12_3' className='linktext'>
              <img src="images/linkkitchen.jpg" alt="Image 8" className='imagesize' /> Kitchen
            </a>
          </div>
          <div>
            <a href='https://www.amazon.in/gp/browse.html?node=1350380031&ref_=nav_em_sbc_tbk_toys_games_0_2_15_2' className='linktext'>
              <img src="images/linktoy.jpg" alt="Image 9" className='imagesize' />Kid Toys
            </a>
          </div>
          <div>
            <a href='https://www.amazon.in/s?k=footwear&ref=nb_sb_noss' className='linktext'>
              <img src="images/linkfootware.jpg" alt="Image 2" className='imagesize' />
              Footware

            </a>
          </div>
        </Slider>
      </div>

    </div>



  );
};

export default Carousel;
