import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp91,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer id="footer_desc">
      <div className="container footer_desc">
        <p className="white footer_font">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2022
        </p>
        <div>
          <i className="fa-brands fa-instagram fa-2xl white">
            <FontAwesomeIcon icon={faArrowUp91} />
          </i>
          <i className="fa-brands fa-square-facebook fa-2xl white">
            <FontAwesomeIcon icon={faCoffee} />
          </i>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
