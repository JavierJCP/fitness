import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

import { useExerciseData } from '../hooks/useExerciseData';

function ExercisesDetail() {
  const { id } = useParams();

  const {
    exerciseDetail,
    exerciseVideos,
    targetMuscleExercises,
    equipmentExercises,
  } = useExerciseData({ id });

  return (
    <Box>
      <Detail exercisesDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
}

export default ExercisesDetail;
