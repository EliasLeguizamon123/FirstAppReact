import {SimpleGrid, Grid, Container } from '@chakra-ui/react'
import axios from 'axios';
import {useEffect, useState} from 'react'
import NavBar from './NavBar';
import Card from './Card';

function App() {
    const [challenges, setChallenges] = useState([]);
    const fetchChallenges = async () => {
        try{
            const response = await axios.get('https://infinite-wave-87125.herokuapp.com/challenges');
            const data = await response.data;
            setChallenges(() => data);
            console.log(data);
        } catch(err) {
            throw err;
        }
    };
    useEffect(() =>{
        fetchChallenges()
    }, []);
  return (
      <Grid>
          <NavBar />
          <Container maxW="container.xl">
            <SimpleGrid columns={{lg: 4, md: 3, sm: 2}} spacing={6} my={12}>
            {challenges.map((challenge, index) =>(
                    <Card key={index} {...challenge} />
                ))}
            </SimpleGrid>
          </Container>
      </Grid>
  );
}

export default App;
