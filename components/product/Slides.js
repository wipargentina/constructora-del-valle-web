export default function Slides(props) {
  const items = props.slides;
  return (
    <>
      {items.length > 0 && (
        <div className='slides'>
          <h1>Slides</h1>
        </div>
      )}
    </>
  );
}
