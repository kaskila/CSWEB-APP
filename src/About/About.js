// // import React from 'react';
// // import { Typography, Paper, Grid } from '@mui/material';
// // import AboutCard from '../components/about/AboutCard';
// // import Back from '../components/common/back/Back';

// // const About = () => {
// //   return (
// //     <>
// //       <Back title="About us"/>
// //       <AboutCard/>
// //       <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
// //         <Typography variant="h4">
// //           This is the about page for the department of computer science
// //         </Typography>
// //       </Paper>
// //     </>
// //   );
// // };

// // export default About;

// // import React from 'react';
// // import { Typography, Paper, Grid } from '@mui/material';


// // const About = () => {
// //   return (
// //     <>
      
// //       <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
// //         <Typography variant="h4">
// //           This is the about page for the department of computer science
// //         </Typography>
// //       </Paper>
// //     </>
// //   );
// // };

// // export default About;


// // import React from 'react';
// // import { Carousel } from 'react-responsive-carousel';
// // import 'react-responsive-carousel/lib/styles/carousel.min.css';
// // import { Paper, Typography, Grid } from '@mui/material';

// // const About = () => {
// //   return (
// //     <>
// //       <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
// //         <Typography variant="h4">
// //           This is the about page for the Department of Computer Science
// //         </Typography>
// //       </Paper>
// //       <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
// //         <Carousel showArrows={true} showThumbs={false} autoPlay>
// //           <div>
// //             <img src="" alt="Image 1" />
// //           </div>
// //           <div>
// //             <img src="/path-to-your-image-2.jpg" alt="Image 2" />
// //           </div>
// //           <div>
// //             <img src="/path-to-your-image-3.jpg" alt="Image 3" />
// //           </div>
// //           {/* Add more images as needed */}
// //         </Carousel>
// //       </Paper>
// //     </>
// //   );
// // };

// // export default About;


// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Paper, Typography } from '@mui/material';

// const About = () => {
//   // Create an array of image URLs
//   const imageUrls = [
//     'https://picsum.photos/600/400?image=101',
//     'https://picsum.photos/600/400?image=102',
//     'https://picsum.photos/600/400?image=103',
//     // Add more image URLs as needed
//   ];

//   const videoUrl = 'https://youtu.be/dNo_BVzNb28?si=xOIBWg96CZqFb54G';

//   return (
//     <>
//       <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', height: '10' }}>
//         <Typography variant="h4">
//           This is the about page for the Department of Computer Science
//         </Typography>
//       </Paper>
//       <Paper elevation={3} style={{ padding: '50px', marginTop: '20px' }}>
//         <Carousel
//           showArrows={true}
//           showThumbs={false}
//           autoPlay
//           infiniteLoop
//           interval={6000} // Adjust the interval as needed
//           height ={10}
//         >
//           {imageUrls.map((imageUrl, index) => (
//             <div key={index}>
//               <img src={imageUrl} alt={`Image ${index + 1}`} />
//             </div>
//           ))}
//         </Carousel>
//       </Paper>
      

//     </>
//   );
// };

// export default About;

import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import aboutImage  from './about.webp';

const About = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <Typography variant="h4">
            This is the about page for the Department of Computer Science
          </Typography>
          <Typography variant="body1">
            The Department of Computer Science at University of Zambia is a vibrant and growing community of scholars and students. We are committed to providing our students with a high-quality education in computer science, and to preparing them for successful careers in the field.
          </Typography>
          <Typography variant="body1">
            Our faculty are experts in a wide range of computer science areas, including artificial intelligence, machine learning, data science, software engineering, and cybersecurity. They are actively engaged in research and teaching, and are committed to providing our students with the latest knowledge and skills in the field.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={aboutImage} alt="About page image" style={{ width: '100%' }} />
      </Grid>
    </Grid>
  );
};

export default About;




