import { Features } from "../../data/data";

export const Fitur = () => {
  return (
    <section className="py-5 bg-section">
        <div className="container">
            <div className="row g-4 justify-content-center">
                <div className="mt-0">
                    <p className="mb-0 text-center fs-4 fw-bold text-header">Our Feature</p>
                    <p className="m-0 text-center fs-2 fw-bold">Let's take a look!</p>
                </div>
                
                {Features.map((feature) => (
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex flex-row bg-white shadow rounded-3 align-items-baseline p-3 gap-3">
                            <div className="p-2 bg-icons rounded-circle">
                                <img className="position-relative" width={30} src={feature.icon}/>
                            </div>

                            <div className="position-relative d-flex flex-column gap-2 justify-content-center" style={{height:"160px"}}>
                                <p className="fs-4 fw-semibold mb-0">{feature.title}</p>
                                <p className="mb-0">{feature.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
