import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import UserInfo from "../UserInfo/UserInfo";
import BookingDate from "../BookingDateAndTime/BookingDate";
import ReviewAndConfirm from "../ReviewAndConfirm/ReviewAndConfirm";
import { PassportContext } from "../../contexts/PassportContext";
import dayjs from "dayjs";

const steps = [
  "Select Your Date And Time",
  "Please fill your information",
  "Review and confirm",
];

const PassportStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const contextData = useContext(PassportContext);

  const { date, time, user } = contextData;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const createBooking = async () => {
    const response = await fetch("http://localhost:4000/createBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: dayjs(date).format("DD-MM-YYYY"),
        time,
        user,
      }),
    });
    const responseJson = await response.json();
    console.log(responseJson);
  };

  return (
    <Box sx={{ width: "50rem", margin: "0 auto", marginTop: "3rem" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 2, mb: 1 }}>
            {" "}
            {activeStep === 0 && <BookingDate />}
            {activeStep === 1 && <UserInfo />}
            {activeStep === 2 && <ReviewAndConfirm />}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === steps.length - 1 ? (
              <Button onClick={createBooking}>Confirm</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default PassportStepper;
