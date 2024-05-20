import React from 'react'
import Select from '../Select'
import { groupFilterOptions, orderFilterOptions } from '../../constants'
import "./style.css"

function FilterModel({ setGrouping, setOrdering, grouping, ordering}) {
  return <div className='modal-container'>
    <div className='modal-row'>Grouping <Select options={groupFilterOptions} onOptionChange={setGrouping} selectedValue={grouping}/> </div>
    <div className='modal-row'>Ordering <Select options={orderFilterOptions} onOptionChange={setOrdering} selectedValue={ordering}/> </div>
    
    </div>
  
}

export default FilterModel