import { AllItmes } from "../../data/data"

export const Flippingitems = () => {
  return (
    <section className="position-relative pb-2 text-center pb-5">
        <div className="container">
          <div className="py-4">
            <p className="mb-0 text-center fs-4 fw-bold text-header">Our Designs</p>
            <p className="m-0 text-center fs-2 fw-bold">Customize Your Design as Much as You Want</p>
          </div>
          
          <div className="row justify-content-center g-4">
              {AllItmes.map((item) => (
                <div className="col-md-4" key={item.id}>
                  <div className={`card shadow rounded-3 ${item.link ? 'card-feature' : 'card-soon'} position-relative`}>
                    {item.link ? 
                      <a href={item.link} target="__blank">
                        <p className="position-absolute top-50 translate-middle start-50 fw-bold fs-4 text-white">View</p>
                      </a> : null
                    }
                    <img className="w-100 rounded-3 " src={item.image} alt={item.title}/>
                    <p className="position-absolute bg-white bg-opacity-75 px-3 rounded-top-left-2 bottom-0 end-0 m-0">{item.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
    </section>
  )
}
