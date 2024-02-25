import './ReportPage.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from '../cloudUpload.png'
import { TreatmentModal } from './TreatmentModal';
import { DietModal } from './DietModal';
import { useState } from 'react';
import axios from 'axios';

const ReportFeedbackNegative = (props) => {
    console.log("inside negative", props.state)
    const [loader, setLoader] = useState(false);

    const [data, setdata] = useState({
        "Precautions": [],
        "Recommendations": [],
        "Food": [],
        "Exercise": []
    });
    const [treatmentModalShow, setTreatmentModalShow] = useState(false);
    const [dietModalShow, setDietModalShow] = useState(false);

    const onchangePre = async () => {
        setLoader(true);
        const response = await axios.post('http://localhost:8000/conclusion', {
            state: props.state
        });
        console.log("reponse in negative", response.data['conclusion']);

        const response1 = await axios.post('http://localhost:8000/recommendation', {
            state: response.data
        });
        console.log("reponse in negative after last call", response1.data);
        setdata(response1.data);
        console.log("%%%%%%%%%%%", data)
        setLoader(false);
        setTreatmentModalShow(true);

    }


    return (
        <div>
            <div className="card text-center" style={{ margin: "10px" }}>
                <div className="card-body">
                    <p className='feedbackNegativeText'>Consult your doctor immediately</p>
                    {loader && <div class="spinner-border" role="status" style={{ "marginLeft": "78%","position":"absolute","marginTop":"1.5%","width":"18px","height":"18px","color":"white"}}>
                <span class="visually-hidden">Loading...</span>
            </div>}
                    <button className='btn btn-primary feedbackNegativeButton' onClick={onchangePre}>Precautions & Recommendations</button>


                    <button className='btn btn-primary feedbackNegativeButton' onClick={() => setDietModalShow(true)}>Diet & Exercises</button>
                </div>
            </div>
            <TreatmentModal show={treatmentModalShow} onHide={() => setTreatmentModalShow(false)} Precautions={data.Precautions} Recommendations={data.Recommendations} heading={"Precautions & Recommendations"} />
            <DietModal show={dietModalShow} onHide={() => setDietModalShow(false)} Diet={data.Food} Exercises={data.Exercise} heading={"Diet & Exercises"} />

          
        </div>

    )
}

export { ReportFeedbackNegative }