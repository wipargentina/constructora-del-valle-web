import React from 'react';
import IconStar from '@components/icons/IconStar';
import IconBookmark from '@components/icons/IconBookmark';

export default function Hero(props) {
  return (
    <div className='hero'>
      <img src={props.image} alt='image' className='hero-bg' />
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <div className='container'>
          <div className='info'>
            <div className={props.badge}>{props.status}</div>
            <h1 className='big-title'>
              <span>{props.title}</span> <small>{props.location}</small>
            </h1>
          </div>
          <>
            {props.bookmark && (
              <div className='bookmark'>
                <div className='bookmark-body'>
                  <IconStar className='icon' />
                  <div className='text'>{props.bookmark}</div>
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
