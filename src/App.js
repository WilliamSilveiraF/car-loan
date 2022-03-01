import React from "react";
import { Main, Container, Logo, ContentBody, Home, Title, Description, InputArea, CTA } from "./styles";
import { AppBar, Toolbar, TextField, InputAdornment, InputLabel, OutlinedInput, FormControl } from '@mui/material'

function App() {
  return (
    <Main>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Logo>Car Loan</Logo>
          </Toolbar>
        </AppBar>
        <ContentBody>
          <Home>
            <Title>
              Car loan calculator
            </Title>
            <Description>
              Make a simulation and see the value of the installment of your next car
            </Description>
          </Home>
          <InputArea>
            <CTA>QuickStart</CTA>
            <FormControl fullWidth >
              <InputLabel htmlFor="outlined-adornment-carprice">Car Price</InputLabel>
              <OutlinedInput
                id="outlined-adornment-carprice"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Car Price"
                type="number"
              />
            </FormControl>
            <FormControl fullWidth >
              <InputLabel htmlFor="outlined-adornment-downpayment">Down Payment (optional)</InputLabel>
              <OutlinedInput
                id="outlined-adornment-downpayment"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Down Payment (optional)"
                type="number"
              />
            </FormControl>
            <FormControl fullWidth >
              <InputLabel htmlFor="outlined-adornment-tradeinvalue">Trade-in value (optional)</InputLabel>
              <OutlinedInput
                id="outlined-adornment-outlined-adornment-tradeinvalue"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Trade-in value (optional)"
                type="number"
              />
            </FormControl>
            <FormControl fullWidth >
              <InputLabel htmlFor="outlined-adornment-lengthofloan">Length of loan</InputLabel>
              <OutlinedInput
                id="outlined-adornment-outlined-adornment-lengthofloan"
                endAdornment={<InputAdornment position="end">months</InputAdornment>}
                label="Length of loan"
                type="number"
              />
            </FormControl>
            <FormControl fullWidth >
              <InputLabel htmlFor="outlined-adornment-rate">Annual Percentage Rate</InputLabel>
              <OutlinedInput
                id="outlined-adornment-outlined-adornment-rate"
                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                label="Rate"
                type="number"
              />
            </FormControl>
          </InputArea>
        </ContentBody>
      </Container>
    </Main>
  );
}

export default App;
