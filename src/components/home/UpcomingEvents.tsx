import {
  faCalendarDay,
  faCalendarMinus,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { Col, Container, Row } from "react-bootstrap";
import { format, parseISO } from "date-fns";

import { useWindowSize } from "../../hooks/useWindowSize";
import { upcomingEvents } from "../utils/data";

export default function UpcomingEvents() {
  const { isMobile } = useWindowSize();

  return (
    <Container className="center-container section pb-5">
      <Row className="py-4 text-center">
        <h2 className="text-primary">Upcoming Events</h2>
      </Row>
      {upcomingEvents.length === 0 ? (
        <Row className="text-center text-muted overflow-hidden">
          <FontAwesomeIcon icon={faCalendarMinus} size="2x" />
          <h5>No upcoming events</h5>
        </Row>
      ) : (
        upcomingEvents.map(({ id, name, location, date }) => {
          const shortDate = format(parseISO(date), "dd MMM");
          const formattedDate = format(parseISO(date), "yyyy-MM-dd");
          const time = format(parseISO(date), "HH:mm");
          return (
            <Row key={id}>
              <Col className={!isMobile ? "px-5" : ""}>
                <Row className="align-content-center py-3 border-top">
                  <Col xs={3} md={4} className="align-self-center">
                    <FontAwesomeIcon
                      icon={faCalendarDay}
                      className="text-primary"
                    />{" "}
                    <span className="text-secondary">{shortDate}</span>
                    <p className="overflow-hidden text-ellipsis">{name}</p>
                  </Col>
                  <Col className="align-self-center">
                    <FontAwesomeIcon
                      icon={faMapLocationDot}
                      className="text-primary"
                    />{" "}
                    {location}
                  </Col>
                  <Col
                    xs={3}
                    lg={3}
                    className={!isMobile ? "d-flex justify-content-end" : ""}
                  >
                    <AddToCalendarButton
                      name={name}
                      options={[
                        "Apple",
                        "Google",
                        /* "iCal", */
                        "Microsoft365",
                        "MicrosoftTeams",
                        "Outlook.com",
                        "Yahoo",
                      ]}
                      location={location}
                      startDate={formattedDate}
                      endDate={formattedDate}
                      startTime={time}
                      endTime="23:59"
                      timeZone="America/New_York"
                      organizer="EduardoPerez|eddyensemble@gmail.com"
                      hideTextLabelButton={isMobile}
                      listStyle={isMobile ? "modal" : "dropdown"}
                      hideCheckmark
                      label="Add to Calendar"
                      styleLight="--btn-background: #573065; --btn-text: #fff; --font: sans-serif;"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })
      )}
    </Container>
  );
}
