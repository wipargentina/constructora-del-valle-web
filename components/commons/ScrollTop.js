import { useEffect, useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import IconArrowDown from '../icons/IconArrowDown';

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', function (e) {
      toggleVisibility();
    });
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className='scroll-top'>
      {isVisible && (
        <Scroll
          to='top'
          spy={true}
          smooth={true}
          offset={-170}
          duration={599}
          className='btn btn-sm btn-primary'
        >
          <IconArrowDown />
        </Scroll>
      )}
    </div>
  );
}
