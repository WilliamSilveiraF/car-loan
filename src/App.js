import React, { useState } from "react";
import { Main, Container, Logo, ContentBody, Home, Title, Description, InputArea, CTA, Breakdown, Footer } from "./styles";
import { AppBar, Toolbar, Button, InputAdornment, InputLabel, OutlinedInput, FormControl } from '@mui/material'

function App() {
  
  const handleChange = (e) => {
    let newValue = parseInt(e.target.value)

    switch (e.target.id) {
      case "carprice":
        if (newValue < 0) return setValues({...values, carprice: 0})
        setValues({...values, carprice: newValue})
        break
      case "downpayment":
        if (newValue < 0) return setValues({...values, downpayment: 0})
        setValues({...values, downpayment: newValue})
        break
      case "tradeinvalue":
        if (newValue < 0) return setValues({...values, tradeinvalue: 0})
        setValues({...values, tradeinvalue: newValue})
        break
      case "lengthofloan":
        if (newValue < 0) return setValues({...values, lengthofloan: 0})
        setValues({...values, lengthofloan: newValue})
        break
      case "rate":
        if (newValue < 0) return setValues({...values, rate: 0})
        setValues({...values, rate: newValue})
        break
    }
    
  }
  const [values, setValues] = useState({
    carprice: null,
    downpayment: null,
    tradeinvalue: null,
    lengthofloan: null,
    rate: null
  })
  console.log(values)
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
              InputProps={{
                inputProps: {
                  max: 100, min: 0
                }
              }}
              fullWidth 
              sx={{
                bgcolor: 'white',
                mt: '20px'
              }}
            >
              <InputLabel htmlFor="carprice">Car Price</InputLabel>
              <OutlinedInput
                id="carprice"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Car Price"
                type="number"
                value={values.carprice}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl 
              fullWidth 
              sx={{
                bgcolor: 'white',
                mt: '20px'
              }}
            >
              <InputLabel htmlFor="downpayment">Down Payment (optional)</InputLabel>
              <OutlinedInput
                id="downpayment"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Down Payment (optional)"
                type="number"
                value={values.downpayment}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl 
              fullWidth
              sx={{
                bgcolor: 'white',
                mt: '20px'
              }}
            >
              <InputLabel htmlFor="tradeinvalue">Trade-in value (optional)</InputLabel>
              <OutlinedInput
                id="tradeinvalue"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Trade-in value (optional)"
                type="number"
                value={values.tradeinvalue}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl 
              fullWidth
              sx={{
                bgcolor: 'white',
                mt: '20px'
              }}
            >
              <InputLabel htmlFor="lengthofloan">Length of loan</InputLabel>
              <OutlinedInput
                id="lengthofloan"
                endAdornment={<InputAdornment position="end">months</InputAdornment>}
                label="Length of loan"
                type="number"
                value={values.lengthofloan}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl 
              fullWidth
              sx={{
                bgcolor: 'white',
                mt: '20px'
              }}
            >
              <InputLabel htmlFor="rate">Annual Percentage Rate</InputLabel>
              <OutlinedInput
                id="rate"
                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                label="Annual Percentage Rate"
                type="number"
                value={values.rate}
                onChange={handleChange}
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
