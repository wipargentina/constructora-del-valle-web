export default function Video(props) {
  const video = props.video;
  return (
    <section className='video'>
      <div className='container'>
        <h1>{video.title}</h1>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <div class='embed-responsive embed-responsive-21by9'>
              <iframe
                className='embed-responsive-item'
                src={`https://www.youtube.com/embed/${video.id}?rel=0&showinfo=0`}
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
