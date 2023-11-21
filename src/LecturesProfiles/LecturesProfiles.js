

import React from 'react';
import MyCard from '../MyCards/MyCard';
import { Typography, Paper, Grid } from '@mui/material';

const profiles = [
  {
    name: 'Dr. Nyirenda Mayumbo',
    position: 'Former HOD CS Deparment',
    email: 'kasikila@isaac.com',
    image: 'http://dl.cs.uct.ac.za/sites/default/files/images/mayumbo.jpg',
    link: 'https://example.com/nyirenda-mayumbo',
  },
  {
    name: 'Dr. Mukelebai Mukelebai',
    position: 'HOD CS Department',
    email: 'john.doe@example.com',
    image: 'https://scontent.flun1-3.fna.fbcdn.net/v/t39.30808-6/300218452_438429098308806_2572048582628358456_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGanQhJ6XYgszm0h6Hw6jD4gY2dKg4sp7KBjZ0qDiynso2MIa7BjVZVZH7xKuD0YE3H5rBxnHE9SvBVo7nsGFVm&_nc_ohc=wkTxGevnZ8QAX9UYI6F&_nc_zt=23&_nc_ht=scontent.flun1-3.fna&oh=00_AfAB14DdnMMP7_o3VIWNnwBLvD_oNULLbfW8HNg5z49b1Q&oe=6543AAB1',
    link: 'https://example.com/john-doe',
  },
  {
    name: 'DMZ',
    position: 'Lecturer',
    email: 'dmz.doe@example.com',
    image: 'https://media.licdn.com/dms/image/C5603AQE73ytuB8AGkg/profile-displayphoto-shrink_400_400/0/1585854254355?e=1703116800&v=beta&t=ACDmRx7wXW0rZdOc-uXsWNIJLwqKL5abIfRe8ONDE5E',
    link: 'https://example.com/dmz',
  },
  {
    name: 'Mrs. Kabemba',
    position: 'Lecturer',
    email: 'kabemba.doe@example.com',
    image: 'https://mondekalumbilo.files.wordpress.com/2011/02/m-kalumbilo.jpg?w=584',
    link: 'https://example.com/kabemba',
  },
  {
    name: 'Prof. Jackson Phiri',
    position: 'Lecturer',
    email: 'jackson.doe@example.com',
    image: 'https://www.acts-net.org/images/AI4D/Profiles/Supervisors/Jackson-Phiri.png',
    link: 'https://example.com/jackson',
  },

  {
    name: 'Mr. Claytone Sikasote',
    position: 'Lecturer',
    email: 'claytone.doe@example.com',
    image: 'https://media.licdn.com/dms/image/C4D03AQF1-g-G4Ejwew/profile-displayphoto-shrink_800_800/0/1617917557962?e=2147483647&v=beta&t=W-Cf_eo0St2QnEI59lwIzXs9ApudRJYUE6a1fg_beKU',
    link: 'https://example.com/claytone ',
  },
  {
    name: 'Mr. Andirea Theu',
    position: 'Lecturer',
    email: 'theu.doe@example.com',
    image: 'https://media.licdn.com/dms/image/C4E03AQG30V_EZLpmFA/profile-displayphoto-shrink_800_800/0/1563283642413?e=2147483647&v=beta&t=aQjOgzWqkX0lzNwpN7DS2c-L_A9VbeqO1bpRYLxpbKI',
    link: 'https://example.com/theu ',
  },
];

function LecturesProfiles() {
  return (
    <div>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4">Lectures Profiles</Typography>
        
        <Grid container spacing={2}>
          {profiles.map((profile, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <MyCard
                name={profile.name}
                position={profile.position}
                email={profile.email}
                image={profile.image}
                link={profile.link}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}

export default LecturesProfiles;
