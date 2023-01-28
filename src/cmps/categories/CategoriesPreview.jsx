import { NavLink } from 'react-router-dom'

export const CategoriesPreview = ({ categorie }) => {
  return (
    <NavLink
      to={`/${categorie.name.charAt(0).toLowerCase() + categorie.name.slice(1)}`}
      className='categories-preview'
    >
      {categorie.name}
    </NavLink>
  )
}
