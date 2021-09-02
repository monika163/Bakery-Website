import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

export default function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={3}> <h4 className="aboutus">Categories</h4>

            <h6>Birthday Cake</h6>

            <h6>Custom  Cake</h6>
            <h6>Tea Cake</h6>

            <h6>Birthday Cake</h6>

            <h6>Custom  Cake</h6>
            <h6>Tea Cake</h6></Col>
          <Col sm={9}>
            <h4 className="aboutus">About us</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
        </Row>

      </Container>

    </div>
  );
}