import ReactMarkdown from 'react-markdown';
import AmenitiesList from '@components/product/AmenitiesList';
import AmenitiesGallery from '@components/product/AmenitiesGallery';
import Slides from '@components/product/Slides';

export default function Amenities(props) {
  const amenities = props.data;
  const summary = props.data.summary;
  const quality = props.data.quality;
  const detail = props.data.detail;
  const architecture = props.data.architecture;

  return (
    <section id='amenities' className='amenities'>
      <div className='container'>
        {amenities.summaryStatus && (
          <div className='summary'>
            <div className='row justify-content-center mb-5'>
              <div className='col-md-10'>
                <h1>{summary.title}</h1>
                <ReactMarkdown source={summary.text} escapeHtml={true} />
                <AmenitiesList items={summary.lists} />
              </div>
            </div>
          </div>
        )}
        {amenities.qualityStatus && (
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
        )}
        {amenities.detailStatus && (
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
        )}
        {amenities.architectureStatus && (
          <div className='architecture'>
            <Slides slides={architecture.slides} />
            <div className='row justify-content-center mb-5'>
              <div className='col-md-10'>
                <h2>{architecture.title}</h2>
                <ReactMarkdown source={architecture.text} escapeHtml={true} />
                <AmenitiesList items={architecture.lists} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
