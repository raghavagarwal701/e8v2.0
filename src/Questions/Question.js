import React, { useState } from 'react';
import classes from '../Questionnere/Questionnere.module.css';

const Question = ({ question, onOptionChange }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleOptionChange = (optionValue) => {
        if (selectedOptions.includes(optionValue)) {
            setSelectedOptions(selectedOptions.filter((value) => value !== optionValue));
        } else {
            setSelectedOptions([...selectedOptions, optionValue]);
        }
    };
    const handleNextQuestion = () => {   
            onOptionChange(selectedOptions);
            setSelectedOptions([]); // Clear selected options
    };

    return (
        <div className={`${classes['question-format']}`} style={{ backgroundColor: '#211F1F' }}>
            <header className={classes.header}>
                <div className={classes['logo-container']}>
                    <img
                        src="/Cyber Ethos Logo.png"
                        alt="Cyber Ethos Logo"
                        width={319.02}
                        height={142.92}
                        className={classes.logo}
                    />
                </div>
            </header>
                    <p className={classes['logo-text']}>Essential 8 Assessment</p>
            <h4 className={classes.questionhed} style={{ color: 'rgb(251, 205, 50)' }}>{question.name}</h4>
            <h6 className={classes.question} style={{ color: 'rgb(251, 205, 50)' }}>{question.question}</h6>
            <form className={classes.form}>
                {question.options.map((option, index) => (
                    <div className={classes.opt} key={index}>
                        <input
                            type="checkbox"
                            id={`option${index}`}
                            name="options"
                            value={option[1]}
                            checked={selectedOptions.includes(option[1])}
                            onChange={() => handleOptionChange(option[1])}
                        />
                        <label htmlFor={`option${index}`} style={{ color: 'rgb(255, 255, 255)' }}>{option[0]}</label>
                        <br />
                    </div>
                ))}
            </form>
            <button onClick={handleNextQuestion}>
                Next
            </button>
        </div>
    );
};

export default Question;
