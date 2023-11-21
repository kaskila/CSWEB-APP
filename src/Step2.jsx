import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Button, TextField, Typography, Box } from "@mui/material";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const Step2 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const onSubmit = (data) =>{
    console.log(data)
    navigate('/')
  } ;

  console.log(watch("example"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="50vh"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label>Programme:</label>
        <select {...register("type")}>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Computer Systems Engineering">Computer Systems Engineering</option>
          <option value="Networking and Information Security">Networking and Information Security</option>
          <option value="Masters of Science in Computer Science">Masters of Science in Computer Science</option>
        </select>
        <label>Start date:</label>
        <Controller
          control={control}
          name="fromDate"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <DatePicker
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
              minDate={new Date()}
            />
          )}
        />
        <label>Finish date:</label>
        <Controller
          control={control}
          name="toDate"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <DatePicker
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
              minDate={new Date()}
            />
          )}
        />
        <label>Free cancellation</label>
        <input name="cancellation" type="checkbox" {...register('cancelFree')} id="cancelFree" /> */}

       
        <label>Feedback Comment:</label>
        <label>Say: my comment is..</label>
        <Controller
          control={control}
          name="feedbackComment"
          render={({ field }) => (
            <TextField
              fullWidth
              {...field}
              label=""
              variant="outlined"
            />
          )}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Step2;
