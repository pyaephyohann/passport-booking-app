import dayjs from "dayjs";
import { PassportContext } from "../../contexts/PassportContext";
import { useContext } from "react";

const ReviewAndConfirm = () => {
  const { updateBookingData, ...data } = useContext(PassportContext);
  return (
    <div>
      <div>
        Booking Date:
        <span style={{ fontWeight: "bold" }}>
          {dayjs(data.date).format("DD-MM-YYYY")}
        </span>
      </div>
      <div>{data.time}</div>
      <div>{data.user?.name}</div>
      <div>{data.user?.NRC}</div>
      <div>{data.user?.dateOfBirth}</div>
    </div>
  );
};

export default ReviewAndConfirm;
