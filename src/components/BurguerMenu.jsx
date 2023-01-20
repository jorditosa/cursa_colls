import '../index.css'
import styled from 'styled-components'
import { CloseOutline, MenuOutline } from '@styled-icons/evaicons-outline'

const IconBurguer = styled(MenuOutline)`
  color: #3ca291;
`
const CloseBurguer = styled(CloseOutline)`
  color: #3ca291;
`

function BurguerMenu({clicked, handleClick}) {

  return (
    <div 
    className='block md:hidden z-10'
    onClick={handleClick}
    >
      {clicked ? <CloseBurguer size={50} /> : <IconBurguer size={50} />}
    </div>
  )
}

export default BurguerMenu