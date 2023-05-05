import express, { Request, Response } from "express";
import cors from "cors";
import { passportAvailability } from "./data";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/passportAvailability", (req: Request, res: Response) => {
  //@ts-ignore
  const selectedMonth = parseInt(req.query.month, 10);
  const chosenMonthAvailability = passportAvailability.filter((item) => {
    return item.month === selectedMonth;
  });
  res.send({ chosenMonthAvailability });
});

app.post("/createBooking", (req: Request, res: Response) => {
  const { date, time } = req.body;
  const requestedAvailability = passportAvailability.find(
    (item) => item.date === date
  );
  if (!requestedAvailability) return res.send({ error: "date not found" });
  const requestedTime = requestedAvailability.slots.find(
    (item) => item.time === time
  );
  if (!requestedTime) return res.send({ error: "time not found" });
  if (!requestedTime.availableSlots)
    return res.send({ message: "booking full for this time" });
  requestedTime.booked = requestedTime.booked + 1;
  requestedTime.availableSlots = requestedTime.availableSlots - 1;
  res.send({ requestedAvailability });
});

app.listen(4000, () => {
  console.log("express is listening on port 4000");
});
