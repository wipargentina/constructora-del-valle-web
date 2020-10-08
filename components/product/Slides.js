import { Carousel } from 'react-bootstrap';
export default function Slides(props) {
  const items = props.slides;
  return (
    <>
      {items.length > 0 && (
        <div className='slides'>
          <Carousel
            indicators={false}
            controls={items.length === 1 ? false : true}
          >
            {items.map((item, index) => (
              <Carousel.Item key={index}>
                <img src={item.image} alt='First slide' />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
}
