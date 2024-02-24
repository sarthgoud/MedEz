import './ReportPage.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from  '../cloudUpload.png'
import { ReportSummary } from './ReportSummary';
import { ReportFeedback } from './ReportFeedback';
import { ReportFeedbackNegative } from './ReportFeedbackNegative';
import { ReportFeedbackPostive } from './ReportFeedbackPositive';
import { ReportPatientDetails } from './ReportPatientDetails';

const ReportReview = (props) => {

  const summaryResponse = props.data;
  const feedback = {"abnormal_parameters":props.abnormal};

    return (
        <div>
            <div class="mb-3" style={{maxWidth: "1000px"}}>
                <div class="row g-0">
                    <div class="col-md-8">
                        <ReportSummary SummaryHead={"Summary"} SummaryBody={summaryResponse}/>
                    </div>
                    <div class="col-md-4">
                        {feedback.abnormal_parameters.length >1 ? <ReportFeedbackNegative/> 
                        : <ReportFeedbackPostive/>}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export {ReportReview}