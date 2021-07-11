import {SimpleGrid, Grid, } from '@chakra-ui/react'
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
          {challenges.map(challenge =>(
            <SimpleGrid columns={3} spacing="30px" minChildWidth="sm" alignItems="center">
                <Card key={challenge.index} {...challenge}/>
            </SimpleGrid>
          ))}
      </Grid>
  );
}

export default App;
