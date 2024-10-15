import { Col, Row } from "react-bootstrap";
import DataTable from "../TableComponent";
import WorkFlowComponent from "../WorkFlowComponent";


function MainComponent() {
  return (
    <div className="p-5">
      <Row>
        <Col sm={9} className="d-flex flex-column">
          <DataTable />
        </Col>
        <Col sm={3}>
          <WorkFlowComponent />
        </Col>
      </Row>
    </div>
  );
}

export default MainComponent;
