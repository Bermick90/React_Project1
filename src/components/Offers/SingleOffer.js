const SingleOffer = ({ name, isNew }) => {
  return (
    <div class="services-single">
      <h3>{name}</h3>
      {isNew ? <h4>Nowość</h4> : null}
      {isNew ? <span className="dot"></span> : null}
    </div>
  );
};
export default SingleOffer;
