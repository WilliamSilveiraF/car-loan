import styled from "styled-components";

export const Main = styled.main`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
`

export const Container = styled.div`
    height: 100%;
    display: grid;
    & > section {
        margin: auto;
    }
    grid-template-rows: 60px 1124px 60px;

`

export const Logo = styled.h3`
    font-weight: 700;
`
export const ContentBody = styled.section`
    display: grid;
    grid-template-rows: 188px 500px 496px;
    justify-content:center;
    
    @media(min-width: 768px) {
        width: 768px;
    }
`
export const Home = styled.section`
    padding: 10px;
`

export const InputArea = styled.form`
    padding: 10px;
    background-color: #F2F2F2;
    
`

export const Title = styled.h6`
    font-weight: 700;
    font-size: 1.3rem;
    margin-top: 52px;
`

export const Description = styled.p`
    font-family: 'Inter';
    font-size: 1.2rem;
    margin-top: 20px;
`

export const CTA = styled.h6`
    font-weight: 700;
    font-size: 1.3rem;
    margin-top: 8px;
`

export const Breakdown = styled.section`
    padding: 10px;
    & > h6 {
        text-align: center;
    }
    & > h5 {
        margin-top: 16px;
        font-size: 2.25rem;
        text-align: center;
    }
    & > h4 {
        margin-top: 32px;
        font-size: 1.75rem;
    }
    & > p {
        font-size: 1.2rem;
        color: '#F2F2F2';
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
    }
    & > p > * {
        font-size: 1.2rem;
    }
    & > div {
        width: 100%;
        height: 2px;
        background-color: #F2F2F2;
        margin: 16px 0 16px 0;
    }
    & > h3 {
        font-size: 1.2rem;
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
    }
`
export const Footer = styled.footer`
    background-color: #1876D2;
    text-align: center;
    color: white;
    & > h3 {
        margin-top: 12px;
        font-weight: 700;
        font-size: 1.25rem;
        
    }
    & > p {
        font-size: 0.75rem;
    }
`