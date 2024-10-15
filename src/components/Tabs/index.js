import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {
  FaHome,
  FaDownload,
  FaFileAlt,
  FaClipboardList,
} from "react-icons/fa"; // Import necessary icons

function TabComponent({activeKey}) {
  return (
    <div className="d-flex mb-4 align-items-center justify-content-between">
    <Nav variant="pills" className="flex-row ">
      <Nav.Item
        className={
          activeKey === "first" ? "active-tab" : "noactive-tab"
        }
      >
        <Nav.Link eventKey="first">
          <FaHome className="header-text me-2 noactive-tab" /> Data
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={
          activeKey === "second" ? "active-tab" : "noactive-tab"
        }
      >
        <Nav.Link eventKey="second">
          <FaClipboardList className="header-text me-2" /> Summary
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={
          activeKey === "third" ? "active-tab" : "noactive-tab"
        }
      >
        <Nav.Link eventKey="third">
          <FaFileAlt className="header-text me-2" /> Logs
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Button variant="primary" disabled>
      <FaDownload className="me-2" /> Download
    </Button>
  </div>
  );
}

export default TabComponent;
