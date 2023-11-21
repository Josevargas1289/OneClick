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
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/mantenimiento%2F1.png?alt=media&token=52383d8e-f0a4-4b6b-9284-4a83ff40c047",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/mantenimiento%2F2.png?alt=media&token=b701e342-b0fe-44e7-ab3f-715dc600b5f6",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/mantenimiento%2F3.png?alt=media&token=a22a5206-e76f-475f-abc0-773d7adc1e7a",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/mantenimiento%2F4.png?alt=media&token=f5846e39-2d2b-4711-9881-5605ff19d299",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/mantenimiento%2F5.png?alt=media&token=293616e4-896f-43ea-8099-f713364f2810",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/mantenimiento%2F6.png?alt=media&token=ab5ff516-3828-413e-92c8-00cc82ede570",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/mantenimiento%2F7.png?alt=media&token=9884850b-7e89-4116-a875-1c7aca2c1f04",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/mantenimiento%2FMantenimiento%20(2).png?alt=media&token=80f11474-f8ad-4546-8e49-7b9f1f394d42",
    "https://firebasestorage.googleapis.com/v0/b/oneclick-fe3ae.appspot.com/o/mantenimiento%2FMantenimiento%20(1).png?alt=media&token=79d8f9ba-dfe8-414e-9a5e-e2c315a374c2"
];

const CarruselMantenimiento = () => {
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

export default CarruselMantenimiento;
