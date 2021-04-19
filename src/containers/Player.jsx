import React from 'react';
import '../assets/styles/components/Player.scss';

const Player = () => {
  return (
    <div className='Player'>
      <video controls={true} autoPlay>
        <source src='' type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button'>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Player;
