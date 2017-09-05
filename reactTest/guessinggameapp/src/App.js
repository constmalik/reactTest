import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


const data = {
  questions: [
    {"standard": "Pick a number between 1 and 10."},
    {"expert": "Pick a number between 1 and 100"}
  ],
  currentAnswer: "",
  answers: []
};
class App extends Component {
  constructor() {
    super();
    this.getUserAnswer = this.getUserAnswer.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = data;
  }
  getRandomNumber() {
    return Math.floor((Math.random() * 10) +1)
  }
  // startStandardGame(i) {
  //   let questionArray = this.state.questions.slice();
  //   let question = questionArray[0]
  //
  //   this.setState({
  //     questions: questionArray
  //   });
  // }
  // startExpertGame() {
  //   let questionArray = this.state.questions.slice();
  //
  //   this.setState({
  //     questions: questionArray
  //   })
  // }
  getUserAnswer(event) {
    var guess = event.target.value;
    this.setState({
      currentAnswer: guess
    });
  }
  handleSubmitClick(event) {
    let answer = this.state.answers.slice();
    answer.push(this.state.currentAnswer);
    this.setState({
      currentAnswer: "",
      answers: answer
    })
  }
  handleResetClick(event) {
    this.setState({
      currentAnswer: "",
      answers: []
    })
  }
  // checkAnswer() {
  //   let userInput =
  // }
  render() {
    // const questions = this.state.questions.map(function(question, i) {
    //   return (
    //     <QuestionContainer
    //     key={i}
    //     question={this.state.questions[1].question}
    //     />
    //   )
    // }, this)
    return (
      <div className="container">
        <div className="header">
          <h1>Start Game</h1>
           <button className="stanbtn">Standard</button>
           <button className="expbtn">Expert</button>
        </div>
        <div className="questioncontainer">
          <p>Pick a number between 1 and 10.</p>
          <input type="number" min="1" max="10" onChange={this.getUserAnswer}/>
          <input type="submit" onClick={this.handleResetClick} value="Reset"/>
          <input type="submit" onClick={this.handleSubmitClick}/>
          <div className="answer">
            <p>This is your {this.state.answers.length} guess.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
