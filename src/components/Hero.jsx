import CustomButton from  './CustomButton';

const Hero = () => {

  const handleScroll = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    };

  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 banner__column ps-5">
            <h1 className="hero__title">
              Find, Browse and Shop a Guitar — quickly and easily! 
            </h1>

            <p className="hero__subtitle">
              The Guitar Store that's always online. 
            </p>

            <CustomButton 
              title="Browse Products"
              containerStyles="shop-now__button"
              handleClick={handleScroll}
            />
          </div>
          <div className="col-lg-6 image__column">
              <img src="../images/guitar.png" className="guitar__image" />
          </div>
        </div>
      </div>
  )
}

export default Hero;