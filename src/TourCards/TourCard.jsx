// import React from "react";
// import Paper from "@mui/material/Paper"
// import Grid from "@mui/material/Grid"
// import { Typography, Box,createTheme, ThemeProvider} from "@mui/material";
// import {AccessTime} from "@mui/icons-material"

// const theme = createTheme({
//     components:{
//         MuiTypography:{
//             variants:[
//                 {
//                     props:{
//                         variant:"body2"
//                     },
//                     style:{
//                         fontSize:11,
//                     },
                    
//                 },
//                 {
//                     props:{
//                         variant:"body3"
//                     },
//                     style:{
//                         fontSize:9,
//                     },
                    
//                 }
//             ]
//         }
//     }
// })






// const TourCard = ({tour})=>{
//     return(
//         <Grid item xs={4}>
//             <ThemeProvider theme={theme}>
//             <Paper elevation={3}>
//                 <img src={tour.image}
//                 alt="machine learning"
//                 className="img"
            
//                 />
//                 <Box paddingX={1}>
//                     <Typography variant="subtitle1" component="h2">
//                         {tour.name}
//                     </Typography>
                    
//                     <Box
//                         sx={{
//                             display:"flex",
//                             alignItems:"center",
//                         }}
//                     >
//                         <AccessTime sx={{width:12.5}}/>
//                         <Typography variant="body" component="p" marginLeft={0.5}>
//                             {tour.duration} Years
//                         </Typography>

//                     </Box>
                    
//                 </Box>
                
                
//             </Paper>
//             </ThemeProvider>
//         </Grid>
//     )
// }

// export default TourCard; 

// import React from "react";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import { Typography, Box, createTheme, ThemeProvider, Link } from "@mui/material";
// import { AccessTime } from "@mui/icons-material";
// import { Link as RouterLink } from 'react-router-dom';

// const theme = createTheme({
//   components: {
//     MuiTypography: {
//       variants: [
//         {
//           props: {
//             variant: "body2"
//           },
//           style: {
//             fontSize: 11,
//           },
//         },
//         {
//           props: {
//             variant: "body3"
//           },
//           style: {
//             fontSize: 9,
//           },
//         }
//       ]
//     }
//   }
// });

// const TourCard = ({ tour }) => {
//   return (
//     <Grid item xs={4}>
//       <ThemeProvider theme={theme}>
//         <Paper elevation={3}>
//           <Link component={RouterLink} to={`${tour.link}`}>
//             <img
//               src={tour.image}
//               alt={tour.name}
//               className="img"
//               style={{ width: "100%", height: "auto" }}
//             />
//             <Box padding={2}>
//               <Typography variant="subtitle1" component="h2">
//                 {tour.name}
//               </Typography>

//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   marginTop: 1,
//                 }}
//               >
//                 <AccessTime sx={{ width: 12.5 }} />
//                 <Typography variant="body2" component="p" marginLeft={0.5}>
//                   {tour.duration} Years
//                 </Typography>
//               </Box>
//             </Box>
//           </Link>
//         </Paper>
//       </ThemeProvider>
//     </Grid>
//   );
// }

// export default TourCard;


import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, Box, createTheme, ThemeProvider, Link } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { Link as RouterLink } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2"
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3"
          },
          style: {
            fontSize: 9,
          },
        }
      ]
    }
  }
});

const linkStyle = {
  textDecoration: 'none', // Remove underline
  color: 'inherit', // Inherit the color from the parent
};

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={4}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <Link
            component={RouterLink}
            to={tour.link}
            style={linkStyle} // Apply the linkStyle
          >
            <img
              src={tour.image}
              alt={tour.name}
              className="img"
              style={{ width: "100%", height: "150px" }}
            />
            <Box padding={2}>
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 1,
                }}
              >
                <AccessTime sx={{ width: 12.5 }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.duration} Years
                </Typography>
              </Box>
            </Box>
          </Link>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

export default TourCard;
