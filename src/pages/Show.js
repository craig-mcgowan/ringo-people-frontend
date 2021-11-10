import { useState } from "react";

function Show(props) {
  // grab the id param from match
  const id = props.match.params.id;
  // save people standalone variable
  const people = props.people;
  // find the person to show
  const person = people.find((singlePerson) => {
    return singlePerson._id === id;
  });

  // state for our form
  const [editForm, setEditForm] = useState(person);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  // const newState = {...editForm}
  // newState[event.target.name] = event.target.value
  // setEditForm(newState)

  // handleSubmit function for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePeople(editForm, person._id);
    // redirect people back to index
    props.history.push("/");
  };

   const removePerson = () => {
     props.deletePeople(person._id);
     props.history.push("/");
   };

  return (
    <div className="person">
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>
      <img src={person.image} alt={person.name} />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="update person" />
      </form>
      <button onClick={removePerson} id="delete">
        DELETE
      </button>
    </div>
  );
}

export default Show;
