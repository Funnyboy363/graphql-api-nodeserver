// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  project: (where?: ProjectWhereInput) => Promise<boolean>;
  task: (where?: TaskWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  project: (where: ProjectWhereUniqueInput) => ProjectNullablePromise;
  projects: (args?: {
    where?: ProjectWhereInput;
    orderBy?: ProjectOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Project>;
  projectsConnection: (args?: {
    where?: ProjectWhereInput;
    orderBy?: ProjectOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProjectConnectionPromise;
  task: (where: TaskWhereUniqueInput) => TaskNullablePromise;
  tasks: (args?: {
    where?: TaskWhereInput;
    orderBy?: TaskOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Task>;
  tasksConnection: (args?: {
    where?: TaskWhereInput;
    orderBy?: TaskOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TaskConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createProject: (data: ProjectCreateInput) => ProjectPromise;
  updateProject: (args: {
    data: ProjectUpdateInput;
    where: ProjectWhereUniqueInput;
  }) => ProjectPromise;
  updateManyProjects: (args: {
    data: ProjectUpdateManyMutationInput;
    where?: ProjectWhereInput;
  }) => BatchPayloadPromise;
  upsertProject: (args: {
    where: ProjectWhereUniqueInput;
    create: ProjectCreateInput;
    update: ProjectUpdateInput;
  }) => ProjectPromise;
  deleteProject: (where: ProjectWhereUniqueInput) => ProjectPromise;
  deleteManyProjects: (where?: ProjectWhereInput) => BatchPayloadPromise;
  createTask: (data: TaskCreateInput) => TaskPromise;
  updateTask: (args: {
    data: TaskUpdateInput;
    where: TaskWhereUniqueInput;
  }) => TaskPromise;
  updateManyTasks: (args: {
    data: TaskUpdateManyMutationInput;
    where?: TaskWhereInput;
  }) => BatchPayloadPromise;
  upsertTask: (args: {
    where: TaskWhereUniqueInput;
    create: TaskCreateInput;
    update: TaskUpdateInput;
  }) => TaskPromise;
  deleteTask: (where: TaskWhereUniqueInput) => TaskPromise;
  deleteManyTasks: (where?: TaskWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  project: (
    where?: ProjectSubscriptionWhereInput
  ) => ProjectSubscriptionPayloadSubscription;
  task: (
    where?: TaskSubscriptionWhereInput
  ) => TaskSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TaskOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "isCompleted_ASC"
  | "isCompleted_DESC";

export type ProjectOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface TaskUpdateManyWithoutProjectInput {
  create?: Maybe<
    TaskCreateWithoutProjectInput[] | TaskCreateWithoutProjectInput
  >;
  delete?: Maybe<TaskWhereUniqueInput[] | TaskWhereUniqueInput>;
  connect?: Maybe<TaskWhereUniqueInput[] | TaskWhereUniqueInput>;
  set?: Maybe<TaskWhereUniqueInput[] | TaskWhereUniqueInput>;
  disconnect?: Maybe<TaskWhereUniqueInput[] | TaskWhereUniqueInput>;
  update?: Maybe<
    | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    | TaskUpdateWithWhereUniqueWithoutProjectInput
  >;
  upsert?: Maybe<
    | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    | TaskUpsertWithWhereUniqueWithoutProjectInput
  >;
  deleteMany?: Maybe<TaskScalarWhereInput[] | TaskScalarWhereInput>;
  updateMany?: Maybe<
    TaskUpdateManyWithWhereNestedInput[] | TaskUpdateManyWithWhereNestedInput
  >;
}

export type ProjectWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface TaskUpsertWithWhereUniqueWithoutProjectInput {
  where: TaskWhereUniqueInput;
  update: TaskUpdateWithoutProjectDataInput;
  create: TaskCreateWithoutProjectInput;
}

export interface ProjectWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  tasks_every?: Maybe<TaskWhereInput>;
  tasks_some?: Maybe<TaskWhereInput>;
  tasks_none?: Maybe<TaskWhereInput>;
  AND?: Maybe<ProjectWhereInput[] | ProjectWhereInput>;
  OR?: Maybe<ProjectWhereInput[] | ProjectWhereInput>;
  NOT?: Maybe<ProjectWhereInput[] | ProjectWhereInput>;
}

export interface TaskScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  isCompleted?: Maybe<Boolean>;
  isCompleted_not?: Maybe<Boolean>;
  AND?: Maybe<TaskScalarWhereInput[] | TaskScalarWhereInput>;
  OR?: Maybe<TaskScalarWhereInput[] | TaskScalarWhereInput>;
  NOT?: Maybe<TaskScalarWhereInput[] | TaskScalarWhereInput>;
}

export interface TaskWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  project?: Maybe<ProjectWhereInput>;
  isCompleted?: Maybe<Boolean>;
  isCompleted_not?: Maybe<Boolean>;
  AND?: Maybe<TaskWhereInput[] | TaskWhereInput>;
  OR?: Maybe<TaskWhereInput[] | TaskWhereInput>;
  NOT?: Maybe<TaskWhereInput[] | TaskWhereInput>;
}

export interface ProjectCreateInput {
  name: String;
  tasks?: Maybe<TaskCreateManyWithoutProjectInput>;
}

export interface TaskUpdateManyDataInput {
  title?: Maybe<String>;
  isCompleted?: Maybe<Boolean>;
}

export interface TaskCreateManyWithoutProjectInput {
  create?: Maybe<
    TaskCreateWithoutProjectInput[] | TaskCreateWithoutProjectInput
  >;
  connect?: Maybe<TaskWhereUniqueInput[] | TaskWhereUniqueInput>;
}

export interface TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput;
  data: TaskUpdateManyDataInput;
}

export interface TaskCreateWithoutProjectInput {
  title: String;
  isCompleted?: Maybe<Boolean>;
}

export interface ProjectSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProjectWhereInput>;
  AND?: Maybe<ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput>;
  OR?: Maybe<ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput>;
  NOT?: Maybe<ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput>;
}

export interface ProjectUpdateInput {
  name?: Maybe<String>;
  tasks?: Maybe<TaskUpdateManyWithoutProjectInput>;
}

export interface ProjectUpsertWithoutTasksInput {
  update: ProjectUpdateWithoutTasksDataInput;
  create: ProjectCreateWithoutTasksInput;
}

export interface ProjectCreateWithoutTasksInput {
  name: String;
}

export interface ProjectUpdateWithoutTasksDataInput {
  name?: Maybe<String>;
}

export interface TaskUpdateWithWhereUniqueWithoutProjectInput {
  where: TaskWhereUniqueInput;
  data: TaskUpdateWithoutProjectDataInput;
}

export interface TaskUpdateInput {
  title?: Maybe<String>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutTasksInput>;
  isCompleted?: Maybe<Boolean>;
}

export interface TaskSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<TaskWhereInput>;
  AND?: Maybe<TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput>;
  OR?: Maybe<TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput>;
  NOT?: Maybe<TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput>;
}

export interface ProjectUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface TaskCreateInput {
  title: String;
  project: ProjectCreateOneWithoutTasksInput;
  isCompleted?: Maybe<Boolean>;
}

export interface ProjectCreateOneWithoutTasksInput {
  create?: Maybe<ProjectCreateWithoutTasksInput>;
  connect?: Maybe<ProjectWhereUniqueInput>;
}

export interface TaskUpdateWithoutProjectDataInput {
  title?: Maybe<String>;
  isCompleted?: Maybe<Boolean>;
}

export interface TaskUpdateManyMutationInput {
  title?: Maybe<String>;
  isCompleted?: Maybe<Boolean>;
}

export interface ProjectUpdateOneRequiredWithoutTasksInput {
  create?: Maybe<ProjectCreateWithoutTasksInput>;
  update?: Maybe<ProjectUpdateWithoutTasksDataInput>;
  upsert?: Maybe<ProjectUpsertWithoutTasksInput>;
  connect?: Maybe<ProjectWhereUniqueInput>;
}

export type TaskWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface TaskPreviousValues {
  id: ID_Output;
  title: String;
  isCompleted: Boolean;
}

export interface TaskPreviousValuesPromise
  extends Promise<TaskPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  isCompleted: () => Promise<Boolean>;
}

export interface TaskPreviousValuesSubscription
  extends Promise<AsyncIterator<TaskPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  isCompleted: () => Promise<AsyncIterator<Boolean>>;
}

export interface AggregateProject {
  count: Int;
}

export interface AggregateProjectPromise
  extends Promise<AggregateProject>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProjectSubscription
  extends Promise<AsyncIterator<AggregateProject>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Task {
  id: ID_Output;
  title: String;
  isCompleted: Boolean;
}

export interface TaskPromise extends Promise<Task>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  project: <T = ProjectPromise>() => T;
  isCompleted: () => Promise<Boolean>;
}

export interface TaskSubscription
  extends Promise<AsyncIterator<Task>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  project: <T = ProjectSubscription>() => T;
  isCompleted: () => Promise<AsyncIterator<Boolean>>;
}

