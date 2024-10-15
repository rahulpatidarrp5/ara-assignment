import { Badge, Card } from "react-bootstrap";
import {

  FaCog
} from "react-icons/fa"; // Import necessary icons
import { useSelector } from "react-redux";

function CardHeaderComponent() {
  const data = useSelector((state) => state?.myData?.items);
  const rowCount = data?.row_count
  console.log("useSelector", data?.row_count);

  return (
    <Card.Header>
      <div className="d-flex gap-3 align-items-center">
        <Badge bg="primary">
          {" "}
          <FaCog className="me-2" />
          PROJECT NAME
        </Badge>

        <span className="ml-2" style={{ color: "black" }}>
          ETL New Demo 2
        </span>

        <Badge bg="primary">
          {" "}
          <FaCog className="me-2" />
          OUTPUT DATASET NAME
        </Badge>

        <span className="ml-2" style={{ color: "black" }}>
          ETL New Demo 2
        </span>

        <Badge bg="primary">
          {" "}
          <FaCog className="me-2" />
          LAST RUN
        </Badge>

        <span className="ml-2" style={{ color: "black" }}>
          Not Available
        </span>

        <div className="rowdata">
          <span className="ml-2" style={{ color: "black" }}>
            Row : {rowCount}
          </span>
        </div>
      </div>
    </Card.Header>
  );
}

export default CardHeaderComponent;
