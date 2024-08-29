// import hero from '../../assets/images/hero.png'
export const Hero = () => {
  return (
    <div className="position-absolute vh-100 d-flex justify-content-center align-items-center top-0 w-100">
      <div className="container">
        <div className="d-flex flex-lg-row flex-column justify-content-around align-items-center gap-5 py-0">
          {/* <img className={`w-50`} src={hero}/> */}
          
          <div className="text-center text-lg-start mt-3 mt-md-0 text-white ">
              <p className="fw-bolder mb-4 fs-1" style={{lineHeight: '2.3rem'}}>Crafted for Unforgettable Moments.</p>
              <p className='w-xl-75 m-0 w-md-75'>Discover our elegant wedding invitation templates to add a touch of charm to your special day. Choose from a variety of styles and themes, easily customize, and let your love story shine through every detail.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
