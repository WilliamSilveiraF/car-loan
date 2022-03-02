import React from "react";
import { Main, Container, Logo, ContentBody, Home, Title, Description, InputArea, CTA, Breakdown, Footer } from "./styles";
import { AppBar, Toolbar, Button, InputAdornment, InputLabel, OutlinedInput, FormControl } from '@mui/material'

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
            <FormControl 
              fullWidth 
              sx={{
                bgcolor: 'white',
                mt: '20px'
              }}
            >
              <InputLabel htmlFor="outlined-adornment-carprice">Car Price</InputLabel>
              <OutlinedInput
                id="outlined-adornment-carprice"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Car Price"
                type="number"
              />
            </FormControl>
            <FormControl 
              fullWidth 
              sx={{
                bgcolor: 'white',
                mt: '20px'
              }}
            >
              <InputLabel htmlFor="outlined-adornment-downpayment">Down Payment (optional)</InputLabel>
              <OutlinedInput
                id="outlined-adornment-downpayment"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Down Payment (optional)"
                type="number"
              />
            </FormControl>
            <FormControl 
              fullWidth
              sx={{
                bgcolor: 'white',
                mt: '20px'
              }}
            >
              <InputLabel htmlFor="outlined-adornment-tradeinvalue">Trade-in value (optional)</InputLabel>
              <OutlinedInput
                id="outlined-adornment-outlined-adornment-tradeinvalue"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Trade-in value (optional)"
                type="number"
              />
            </FormControl>
            <FormControl 
              fullWidth
              sx={{
                bgcolor: 'white',
                mt: '20px'
              }}
            >
              <InputLabel htmlFor="outlined-adornment-lengthofloan">Length of loan</InputLabel>
              <OutlinedInput
                id="outlined-adornment-outlined-adornment-lengthofloan"
                endAdornment={<InputAdornment position="end">months</InputAdornment>}
                label="Length of loan"
                type="number"
              />
            </FormControl>
            <FormControl 
              fullWidth
              sx={{
                bgcolor: 'white',
                mt: '20px'
              }}
            >
              <InputLabel htmlFor="outlined-adornment-rate">Annual Percentage Rate</InputLabel>
              <OutlinedInput
                id="outlined-adornment-outlined-adornment-rate"
                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                label="Annual Percentage Rate"
                type="number"
              />
            </FormControl>
            <Button 
              variant="contained"
              fullWidth
              sx={{
                mt: '20px'
              }}
            >
              Calculate
            </Button>
          </InputArea>
          <Breakdown>
            <CTA>Your estimated payment</CTA>
            <h5>${ '0' }/mo. </h5>
            <h4>Breakdown</h4>
            <p>Car Price <span>${'0'}</span></p>
            <p>Down Payment <span>-${'0'}</span></p>
            <p>Trade-in value <span>-${'0'}</span></p>
            <div></div>
            <h3>Total loan amount<span>${'0'}</span></h3>
            <h3>Total interest paid<span>${'0'}</span></h3>
            <h3>Total loan & interest payment<span>${'0'}</span></h3>
            <h3>Monthly payment<span>${'0'}</span></h3>
          </Breakdown>
        </ContentBody>
        <Footer>
            <h3>Car Loan</h3>
            <p>© Car Loan. All rights reserved.</p>
          </Footer>
      </Container>
    </Main>
  );
}

export default App;
