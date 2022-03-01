import { Typography } from "@mui/material";
import styled from "styled-components";

export const Main = styled.main`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
`

export const Container = styled.div`
    margin: auto;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 60px 660px;
`

export const Logo = styled.h3`
    font-family: 'Roboto';
    font-weight: 700;
`
export const ContentBody = styled.section`
    display: grid;
    grid-template-rows: 200px 440px;
    border: 1px solid hotpink;
    width: 100%;
`
export const Home = styled.section`
    border: 1px solid hotpink;
    padding: 10px;
`

export const InputArea = styled.section`
    border: 1px solid hotpink;
    padding: 10px;
    background-color: #F2F2F2;
    & > * > * {
        background-color: white;
        margin-top: 20px;
    }
`

export const Title = styled.h6`
    font-weight: 700;
    font-size: 1.3rem;
    margin-top: 60px;
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