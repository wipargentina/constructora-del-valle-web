import React from 'react';
import IconStar from '@components/icons/IconStart';
import IconBookmark from '@components/icons/IconBookmark';

export default function Hero(props) {
  return (
    <div className='hero'>
      <img
        src='https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80'
        alt='image'
        className='hero-bg'
      />
      <div className='hero-content'>
        <div className='container'>
          <div className='info'>
            <div className={props.badge}>{props.status}</div>
            <h1 className='big-title'>
              <span>{props.title}</span> <small>{props.location}</small>
            </h1>
          </div>
          <div className='bookmark'>
            <div className='bookmark-body'>
              <IconStar className='icon' />
              <div className='text'>{props.bookmark}</div>
            </div>
            <IconBookmark className='bookmark-footer' />
          </div>
        </div>
      </div>
    </div>
  );
}
