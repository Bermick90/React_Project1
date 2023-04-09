const Specialists = ({ name, id, description, type, img }) => {
  return (
    <div className="our-team">
      <div
        className="person"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="person-description">
        <p className="strong space-bottom">{`#${id} Mate - ${name} [ ${type} ]`}</p>

        <p className="specDesc">{description}</p>
      </div>
    </div>
  );
};
export default Specialists;
