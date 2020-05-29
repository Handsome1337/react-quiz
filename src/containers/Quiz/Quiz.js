import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from './../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          {text: 'Вопрос 1'},
          {text: 'Вопрос 1'},
          {text: 'Вопрос 1'},
          {text: 'Вопрос 1'}
        ]
      }
    ]
  };
  
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>          
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz 
            answers={this.state.quiz[0].answers}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;