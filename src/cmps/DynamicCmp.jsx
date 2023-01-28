import { Agents } from "../pages/categories/agents/Agents"

export const DynamicCmp = ({ type }) => {
  switch (type) {
    case 'Agents':
      return <Agents />
  }
}
