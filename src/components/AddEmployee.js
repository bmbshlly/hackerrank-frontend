import React, { Fragment, useState } from 'react'

const AddEmployee = (props) => {
  const [enterName, handleChangeEnterName] = useState('');
  const [enterPosition, handleChangeenterPosition] = useState('');
  const [enterSalary, handleChangeenterSalary] = useState(null);
  
  const handleChangeEnterNameX = (x) => handleChangeEnterName(x);
  const handleChangeenterPositionX = (x) =>  handleChangeenterPosition(x);
  const handleChangeenterSalaryX = (x) =>  handleChangeenterSalary(x);

  const addValue = ()  => {
    // handleChanged([...ed,{
    //   id: 10,
    //    name: enterName,
    //     position: enterPosition,
    //      salary: enterSalary,
    // }])

    props.data.push({
        id: props.data.length,
         name: enterName,
          position: enterPosition,
           salary: enterSalary,
      })

    return props.newx([...props.data])
  }

  return (
    <Fragment>
      <td className='pl-30'>
        <input
          data-testid='new-employee-name-input'
          placeholder='Enter Name'
          onChange={ (event) => handleChangeEnterNameX(event.target.value) }
        />
      </td>
      <td className='pl-20'>
        <input
          data-testid='new-employee-position-input'
          placeholder='Enter Position'
          onChange={ (event) => handleChangeenterPositionX(event.target.value) }
          // values={enterPosition}
        />
      </td>
      <td className='pl-20'>
        <input
          data-testid='new-employee-salary-input'
          type='number'
          placeholder='Enter Salary'
          onChange={ (event) => handleChangeenterSalaryX(event.target.value) }
          // values={enterSalary}
        />
      </td>
      <td className='pl-20'>
        <button
          data-testid='add-new-employee-button'
          className='x-small w-75 ma-0 px-25'
          onClick = {addValue}
        >
          Add
        </button>
      </td>
    </Fragment>
  )
}

export default AddEmployee
