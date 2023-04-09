import SniperImage from '../../assets/images/sniper2.jpg';
import DemomanImage from '../../assets/images/demo2.jpg';
import Specialists from './Specialists';

const specialistArray = [
  {
    specialistName: 'Sniper',
    specialistId: 1,
    specialistDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna.',
    specialistType: 'Support',
    specialistImg: SniperImage,
  },
  {
    specialistName: 'Demoman',
    specialistId: 2,
    specialistDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.',
    specialistType: 'Marine',
    specialistImg: DemomanImage,
  },
];

const SpecialistList = () => {
  return (
    <section id="specialist">
      <div class="teamContainer container">
        <h2>Nasi specjaliści</h2>
        {specialistArray.map(
          ({
            specialistName,
            specialistId,
            specialistDescription,
            specialistType,
            specialistImg,
          }) => {
            return (
              <Specialists
                name={specialistName}
                id={specialistId}
                key={specialistId}
                description={specialistDescription}
                type={specialistType}
                img={specialistImg}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default SpecialistList;
