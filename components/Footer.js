import Link from 'next/link';
import IconPhone from '@components/icons/IconPhone';
import IconEmail from '@components/icons/IconEmail';
import IconWhatsapp from '@components/icons/IconWhatsapp';
import IconFacebook from '@components/icons/IconFacebook';
import IconInstagram from '@components/icons/IconInstagram';

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <img className='logo' src='/Logo-wh.svg' alt='logo' />
            <ul>
              <li>
                <div className='icon'>
                  <IconPhone />
                </div>
                <div>
                  <a href='tel:08107778002'>0810 777 8002</a> -{' '}
                  <a href='tel:03533456232'>(03533) 456232</a>
                </div>
              </li>
              <li>
                <div className='icon'>
                  <IconWhatsapp />
                </div>
                <a href='https://wa.me/543533456232'>+54 3533 456232</a>
              </li>
              <li>
                <div className='icon'>
                  <IconEmail />
                </div>{' '}
                <a href='mailto:contacto@constructoradelvalle.com'>
                  contacto@constructoradelvalle.com
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-3'>
            <div className='title'>Donde estamos</div>
            <p className='text'>
              <b>Oficina Comercial</b> <br />
              Ruta N° 38, Villa Parque Siquiman, Córdoba
            </p>
            <p className='text'>
              <b>Constructora</b> <br />
              Roque Saenz Peña 220, Las Varillas, Córdoba.
            </p>
          </div>
          <div className='col-md-3 d-none d-md-block'>
            <div className='title'>Emprendimientos</div>
            <ul>
              <li>
                <Link href='/veneto-4'>
                  <a>Veneto IV</a>
                </Link>
              </li>
              <li>
                <Link href='/veneto-5'>
                  <a>Veneto V</a>
                </Link>
              </li>
              <li>
                <Link href='/veneto-6'>
                  <a>Veneto VI</a>
                </Link>
              </li>
              <li>
                <Link href='/veneto-7'>
                  <a>Veneto VII</a>
                </Link>
              </li>
              <li>
                <Link href='/veneto-8-fontana-di-veneto'>
                  <a>Veneto VIII</a>
                </Link>
              </li>
              <li>
                <Link href='/veneto-village'>
                  <a>Veneto Village</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-md-3 d-none d-md-block'>
            <div className='title'>Seguinos en las Redes</div>
            <ul>
              <li>
                <div className='icon'>
                  <IconFacebook />
                </div>{' '}
                <a
                  id='btn-facebook'
                  href='https://www.facebook.com/ConstructoradelValleOficial'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ConstructoradelValleOficial
                </a>
              </li>
              <li>
                <div className='icon'>
                  <IconInstagram />
                </div>{' '}
                <a
                  id='btn-instagram'
                  href='https://www.instagram.com/constructoradelvallesa/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  constructoradelvallesa
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='credits'>
          <div className='copyright'>
            © 2020 Constructora del Valle S.A. Todos los Derechos Reservados
          </div>
          <a
            href='https://wipargentina.com/?utm_source=web&utm_medium=link&utm_campaign=constructora_del_valle'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/wip-white.svg' alt='wip' height='16' />
          </a>
        </div>
      </div>
    </footer>
  );
}
