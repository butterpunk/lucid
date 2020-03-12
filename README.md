# 🚀 Blake's Lucid UI Assement

This was a project given by lucid to test frontend skills. Original problem here: https://github.com/lucidhq/ui-code-assessment-quiz
I opted to used react-redux to handle the state. I created 2 objects in the state tree: Questions, and Quiz. Questions basically just holds
the questions coming from the API and Quiz handles the logic for things like iterating to next question, keeping track of question totals, etc.
I just put the Selectors in the Reducer/index.js because the projects relatively small. There are some Todo's below that I didn't have time to handle,
but overall I'm pretty happy with it for a quick project.

## 🚧 Dependencies
- react-redux to handle state management stuff
- thunks middleware
- React bootrap for styling things.
- composeWithDevTools

## ⌛️ Blake's Todo's
 - make sure no convergence possiblity with random question generating
 - handle error form API
 - There's a mix of single quotes and double quotes and probably some linter things off
 - remove react debugger middleware or make conditional for a deve build

