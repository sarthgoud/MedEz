import './ReportPage.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from  '../cloudUpload.png'

const ReportFeedbackPostive = () => {
    return (
        <div>
            <div className="card text-center" style={{ margin: "10px" }}>
                <div className="card-body" style={{ backgroundColor: '#95f095' }}>
                    <p>Looking good!!</p>
                    <p>Keep up the healthy habits</p>
                </div>
            </div>
        </div>
    )
}

export {ReportFeedbackPostive}