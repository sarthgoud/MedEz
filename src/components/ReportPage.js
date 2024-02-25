import { ReportUpload } from "./ReportUpload"
import { ReportReview } from "./ReportReview"
import { ReportGuide } from "./ReportGuide"
import bgimage from '../bgimg.webp'
import { useLocation } from "react-router-dom"
import { TreatmentModal } from "./TreatmentModal"
import { useState } from "react"
import { ReportPatientDetails } from "./ReportPatientDetails"
import { ReportAbnormalParameter } from "./ReportAbnormalParameter"
import { ReportNormalParameter } from "./ReporNormalParameter"

const ReportPage = () => {

    const { state } = useLocation();
    console.log(state);
    const abnormal = state.abnormal_parameters;
    console.log("ab",abnormal);
    const patient_details = state.patient_details;
    const summary = state.overall_summary;
    const normal = state.normal_parameters




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
                            <a className="nav-link" href="/contactus">CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div style={{ marginTop: "50px", backgroundColor: "white", paddingTop: "20px", height: "90%" }}>
        <div className="mb-3" style={{ marginTop: "10px", marginLeft: "10px"}}>
            <div class="row g-0">
                <div class="col-md-3">
                    <ReportPatientDetails data={patient_details}/>
                </div>
                <div class="col-md-9">
                    <ReportReview data = {summary} abnormal={abnormal} state = {state}/>
                </div>
            </div>
            {abnormal.length!=0 && <ReportAbnormalParameter data={abnormal}/>}
            {/* {normal!==undefined &&<ReportNormalParameter data={normal}/>} */}
        </div>
        </div>
        </div>
    )
}

export default ReportPage;