import { CategoriesList } from '../cmps/categories/CategriesList'
import { gameService } from '../services/game-services/game.service'

export const Explore = () => {
  const categories = gameService.getCategories()

  return (
    <section className='explore'>
      <CategoriesList categories={categories} />
    </section>
  )
}
