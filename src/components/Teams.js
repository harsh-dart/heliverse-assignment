import React from 'react'
import Card from './Card'

const Teams = ({teamsData}) => {
  return (
	teamsData.map(data => {
		return <Card
		key={data.id}
		full_name={data.first_name + " " + data.last_name}
		availability={data.available}
		domain={data.domain}
		email={data.email}
		gender={data.gender}
		avatar={data.avatar}
		addTeam={null}
		data={data}
	  />
	})
  )
}

export default Teams;