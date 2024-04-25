import { AppBar, Toolbar, Typography, IconButton, MenuItem, TextField, Button, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <AppBar position="static" color="transparent">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5">
                    <a className="select-none">MangaVerse</a>
                </Typography>
                <MenuItem>Category</MenuItem>
                <MenuItem>Ranking</MenuItem>
                <MenuItem>Favourite</MenuItem>
                <MenuItem>About us</MenuItem>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <TextField
                        variant="outlined"
                        placeholder="Search manga..."
                        size="small"
                        sx={{ width: '60%' }}
                    />
                </Box>
                <Button color="inherit">Login</Button>
                <Button variant="outlined" sx={{ marginLeft: 1 }} color="inherit">
                    Sign Up
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;