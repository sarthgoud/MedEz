
import './ReportAbnormalParameter.css'

const ReportAbnormalParameter = (props) => {
    const data = {"abnormal_parameters":props.data};
    console.log("abnormal",data);
    return(
        <div>
            <div className="card" style={{ margin: "10px" }}>
                <div className="card-body">
                    <h6 className="card-title text-center" style={{ fontSize: "20px" }}>Parameters</h6>
                    <table className='parameter'>
                        <thead className='tablethead'>
                            <tr className='tableCss'>
                                <th>{"Parameter"}</th>
                                <th>{"Results"}</th>
                                <th>{"Units"}</th>
                                <th>{"Reference Range"}</th>
                                <th>{"Summary"}</th>
                            </tr>
                        </thead>
                        <tbody className='tablebody'>
                            {data.abnormal_parameters.map ((data) => (
                                <tr className='tableCss'>
                                <td>{data.parameter_name}</td>
                                <td style={{'fontWeight':'bold'}}>{data.observed_value}</td>
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

export {ReportAbnormalParameter}