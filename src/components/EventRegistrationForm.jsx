// src/EventRegistrationForm.js
import { useState } from "react";

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    withGuest: "No",
    guestName: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.age) newErrors.age = "Age is required";
    else if (isNaN(formData.age) || formData.age <= 0)
      newErrors.age = "Age must be a number greater than 0";
    if (formData.withGuest === "Yes" && !formData.guestName)
      newErrors.guestName = "Guest Name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="flex justify-center p-6 bg-gray-100 h-[100vh]">
      <div className="w-full max-w-xl p-8 space-y-7 rounded-xl bg-white shadow-2xl">
        <h1 className="text-4xl font-bold text-center">
          Event Registration Form
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="font-semibold text-2xl">
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded mt-1"
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}{" "}
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="font-semibold text-2xl">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded mt-1"
            />{" "}
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}{" "}
          </div>{" "}
          <div className="flex flex-col mb-5">
            {" "}
            <label htmlFor="age" className="font-semibold text-2xl">
              Age:
            </label>{" "}
            <input
              id="age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border p-2 rounded mt-1"
            />
            {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}{" "}
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="withGuest" className="font-semibold text-2xl">
              Are you attending with a guest?
            </label>
            <select
              id="withGuest"
              name="withGuest"
              value={formData.withGuest}
              onChange={handleChange}
              className="border p-2 rounded mt-1"
            >
              {" "}
              <option value="No">No</option> <option value="Yes">Yes</option>{" "}
            </select>{" "}
          </div>{" "}
          {formData.withGuest === "Yes" && (
            <div className="flex flex-col mb-5">
              {" "}
              <label htmlFor="guestName" className="font-semibold text-2xl">
                {" "}
                Guest Name:{" "}
              </label>{" "}
              <input
                id="guestName"
                type="text"
                name="guestName"
                value={formData.guestName}
                onChange={handleChange}
                className="border p-2 rounded mt-1"
              />{" "}
              {errors.guestName && (
                <p style={{ color: "red" }}>{errors.guestName}</p>
              )}{" "}
            </div>
          )}{" "}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded font-semibold hover:bg-blue-600"
          >
            {" "}
            Submit{" "}
          </button>{" "}
        </form>{" "}
        {submitted && (
          <div>
            {" "}
            <h2 className="text-2xl font-bold text-center">
              Form Submitted
            </h2>{" "}
            <p className="text-center">Name: {formData.name}</p>{" "}
            <p className="text-center">Email: {formData.email}</p>{" "}
            <p className="text-center">Age: {formData.age}</p>{" "}
            <p className="text-center">
              {" "}
              Attending with guest: {formData.withGuest}{" "}
            </p>{" "}
            {formData.withGuest === "Yes" && (
              <p className="text-center">Guest Name: {formData.guestName}</p>
            )}{" "}
          </div>
        )}{" "}
      </div>{" "}
    </section>
  );
};

export default EventRegistrationForm;
