interface Slots {
  time: string;
  totalAvailable: number;
  booked: number;
  availableSlots: number;
}

export interface PassportAvailability {
  date: string;
  month: number;
  slots: Slots[];
}

export const passportAvailability: PassportAvailability[] = [
  {
    date: "29-04-2023",
    month: 3,
    slots: [
      { time: "9:00", totalAvailable: 200, booked: 50, availableSlots: 150 },
      { time: "10:00", totalAvailable: 100, booked: 100, availableSlots: 0 },
      { time: "11:00", totalAvailable: 10, booked: 7, availableSlots: 3 },
      { time: "12:00", totalAvailable: 50, booked: 10, availableSlots: 40 },
    ],
  },
  {
    date: "30-04-2023",
    month: 3,
    slots: [
      { time: "9:00", totalAvailable: 200, booked: 50, availableSlots: 10 },
      { time: "10:00", totalAvailable: 100, booked: 100, availableSlots: 0 },
      { time: "11:00", totalAvailable: 300, booked: 200, availableSlots: 30 },
      { time: "12:00", totalAvailable: 50, booked: 10, availableSlots: 0 },
    ],
  },
  {
    date: "03-05-2023",
    month: 4,
    slots: [
      { time: "9:00", totalAvailable: 100, booked: 20, availableSlots: 80 },
      { time: "10:00", totalAvailable: 250, booked: 50, availableSlots: 200 },
      { time: "11:00", totalAvailable: 200, booked: 80, availableSlots: 120 },
      { time: "12:00", totalAvailable: 300, booked: 200, availableSlots: 100 },
    ],
  },
  {
    date: "07-05-2023",
    month: 4,
    slots: [
      { time: "9:00", totalAvailable: 200, booked: 200, availableSlots: 0 },
      { time: "10:00", totalAvailable: 100, booked: 100, availableSlots: 0 },
      { time: "11:00", totalAvailable: 50, booked: 50, availableSlots: 0 },
      { time: "12:00", totalAvailable: 150, booked: 150, availableSlots: 0 },
    ],
  },
];
