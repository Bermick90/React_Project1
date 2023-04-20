const SingleOffer = ({ name, isNew }) => {
  return (
    <div class="services-single">
      <h3>{name}</h3>
      {isNew && <h4>Nowość</h4>}
      {isNew && <span className="dot"></span>}
    </div>
  );
};
export default SingleOffer;
