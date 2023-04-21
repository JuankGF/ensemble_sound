import { Col, Container, Image, Row } from "react-bootstrap";
import { useEquipmentByType } from "../../hooks/useEquipmentByType";
import { getImage } from "../utils";

export default function TechRider() {
  const { equipmentsByType } = useEquipmentByType();

  return (
    <Container className="center-container bg-primary section pb-5">
      <Row className="py-4 text-center">
        <h2 className="text-white">Our Equipment</h2>
      </Row>
      <Row className="g-4 px-3 justify-content-center" xs={1} sm={2} md={3}>
        {equipmentsByType.map(({ type, equipments }) => (
          <Col key={type}>
            <div className="d-flex justify-content-center">
              <Image
                rounded
                src={getImage(type)}
                alt=""
                height="64rem"
                className="py-2"
              ></Image>
            </div>
            <h6 className="text-secondary border border-white text-center rounded-xs w-100">
              {type.replace("-", " ").toUpperCase()}
            </h6>
            <ul className="px-0">
              {equipments.map(({ id, name, quantity, description }) => (
                <Row
                  as="li"
                  key={id}
                  className="text-sm text-white justify-content-center"
                >
                  <Col xs={4} lg={5}>
                    {name}
                  </Col>
                  <Col xs={6}>{description}</Col>
                  <Col className="text-center" xs={2} lg={1}>
                    x{quantity}
                  </Col>
                </Row>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
