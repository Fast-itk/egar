import React from 'react'

const Overlay = ({ toggleModal }) => <div onClick={() => toggleModal(false)} className="overlay"></div>

export default Overlay