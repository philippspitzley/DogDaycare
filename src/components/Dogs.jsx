import Dog from "./Dog";

function Dogs({ dogs }) {
  return (
    <div>
      {dogs.map((dog, index) => (
        <Dog key={index} id={index} name={dog} />
      ))}
    </div>
  );
}

export default Dogs;
