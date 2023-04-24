import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Row } from "react-bootstrap";

import { Service } from "../utils/data";

type DishCardProps = {
  actionLabel?: string;
  actionIcon?: IconDefinition;
  layoutHorizontal?: boolean;
  addToCart?: () => void;
} & Service;

export default function ServiceCard({
  id,
  image,
  name,
  description,
  actionLabel,
  actionIcon,
  layoutHorizontal,
  price,
  addToCart,
}: DishCardProps) {
  return (
    <Card className="shadow-sm h-100">
      {!layoutHorizontal && (
        <Card.Img variant="top" src={image} className="card-image" />
      )}
      <Card.Body
        as={layoutHorizontal ? Row : undefined}
        className={{ "d-grid": !layoutHorizontal }}
      >
        {layoutHorizontal ? (
          <>
            <Col xs={6} md={7} lg={8} xl={9}>
              <Card.Title className="text-primary">{name}</Card.Title>
              <Card.Text className="text-muted card-text-chunk">
                <small>{description}</small>
              </Card.Text>
            </Col>

            <Col xs={6} md={5} lg={4} xl={3} className="overflow-hidden">
              <Card.Img
                variant="right"
                src={image}
                className="rounded-sm w-100"
              />
            </Col>
          </>
        ) : (
          <>
            <Card.Title className="text-primary">{name}</Card.Title>
            <Card.Text className="text-muted">
              <small>{description}</small>
            </Card.Text>
          </>
        )}
      </Card.Body>
      <Card.Footer className="d-flex w-100 justify-content-end bg-transparent border-top-0">
        {layoutHorizontal ? (
          price && (
            <div className="d-flex align-items-center justify-content-between w-100">
              <small className="text-secondary">
                From <b>${price}</b>
              </small>
              {addToCart && (
                <Button
                  variant="text"
                  className="text-secondary mx-1"
                  onClick={addToCart}
                >
                  Book now <FontAwesomeIcon icon={faBookmark} />
                </Button>
              )}
            </div>
          )
        ) : (
          <>
            {price && (
              <small className="text-secondary">
                <b>${price}</b>
              </small>
            )}
            {actionLabel && actionIcon && (
              <Button variant="text" className="text-primary rounded-sm">
                {actionLabel}{" "}
                {actionIcon && <FontAwesomeIcon icon={actionIcon} />}
              </Button>
            )}
          </>
        )}
      </Card.Footer>
    </Card>
  );
}
