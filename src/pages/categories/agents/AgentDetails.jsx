import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { agentService } from '../../../services/game-services/agent.service'

export const AgentDetails = () => {
  const { agentId } = useParams()
  const [agent, setAgent] = useState()

  useEffect(() => {
    loadAgent()
  }, [])

  const loadAgent = async () => {
    const currentAgent = await agentService.getAgentById(agentId)
    setAgent(currentAgent)
  }

  if (!agent) return <div>Loading agent...</div>
  return <section className='agent-details'>{agent.name}</section>
}
