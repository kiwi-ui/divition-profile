import send from '../../assets/svg/send.svg'
interface FormOrderProps {
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
    toggle: boolean
}

export const FormOrder: React.FC<FormOrderProps> = ({ toggle, setToggle }) => {
    const toggleClose = () => { setToggle(!toggle) }
    return (
        <section className={`vh-100 bg-dark d-flex position-fixed w-100 justify-content-center align-items-center ${toggle ? '' : 'd-none'}`} style={{zIndex: 10}}>
            <button type="button" onClick={ toggleClose } className="btn-close btn-close-white position-absolute top-0 end-0 mt-3 me-3 fs-5"></button>
            <div className=" bg-white w-75 rounded" style={{ zIndex:30 }}>
                <form className="container p-4 flex-grow-1">
                    <div className="row">
                        <div>
                            <p className="fs-1">Create Your Order</p>
                        </div>
                        <div className="col-12 col-lg-6 mb-4">
                            <label className="form-label fsemibold">Nama Pemesan</label>
                            <input type="text" className="form-control" id="name" name="name"/>
                        </div>
                        <div className="col-12 col-lg-6 mb-4">
                            <label  className="form-label fsemibold">Email</label>
                            <input type="email" className="form-control" id="email" name="email"/>
                        </div>
                        <div className="col-12 col-lg-6 mb-4">
                            <label  className="form-label fsemibold">Nomor Ponsel</label>
                            <input type="number" className="form-control" id="phone" name="phone"/>
                        </div>
                        <div className="col-12 col-lg-6 mb-4">
                            <label  className="form-label fsemibold">Nama Pengantin Wanita</label>
                            <input type="text" className="form-control" id="bride" name="bride"/>
                        </div>
                        <div className="col-12 col-lg-6 mb-4">
                            <label  className="form-label fsemibold">Nama Pengantin Pria</label>
                            <input type="text" className="form-control" id="groom" name="groom"/>
                        </div>
                        <div className="col-12 col-lg-6 mb-4">
                            <label  className="form-label fsemibold">Tanggal Pernikahan</label>
                            <input type="date" className="form-control" id="date" name="date"/>
                        </div>
                        <div className="">
                            <button type="button" className="bg-hero text-white btn fw-bold prime-background position-relative float-end">
                                {/* <img className="d-inline" src={send} alt="send"/> */}
                                <p className="m-0">Kirim</p>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
  )
}
