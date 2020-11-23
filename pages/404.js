import Link from 'next/link';
export default function Custom404() {
  return (
    <>
      <div className='page404'>
        <div className='container'>
          <h1>Página no encontrada</h1>
          <p>La página que buscas no existe o no esta disponible.</p>
          <h4>
            ¿Buscás algún proyecto en especial? <br />
            Te invitamos a conocer todos nuestros emprendimientos.
          </h4>
          <Link href='/emprendimientos'>
            <a className='btn btn-primary'>Ver emprendimientos</a>
          </Link>
        </div>
      </div>
    </>
  );
}
