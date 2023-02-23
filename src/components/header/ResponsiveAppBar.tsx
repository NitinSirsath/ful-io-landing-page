import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ContainerM from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Container, FeaturesContainer, FeatureArrow, ListItems } from './navbar.style'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';

import Arrow from '../../assets/arrow.png'
import { useState , useContext} from 'react';
import { IsMobileContext } from '../../App';
import Logo from '../Logo'



const featureData = [
  {
    title: 'Technology Search',
    border: false,
  },
  {
    title: 'Category Search',
    border: true,
  },
  {
    title: 'Email Verification',
    border: false,
  },
  {
    title: 'Profession Domain Data',
    border: false,
  },
  {
    title: 'Technology Compare',
    border: true,
  },
  {
    title: 'Keyword Search',
    border: false,
  },
]



const ResNavbar = styled(MenuItem)({
    flexDirection: 'column',
    width: '450px',
    gap: '30px',

  '&:hover': {
    
  },
});
const LoginButton = styled(Button)({
  color: '#000000',
  fontWeight: 600,
  backgroundColor: 'transparent',
  boxShadow: 'none',
  textTransform: 'none',

  '&:hover': {
    backgroundColor: 'transparent',
  },
});
const SignUpButton = styled(Button)({
  color: '#5450E2',
  fontWeight: 600,
  backgroundColor: '#fff',
  textTransform: 'none',

  '&:hover': {
    backgroundColor: '#fff',
  },
});

const LinkButton = styled(Link)`
  text-decoration: none;
  font-weight: bolder;
  color: #212020;

  &:hover {
      color: #5450E2;
  }
  
`

function ResponsiveAppBar() {
  const {isMobile} = useContext(IsMobileContext)

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)

  return (
    <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none', padding: '22px 32px' }} position="static">
      <ContainerM maxWidth="xl">
        <Toolbar sx={{color: 'black'}} disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
        <Logo colorProp='#000000' height={40}/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             <ResNavbar   onClick={handleCloseNavMenu}>
                  <LinkButton to='/'><ListItems>Home</ListItems></LinkButton>
                  <ListItems onClick={() => setIsFeaturesOpen(preV => !preV)}>Features <FeatureArrow arrowState={isFeaturesOpen}><img src={Arrow} alt="" /></FeatureArrow></ListItems>
                  <LinkButton to='/pricing'><ListItems>Pricing</ListItems></LinkButton>
                  <LinkButton to='/blog'><ListItems>Blog</ListItems></LinkButton>
                </ResNavbar>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'flex-end',
            }}
          >
         <Logo colorProp='#181717' height={40}/>
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent: 'center', gap: '30px', display: { xs: 'none', md: 'flex' } }}>
            <LinkButton to='/'><ListItems>Home</ListItems></LinkButton>
            <ListItems onClick={() => setIsFeaturesOpen(preV => !preV)}>Features <FeatureArrow arrowState={isFeaturesOpen}><img src={Arrow} alt="" /></FeatureArrow></ListItems>
            <LinkButton to='/pricing'><ListItems>Pricing</ListItems></LinkButton>
            <LinkButton to='/blog'><ListItems>Blog</ListItems></LinkButton>
          </Box>
          {
            isFeaturesOpen && (
              <FeaturesContainer>
                {
                  featureData.map((item, index) => (
                    <div key={index} style={{ borderBottom: item.border ? '1px solid #b7b3b3' : 'none' }}>
                      <p >{item.title}</p>
                    </div>
                  ))
                }
              </FeaturesContainer>

            )
          }

          <Box sx={{ flexGrow: 0 }}>

            <div
            // sx={{ mt: '45px' }}
            // id="menu-appbar"
            // anchorEl={anchorElUser}
            // anchorOrigin={{
            //   vertical: 'top',
            //   horizontal: 'right',
            // }}
            // keepMounted
            // transformOrigin={{
            //   vertical: 'top',
            //   horizontal: 'right',
            // }}
            // open={Boolean(anchorElUser)}
            // onClose={handleCloseUserMenu}
            >
              {
                !isMobile ? <><LoginButton variant="contained">Login</LoginButton>
                <SignUpButton variant="contained">Sign up</SignUpButton></>: <></>
              }
            </div>
          </Box>
        </Toolbar>
      </ContainerM>
    </AppBar>
  );
}
export default ResponsiveAppBar;