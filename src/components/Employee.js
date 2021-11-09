import React, { Fragment } from 'react'

const Employee = ({idx}) => {

  return (
    <Fragment>
      <td>Example Name</td>
      <td className='pl-20'>Example Position</td>
      <td className='pl-20'>
      <div
        data-testid={'employee-salary-div-' + idx}
      >
        Example Salary
      </div>
      {/* use this block of code when the salary field becomes editable */}
      {/* <input
          data-testid={ 'employee-salary-input-' + idx }
          type='number'
      /> */}
      </td>
      <td className='pl-20'>
        <button
          className={ 'x-small w-75 ma-0 px-25' }
          data-testid={ 'employee-save-button-' + idx }
        >
          Save
        </button>
      </td>
    </Fragment>
  )
}


export default Employee
