import React, { useContext } from 'react'
import { HomeRounded, SchoolRounded, PersonRounded, ExitToAppRounded, MenuRounded } from '@material-ui/icons'

import { 
    AppBar, 
    Drawer,
    Toolbar, 
    Typography, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText,
    useMediaQuery,
    Divider,
    IconButton,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext"

const pages = [
    { component: "Home", path: "/", icon: <HomeRounded /> },
    { component: "Graduação", path: "/", icon: <SchoolRounded /> },
    { component: "Serviços", path: "/", icon: <SchoolRounded /> },
    { component: "Other", path: "/", icon: <SchoolRounded /> },
]

const drawerWidth = 240;

function Sidebar(props) {
    let {logoutUser} = useContext(AuthContext)
    
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isMobile = useMediaQuery("(max-width:900px)");

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <List>
            {pages.map((page) => (
                <ListItem button component={Link} to={page.path} key={page.component} disablePadding>
                    <ListItemIcon> {page.icon} </ListItemIcon>
                    <ListItemText primary={page.component} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            <ListItem button component={Link} to="/"key="Profile" disablePadding>
                <ListItemIcon> <PersonRounded /> </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button key="Sair" disablePadding onClick={logoutUser}>
                <ListItemIcon> <ExitToAppRounded /> </ListItemIcon>
                <ListItemText primary="Sair" />
            </ListItem>
        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
        <>
        {isMobile ? (
            <AppBar
                position="fixed"
                sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuRounded />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Minha UFOP 2.0
                </Typography>
                </Toolbar>
            </AppBar>
        ) : (
            <div>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{keepMounted: true}} // Better open performance on mobile.
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer variant="permanent" open
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                > {drawer} </Drawer>
            </div>
        )}
        </>
    )
  }
  
  export default Sidebar;
  
  