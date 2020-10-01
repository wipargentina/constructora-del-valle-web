import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg viewBox='0 0 24 24' width={24} height={24} {...props}>
      <path
        fill='currentColor'
        className='prefix__heroicon-ui'
        d='M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z'
      />
    </svg>
  );
}

export default SvgComponent;
