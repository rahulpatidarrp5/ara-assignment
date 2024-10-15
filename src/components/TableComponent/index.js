import React, { useState } from "react";
import {
  Form,
  Tab,
  Table,
  Row,
  Col,
  Card
} from "react-bootstrap"; // Import components from react-bootstrap
import { useSelector } from "react-redux";
import {
  FaTrash
} from "react-icons/fa"; // Import necessary icons
// styles
import "./DataTable.css"; 
// components
import TabComponent from "../Tabs";
import CardHeaderComponent from "./CardHeaderComponent";

const options = [
  { value: "", label: "Choose..." },
  { value: "float", label: "Float" },
  { value: "serial", label: "Serial" },
  { value: "object", label: "Object" },
  { value: "int", label: "Int" },
];

const DataTable = () => {
  const data = useSelector((state) => state?.myData?.items);
  const [activeKey, setActiveKey] = useState("first");

  // Assuming data is an array of objects
  const tableHeaders = data?.table_headers || [];
  const tableData = data?.table_data || [];



  return (
    <Tab.Container
            id="left-tabs-example"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
            defaultActiveKey="first"
          >
            <TabComponent activeKey={activeKey} />
            
            <Row>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Card>
                      <CardHeaderComponent />                  
                      <Card.Body>
                        <Table responsive>
                          <thead className="table-header">
                            <tr>
                              <th>#</th>
                              {tableHeaders.map((header, index) => (
                                <th key={index}>
                                  <div className="header-container">
                                    <span>{header.name}</span>
                                    <FaTrash
                                      className="delete-icon"
                                      onClick={() =>
                                        console.log(
                                          `Delete header: ${header.name}`
                                        )
                                      }
                                    />
                                  </div>
                                  <Form.Select
                                    value={header?.type}
                                    className="header-select"
                                  >
                                    {options.map((option) => (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {tableData.map((row, rowIndex) => (
                              <tr key={rowIndex}>
                                <td>{rowIndex + 1}</td>
                                {row.map((cell, cellIndex) => (
                                  <td key={cellIndex}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Card>
                      <Card.Body>
                        <h5> Summary Content Here</h5>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
  );
};

export default DataTable;
