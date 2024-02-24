import { ReportUpload } from "./ReportUpload"
import { ReportReview } from "./ReportReview"
import { ReportGuide } from "./ReportGuide"
import bgimage from '../bgimg.webp'
import { useLocation } from "react-router-dom"
import { TreatmentModal } from "./TreatmentModal"
import { useState } from "react"
import { ReportPatientDetails } from "./ReportPatientDetails"
import { ReportAbnormalParameter } from "./ReportAbnormalParameter"

const ReportPage = () => {

    const { state } = useLocation();
    console.log(state);
    // const location = useLocation();
    // const {res} = location.state;
    // console.log("Inside Report Page",res);

  
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
                            <a className="nav-link" href="/contactus">CONSTACT US</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div style={{ marginTop: "50px", backgroundColor: "white", paddingTop: "20px", height: "90%" }}>
        <div className="mb-3" style={{ marginTop: "10px", marginLeft: "10px"}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <ReportPatientDetails/>
                </div>
                <div class="col-md-8">
                    <ReportReview/>
                    <ReportAbnormalParameter/>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default ReportPage;