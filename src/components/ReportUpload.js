import './ReportPage.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from  '../cloudUpload.png'

const ReportUpload = () => {
    return (
        <div>
            <div className='card' style={{width: "25rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Upload Lab Report</h5>
                    <h6 className="card-subtitle mb-2 text-muted" style={{ marginTop: "10px", marginBottom: "10px"}}>Please attach a lab report to proceed</h6>
                    <div className='card mb-3' style={{ marginTop: "20px", marginBottom: "20px"}}>
                        <div className='row g-0'>
                            <div class="col-md-2">
                                <img className='img-fluid rounded-start uploadImg' src={img}/>
                            </div>
                            <div className='col-md-8'>
                            <div className="card-body">
                                <h5 className="card-subtitle" style={{ alignSelf: "center", marginTop: "3px" }}>UPLOAD LAB REPORT</h5>
                            </div>
                            </div>
                            <input type="file" accept='.pdf, .PDF'/>
                        </div>
                        
                    </div>
                    <hr/>
                    <h6 className="card-subtitle mb-2 text-muted">Attached Lab Report</h6>
                    <p className="card-text">Uploaded lab report will be shown here</p>
                    <button className='btn btn-primary' style={{ marginTop: "10px", marginBottom: "10px", marginLeft: "120px" }}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export {ReportUpload}