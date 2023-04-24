import React from "react";
import { Container } from "react-bootstrap";
import BookingForm from "./BookingForm";

export default function BookSession() {
  return (
    <Container className="center-container px-6">
      <h4 className="text-primary text-center">Book a Session</h4>
      <BookingForm />
    </Container>
  );
}
