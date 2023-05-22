import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { exercisesOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import { useBodyParts } from '../hooks/useBodyParts';

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState('');
  const { bodyParts } = useBodyParts();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exercisesOptions
      );
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('');
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb='50px'
        textAlign='center'
      >
        Awesome Exercises you <br /> should know
      </Typography>
      <Box position='relative' mb='72px'>
        <form onSubmit={handleSearch}>
          <TextField
            sx={{
              input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
              width: { lg: '800px', xs: '350px' },
              backgroundColor: '#fff',
              borderRadius: '40px',
            }}
            height='76px'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            placeholder='deadlift, cable, arms...'
            type='text'
          />

          <Button
            className='search-btn'
            sx={{
              bgcolor: '#ff2625',
              color: '#fff',
              textTransform: 'none',
              width: { lg: '175px', xs: '80px' },
              fontSize: { lg: '20px', xs: '14px' },
              height: '56px',
              position: 'absolute',
              right: '0',
            }}
            type='submit'
          >
            Search
          </Button>
        </form>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
