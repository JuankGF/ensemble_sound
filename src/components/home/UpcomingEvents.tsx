import {
  faCalendarDay,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { Col, Container, Row } from "react-bootstrap";

import { useWindowSize } from "../../hooks/useWindowSize";

export default function UpcomingEvents() {
  const { isMobile } = useWindowSize();
  return (
    <Container className="center-container section pb-5">
      <Row className="py-4 text-center">
        <h2 className="text-primary">Upcoming Events</h2>
      </Row>
      <Row xs={1}>
        <Col className={!isMobile ? "px-5" : ""}>
          <Row className="align-content-center py-3 border-top">
            <Col xs={3} md={4} className="align-self-center">
              <FontAwesomeIcon icon={faCalendarDay} className="text-primary" />{" "}
              April 24
            </Col>
            <Col className="align-self-center">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className="text-primary"
              />{" "}
              The Venue Parking Lot
            </Col>
            <Col
              xs={5}
              lg={3}
              className={!isMobile ? "d-flex justify-content-end" : ""}
            >
              <AddToCalendarButton
                name="Title"
                options={[
                  "Apple",
                  "Google",
                  "iCal",
                  "Microsoft365",
                  "MicrosoftTeams",
                  "Outlook.com",
                  "Yahoo",
                ]}
                location="Event location"
                startDate="2023-04-24"
                endDate="2023-04-24"
                startTime="20:15"
                endTime="23:59"
                timeZone="America/New_York"
                organizer="EduardoPerez|eddyensemble@gmail.com"
                hideTextLabelButton={isMobile}
                hideCheckmark
                label="Add to Calendar"
                styleLight="--btn-background: #573065; --btn-text: #fff; --font: sans-serif;"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
