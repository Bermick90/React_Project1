import { specialistArray } from '../../data';
import Specialists from './Specialists';

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
