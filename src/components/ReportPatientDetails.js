

const ReportPatientDetails = (props) => {
    const data = {patient_details :props.data};
    console.log(data);
    return(
        <div>
            <div className="card" style={{ margin: "10px"}}>
                <div className="card-body">
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>{data.patient_details.name == undefined ? "N/A" : data.patient_details.name.split(" ")[0] + " "+ data.patient_details.name.split(" ")[1]}</td>
                            </tr>
                            <tr>
                                <td>Age:</td>
                                <td>{data.patient_details.age == undefined ? "N/A" : data.patient_details.age}</td>
                            </tr>
                            <tr>
                                <td>Sex:</td>
                                <td>{data.patient_details.sex == undefined ? "N/A" : data.patient_details.sex}</td>
                            </tr>
                            <tr>
                                <td>Ref by:</td>
                                <td>{data.patient_details.ref_by == undefined ? "N/A" : data.patient_details.ref_by}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export {ReportPatientDetails}