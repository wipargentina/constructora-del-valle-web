import { Link as Scroll } from 'react-scroll';

export default function ButtonMoreInformation(props) {
  const status = props.status;
  return (
    <>
      {status.investment && (
        <Scroll
          to='investment'
          spy={true}
          smooth={true}
          offset={-170}
          duration={599}
          className='link-sm'
        >
          + informacion
        </Scroll>
      )}
    </>
  );
}
