import { Alert, Box, Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import useAxios from "axios-hooks";
import { FieldValues, set, useForm } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import { Dayjs } from 'dayjs';

type Props = {
  onSubmit: () => void;
};

const CreateForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit, setValue } = useForm();
  const [{ loading, error }, executePost] = useAxios(
    {
      url: `${process.env.REACT_APP_SERVER_BASE_URL}/users`,
      method: "POST",
    },
    { manual: true }
  );
  const [selectedBirthDate, setSelectedBirthDate] = useState<Dayjs | null>(null);

  const onFormSubmit = async (data: FieldValues) => {
    await executePost({ data });
    onSubmit();
  };

  const handleBirtDateChange = (date: Dayjs | null) => {
    setSelectedBirthDate(date)
  }

  useEffect(() => {
    setValue("birthdate", selectedBirthDate?.format("YYYY-MM-DD"))
  }, [selectedBirthDate, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {error && (
            <Alert severity="error">
              Sorry - there was an error creating the user
            </Alert>
          )}
          <TextField
            label="First Name"
            variant="outlined"
            {...register("firstName")}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            {...register("lastName")}
          />
          <TextField label="Email" variant="outlined" {...register("email")} />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
              value={selectedBirthDate}
              onChange={handleBirtDateChange}
            ></DatePicker>
          </LocalizationProvider>
          <Button variant="contained" type="submit" disabled={loading}>
            Create User
          </Button>
        </Box>
      </form>
    </>
  );
};

export default CreateForm;
