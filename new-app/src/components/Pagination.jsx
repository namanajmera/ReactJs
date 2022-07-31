import React, { Component } from 'react'

export class Pagination extends Component {
   render() {
      // let pageChange = this.props.pageChange;
      // let prevDisabled = this.props.prevDisabled;
      let { nextDisabled, pageChange, prevDisabled } = this.props;
      return (
         <nav aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-between">
               <li className="page-item"><button disabled={prevDisabled} className="page-link" onClick={() => pageChange('prev')}>&larr; Previous</button></li>
               <li className="page-item"><button disabled={nextDisabled} className="page-link" onClick={() => pageChange('next')}>Next &rarr;</button></li>
            </ul>
         </nav >
      )
   }
}

export default Pagination
