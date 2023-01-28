import { useEffect, useState } from 'react'
import { AgentsList } from '../../../cmps/agents/AgentsList'
import { agentService } from '../../../services/game-services/agent.service'

export const Agents = () => {
  const [agents, setAgents] = useState([])

  useEffect(() => {
    loadAgents()
  }, [])

  const loadAgents = async () => {
    const updatedAgents = await agentService.getAgents()
    setAgents([...updatedAgents])
  }

  if (!agents) return <div>Loading Agents...</div>
  return (
    <section className='agents-page'>
      <AgentsList agents={agents} />
    </section>
  )
}
