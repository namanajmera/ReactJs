import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { actionCreators } from './state';
// import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux/es/exports'

function Shop() {
  const dispatch = useDispatch();
  const amount = useSelector(state => state.amount)

  const handleBalance = (type) => {
    if (type === 'deposit') {
      dispatch(actionCreators.depositMoney(100,type))
    }else{
      dispatch(actionCreators.withdrawMoney(100,type))
    }
  }

  return (
    <div className='container my-5'>
      <h2>Deposit/Withdraw Money</h2><br />
      <div className='d-flex align-items-center'>
        <button className="btn btn-primary mx-3" disabled={amount === 0} onClick={() => handleBalance('withdraw')}>-</button>
        <div>Update Balance</div>
        <button className="btn btn-primary mx-3" onClick={() => handleBalance('deposit')}>+</button>
      </div>
    </div>
  )
}

export default Shop
