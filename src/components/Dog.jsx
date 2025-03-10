function Dog({ name, id }) {
  return (
    <div className="dog">
      <h3>{name}</h3>
      <img src={`https://placedog.net/300/200?id=${id}}`} alt="dogPhoto" />
    </div>
  );
}

export default Dog;
