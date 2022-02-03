# About

A quiz-app made for a challenge in Codecademy's full stack engineer program. 

# To Run

Run `npm start` in the project root and the app will be available on port 3000.

[Node 16.13.1](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) <br/>
[uuidv4](https://www.npmjs.com/package/uuidv4) <br/>
[React-Router](https://www.npmjs.com/package/react-router) <br/>
[React](https://reactjs.org/) <br/>
[Redux, Redux Toolkit, React-Redux](https://redux.js.org/) <br/>


# State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

# Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

# To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over