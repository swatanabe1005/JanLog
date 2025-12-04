const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'janlog',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
};

const listWorkoutsForUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListWorkoutsForUser', inputVars);
}
listWorkoutsForUserRef.operationName = 'ListWorkoutsForUser';
exports.listWorkoutsForUserRef = listWorkoutsForUserRef;

exports.listWorkoutsForUser = function listWorkoutsForUser(dcOrVars, vars) {
  return executeQuery(listWorkoutsForUserRef(dcOrVars, vars));
};

const updateGoalRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateGoal', inputVars);
}
updateGoalRef.operationName = 'UpdateGoal';
exports.updateGoalRef = updateGoalRef;

exports.updateGoal = function updateGoal(dcOrVars, vars) {
  return executeMutation(updateGoalRef(dcOrVars, vars));
};

const listExerciseDefinitionsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListExerciseDefinitions');
}
listExerciseDefinitionsRef.operationName = 'ListExerciseDefinitions';
exports.listExerciseDefinitionsRef = listExerciseDefinitionsRef;

exports.listExerciseDefinitions = function listExerciseDefinitions(dc) {
  return executeQuery(listExerciseDefinitionsRef(dc));
};
