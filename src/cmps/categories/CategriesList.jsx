import { CategoriesPreview } from './CategoriesPreview'

export const CategoriesList = ({ categories }) => {
  return (
    <section className='categories-list'>
      {categories.map((c) => (
        <CategoriesPreview categorie={c} key={c.name} />
      ))}
    </section>
  )
}
