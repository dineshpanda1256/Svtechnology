import React from "react";
import "./Specification.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Specification({ productDetails }) {
  const { specifications } = productDetails || {};

  // Categorize specifications
  const categorizedData = {};
  specifications.forEach((item) => {
    if (!categorizedData[item.category]) {
      categorizedData[item.category] = [];
    }
    categorizedData[item.category].push(item);
  });

  console.log("res", categorizedData);

  return (
    <Container fluid id="Spec-Container">
      <div id="Spec-Head">Specification</div>
      <Row>
        {Object.keys(categorizedData).map((category) => (
          <div key={category}>
            <div id="Spec-Label">{category}</div>
            {categorizedData[category].map((item) => (
              <div id="Spec-Text-Div" key={item._id}>
                <div id="Spec-Text">{item.key} :</div>
                <div id="Spec-Text">{item.value}</div>
              </div>
            ))}
          </div>
        ))}
      </Row>
    </Container>
  );
}
