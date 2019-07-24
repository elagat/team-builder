import React, { useState } from "react";

function Form() {
  const [member, setMember] = useState({ name: "", email: "", role: "" });
  const [memberList, setMemberList] = useState([]);

  function handleChange(event) {
    const updatedMember = { member, [event.target.name]: event.target.value };
    setMember(updatedMember);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMemberList(memberList.push(member));
    console.log("memberList", memberList);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={member.name}
          onChange={handleChange}
        />
      </label>
      <label for="email">
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter your name"
          value={member.email}
          onChange={handleChange}
        />
      </label>
      <label for="role">
        Role
        <input
          type="text"
          name="role"
          placeholder="Enter your roll"
          value={member.role}
          onChange={handleChange}
        />
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
