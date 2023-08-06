import { Box, Button, Container, FormControlLabel, Grid, Paper, Radio, RadioGroup, Slider, Switch, Typography } from '@mui/material';
import './App.css';
import pin from "./2pin.jpeg"
import logo from "./loog.webp"
import Carousel from 'react-material-ui-carousel';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

const items = [
  {
    name: "Lear Music Reader",
    description: "A PDF Reader specially designed for musicians.",
    color: "#64ACC8",
    href: 'https://github.com/Learus/Lear-Music-Reader'
  },
  {
    name: "Hash Code 2019",
    description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
    color: "#7D85B1",
    href: 'https://github.com/Learus/HashCode2019'
  },
  {
    name: "Terrio",
    description: "A exciting mobile game game made in the Unity Engine.",
    color: "#CE7E78",
    href: 'https://play.google.com/store/apps/details?id=com.Brewery.Terrio'
  },
  {
    name: "React Carousel",
    description: "A Generic carousel UI component for React using material ui.",
    color: "#C9A27E",
    href: 'https://github.com/Learus/react-material-ui-carousel'
  }
]

const Settings = ({ settings, setSettings }) => {

  /** Default function for Switches */
  const toggler = (event) => {
    setSettings({
      ...settings,
      [event.target.value]: !settings[event.target.value]
    })
  }

  /** Default function for Radio Groups */
  const radio = (event) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.value
    })
  }

  /** Default function for Sliders */
  const slider = (event, value) => {
    console.log(event);
    console.log(value);
    setSettings({
      ...settings,
      [event.target.name]: value
    })
  }

  const Toggler = ({ name }) => {
    return (
      <FormControlLabel
        control={
          <Switch onChange={toggler} checked={settings[name]} value={name}
            color="primary" />
        }
        label={name}
        labelPlacement='end'
      />
    )
  }

  return (
    <>
      <div className="Options">
        <div>
          <Typography>General Options</Typography>
          <Toggler name="autoPlay" />
          <Toggler name="indicators" />
          <Toggler name="swipe" />
        </div>

        <div>
          <Typography>Navigation (Buttons) Options</Typography>
          <Toggler name="cycleNavigation" />
          <Toggler name="navButtonsAlwaysVisible" />
          <Toggler name="navButtonsAlwaysInvisible" />
          <Toggler name='fullHeightHover' />
        </div>

        <div>
          <Typography>Animation Options</Typography>
          <FormControlLabel
            control={
              <div>
                <RadioGroup
                  name="animation"
                  value={settings.animation}
                  onChange={radio}
                  row
                  style={{ marginLeft: "10px" }}
                >
                  <FormControlLabel value="fade" control={<Radio color="primary" />} label="Fade" />
                  <FormControlLabel value="slide" control={<Radio color="primary" />} label="Slide" />
                </RadioGroup>
              </div>
            }
            label=""
          />

          <FormControlLabel
            control={
              <div style={{ width: '100%' }}>
                {/* <Typography>
                                  Animation Duration in ms
                              </Typography> */}
                <Slider
                  defaultValue={500}
                  getAriaValueText={() => `${settings.duration}ms`}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={100}
                  marks
                  min={100}
                  max={3000}
                  onChangeCommitted={(e, v) => {
                    e.target.name = 'duration';
                    slider(e, v);
                  }}
                />
              </div>
            }
            label="Animation Duration in ms"
            labelPlacement='bottom'
          />
        </div>
      </div>
    </>
  )
}


function Project({ item }) {
  return (
    <Paper
      className="Project"
      sx={{
        backgroundColor: item.color,
        backgroundSize: 'cover',
        height: "100%",
      }}
      elevation={10}
    >
      <Typography variant='h5'>{item.name}</Typography>
      <br />
      <Typography>{item.description}</Typography>

      <Button className="CheckButton" component='a' href={item.href} target='_blank' rel='noreferrer'>
        Check it out!
      </Button>
    </Paper>
  )
}



function App() {
  const [settings, setSettings] = useState({
    autoPlay: true,
    animation: "fade",
    indicators: true,
    duration: 1000,
    navButtonsAlwaysVisible: true,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true,
    height: "100%"
  });
  return (
    <>
      <BrowserRouter>

        <Header />
        <Container maxWidth="lg">
          <Box sx={{ height: "100%", width: "100%" }}>
            <Box sx={{ height: "50vh", width: "100%", background: "#ff000040" }}>
              <Carousel
                className="SecondExample"
                {...settings}
                sx={{
                  height: "100%",
                }}
              >
                {
                  items.map((item, index) => {
                    return <Project item={item} key={index} />
                  })
                }
              </Carousel>
            </Box>
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Box sx={{ height: "50vh", width: "100%", background: "#ff000040" }}>
              <Carousel
                className="SecondExample"
                {...settings}
                sx={{
                  height: "100%",
                }}
              >
                {
                  items.map((item, index) => {
                    return <Project item={item} key={index} />
                  })
                }
              </Carousel>
            </Box>
          </Box>
        </Container>
        <Footer />

      </BrowserRouter>

    </>
  );
}


