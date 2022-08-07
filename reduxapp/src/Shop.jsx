import React from 'react'

function Shop() {
  return (
    <div className='container my-5'>
      <h2>Deposit/Withdraw Money</h2><br />
      <div className='d-flex align-items-center'>
        <button className="btn btn-primary mx-3">-</button>
        <div>Update Balance</div>
        <button className="btn btn-primary mx-3">+</button>
      </div>
    </div>
  )
}

export default Shop
