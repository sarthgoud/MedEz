import './ReportPage.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from  '../biobanner.png'

const ReportGuide = () => {
    return (
        <div>
            <div class="card mb-3" style={{maxWidth: "600px"}}>
            <h5 style={{ margin: "10px" }} >Guide to upload a lab report</h5>
            <div class="row g-0">
                <div class="col-md-6">
                <img src={img} class="img-fluid rounded-start guideImage"/>
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <ul>
                            <li>Maximum allowed file size: 2MB</li>
                            <li>Supported file type: pdf</li>
                            {/* <li>Avoid blurred image</li>
                            <li>Don't crop out any part of image</li> */}
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export {ReportGuide}