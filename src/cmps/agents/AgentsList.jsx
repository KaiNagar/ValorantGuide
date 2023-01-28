import { AgentPreview } from './agentPreview'

export const AgentsList = ({ agents }) => {
  return (
    <section className='agents-list'>
      {agents.map((agent) => (
        <AgentPreview key={agent.id} agent={agent} />
      ))}
    </section>
  )
}
