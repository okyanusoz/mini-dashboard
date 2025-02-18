import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const A = styled.a`
  color: ${(p) => p.theme.colors.main.default};
  text-decoration: underline;
  transition: color 300ms;
  &:hover {
    color: ${(p) => p.theme.colors.main.hover};
  }
`

const Link = ({ href, target = '_blank', children, ...props }) => (
  <A href={href} target={target} rel="noreferrer" {...props}>
    {children}
  </A>
)

Link.propTypes = {
  /**
   * The link where the user should be redirected
   */
  href: PropTypes.string,
  /**
   * How the user should be redirected
   */
  target: PropTypes.string,
  /**
   * The text that should be cliquable
   */
  children: PropTypes.node,
}

Link.defaultProps = {
  href: null,
  target: '_blank',
  children: null,
}

export default Link
