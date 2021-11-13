import React, { useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ButtonCommon } from "../../Shared/CustomButton/CustomButton";

const HomeBanner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="bg-white">
      <Container>
        <Carousel
          interval={2000}
          controls={false}
          variant="dark"
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <Row lg={2} xs={1} className="py-4 h-100 g-4">
              <Col className="d-flex align-items-center">
                <div>
                  <h1 className="text-cyan">Relogio Faminino</h1>
                  <p className="my-4 text-secondary lh-lg">
                    first Titanium Grade 2 folding clasp and safety push buttons
                    with
                    <br />
                    black carbide coating Stocking the finest luxury
                    <br />
                    watch brands, we specialise
                  </p>
                  <div className="d-block  mb-4">
                    <span className="text-cyan fs-4 ">৳ 18000</span>{" "}
                    <span className="text-secondary fs-5 text-decoration-line-through">
                      ৳ 22000
                    </span>
                  </div>
                  <Link to="/explore">
                    <ButtonCommon btnSize="lg">
                      Explore Collections
                    </ButtonCommon>
                  </Link>
                </div>
              </Col>
              <Col>
                <img
                  style={{ maxHeight: "440px" }}
                  className="d-block my-4 w-75 mx-auto img-fluid"
                  src="	https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/banner_watch.png"
                  alt="First slide"
                />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row lg={2} xs={1} className="py-4 g-4 h-100">
              <Col className="d-flex align-items-center">
                <div>
                  <h1 className="text-cyan">Relogio Faminino</h1>
                  <p className="my-4 text-secondary lh-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perspiciatis, libero.
                    <br />
                    black carbide coating Stocking the finest luxury
                    <br />
                    watch brands, we specialise
                  </p>
                  <div className="d-block  mb-4">
                    <span className="text-cyan fs-4 ">৳ 11500</span>{" "}
                    <span className="text-secondary fs-5 text-decoration-line-through">
                      ৳ 13200
                    </span>
                  </div>
                  <Link to="/explore">
                    <ButtonCommon btnSize="lg">
                      Explore Collections
                    </ButtonCommon>
                  </Link>
                </div>
              </Col>
              <Col>
                <img
                  style={{ maxHeight: "440px" }}
                  className="d-block my-5 w-75 mx-auto"
                  src="	https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/banner_img2-min.png"
                  alt="First slide"
                />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row lg={2} xs={1} className="py-3  g-4 h-100">
              <Col className="d-flex align-items-center">
                <div>
                  <h1 className="text-cyan">Relogio Faminino</h1>
                  <p className="my-4 text-secondary lh-lg">
                    Titanium Grade 2 folding clasp and safety push buttons with
                    <br />
                    black carbide coating Stocking the finest luxury
                    <br />
                    watch brands, we specialise
                  </p>
                  <div className="d-block  mb-4">
                    <span className="text-cyan fs-4 ">৳ 14600</span>
                    <span className="text-secondary fs-5 text-decoration-line-through">
                      ৳ 16300
                    </span>
                  </div>
                  <Link to="/explore">
                    <ButtonCommon btnSize="lg">
                      Explore Collections
                    </ButtonCommon>
                  </Link>
                </div>
              </Col>
              <Col>
                <img
                  style={{ maxHeight: "440px !important", width: "75%" }}
                  className="d-block my-4 mx-auto"
                  src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/revslider/watch/banner_img3-min.png"
                  alt="First slide"
                />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default HomeBanner;
