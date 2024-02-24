
import './ReportAbnormalParameter.css'

const ReportAbnormalParameter = (props) => {
    const data = {"abnormal_parameters":props.data};
    console.log("abnormal",data);

    
    // const data = {"abnormal_parameters": [
    //     {
    //       "parameter": "HbA1c",
    //       "observed_value": "6.8",
    //       "unit": "%",
    //       "biological_reference_interval": "Non-diabetic: <= 5.6 Pre-diabetic: 5.7-6.4 Diabetic: >= 6.5",
    //       "criticality_level": "High"
    //     },
    //     {
    //       "parameter": "Estimated Average Glucose (eAG)",
    //       "observed_value": "148.46",
    //       "unit": "mg/dL",
    //       "biological_reference_interval": "N/A",
    //       "criticality_level": "High"
    //     }
    //   ]}

    return(
        <div>
            <div className="card" style={{ margin: "10px" }}>
                <div className="card-body">
                    <p>Abnormal Parameter</p>
                    <table>
                        <thead>
                            <tr className='tableCss'>
                                <th>{"Parameter"}</th>
                                <th>{"Results"}</th>
                                <th>{"Units"}</th>
                                {/* <th>{"Reference Range"}</th>
                                <th>{"Criticality Level"}</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {data.abnormal_parameters.map ((data) => (
                                <tr className='tableCss'>
                                <td className='tableCss'>{data.parameter_name
}</td>
                                <td className='tableCss'>{data.observed_value}</td>
                                <td className='tableCss'>{data.unit}</td>
                                {/* <td className='tableCss'>{data.biological_reference_interval}</td>
                                <td className='tableCss'>{data.criticality_level}</td> */}
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export {ReportAbnormalParameter}