import { Link as Scroll } from 'react-scroll';
import IconFile from '@components/icons/IconFile';
import IconStarLight from '@components/icons/IconStartLight';
import IconStore from '@components/icons/IconStore';
import IconCurrencyDollar from '@components/icons/IconCurrencyDollar';
import IconRocket from '@components/icons/IconRocket';
import IconLocation from '@components/icons/IconLocation';

export default function MenuButton(props) {
  return (
    <Scroll
      to={props.to}
      spy={true}
      smooth={true}
      offset={-170}
      duration={599}
      className='nav-link'
    >
      {props.icon === 'IconFile' && <IconFile className='icon' />}
      {props.icon === 'IconStarLight' && <IconStarLight className='icon' />}
      {props.icon === 'IconStore' && <IconStore className='icon' />}
      {props.icon === 'IconCurrencyDollar' && (
        <IconCurrencyDollar className='icon' />
      )}
      {props.icon === 'IconRocket' && <IconRocket className='icon' />}
      {props.icon === 'IconLocation' && <IconLocation className='icon' />}
      {props.title}
    </Scroll>
  );
}
