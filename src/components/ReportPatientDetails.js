

const ReportPatientDetails = (props) => {
    const data = {patient_details :props.data};
    console.log(data);
    return(
        <div>
            <div className="card" style={{ margin: "10px" }}>
                <div className="card-body">
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>{data.patient_details.name}</td>
                            </tr>
                            <tr>
                                <td>Age:</td>
                                <td>{data.patient_details.age}</td>
                            </tr>
                            <tr>
                                <td>Sex:</td>
                                <td>{data.patient_details.sex}</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>{data.patient_details.tel_no}</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td>{data.patient_details.address}</td>
                            </tr>
                            <tr>
                                <td>PID NO:</td>
                                <td>{data.patient_details.PID_NO}</td>
                            </tr>
                            <tr>
                                <td>PIN No:</td>
                                <td>{data.patient_details.PIN_no}</td>
                            </tr>
                            <tr>
                                <td>VID:</td>
                                <td>{data.patient_details.VID}</td>
                            </tr>
                            <tr>
                                <td>Registered Date:</td>
                                <td>{data.patient_details.registered_on}</td>
                            </tr>
                            <tr>
                                <td>Report Date:</td>
                                <td>{data.patient_details.reported_on}</td>
                            </tr>
                            <tr>
                                <td>Collected Date:</td>
                                <td>{data.patient_details.collected_on}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export {ReportPatientDetails}