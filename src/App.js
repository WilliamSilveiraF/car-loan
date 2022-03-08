import React, { useState } from "react";
import { Main, Container, Logo, ContentBody, Home, Title, Description, InputArea, CTA, Breakdown, Footer, CenterLoading } from "./styles";
import { AppBar, Toolbar, Button, InputAdornment, InputLabel, OutlinedInput, FormControl, CircularProgress } from '@mui/material'

const axios = require('axios')
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
function App() {
  const handleChange = (e) => {
    let newValue = parseFloat(e.target.value)

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
        setValues({...values, rate: parseFloat(newValue)})
        break
      default:
        console.log("Input not found")
    }
    
  }
  const [isLoanding, setLoading] = useState(false)
  const [values, setValues] = useState({
    carprice: null,
    downpayment: null,
    tradeinvalue: null,
    lengthofloan: null,
    rate: null
  })
  const [breakdown, setBreakdown] = useState({
    carprice: 0,
    downpayment: 0,
    monthlyPayment: 0,
    totalInterestPaid: 0,
    totalLoan: 0,
    totalLoanAndInterestPaid: 0,
    tradeinvalue: 0,
  })

  const handleSubmit = async () => {
    setLoading(true)
    axios({
      method: 'post',
      headers: {"Access-Control-Allow-Origin": "*"},
      url: 'https://car-loan-api.herokuapp.com/api/calculateloan',
      data: {...values, rate: values.rate / 100}
    })
      .then((response) => setBreakdown({...response.data}))
      .then(setLoading(false))
      .catch(error => {
        window.alert(error)
        setLoading(false)
      })
  }
  console.log(breakdown)
  if (isLoanding) {
    return (
      <Main>
        <CenterLoading>
          <CircularProgress />
        </CenterLoading>
      </Main>
    );
  }
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
          <InputArea onSubmit={handleSubmit}>
            <CTA>QuickStart</CTA>
            <FormControl
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
              onClick={handleSubmit}
            >
              Calculate
            </Button>
          </InputArea>
          <Breakdown>
            <CTA>Your estimated payment</CTA>
            <h5>{ formatter.format(parseFloat(breakdown.monthlyPayment)) }/mo. </h5>
            <h4>Breakdown</h4>
            <p>Car Price <span>{ formatter.format(parseFloat(breakdown.carprice)) }</span></p>
            <p>Down Payment <span>- { formatter.format(parseFloat(breakdown.downpayment)) }</span></p>
            <p>Trade-in value <span>- { formatter.format(parseFloat(breakdown.tradeinvalue)) }</span></p>
            <div></div>
            <h3>Total loan amount<span>{ formatter.format(parseFloat(breakdown.totalLoan)) }</span></h3>
            <h3>Total interest paid<span>{ formatter.format(parseFloat(breakdown.totalInterestPaid)) }</span></h3>
            <h3>Total loan & interest payment<span>{ formatter.format(breakdown.totalLoanAndInterestPaid) }</span></h3>
            <h3>Monthly payment<span>{ formatter.format(breakdown.monthlyPayment) }</span></h3>
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
