import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const setColorDependingOnValidity = (props) =>
//   props.invalid ? '#dc3545' : 'black';
// const setBorderColorDependingOnValidity = (props) =>
//   props.invalid ? '#dc3545' : '#ccc';
// const setBoxShadowDependingOnValidity = (props) =>
//   props.invalid && '0 0 0 0.25rem rgb(220 53 69 / 25%)';

// const FormControl = styled.div`
//    {
//     margin: 0.5rem 0;
//   }

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${setColorDependingOnValidity};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${setBorderColorDependingOnValidity};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     box-shadow: ${setBoxShadowDependingOnValidity};
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
