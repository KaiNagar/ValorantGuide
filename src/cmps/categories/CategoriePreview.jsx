import { NavLink } from 'react-router-dom'

export const CategoriePreview = ({ categorie }) => {
  return (
    <NavLink
      to={`/${
        categorie.name.charAt(0).toLowerCase() + categorie.name.slice(1)
      }`}
      className='categorie-preview'
      style={{ backgroundImage: `url(${categorie.imgUrl})` }}
    >
      <span className='categorie-name'>{categorie.name}</span>
    </NavLink>
  )
}
