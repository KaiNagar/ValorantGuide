import { Agents } from "../pages/categories/Agents"

export const DynamicCmp = ({ type }) => {
  switch (type) {
    case 'Agents':
      return <Agents />
  }
}
