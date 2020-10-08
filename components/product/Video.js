import { ResponsiveEmbed } from 'react-bootstrap';

export default function Video() {
  return (
    <section className='video'>
      <div className='container'>
        <h1>El emprendimiento</h1>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <ResponsiveEmbed aspectRatio='16by9'>
              <iframe
                class='embed-responsive-item'
                src='https://www.youtube.com/embed/xcJtL7QggTI?rel=0&showinfo=0'
                allowfullscreen
              ></iframe>
            </ResponsiveEmbed>
          </div>
        </div>
      </div>
    </section>
  );
}
