import React from 'react'

const TeamMemberCard = ({ id, name, email, address }) => {
  return (
    <>
      <h1><strong>Name : </strong>{name}</h1>
      <p><strong>ID : </strong>{id}</p>
      <p><strong>Email: </strong>{email}</p>
      <p><strong>Address: </strong>{address}</p>
    </>
  )
}

export default TeamMemberCard


