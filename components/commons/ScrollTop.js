import { useEffect, useState } from 'react';
import { Link as Scroll } from 'react-scroll';

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
          className='btn btn-primary'
        >
          top
        </Scroll>
      )}
    </div>
  );
}
