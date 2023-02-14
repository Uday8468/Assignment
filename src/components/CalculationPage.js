import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Caluclation.css'

const CalculationPage = () => {
  const [value, setValue] = useState('')
  // const [result, setResult] = useState()
  const getTheInputValue = (e) => {
    setValue(e.target.value)
  }
  const getTheNumValue = () => {
    let li = []

    function mat(li) {
      let a = li[0]
      let b = li[1]
      let c = li[2]
      if (b === '/') {
        return Math.floor(c / a)
      } else if (b === '-') {
        return c - a
      } else if (b === '*') {
        return c * a
      } else {
        return c + a
      }
    }

    function zero(x = 0) {
      li.push(0)
      if (x.length < 3) {
        return
      } else {
        return mat(li)
      }
    }

    function one(x = 1) {
      li.push(1)
      if (x.length < 3) {
        return
      } else {
        return mat(li)
      }
    }

    function two(x = 2) {
      li.push(2)
      if (x.length < 3) {
        return
      } else {
        return mat(li)
      }
    }

    function three(x = 3) {
      li.push(3)
      if (x.length < 3) {
        return
      } else {
        return mat(li)
      }
    }

    function four(x = 4) {
      li.push(4)
      if (x.length < 3) {
        return
      } else {
        return mat(li)
      }
    }

    function five(x = 5) {
      li.push(5)
      if (x.length < 3) {
        return
      } else {
        return mat(li)
      }
    }

    function six(x = 6) {
      li.push(6)
      if (x.length < 3) {
        return
      } else {
        return mat(li)
      }
    }

    function seven(x = 7) {
      li.push(7)
      if (x.length < 3) {
        return
      } else {
        return mat(li)
      }
    }

    function eight(x = 8) {
      li.push(8)
      if (x.length < 3) {
        return
      } else {
        return mat(li)
      }
    }

    function nine(x = 9) {
      li.push(9)
      if (x.length < 3) {
        return
      } else {
        return mat(li)
      }
    }

    function divided_by(x = '/') {
      li.push('/')
    }

    function plus(x = '+') {
      li.push('+')
    }

    function minus(x = '-') {
      li.push('-')
    }

    function times(x = '*') {
      li.push('*')
    }

    let a = eval(value)
    if (value === '') {
      let paraEl = document.getElementById('result')
      paraEl.classList.add('d-block', 'error')
      paraEl.classList.remove('d-none')
      paraEl.textContent = '*Please give the Valid Input Value'
    } else {
      let paraEl = document.getElementById('result')
      paraEl.classList.add('d-block', 'result-design')
      paraEl.classList.remove('d-none')
      paraEl.textContent = `Result:  ${a}`
    }
    console.log(a)
  }

  const history = useNavigate()

  const gotoSignInPage = () => {
    localStorage.removeItem('user_login')
    history('/')
  }
  return (
    <div className="main-container">
      <p className="heading">Get the Calucalations</p>

      <input
        type="text"
        className="input-design"
        onChange={getTheInputValue}
        placeholder="Eg: four(times(two()))"
      ></input>
      <p id="result" className="d-none"></p>
      <button onClick={getTheNumValue} className="button-edit bg-info">
        Get Result
      </button>

      <div className="logout-button">
        <button className="button-edit logout" onClick={gotoSignInPage}>
          {' '}
          Logout{' '}
        </button>
      </div>
    </div>
  )
}

export default CalculationPage
