import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/soporte%2F1.png?alt=media&token=7855348b-b8c1-4f2a-a1e8-fa1e1cb24e5c",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/soporte%2F10.png?alt=media&token=5cbf241c-5dc4-4680-a5cd-291594f96b72",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/soporte%2F12.png?alt=media&token=21f9b70d-3fbf-43ad-a2d7-a7c77f17019b",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/soporte%2F13.png?alt=media&token=55e40396-f148-476d-95aa-48c8c1a5f491",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/soporte%2F14.png?alt=media&token=148ebcf5-b695-49c0-b4da-20fdfc56653e",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/soporte%2F2.png?alt=media&token=f829f78d-45c8-45c6-9cef-1596707dac15",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/soporte%2F4.png?alt=media&token=7550c243-c02e-4f40-87c4-2cb42d63c81b",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/soporte%2F8.png?alt=media&token=8c11b629-4af4-40cb-a831-22892cb0ab20",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/soporte%2F9.png?alt=media&token=cc01e5b9-41af-49dc-ab54-f77d6527ce14",
];

const CarruselSoporte = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step}
                alt={index}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Siguiente
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Atras
          </Button>
        }
      />
    </Box>
  );
};

export default CarruselSoporte;
