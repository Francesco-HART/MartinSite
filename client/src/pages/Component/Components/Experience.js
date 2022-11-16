import React, { useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css";
const Experience = () => {
    useEffect(() => {
        Aos.init({ duration: 6000 });
    }, []);
  return (
    <>
      <div id="Experience" className="exp-main headding">
                    <div className="exp ">
                        <h1 className="text-center title">Experience</h1>
                    </div>
                    <Container >
                        <Row >
                            <Col lg={6} md={6} sm={6}>
                                <div className="exp-card"  data-aos="flip-up" data-aos-duration="700">
                                    <Card className="exp-block">
                                        <Card.Body className="exp-body">
                                            <Card.Title className="exp-title">Visual Designer
                                                <p>
                                                    2017-2018 | Full Time | InHouse
                                                </p>
                                            </Card.Title>
                                            <hr />
                                            <Card.Text className="exp-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut dolor sit amet consectetur adipisicing elit sed do  labore et dolo...
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6}>
                                <div className="exp-card"  data-aos="flip-up" data-aos-duration="700">
                                    <Card className="exp-block">
                                        <Card.Body className="exp-body">
                                            <Card.Title className="exp-title">Visual Designer
                                                <p>
                                                    2017-2018 | Full Time | InHouse
                                                </p>
                                            </Card.Title>
                                            <hr />
                                            <Card.Text className="exp-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut dolor sit amet consectetur adipisicing elit sed do  labore et dolo...
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6}>
                                <div className="exp-card"  data-aos="flip-up" data-aos-duration="700">
                                    <Card className="exp-block">
                                        <Card.Body className="exp-body">
                                            <Card.Title className="exp-title">Visual Designer
                                                <p>
                                                    2017-2018 | Full Time | InHouse
                                                </p>
                                            </Card.Title>
                                            <hr />
                                            <Card.Text className="exp-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut dolor sit amet consectetur adipisicing elit sed do  labore et dolo...
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6}    >
                                <div className="exp-card"  data-aos="flip-up" data-aos-duration="700">
                                    <Card className="exp-block">
                                        <Card.Body className="exp-body">
                                            <Card.Title className="exp-title">Visual Designer
                                                <p>
                                                    2017-2018 | Full Time | InHouse
                                                </p>
                                            </Card.Title>
                                            <hr />
                                            <Card.Text className="exp-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut dolor sit amet consectetur adipisicing elit sed do  labore et dolo...
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
    </>
  )
}

export default Experience