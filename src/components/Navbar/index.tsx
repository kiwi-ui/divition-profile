import React from "react"
import { Hero } from "../Hero"
interface NavbarProps {
  toggle: boolean; 
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({setToggle}) => {
  const openFormModal = () => {
    setToggle((e) => !e)
  }
  return (
    <div className="bg-navbar py-2 vh-100">
        <nav className="navbar">
            <div className="container py-2">
                <a className="fw-bolder fs-3 nav-link fw-semibold text-white " href="#">Divition</a>

                <div className="">
                    <ul className="navbar-nav d-flex align-items-center  flex-row me-auto">
                        {/* <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Tema</a>
                        </li> */}
                        <button onClick={openFormModal} className="rounded-3 border-0 px-3 py-2 fw-semibold fs-5 bg-header text-white" style={{zIndex:1}}>Pesan</button>
                    </ul>
                </div>
            </div>
        </nav>
        <Hero />
    </div>
  )
}
