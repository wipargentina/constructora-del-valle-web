import ReactMarkdown from 'react-markdown';
import AmenitiesList from '@components/product/AmenitiesList';
import AmenitiesGallery from '@components/product/AmenitiesGallery';
import Slides from '@components/product/Slides';

export default function Amenities(props) {
  const amenities = props.data;
  const summary = props.data.summary;
  const quality = props.data.quality;
  const detail = props.data.detail;
  const arquitecture = props.data.arquitecture;

  return (
    <section id='amenities' className='amenities'>
      <div className='container'>
        <div className='summary'>
          <div className='row justify-content-center mb-5'>
            <div className='col-md-10'>
              <h1>{summary.title}</h1>
              <ReactMarkdown source={summary.text} escapeHtml={true} />
              <AmenitiesList items={summary.lists} />
            </div>
          </div>
        </div>
        <div className='quality'>
          <AmenitiesGallery gallery={quality.gallery} />
          <div className='row justify-content-center mb-5'>
            <div className='col-md-10'>
              <h2>{quality.title}</h2>
              <ReactMarkdown source={quality.text} escapeHtml={true} />
              <AmenitiesList items={quality.lists} />
            </div>
          </div>
        </div>
        <div className='detail'>
          <Slides slides={detail.slides} />
          <div className='row justify-content-center mb-5'>
            <div className='col-md-10'>
              <h2>{detail.title}</h2>
              <ReactMarkdown source={detail.text} escapeHtml={true} />
              <AmenitiesList items={detail.lists} />
            </div>
          </div>
        </div>
        <div className='arquitecture'>
          <Slides slides={arquitecture.slides} />
          <div className='row justify-content-center mb-5'>
            <div className='col-md-10'>
              <h2>{arquitecture.title}</h2>
              <ReactMarkdown source={arquitecture.text} escapeHtml={true} />
              <AmenitiesList items={arquitecture.lists} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
