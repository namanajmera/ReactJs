import React from 'react'

export default function Pagination(props) {
  return (
     <nav aria-label="Page navigation example">
        <ul className="pagination d-flex justify-content-between">
           <li className="page-item"><button disabled={props.prevDisabled} className="page-link" onClick={() => props.pageChange('prev')}>&larr; Previous</button></li>
           <li className="page-item"><button disabled={props.nextDisabled} className="page-link" onClick={() => props.pageChange('next')}>Next &rarr;</button></li>
        </ul>
     </nav >
  )
}
