import TypologiesItem from '@components/product/TypologiesItem';

export default function Typologies(props) {
  const typologies = props.data;
  return (
    <section id='typologies' className='typologies'>
      <div className='container'>
        <h1>Tipologías</h1>
        <div className='row'>
          {typologies.map((item, index) => (
            <TypologiesItem key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
