import { createContext, useState } from "react";

interface Slots {
  time: string;
  totalAvailable: number;
  booked: number;
  availableSlots: number;
}

export interface BookingAvailability {
  date: string;
  month: number;
  slots: Slots[];
}

interface User {
  name: string | null;
  NRC: string | null;
  dateOfBirth: string | null;
}

interface DefaultValue {
  date: string | null;
  time: number | null;
  user: User | null;
  updateBookingData: (value: any) => void;
  bookingAvailability: null | BookingAvailability[];
  fetchBookingAvailability: (value: number) => void;
}

const defaultValue: DefaultValue = {
  date: null,
  time: null,
  user: {
    name: null,
    NRC: null,
    dateOfBirth: null,
  },
  updateBookingData: () => {},
  bookingAvailability: [],
  fetchBookingAvailability: () => {},
};

export const PassportContext = createContext<DefaultValue>(defaultValue);

const PassportProvider = (props: any) => {
  const [bookingData, setBookingData] = useState(defaultValue);

  const fetchBookingAvailability = async (month: number) => {
    const response = await fetch(
      `http://localhost:4000/passportAvailability?month=${month}`
    );
    const dataFromServer = await response.json();
    const bookingData = dataFromServer.chosenMonthAvailability;
    setBookingData({ ...bookingData, bookingAvailability: bookingData });
  };
  return (
    <PassportContext.Provider
      value={{
        ...bookingData,
        updateBookingData: setBookingData,
        fetchBookingAvailability,
      }}
    >
      {props.children}
    </PassportContext.Provider>
  );
};

export default PassportProvider;
