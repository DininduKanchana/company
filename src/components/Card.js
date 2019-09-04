import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Card = ({data}) =>{
return (
<article style={{backgroundColor: data.backgroundColor, color: `white`, height: `150px`}} className="tile is-child notification has-text-centered">
  <p className="title">{data.text}</p>
  <p className="subtitle">Top tile</p>
</article>
)
}
Card.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    backgroundColor: PropTypes.any
  })
}


export default Card
