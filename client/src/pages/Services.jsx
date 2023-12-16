import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import "./styles/Services.css";
export default function Services() {
  return (
      <>
          <div className="services-form-container">
              <div className={"container"}>
                  <h2>Our Services</h2>
                  <Tabs
                      defaultActiveKey="Take Away Service"
                      id="services"
                      className="tabs"
                      fill
                  >
                      <Tab eventKey="Take Away Service" title="Take Away Service">
                          <form></form>
                      </Tab>
                      <Tab eventKey="Dine in Service" title="Dine in Service"></Tab>
                      <Tab
                          eventKey="Home Delivery Service"
                          title="Home Delivery Service"
                      ></Tab>
                  </Tabs>
              </div>
          </div>
      </>

  );
}