export interface TaskNullablePromise
  extends Promise<Task | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  project: <T = ProjectPromise>() => T;
  isCompleted: () => Promise<Boolean>;
}

export interface TaskConnection {
  pageInfo: PageInfo;
  edges: TaskEdge[];
}

export interface TaskConnectionPromise
  extends Promise<TaskConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TaskEdge>>() => T;
  aggregate: <T = AggregateTaskPromise>() => T;
}

export interface TaskConnectionSubscription
  extends Promise<AsyncIterator<TaskConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TaskEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTaskSubscription>() => T;
}

export interface ProjectSubscriptionPayload {
  mutation: MutationType;
  node: Project;
  updatedFields: String[];
  previousValues: ProjectPreviousValues;
}

export interface ProjectSubscriptionPayloadPromise
  extends Promise<ProjectSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProjectPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProjectPreviousValuesPromise>() => T;
}

export interface ProjectSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProjectSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProjectSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProjectPreviousValuesSubscription>() => T;
}

export interface ProjectEdge {
  node: Project;
  cursor: String;
}

export interface ProjectEdgePromise extends Promise<ProjectEdge>, Fragmentable {
  node: <T = ProjectPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProjectEdgeSubscription
  extends Promise<AsyncIterator<ProjectEdge>>,
    Fragmentable {
  node: <T = ProjectSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Project {
  id: ID_Output;
  name: String;
}

export interface ProjectPromise extends Promise<Project>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  tasks: <T = FragmentableArray<Task>>(args?: {
    where?: TaskWhereInput;
    orderBy?: TaskOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ProjectSubscription
  extends Promise<AsyncIterator<Project>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  tasks: <T = Promise<AsyncIterator<TaskSubscription>>>(args?: {
    where?: TaskWhereInput;
    orderBy?: TaskOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ProjectNullablePromise
  extends Promise<Project | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  tasks: <T = FragmentableArray<Task>>(args?: {
    where?: TaskWhereInput;
    orderBy?: TaskOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ProjectPreviousValues {
  id: ID_Output;
  name: String;
}

export interface ProjectPreviousValuesPromise
  extends Promise<ProjectPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface ProjectPreviousValuesSubscription
  extends Promise<AsyncIterator<ProjectPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface TaskSubscriptionPayload {
  mutation: MutationType;
  node: Task;
  updatedFields: String[];
  previousValues: TaskPreviousValues;
}

export interface TaskSubscriptionPayloadPromise
  extends Promise<TaskSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TaskPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TaskPreviousValuesPromise>() => T;
}

export interface TaskSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TaskSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TaskSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TaskPreviousValuesSubscription>() => T;
}

export interface TaskEdge {
  node: Task;
  cursor: String;
}

export interface TaskEdgePromise extends Promise<TaskEdge>, Fragmentable {
  node: <T = TaskPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TaskEdgeSubscription
  extends Promise<AsyncIterator<TaskEdge>>,
    Fragmentable {
  node: <T = TaskSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTask {
  count: Int;
}

export interface AggregateTaskPromise
  extends Promise<AggregateTask>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTaskSubscription
  extends Promise<AsyncIterator<AggregateTask>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProjectConnection {
  pageInfo: PageInfo;
  edges: ProjectEdge[];
}

export interface ProjectConnectionPromise
  extends Promise<ProjectConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProjectEdge>>() => T;
  aggregate: <T = AggregateProjectPromise>() => T;
}

export interface ProjectConnectionSubscription
  extends Promise<AsyncIterator<ProjectConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProjectEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProjectSubscription>() => T;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Project",
    embedded: false
  },
  {
    name: "Task",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;