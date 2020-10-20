import Slides from '@components/product/Slides';

export default function Advances(props) {
  const advances = props.advances;
  return (
    <section id='advances' className='advances'>
      <div className='container'>
        <h1>{advances.title}</h1>
        <Slides slides={advances.slides} />
      </div>
    </section>
  );
}
