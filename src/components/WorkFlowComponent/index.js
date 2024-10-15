import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import {
  FaPlus,
  FaMinus,
  FaClipboardList,
  FaDownload,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import "./WorkFlowComponent.css";
import { useSelector } from "react-redux";

const WorkFlowComponent = () => {
  const [activeKey, setActiveKey] = useState("0");

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const data = useSelector((state) => state?.myData?.items);

  const workFlowSteps = data?.workflow_steps || [];

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        Workflow{" "}
        <div className="d-flex justify-content-end ">
          <FaClipboardList className="me-2 " /> <FaDownload className="me-2 " />{" "}
          <FaSave className="me-2 " /> <FaTimes className="me-2 " />
        </div>
      </Card.Header>
      <Card.Body>
        <Accordion activeKey={activeKey}>
          {/* Dataset Selection */}
          {workFlowSteps?.map((item, index) => {
            return (
              <div className="d-flex position-relative ps-3" key={item.id}>
                <div>
                  <span
                    className={`dot-indicator ${
                      activeKey === index.toString() ? "expanded" : ""
                    }`}
                  ></span>
                  <span
                    onClick={() => toggleAccordion(index.toString())}
                    className="toggle-button "
                  >
                    {activeKey === index.toString() ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>

                <Card className="section-card">
                  <Card.Header  onClick={() => toggleAccordion(index.toString())}
                    className={`custom-card-header ${
                      activeKey === index.toString()
                        ? "bg-primary text-white"
                        : "text-dark"
                    }`}
                  >
                    <div className="section-header">
                      <span className="section-title">{item.name_title}</span>
                    </div>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body className="card-body-tab">
                      <ul>
                        {Object.entries(item.params_extra).map(
                          ([key, value]) => (
                            <li key={key}>
                              <strong>{key}:</strong>{" "}
                              {typeof value === "object"
                                ? JSON.stringify(value, null, 2)
                                : value}
                            </li>
                          )
                        )}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
            );
          })}
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default WorkFlowComponent;
