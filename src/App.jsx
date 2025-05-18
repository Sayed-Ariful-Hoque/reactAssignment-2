
import React from 'react'
import TeamMemberCard from './commponent/TeamMemberCard'

const App = () => {
  const frontEndTeamMember = [
    { id: 3, name: "Ariful", email: "ariful@gmail.com", address: "mirpur 13" },
    { id: 2, name: "Mahedi Vai", email: "Mahedivai@gmail.com", address: "shewrapara" },
    { id: 1, name: "Daisy Apu", email: "daisyapu@gmail.com", address: "24 north kafrul" },
    { id: 1, name: "Humaira Apu", email: "humairaapu@gmail.com", address: "uttara" },
  ]
  return (
    <>
      {frontEndTeamMember.map((member) => {
        return (
          <div>
            <TeamMemberCard key={member.id} id={member.id} name={member.name} email={member.email} address={member.address} />
          </div>
        )
      }
      )}
    </>
  )
}

export default App


