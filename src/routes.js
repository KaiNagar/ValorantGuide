import { DynamicCmp } from "./cmps/DynamicCmp"
import { gameService } from "./services/game-services/game.service"

const categories = gameService.getCategories()
export const routes = categories.map(cat => {
    return {
        path: `/${cat.name.charAt(0).toLowerCase() + cat.name.slice(1)}`,
        element: <DynamicCmp type={cat.name} />

    }
})