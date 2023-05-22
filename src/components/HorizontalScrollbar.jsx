import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useContext } from 'react';
import RightArrowIcon from '../assets/icons/right-arrow.svg';
import LeftArrowIcon from '../assets/icons/left-arrow.svg';
import ExerciseCard from './ExerciseCard';

import IconAll from '../assets/icons/gym.svg';
import IconBack from '../assets/icons/back.svg';
import IconCardio from '../assets/icons/cardio.svg';
import IconChest from '../assets/icons/chest.svg';
import IconLowerArms from '../assets/icons/upper-arms.svg';
import IconLowerLegs from '../assets/icons/lower-legs.svg';
import IconNeck from '../assets/icons/neck.svg';
import IconShoulders from '../assets/icons/shoulders.svg';
import IconUpperArms from '../assets/icons/upper-arms.svg';
import IconUpperLegs from '../assets/icons/lower-legs.svg';
import IconWaist from '../assets/icons/waist.svg';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className='right-arrow'>
      <img src={LeftArrowIcon} alt='right-arrow' />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className='left-arrow'>
      <img src={RightArrowIcon} alt='right-arrow' />
    </Typography>
  );
};

function HorizontalScrollbar({ data, bodyPart, setBodyPart, isBodyParts }) {
  const Logo = [
    IconAll,
    IconBack,
    IconCardio,
    IconChest,
    IconLowerArms,
    IconLowerLegs,
    IconNeck,
    IconShoulders,
    IconUpperArms,
    IconUpperLegs,
    IconWaist,
  ];

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item, index) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
              Icon={Logo[index]}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollbar;