export const Card = () => {
  return (
    <Box sx={{ height: "250px", minWidth: "200px", padding: "10px", }}>
      <Box sx={{ height: "100%", width: "100%", background: "lightGray", borderRadius: "10px", boxShadow: 4 }}>
        <Box sx={{ height: "50%", background: `url(${pin})`, backgroundPosition: "center center", backgroundSize: "cover", width: "100%", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", boxSizing: "border-box" }}></Box>
        <Box sx={{ height: "50%", background: "white", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
          <Box sx={{ height: "50%", background: "white", width: "100%", boxSizing: "border-box", p: 1 }}>
            <Typography variant='h5'>2 Pin Top</Typography>
            <Typography variant='body2'>2 piece/Box</Typography>
            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>₹5 /Piece</Typography>
          </Box>
          <Grid container sx={{ height: "50%" }}>
            <Grid item xs={8}></Grid>
            <Grid item xs={4} sx={{ background: "#ff000080", height: '100%', borderTopLeftRadius: "10px", borderBottomRightRadius: "10px", fontSize: "40px", justifyContent: "center", alignItems: "center", display: "flex" }}>+</Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export const Category = () => {
  return (
    <>
      <Typography variant='h5' py={2}>Category Name</Typography>
      <Box sx={{
        overflowX: "auto", display: "flex",
        '&::-webkit-scrollbar': {
          width: '0.1em',
          height: '0.1em'
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px #ff000040',
          webkitBoxShadow: 'inset 0 0 6px #ff000080'
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: "10px",
          backgroundColor: '#ff000080',
        }
      }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </>
  )
}


export default App;






export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sidebar
        open={open}
        setOpen={setOpen}
      />
      <Box sx={{ height: "10vh", width: "100%", background: "rgb(255,147,141)", position: "sticky", top: 0, zIndex: 100, mb: 2 }}>
        <Grid container sx={{
          height: "100%", width: "100%", alignItems: "center", justifyContent: "space-between", padding: "0px 20px"
        }}>
          <Grid item
            xs={2}
            sx={{
              display: { xs: 'flex', sm: "none" },
            }}
          >
            <MenuIcon
              onClick={() => setOpen(!open)}
            ></MenuIcon>
          </Grid>
          <Grid item container height={"100%"} xs={8} sm={2} alignItems={"center"}><img src={`${logo}`} style={{
            maxHeight: "80%", width: "auto",
            backgroundBlendMode: "color",
          }}></img>
          </Grid>
          <Grid item container sm={4}
            sx={{
              display: { xs: 'none', sm: "flex" },
              height: "100%", width: "100%", alignItems: "center", justifyContent: "space-around",
            }}
          >
            <Grid item>
              <Typography variant='h6' color={"white"} fontWeight={'bold'}>Home</Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6' color={"white"} fontWeight={'bold'}>About</Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6' color={"white"} fontWeight={'bold'}>Contact Us</Typography></Grid>
          </Grid>
          <Grid item xs={2}
            container
            sx={{
              height: "100%", width: "100%", alignItems: "center", justifyContent: "flex-end",
            }}

          >
            <Typography variant='h6' color={"white"} fontWeight={'bold'}>Cart</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}


export const Sidebar = ({ open, setOpen }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "fixed",
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        top: 0,
        zIndex: 111,
        transition: "0.5s",
        left: open ? "0" : "-100%",
      }}
    >
      <Box>
        <Box sx={{
          height: "10vh", background: "rgb(255,147,141)",
          display: 'flex',
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
        }}>
          <ArrowBackIosIcon
            sx={{
              mr: 3
            }}
            onClick={() => setOpen(!open)}
          ></ArrowBackIosIcon>
        </Box>
        <Grid item container sm={6}
          sx={{
            height: "max-content", width: "100%", alignItems: "center",
          }}
        >
          <Grid item xs={12} sx={{
            p: 1,
            pl: 2,
            borderBottom: "1px solid black"
          }}>
            <Typography variant='h6' color={"black"} fontWeight={'bold'}>Home</Typography>
          </Grid>
          <Grid item xs={12} sx={{
            p: 1,
            pl: 2,
            borderBottom: "1px solid black"
          }}>
            <Typography variant='h6' color={"black"} fontWeight={'bold'}>About</Typography>
          </Grid>
          <Grid item xs={12} sx={{
            p: 1,
            pl: 2,
            borderBottom: "1px solid black"
          }}>
            <Typography variant='h6' color={"black"} fontWeight={'bold'}>Contact Us</Typography></Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          height: "10vh", width: "100%", alignItems: "center",
          justifyContent: "center",
          display: 'flex',
        }}>
        <img src={`${logo}`} style={{
          maxHeight: "100%", width: "auto",
          backgroundBlendMode: "color",
        }}></img>
      </Box>

    </Box>
  )
}