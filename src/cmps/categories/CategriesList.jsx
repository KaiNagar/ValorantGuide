import { CategoriePreview } from './CategoriePreview'

export const CategoriesList = ({ categories }) => {
  return (
    <section className='categories-list'>
      {categories.map((c) => (
        <CategoriePreview categorie={c} key={c.name} />
      ))}
    </section>
  )
}
