import { useEffect, useState } from 'react';
import { exercisesOptions, fetchData } from '../utils/fetchData';

export function useBodyParts() {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exercisesOptions
      );

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  return { bodyParts };
}
