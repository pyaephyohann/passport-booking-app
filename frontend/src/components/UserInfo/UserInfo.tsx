import { Box, TextField } from "@mui/material";
import { useContext } from "react";
import { PassportContext } from "../../contexts/PassportContext";

const UserInfo = () => {
  const { updateBookingData, ...data } = useContext(PassportContext);

  return (
    <Box sx={{ mt: "3rem" }}>
      <Box sx={{ width: "200px", margin: "0 auto", marginBottom: "2rem" }}>
        <TextField
          id="outlined-required"
          value={data.user?.name ? data.user.name : ""}
          label="Name"
          onChange={(event) => {
            updateBookingData({
              ...data,
              user: { ...data.user, name: event.target.value },
            });
          }}
        />
      </Box>
      <Box sx={{ width: "200px", margin: "0 auto", marginBottom: "2rem" }}>
        <TextField
          id="outlined-required"
          label="NRC number"
          value={data.user?.NRC ? data.user.NRC : ""}
          onChange={(event) => {
            updateBookingData({
              ...data,
              user: { ...data.user, NRC: event.target.value },
            });
          }}
        />
      </Box>
      <Box sx={{ width: "200px", margin: "0 auto", marginBottom: "2rem" }}>
        <TextField
          id="outlined-required"
          value={data.user?.dateOfBirth ? data.user.dateOfBirth : ""}
          label="Date of birth"
          onChange={(event) => {
            updateBookingData({
              ...data,
              user: { ...data.user, dateOfBirth: event.target.value },
            });
          }}
        />
      </Box>
    </Box>
  );
};

export default UserInfo;
