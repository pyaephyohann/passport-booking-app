import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useContext, useState } from "react";
import { PassportContext } from "../../contexts/PassportContext";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const BookingDate = () => {
  const contextData = useContext(PassportContext);
  const {
    updateBookingData,
    fetchBookingAvailability,
    bookingAvailability,
    date,
  } = contextData;

  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const selectedTimeSlots = bookingAvailability
    ?.find((item) => item.date === dayjs(date).format("DD-MM-YYYY"))
    ?.slots.filter((slot) => slot.availableSlots > 0);

  console.log(selectedTimeSlots);

  const shouldDisableDate = (date: Dayjs) => {
    const bookingAvailabilityDate = bookingAvailability?.find((item) => {
      return item.date === date.format("DD-MM-YYYY");
    });
    if (!bookingAvailabilityDate) return true;
    const isAvailable = bookingAvailabilityDate.slots.some((slot) => {
      return slot.availableSlots > 0;
    });
    return isAvailable ? false : true;
  };

  return (
    <Box sx={{ width: 220, margin: "0 auto", mt: 6 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            label="Choose your booking date"
            value={date ? dayjs(date) : value}
            format="DD/MM/YYYY"
            disablePast
            shouldDisableDate={shouldDisableDate}
            onOpen={() => fetchBookingAvailability(dayjs().month())}
            onMonthChange={(date: Dayjs) =>
              fetchBookingAvailability(date.month())
            }
            onChange={(newValue) => {
              setValue(newValue);
              updateBookingData({
                ...contextData,
                date: newValue?.toDate(),
              });
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
      <Box sx={{ mt: 4 }}>
        {selectedTimeSlots && (
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Select Time
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {selectedTimeSlots.map((item) => {
                return (
                  <FormControlLabel
                    key={item.time}
                    value={item.time}
                    control={
                      <Radio
                        onChange={(event) =>
                          updateBookingData({
                            ...contextData,
                            time: event.target.value,
                          })
                        }
                      />
                    }
                    label={item.time}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        )}
      </Box>
    </Box>
  );
};

export default BookingDate;
