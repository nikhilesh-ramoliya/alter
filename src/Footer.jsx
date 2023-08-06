import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import logo from "./loog.webp"


const Footer = () => {
    const footerStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        boxSizing: "border-box",
        textAlign: 'center',
        height: "40vh",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        left: 0,
        flexDirection: { xs: "column", md: "row" },
        marginTop: "2rem",
        bottom: 0,
        width: '100%',
    };

    return (
        <Box sx={footerStyle}>
            <Container sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "100%",
                width: "100%"
            }}>
                <Typography variant="h6" sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Link style={{
                        textDecoration: "none", color: "gray"
                    }} to="/">Home</Link>
                    <Link style={{
                        textDecoration: "none", color: "gray"
                    }} to="/about">About</Link>
                    <Link style={{
                        textDecoration: "none", color: "gray"
                    }} to="/contact">Contact Us</Link>
                </Typography>
                <Typography variant="h6" sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <strong>Products:</strong>{' '}
                    <Link style={{
                        textDecoration: "none", color: "gray"
                    }} to="/products/2-pin-top">2 Pin Top</Link>
                    <Link style={{
                        textDecoration: "none", color: "gray"
                    }} to="/products/3-pin-top">3 Pin Top</Link>
                    <Link style={{
                        textDecoration: "none", color: "gray"
                    }} to="/products/regulator">Regulator</Link>
                    <Link style={{
                        textDecoration: "none", color: "gray"
                    }} to="/products/others">Others</Link>
                </Typography>
            </Container>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                height: "50px",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <img src={`${logo}`} style={{
                    maxHeight: "100%", width: "auto",
                    backgroundBlendMode: "color",
                }}></img>
            </Box>
        </Box>
    );
};

export default Footer;
