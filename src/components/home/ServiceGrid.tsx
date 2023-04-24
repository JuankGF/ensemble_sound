import { Button, Col, Container, Row } from "react-bootstrap";
import { serviceList } from "../utils/data";
import ServiceCard from "./ServiceCard";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function ServiceGrid() {
  const navigate = useNavigate();
  return (
    <Container className="center-container">
      <Row>
        <Col>
          <h2 className="text-primary">Services</h2>
        </Col>
        <Col xs={5} md={3} lg={2} className="d-flex justify-content-end">
          <Button
            className="rounded-sm"
            onClick={() => navigate("/book_online/services")}
          >
            Book Online
          </Button>
        </Col>
      </Row>
      <Row className="py-3 px-2 g-3">
        {serviceList.slice(0, 3).map((service) => (
          <Col xs={12} sm={6} md={4} key={service.id}>
            <ServiceCard
              id={service.id}
              image={service.image}
              name={service.name}
              description={service.description}
              estimated_duration={service.estimated_duration}
              categories={service.categories}
              actionLabel="Book session"
              actionIcon={faBookmark}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
