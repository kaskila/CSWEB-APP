import React from 'react';
import { AppBar, Toolbar, Typography, Button} from '@mui/material';
import { Link } from 'react-router-dom';


const Bar = ()=>{
    return(
        <AppBar position="static" >
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Computer Science Department
                </Typography>
                    <Button color="inherit" component={Link} to="/"> 
                        Home 
                    </Button>
                    <Button color="inherit" component={Link} to="/about">
                        About
                    </Button>
                    <Button color="inherit" component={Link} to="/programmes">
                        Programmes
                    </Button>
                    <Button color="inherit" component={Link} to="/lectures-profiles">
                        Profiles
                    </Button>
            </Toolbar>
        </AppBar>

    )
}

export default Bar;


// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import UNZALogo from './unza-logo.png'; 

// const Bar = () => {
//   return (
//     <AppBar position="static" sx={{ background: '#228B22' }}>
//       <Toolbar>
//         <img src={UNZALogo} alt="UNZA Logo" sx={{ width: '5px', marginRight: '10px', height:'5px'}} />
//         <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff' }}>
//           Computer Science Department
//         </Typography>
//         <Button color="inherit" component={Link} to="/" sx={navButtonStyle}>
//           Home
//         </Button>
//         <Button color="inherit" component={Link} to="/about" sx={navButtonStyle}>
//           About
//         </Button>
//         <Button color="inherit" component={Link} to="/programmes" sx={navButtonStyle}>
//           Programmes
//         </Button>
//         <Button color="inherit" component={Link} to="/lectures-profiles" sx={navButtonStyle}>
//           Profiles
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// const navButtonStyle = {
//   color: '#fff',
//   textDecoration: 'none',
//   '&:hover': {
//     color: '#ffcc29',
//   },
// };

// export default Bar;


// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import UNZALogo from './unza-logo.png';

// const Bar = () => {
//   return (
//     <AppBar position="fixed" sx={{ background: '#228B22' }}>
//       <Toolbar>
//         {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <img
//             src={UNZALogo}
//             alt="UNZA Logo"
//             sx={{ width: '24px', marginRight: '8px' }}
//           />
          
//         </Box> */}
//         <Typography variant="h6" sx={{ color: '#fff' }}>
//             Computer Science Department
//           </Typography>
//         <Button color="inherit" component={Link} to="/" sx={navButtonStyle}>
//           Home
//         </Button>
//         <Button color="inherit" component={Link} to="/about" sx={navButtonStyle}>
//           About
//         </Button>
//         <Button color="inherit" component={Link} to="/programmes" sx={navButtonStyle}>
//           Programmes
//         </Button>
//         <Button color="inherit" component={Link} to="/lectures-profiles" sx={navButtonStyle}>
//           Profiles
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// const navButtonStyle = {
//   color: '#fff',
//   textDecoration: 'none',
//   '&:hover': {
//     color: '#ffcc29',
//   },
// };

// export default Bar;
