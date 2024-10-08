import hero from '../../assets/images/hero.png'
export const Hero = () => {
  return (
    <div className="position-absolute vh-100 d-flex justify-content-center align-items-center top-0 w-100">
      <div className="container px-4">
        <div className="d-flex flex-lg-row flex-column justify-content-around align-items-center gap-5 py-0">
          <img className={`w-50`} src={hero}/>
          
          <div className="mt-3 mt-md-0 text-white">
              <p className="fw-bolder mb-4 fs-1">Crafted for Unforgettable Moments.</p>
              <p className='m-0'>Discover our elegant wedding invitation templates to add a touch of charm to your special day. Choose from a variety of styles and themes, easily customize, and let your love story shine through every detail.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
