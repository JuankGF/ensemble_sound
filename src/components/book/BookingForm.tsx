import { parseISO } from "date-fns";
import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Field from "../utils/Field";
import BookingTimesPicker from "./BookingTimesPicker";

const BookingSchema = Yup.object().shape({
  name: Yup.string().required("Name is a required field"),
  email: Yup.string().email().required("Email is a required field"),
  phone: Yup.string().optional(),
  booking_date: Yup.string().required("Booking date is a required field"),
  arrival_time: Yup.string().required("Time is a required field"),
  type: Yup.string()
    .optional()
    .oneOf([
      "anniversary",
      "birthday",
      "engagement",
      "live-event",
      "rental",
      "studio",
      "sound-test",
    ]),
  description: Yup.string().required("Description is a required field"),
});

const values = {
  email: "",
  name: "",
  phone: "",
  booking_date: "",
  arrival_time: "",
  type: "",
  description: "",
};

type FormProps = {
  initialValues?: typeof values;
};

export default function BookingForm({ initialValues = values }: FormProps) {
  const currentDate = new Date();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BookingSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          navigate("/book_online/book_success");
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
      }) => (
        <Form onSubmit={handleSubmit} className="py-5 px-2">
          <Field
            type="text"
            placeholder="Enter name"
            field="name"
            label="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className="mb-3"
            error={errors.name}
            touched={touched.name}
            required
          />
          <Field
            type="email"
            placeholder="Enter email"
            field="email"
            label="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="mb-3"
            error={errors.email}
            touched={touched.email}
            required
          />
          <Field
            type="tel"
            placeholder="Enter phone"
            field="phone"
            label="Phone number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            className="mb-3"
            error={errors.phone}
            touched={touched.phone}
          />
          <Field
            type="date"
            placeholder="Enter booking date"
            field="booking_date"
            label="Booking Date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.booking_date}
            className="mb-3"
            error={errors.booking_date}
            touched={touched.booking_date}
            min={currentDate.toISOString().split("T")[0]}
            required
          />
          <BookingTimesPicker
            placeholder="Enter time of arrival"
            field="arrival_time"
            label="Time of Arrival"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.arrival_time}
            className="mb-3"
            error={errors.arrival_time}
            touched={touched.arrival_time}
            required
            bookingDate={
              values.booking_date ? parseISO(values.booking_date) : undefined
            }
          />
          <Field
            type="select"
            placeholder="Enter event type"
            field="type"
            label="Event type"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.type}
            className="mb-3"
            error={errors.type}
            touched={touched.type}
            disabled={initialValues.type !== ""}
            options={[
              { name: "Type", value: "" },
              { name: "Anniversary", value: "anniversary" },
              { name: "Birthday", value: "birthday" },
              { name: "Engagement", value: "engagement" },
              { name: "Live Event", value: "live-event" },
              { name: "Equipment Rental", value: "rental" },
              { name: "Studio", value: "studio" },
              { name: "Sound Test", value: "sound-test" },
            ]}
          />
          <Field
            as="textarea"
            placeholder="Enter description"
            field="description"
            label="Description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            className="mb-3"
            error={errors.description}
            touched={touched.description}
          />
          <div className="d-flex justify-content-center">
            <Button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="mt-5"
              aria-label="On Click"
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
