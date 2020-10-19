import { Link as Scroll } from 'react-scroll';

export default function TypologiesItem(props) {
  const typology = props.data;
  return (
    <>
      <div className='col-md-3'>
        <div className='card'>
          <h2 className='card-header'>{typology.title}</h2>
          <ul className='list-group list-group-flush'>
            {typology.features.map((feature, index) => (
              <li key={index} className='list-group-item'>
                {feature.item}
              </li>
            ))}
          </ul>
          <div className='card-body'>
            <Scroll
              to='contact'
              spy={true}
              smooth={true}
              offset={60}
              duration={599}
              className='btn btn-primary'
            >
              Consultar
            </Scroll>
          </div>
        </div>
      </div>
    </>
  );
}
