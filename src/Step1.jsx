import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";

const Step1 = () => {
  const { handleSubmit } = useForm();
  const navigate = useNavigate(); // Use useNavigate to get the navigation function

  const onSubmit = () => {
    navigate("./step2"); // Use navigate function to navigate
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Feedback
        </Button>
      </form>
    </Container>
  );
};

export default Step1;
