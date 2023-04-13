import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer id="footer_desc">
      <div className="container footer_desc">
        <p className="white footer_font">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2022
        </p>
        <div>
          <FontAwesomeIcon
            style={{ fontSize: '24px' }}
            icon={faFacebook}
          />
          <FontAwesomeIcon
            style={{ fontSize: '24px' }}
            icon={faInstagram}
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
