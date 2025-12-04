# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUser, listWorkoutsForUser, updateGoal, listExerciseDefinitions } from '@dataconnect/generated';


// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation ListWorkoutsForUser:  For variables, look at type ListWorkoutsForUserVars in ../index.d.ts
const { data } = await ListWorkoutsForUser(dataConnect, listWorkoutsForUserVars);

// Operation UpdateGoal:  For variables, look at type UpdateGoalVars in ../index.d.ts
const { data } = await UpdateGoal(dataConnect, updateGoalVars);

// Operation ListExerciseDefinitions: 
const { data } = await ListExerciseDefinitions(dataConnect);


```