import axios from "axios"
import { utilService } from "../util.service"


const CACHE_NAME = 'agents'
const AGENTS_API = 'https://valorant-api.com/v1/agents'

export const agentService = {
    getAgents,
}


async function getAgents() {
    let agents = utilService.loadFromStorage(CACHE_NAME)
    if (!agents || !agents.length) {
        console.log('From API');
        const res = await axios.get(AGENTS_API)
        agents = res.data.data
        utilService.saveToStorage(CACHE_NAME, agents)
    }
    return agents
}