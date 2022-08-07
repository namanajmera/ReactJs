import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { actionCreators } from './state';
import { useSelector } from 'react-redux/es/exports'
import { bindActionCreators } from 'redux';

function Shop() {
  const dispatch = useDispatch();
  const amount = useSelector(state => state.amount)
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators,dispatch)

  const handleBalance = (type) => {
    if (type === 'deposit') {
      depositMoney(100)
    }else{
      withdrawMoney(100)
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
