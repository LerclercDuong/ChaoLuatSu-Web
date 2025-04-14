import React, { useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginModalOpenAction, setSignUpModalOpenAction } from '../../../features/app';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthenticated, selectUserInfo } from '../../../features/auth/auth.selectors';
import { AppBar, Toolbar, IconButton, Typography, Button, Avatar, Menu, MenuItem, Box, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import styles from './Header.module.scss';
import LoginForm from '../../../containers/LoginForm/LoginForm';
import SignUpForm from '../../../containers/SignUpForm/SignUpForm';

// Define types for navigation items
interface NavItem {
  label: string;
  path: string;
  new?: boolean;
}

// Define user type (based on what might be in the Redux store)
interface User {
  name?: string;
  avatar?: string;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUserInfo);
  const isMobile: boolean = useMediaQuery('(max-width: 900px)');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: 'Tạo văn bản', path: '/make-documents' },
    { label: 'Ký văn bản', path: '/sign-documents' },
    { label: 'Thuế', path: '/taxes' },
    { label: 'Bắt đầu kinh doanh', path: '/start-business' },
    { label: 'Hỏi luật sư', path: '/ask-lawyer' },
    { label: 'Lợi ích nhóm hợp pháp', path: '/group-legal', new: true },
  ];

  const handleReturnHome = (): void => {
    navigate('/home');
  };

  const handleMenuOpen = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLoginClick = (): void => {
    dispatch(setLoginModalOpenAction(true));
  };

  const handleSignUpClick = (): void => {
    dispatch(setSignUpModalOpenAction(true));
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem onClick={() => navigate(item.path)}>
            <ListItemText primary={item.label} />
            {item.new && <span className={styles.newBadge}>NEW</span>}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar className={styles.toolbar}>
        {/* Logo */}
        <Typography variant="h5" className={styles.logo} onClick={handleReturnHome}>
          <img className={styles.logo} src={"ChaoLuatSu-logo.png"} />
        </Typography>

        {/* Mobile Hamburger Menu */}
        {!isMobile &&
          <Box className={styles.navLinks}>
            {navItems.map((item) => (
              <Button key={item.label} color="inherit" onClick={() => navigate(item.path)} className={styles.navItem}>
                {item.label}
                {item.new && <span className={styles.newBadge}>Mới</span>}
              </Button>
            ))}
          </Box>
        }

        {/* Right Side Icons */}
        <Box className={styles.actions}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
        </Box>

        {!isMobile &&
          <React.Fragment>
            {isAuthenticated ? (
              <>
                <IconButton onClick={handleMenuOpen}>
                  <Avatar src={user?.profilePicture} alt={user?.email} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
                  <MenuItem onClick={() => navigate('/settings')}>Settings</MenuItem>
                  <MenuItem onClick={() => navigate('/logout')}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Box sx={{display: 'flex', gap: 2}}>
                <button className={styles.loginButton} onClick={() => dispatch(setLoginModalOpenAction(true))}>Login</button>
                <LoginForm />
                <button className={styles.signUpButton} onClick={() => dispatch(setSignUpModalOpenAction(true))}>Sign Up</button>
                <SignUpForm />
              </Box>
            )}
          </React.Fragment>
        }


        {
          isMobile && <>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
              {drawerContent}
            </Drawer>
          </>
        }

      </Toolbar>
    </AppBar>
  );
};

export default Header;