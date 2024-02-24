import './ReportPage.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from  '../cloudUpload.png'
import { TreatmentModal } from './TreatmentModal';
import { DietModal } from './DietModal';
import { useState } from 'react';

const ReportFeedbackNegative = (props) => {

    const data = {
        "Precautions": [
            "Monitor blood sugar levels regularly",
            "Follow a healthy diet",
            "Take prescribed medication",
            "Quit smoking",
            "Manage stress"
        ],
        "Recommendations": [
            "Consult with a healthcare provider",
            "Get regular check-ups",
            "Educate yourself",
            "Join a support group",
            "Consider insulin therapy"
        ],
        "Food": [
            "Whole grains",
            "Lean protein",
            "Non-starchy vegetables",
            "Healthy fats",
            "Low-sugar fruits"
        ],
        "Exercise": [
            "Aerobic exercise",
            "Strength training",
            "Yoga",
            "Swimming",
            "Consult with a healthcare provider"
        ]
    }

    const [treatmentModalShow, setTreatmentModalShow] = useState(false);
    const [dietModalShow, setDietModalShow] = useState(false);
    return (
        <div>
            <div className="card text-center" style={{ margin: "10px" }}>
                <div className="card-body">
                    <p className='feedbackNegativeText'>Consult your doctor immediately</p>
                    <button className='btn btn-primary feedbackNegativeButton' onClick={() => setTreatmentModalShow(true)}>Know your Precautions & Recommendations</button>
                    <button className='btn btn-primary feedbackNegativeButton' onClick={() => setDietModalShow(true)}>Know your Diet & Exercises</button>
                </div>
            </div>
            <TreatmentModal show={treatmentModalShow} onHide={() => setTreatmentModalShow(false)} Precautions={data.Precautions} Recommendations={data.Recommendations} heading={"Precautions & Recommendations"}/>
            <DietModal show={dietModalShow} onHide={() => setDietModalShow(false)} Diet={data.Food} Exercises={data.Exercise} heading={"Diet & Exercises"}/>

        </div>
    )
}

export {ReportFeedbackNegative}