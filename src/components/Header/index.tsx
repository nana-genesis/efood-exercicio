import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart, Logo, HeaderRow } from './styles'
import logoImg from '../../assets/images/logo.png'
import { open } from '../../store/reducers/cart'
import { RootState } from '../../store'

export default function Header() {
  const dispatch = useDispatch()
  const { items } = useSelector(function (state: RootState) {
    return state.cart
  })

  return (
    <HeaderBar>
      <div className="container">
        <HeaderRow>
          <Link to="/">Restaurantes</Link>
          <Link to="/">
            <Logo src={logoImg} alt="efood" />
          </Link>
          <LinkCart
            onClick={function () {
              dispatch(open())
            }}
          >
            {items.length} - produto(s)
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: '8px' }}
            >
              <path
                d="M6.5625 15.625C5.70039 15.625 5 16.3254 5 17.1875C5 18.0496 5.70039 18.75 6.5625 18.75C7.42461 18.75 8.125 18.0496 8.125 17.1875C8.125 16.3254 7.42461 15.625 6.5625 15.625ZM0.3125 0V1.25H2.8125L5.0625 12.0195L4.21484 13.5586C4.12012 13.7344 4.0625 13.9336 4.0625 14.1406C4.0625 15.0027 4.76289 15.7031 5.625 15.7031H18.75V14.4531H6.01562C5.92773 14.4531 5.85938 14.3848 5.85938 14.2969C5.85938 14.2793 5.8623 14.2617 5.87109 14.2471L6.72656 12.6992L14.0098 12.6992C14.4785 12.6992 14.8916 12.4414 15.1055 12.0557L18.6641 5.61816C18.7227 5.51562 18.75 5.39551 18.75 5.27344C18.75 4.92773 18.4723 4.64844 18.125 4.64844H4.55566L3.97266 1.875L3.83789 1.25H0.3125V0ZM15.625 15.625C14.7629 15.625 14.0625 16.3254 14.0625 17.1875C14.0625 18.0496 14.7629 18.75 15.625 18.75C16.4871 18.75 17.1875 18.0496 17.1875 17.1875C17.1875 16.3254 16.4871 15.625 15.625 15.625Z"
                fill="#E66767"
              />
            </svg>
          </LinkCart>
        </HeaderRow>
      </div>
    </HeaderBar>
  )
}
