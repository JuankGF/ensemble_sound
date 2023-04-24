import BookingForm from "./BookingForm";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Service, findService } from "../utils/data";

export async function loader({ params }: LoaderFunctionArgs) {
  const service = await findService(params.serviceId!);
  return { service };
}

export default function BookService() {
  const data = useLoaderData() as { service?: Service };

  const formInitialValues = {
    email: "",
    name: "",
    phone: "",
    booking_date: "",
    arrival_time: "",
    type: data?.service?.categories?.[0] ?? "",
    description: "",
  };

  return <BookingForm initialValues={formInitialValues} />;
}
