import IconStar from '@components/icons/IconStar';
import IconBookmark from '@components/icons/IconBookmark';
import Link from 'next/link';

export default function VenturesCard(props) {
  const venture = props.venture;
  return (
    <Link href={venture.url}>
      <a>
        <div className={venture.id > 2 ? 'card portrait' : 'card landscape'}>
          <img src={venture.image} alt='' />
          <div className='card-overlay'></div>
          <div className='card-content'>
            <div className='card-bookmark'>
              {venture.bookmark && (
                <div className='bookmark'>
                  <div className='bookmark-body'>
                    <IconStar className='icon' />
                  </div>
                  <IconBookmark className='bookmark-footer' />
                </div>
              )}
            </div>

            <div className='card-info'>
              <div className={`card-badge ${venture.badge}`}>
                {venture.badgeText}
              </div>
              <div className='card-title'>{venture.title}</div>
              <div className='card-investment'>{venture.investment}</div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
