import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SuccessFrame from "../utils/SuccessFrame";

export default function BookSucces() {
  return (
    <SuccessFrame
      message="We got your request. We will contact you soon!"
      icon={faBookBookmark}
    />
  );
}
