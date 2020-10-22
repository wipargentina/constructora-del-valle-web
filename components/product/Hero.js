import React from 'react';
import IconStar from '@components/icons/IconStar';
import IconBookmark from '@components/icons/IconBookmark';

export default function Hero(props) {
  const hero = props.data;
  return (
    <div className='hero'>
      <img src={hero.image} alt='image' className='hero-bg' loading='lazy' />
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <div className='container'>
          <div className='info'>
            <div className={hero.badge}>{hero.status}</div>
            <h1 className='big-title'>
              <span>{hero.title}</span> <small>{hero.location}</small>
            </h1>
          </div>
          <>
            {hero.bookmark && (
              <div className='bookmark'>
                <div className='bookmark-body'>
                  <IconStar className='icon' />
                  <div className='text'>{hero.bookmark}</div>
                </div>
                <IconBookmark className='bookmark-footer' />
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
}
