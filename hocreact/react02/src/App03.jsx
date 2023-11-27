import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({ name: "", email: "" });
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Tên</label>
        <input
          type="text"
          placeholder="Tên..."
          name="name"
          onChange={handleChange}
          value={form.name}
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Email..."
          name="email"
          onChange={handleChange}
          value={form.email}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default App;
