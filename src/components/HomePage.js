import './HomePage.css'
import 'bootstrap/dist/css/bootstrap.css';
import bgimage from '../bgimg.webp'
import { ReportPage } from './ReportPage';
import { useState } from 'react';
import { ReportGuide } from './ReportGuide';
import FileUpload from './FileUpload';
import { TreatmentModal } from './TreatmentModal';

const HomePage = () => {

    const myStyle = {
        backgroundImage: `url(${bgimage})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });


    return (
        <div style={myStyle}>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">MedEz</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/aboutus">ABOUT US</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/testimonials">TESTIMONIALS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contactus">CONTACT US</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>

                <div className='mb-3'>
                    <div class="row g-0">
                        <div class="col-md-5">
                            <div className='reportSection flex-column'>
                                <label className='reportTitle'>Simplify My Medical Report</label>
                                {/* <button className='btn btn-primary reportButton' onClick={showButton}>Upload Report Now</button> */}
                                <FileUpload/>
                            </div>
                        </div>
                        
                        <div class="col-md-6" style={{ marginTop: "80px" }}>
                            <ReportGuide />
                        </div>
                    </div>

                </div>
            



            {/* {show && <div style={{ marginTop: "50px", backgroundColor: "white", paddingTop: "20px", height: "90%" }}><ReportPage /></div>} */}

        </div>
    )
}

export default HomePage;