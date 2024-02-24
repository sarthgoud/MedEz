import './ReportPage.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from  '../cloudUpload.png'

const ReportSummary = (props) => {
    return (
        <div>
            <div className="card text-center" style={{ margin: "10px"}}>
                <div className="card-body">
                    <h6 className="card-title">{props.SummaryHead}</h6>
                    <p className="card-text">{props.SummaryBody}</p>
                </div>
            </div>
        </div>
    )
}

export {ReportSummary}