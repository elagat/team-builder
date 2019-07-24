import React, { useState } from "react";

function MemberList() {
  const [memberList, setMemberList] = useState([]);

  return (
    <div>
      <h2>Member List</h2>
      <div>
        {memberList.map( (member, index) => (
          <div key={index}>
            <h3>Name: {member.name}</h3>
            <h4>Role: {member.role}</h4>
            <p>Email: {member.email}</p>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberList;
