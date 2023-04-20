import { offersArray } from '../../data';
import SingleOffer from './SingleOffer';

const Offers = () => {
  return (
    <section id="services-section_desc">
      <div class="container">
        <h2 class="white">Czym zajmuje się nasza firma?</h2>
        <div class="services">
          {offersArray.map(({ name, id, isNew }) => {
            return <SingleOffer name={name} isNew={isNew} key={id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
