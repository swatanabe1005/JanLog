import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  username: string;
  email: string;
  createdAt: TimestampString;
}

export interface ExerciseDefinition_Key {
  id: UUIDString;
  __typename?: 'ExerciseDefinition_Key';
}

export interface Goal_Key {
  id: UUIDString;
  __typename?: 'Goal_Key';
}

export interface ListExerciseDefinitionsData {
  exerciseDefinitions: ({
    id: UUIDString;
    name: string;
    category: string;
  } & ExerciseDefinition_Key)[];
}

export interface ListWorkoutsForUserData {
  workouts: ({
    id: UUIDString;
    date: DateString;
    durationMinutes: number;
    workoutType: string;
  } & Workout_Key)[];
}

export interface ListWorkoutsForUserVariables {
  userId: UUIDString;
}

export interface UpdateGoalData {
  goal_update?: Goal_Key | null;
}

export interface UpdateGoalVariables {
  id: UUIDString;
  currentValue?: number | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface WorkoutExercise_Key {
  id: UUIDString;
  __typename?: 'WorkoutExercise_Key';
}

export interface Workout_Key {
  id: UUIDString;
  __typename?: 'Workout_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface ListWorkoutsForUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListWorkoutsForUserVariables): QueryRef<ListWorkoutsForUserData, ListWorkoutsForUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListWorkoutsForUserVariables): QueryRef<ListWorkoutsForUserData, ListWorkoutsForUserVariables>;
  operationName: string;
}
export const listWorkoutsForUserRef: ListWorkoutsForUserRef;

export function listWorkoutsForUser(vars: ListWorkoutsForUserVariables): QueryPromise<ListWorkoutsForUserData, ListWorkoutsForUserVariables>;
export function listWorkoutsForUser(dc: DataConnect, vars: ListWorkoutsForUserVariables): QueryPromise<ListWorkoutsForUserData, ListWorkoutsForUserVariables>;

interface UpdateGoalRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateGoalVariables): MutationRef<UpdateGoalData, UpdateGoalVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateGoalVariables): MutationRef<UpdateGoalData, UpdateGoalVariables>;
  operationName: string;
}
export const updateGoalRef: UpdateGoalRef;

export function updateGoal(vars: UpdateGoalVariables): MutationPromise<UpdateGoalData, UpdateGoalVariables>;
export function updateGoal(dc: DataConnect, vars: UpdateGoalVariables): MutationPromise<UpdateGoalData, UpdateGoalVariables>;

interface ListExerciseDefinitionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListExerciseDefinitionsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListExerciseDefinitionsData, undefined>;
  operationName: string;
}
export const listExerciseDefinitionsRef: ListExerciseDefinitionsRef;

export function listExerciseDefinitions(): QueryPromise<ListExerciseDefinitionsData, undefined>;
export function listExerciseDefinitions(dc: DataConnect): QueryPromise<ListExerciseDefinitionsData, undefined>;

