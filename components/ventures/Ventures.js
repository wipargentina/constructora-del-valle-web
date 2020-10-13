import data from '../../data/ventures.json';
import VenturesCard from './VenturesCard';

export default function Ventures() {
  const ventures = data.data;
  return (
    <div className='projects'>
      <div className='container'>
        <h1>Emprendimientos</h1>
        <div className='grid-container'>
          {ventures.map((venture) => (
            <React.Fragment key={venture.id}>
              {venture.status == 'active' && (
                <div className={`grid-item project-${venture.id}`}>
                  <VenturesCard venture={venture} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
