import { NavLink } from 'react-router-dom'

export const AgentPreview = ({ agent }) => {
  return (
    <NavLink
      style={{ backgroundImage: `url(${agent.imgUrl})` }}
      to={`/agents/${agent.id}`}
      className='agent-preview'
    >
      <span className='agent-name'>{agent.name}</span>
    </NavLink>
  )
}
