import React, { useContext, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";

import HeroSection from "../utils/HeroSection";
import { serviceList } from "../utils/data";
import ServiceCard from "../home/ServiceCard";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

const filters = ["studio", "live-event", "sound-test", "rental"];
const hasCategory = (filters: string[], itemCategories: string[]) => {
  let hasCategory = false;
  for (let index = 0; index < itemCategories.length && !hasCategory; index++) {
    const category = itemCategories[index];
    hasCategory = filters.includes(category);
  }
  return hasCategory;
};

export default function Services() {
  const cart = useContext(CartContext);
  const userCtx = useContext(UserContext);
  const [activeFilters, setActiveFilters] = useState([] as string[]);

  const toogleFilter = (newFilter: string) => {
    const filters = [...activeFilters];
    const filterIndex = filters.indexOf(newFilter);
    if (filterIndex !== -1) filters.splice(filterIndex, 1);
    else filters.push(newFilter);
    setActiveFilters(filters);
  };

  return (
    <Container className="hero section">
      <Row>
        <HeroSection />
      </Row>
      <Row className="mt-3">
        <h4 className="text-primary">Book a Session</h4>
        <div className="d-inline-flex my-3 gx-3 w-100 overflow-auto">
          {filters.map((f) => (
            <Badge
              bg={activeFilters.includes(f) ? "primary" : "secondary"}
              className="rounded-md cursor-pointer mx-2"
              key={f}
              onClick={() => toogleFilter(f)}
            >
              {f.toUpperCase()}
            </Badge>
          ))}
        </div>
        <h6 className="text-muted text-center">
          Select one of the services above and you are on your way to success!{" "}
        </h6>
        <small className="text-muted text-sm text-center">
          Prices below are estimated and can change according some factors.
          Contact us for more info{" "}
          <a href="tel:1305-609-6067" className="text-secondary">
            +1305-609-6067
          </a>
        </small>
      </Row>
      <Row className="mt-3 border-top mx-5 py-2 g-3 pb-5">
        {serviceList.map((service) => {
          const shouldRender =
            activeFilters.length === 0 ||
            hasCategory(activeFilters, service?.categories ?? []);
          return (
            shouldRender && (
              <Col xs={12} sm={6} lg={4} key={service.name}>
                <ServiceCard
                  id={service.id}
                  image={service.image}
                  name={service.name}
                  description={service.description}
                  price={service.price}
                  estimated_duration={service.estimated_duration}
                  layoutHorizontal
                  addToCart={() =>
                    cart?.addToCart({
                      customerId: userCtx.userId,
                      serviceId: service.id,
                      qty: 1,
                      price: 0,
                    })
                  }
                />
              </Col>
            )
          );
        })}
      </Row>
    </Container>
  );
}
