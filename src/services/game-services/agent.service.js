import axios from "axios"
import { utilService } from "../util.service"


const CACHE_NAME = 'agents'
const AGENTS_API = 'https://valorant-api.com/v1/agents'

export const agentService = {
    getAgents,
    getAgentById
}


async function getAgents() {
    let agents = utilService.loadFromStorage(CACHE_NAME)
    if (!agents || !agents.length) {
        console.log('From API');
        const res = await axios.get(AGENTS_API)
        agents = prepearData(res.data.data)
        utilService.saveToStorage(CACHE_NAME, agents)
    }
    return agents
}

function prepearData(data) {
    const filteredData = data.filter(agent => agent.isPlayableCharacter)
    return filteredData.map(agent => {
        return {
            id: agent.uuid,
            name: agent.displayName,
            imgUrl: agent.displayIcon
        }
    })
}

function getAgentById(agentId) {
    const agents = utilService.loadFromStorage(CACHE_NAME)
    return agents.find(agent => agent.id === agentId)
}