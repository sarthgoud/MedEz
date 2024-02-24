import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DietModal = (props) => {
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div class="row g-0">
                <div class="col-md-6">
                <div className="card" style={{ margin: "10px"}}>
                <div className="card-body">
                    <h6 className="card-title">{"Diet"}</h6>
                    <ul>
                      {props.Diet.map(data=>(
                        <li>{data}</li>
                      ))}
                    </ul>
                </div>
            </div>
                </div>
                <div class="col-md-6">
                  <div className="card" style={{ margin: "10px"}}>
                  <div className="card-body">
                      <h6 className="card-title">{"Exercises"}</h6>
                      <ul>
                      {props.Exercises.map(data=>(
                        <li>{data}</li>
                      ))}
                    </ul>
                  </div>
                  </div>
                </div>
            </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export {DietModal}