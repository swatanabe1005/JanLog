import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'janlog',
  location: 'us-east4'
};

export const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';

export function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
}

export const listWorkoutsForUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListWorkoutsForUser', inputVars);
}
listWorkoutsForUserRef.operationName = 'ListWorkoutsForUser';

export function listWorkoutsForUser(dcOrVars, vars) {
  return executeQuery(listWorkoutsForUserRef(dcOrVars, vars));
}

export const updateGoalRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateGoal', inputVars);
}
updateGoalRef.operationName = 'UpdateGoal';

export function updateGoal(dcOrVars, vars) {
  return executeMutation(updateGoalRef(dcOrVars, vars));
}

export const listExerciseDefinitionsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListExerciseDefinitions');
}
listExerciseDefinitionsRef.operationName = 'ListExerciseDefinitions';

export function listExerciseDefinitions(dc) {
  return executeQuery(listExerciseDefinitionsRef(dc));
}

