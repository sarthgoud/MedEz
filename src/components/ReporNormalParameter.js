
import './ReportAbnormalParameter.css'

const ReportNormalParameter = (props) => {
    const data = {"normal_parameters":props.data};
    console.log("normal",data);
    return(
        <div>
            <div className="card" style={{ margin: "10px" }}>
                <div className="card-body">
                    <h6 className="card-title text-center" style={{ fontSize: "20px" }}>Normal Parameters</h6>
                    <table className='parameter'>
                        <thead>
                            <tr className='tableCss'>
                                <th>{"Parameter"}</th>
                                <th>{"Results"}</th>
                                <th>{"Units"}</th>
                                <th style={{ minWidth: "180px" }}>{"Reference Range"}</th>
                                <th>{"Summary"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.normal_parameters.map ((data) => (
                                <tr className='tableCss'>
                                <td>{data.parameter_name}</td>
                                <td>{data.observed_value}</td>
                                <td>{data.unit}</td>
                                <td>{data.biological_reference_interval}</td>
                                <td>{data.summary}</td>
                                </tr>
                            ))}                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export {ReportNormalParameter}