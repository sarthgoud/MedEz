import './ReportPage.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from  '../cloudUpload.png'
import { ReportSummary } from './ReportSummary';
import { ReportFeedback } from './ReportFeedback';
import { ReportFeedbackNegative } from './ReportFeedbackNegative';
import { ReportFeedbackPostive } from './ReportFeedbackPositive';
import { ReportPatientDetails } from './ReportPatientDetails';

const ReportReview = () => {
    
    const summaryResponse = {
        "abnormal_parameters": [
          {
            "parameter": "HbA1c",
            "observed_value": "6.8",
            "unit": "%",
            "biological_reference_interval": "Non-diabetic: <= 5.6 Pre-diabetic: 5.7-6.4 Diabetic: >= 6.5",
            "criticality_level": "High"
          },
          {
            "parameter": "Estimated Average Glucose (eAG)",
            "observed_value": "148.46",
            "unit": "mg/dL",
            "biological_reference_interval": "N/A",
            "criticality_level": "High"
          }
        ],
        "summary": "The patient's HbA1c level is 6.8%, which is above the normal range for non-diabetic individuals. This indicates that the patient may have diabetes and should be monitored closely. The estimated average glucose level is also high at 148.46 mg/dL.",
        "patient_details": {
          "name": "Mr. Milind Maruti Pingale",
          "age": "46.5 years",
          "sex": "Male",
          "PID_NO": "P2292200001557",
          "address": "Baner, Pune City",
          "tel_no": "9969112302",
          "PIN_no": "411045",
          "VID": "220229000002130",
          "collected_on": "03/09/2022 4:05PM",
          "registered_on": "03/09/2022 04:03 PM",
          "reported_on": "03/09/2022 07:17 PM"
        }
      }

    return (
        <div>
            <div class="card mb-3" style={{maxWidth: "1000px"}}>
                <div class="row g-0">
                    <div class="col-md-8">
                        <ReportSummary SummaryHead={"Paitent Report Summary"} SummaryBody={summaryResponse.summary}/>
                    </div>
                    <div class="col-md-4">
                        {"negative" == "negative" ? <ReportFeedbackNegative Treatment={""} Diet={""}/> 
                        : <ReportFeedbackPostive/>}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export {ReportReview}