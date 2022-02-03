/*Great work! Now that you can create topics,
your next task is to build out the necessary functionality to add quizzes 
to your app. This will involve creating two new slices—one for the quizzes 
themselves and one for the cards that comprise them—and adding an action to 
your topics slice to associate quizzes with the topic to which they belong. 
To start, create in the src/features/quizzes directory, 
create a new file containing a slice for quizzes that:

Is named 'quizzes'
Has initial state consisting of an object that includes one property, 
quizzes, which corresponds to an empty object. 
This inner quizzes object will eventually hold all quizzes keyed by id.

Has an addQuiz action.
This action will receive a payload of the form { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}.
Export the selector as well as the action creators and reducer that your slice generates. */

import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
});

export const addQuizForTopicId = (quiz) => {
  const { topicId, id } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizIdForTopic({ topicId: topicId, quizId: id }));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

/*Conceptually, the actions of creating a new quiz and associating it 
with its topic are a part of a single process. Back in the quiz slice file, 
write an action creator that returns a thunk that dispatches these two actions 
one after the other. This new thunk action creator is the one that you will 
dispatch when a user creates a new quiz.
 */