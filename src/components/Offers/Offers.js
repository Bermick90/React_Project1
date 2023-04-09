import SingleOffer from './SingleOffer';

/*
potrzebuje komponent z pojedynczej ofert, offer box etc,. analogicznie do specjalistow.
lista ofert wyswietli na podstawie/z wykorzystaniem metody map pojedyncza oferte dla kazdego elementu tablicy z ofertami.

-tablica z ofertami bedaca tablica obiektow. nazwa ofert/usluga 1/2/3/4 


*/
const offersArray = [
  {
    name: 'Usługa 1',
    id: 1,
    isNew: true,
  },
  {
    name: 'Usługa 2',
    id: 2,
    isNew: false,
  },
  {
    name: 'Usługa 3',
    id: 3,
    isNew: false,
  },
  {
    name: 'Usługa 4',
    id: 4,
    isNew: false,
  },
  {
    name: 'Usługa 5',
    id: 5,
    isNew: false,
  },
  {
    name: 'Usługa 6',
    id: 6,
    isNew: false,
  },
];

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
