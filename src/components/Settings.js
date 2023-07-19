const style = {
  color: "#BB9B75",
  backgroundColor: "#F8F8F8",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  textAlign: "center",
  lineHeight: "60px",
  fontSize: "24px",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: "10",
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return <div onClick={onClick} style={{...style, left: "10px"}}>
    <i className="fa-solid fa-angle-left"></i>
  </div>
}
function NextArrow(props) {
  const { className, onClick } = props;
  return <div onClick={onClick} style={{...style, right: "10px"}}>
    <i className="fa-solid fa-angle-right"></i>
  </div>
}


export const mySettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoPlay: true,
  autoPlaySpeed: 2000,
  arrows: true,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>,
  cssEase: "linear",
  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const my__Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  cssEase: "linear",
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const my_Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  cssEase: "linear",
  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
