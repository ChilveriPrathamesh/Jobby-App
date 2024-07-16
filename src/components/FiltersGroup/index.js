import {BsSearch} from 'react-icons/bs'

import ProfileDetails from '../ProfileDetails'

import './index.css'

const FilterGroup = props => {
  const {
    employmentTypesList,
    salaryRangesList,
    changeSearchInput,
    searchInput,
    getJobs,
    changeSalary,
    changeEmployeeList,
  } = props

  const onChangeSearchInput = event => {
    changeSearchInput(event)
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      getJobs()
    }
  }
  const renderSearchInput = () => {
    return (
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button
          type="button"
          id="searchButton"
          className="search-button-container"
          onClick={getJobs}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const renderTypeOfEmployment = () => {
    return (
      <div className="employment-container">
        <h1 className="employment-type-title">Type of Employment</h1>
        <ul className="employment-type-list-container">
          {employmentTypesList.map(eachemployee => {
            const onSelectEmployeeType = event => {
              changeEmployeeList(event.target.value)
            }
            return (
              <li
                className="employee-item"
                key={eachemployee.employmentTypeId}
                onChange={onSelectEmployeeType}
              >
                <input
                  type="checkbox"
                  key={eachemployee.employmentTypeId}
                  value={eachemployee.employmentTypeId}
                  className="check-input"
                />
                <label
                  htmlFor={eachemployee.employmentTypeId}
                  className="check-label"
                >
                  {eachemployee.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    return (
      <div className="salary-range-container">
        <h1 className="salary-range-title">Salary Range</h1>
        <ul className="salary-range-list-container">
          {salaryRangesList.map(eachSalary => {
            const onClickSalary = () => {
              changeSalary(eachSalary.salaryRangeId)
            }
            return (
              <li
                className="salary-item"
                key={eachSalary.salaryRangeId}
                onClick={onClickSalary}
              >
                <input
                  type="radio"
                  id={eachSalary.salaryRangeId}
                  name="salary"
                  className="check-input"
                />
                <label
                  className="check-label"
                  htmlFor={eachSalary.salaryRangeId}
                >
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderTypeOfEmployment()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
    </div>
  )
}

export default FilterGroup
