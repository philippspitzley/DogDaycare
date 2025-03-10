function TextInput({ value, setValue, setDogs }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function addDog(formData) {
    const dogName = formData.get("name");
    setDogs((prevDogs) => [...prevDogs, dogName]);
  }

  return (
    <form action={addDog}>
      <input type="text" name="name" onChange={handleChange} value={value} />
      <button>Add</button>
    </form>
  );
}

export default TextInput;
