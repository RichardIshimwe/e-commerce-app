/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bpchar: { input: any; output: any; }
  name: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Table to store all my todo */
export type Todos = {
  __typename?: 'Todos';
  id: Scalars['Int']['output'];
  name: Scalars['name']['output'];
  task: Scalars['bpchar']['output'];
};

/** aggregated selection of "Todos" */
export type Todos_Aggregate = {
  __typename?: 'Todos_aggregate';
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "Todos" */
export type Todos_Aggregate_Fields = {
  __typename?: 'Todos_aggregate_fields';
  avg?: Maybe<Todos_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
  stddev?: Maybe<Todos_Stddev_Fields>;
  stddev_pop?: Maybe<Todos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todos_Stddev_Samp_Fields>;
  sum?: Maybe<Todos_Sum_Fields>;
  var_pop?: Maybe<Todos_Var_Pop_Fields>;
  var_samp?: Maybe<Todos_Var_Samp_Fields>;
  variance?: Maybe<Todos_Variance_Fields>;
};


/** aggregate fields of "Todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Todos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Todos_Avg_Fields = {
  __typename?: 'Todos_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: InputMaybe<Array<Todos_Bool_Exp>>;
  _not?: InputMaybe<Todos_Bool_Exp>;
  _or?: InputMaybe<Array<Todos_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<Name_Comparison_Exp>;
  task?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "Todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint on columns "id" */
  TodosPkey = 'Todos_pkey'
}

/** input type for incrementing numeric columns in table "Todos" */
export type Todos_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Todos" */
export type Todos_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
  task?: InputMaybe<Scalars['bpchar']['input']>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: 'Todos_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  task?: Maybe<Scalars['bpchar']['output']>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: 'Todos_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  task?: Maybe<Scalars['bpchar']['output']>;
};

/** response of any mutation on the table "Todos" */
export type Todos_Mutation_Response = {
  __typename?: 'Todos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on_conflict condition type for table "Todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns?: Array<Todos_Update_Column>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

/** Ordering options when selecting data from "Todos". */
export type Todos_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  task?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Todos */
export type Todos_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Todos" */
export enum Todos_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Task = 'task'
}

/** input type for updating data in table "Todos" */
export type Todos_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
  task?: InputMaybe<Scalars['bpchar']['input']>;
};

/** aggregate stddev on columns */
export type Todos_Stddev_Fields = {
  __typename?: 'Todos_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Todos_Stddev_Pop_Fields = {
  __typename?: 'Todos_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Todos_Stddev_Samp_Fields = {
  __typename?: 'Todos_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Todos" */
export type Todos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Todos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Todos_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
  task?: InputMaybe<Scalars['bpchar']['input']>;
};

/** aggregate sum on columns */
export type Todos_Sum_Fields = {
  __typename?: 'Todos_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Todos" */
export enum Todos_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Task = 'task'
}

export type Todos_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Todos_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Todos_Set_Input>;
  /** filter the rows which have to be updated */
  where: Todos_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Todos_Var_Pop_Fields = {
  __typename?: 'Todos_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Todos_Var_Samp_Fields = {
  __typename?: 'Todos_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Todos_Variance_Fields = {
  __typename?: 'Todos_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']['input']>;
  _gt?: InputMaybe<Scalars['bpchar']['input']>;
  _gte?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']['input']>;
  _in?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']['input']>;
  _lt?: InputMaybe<Scalars['bpchar']['input']>;
  _lte?: InputMaybe<Scalars['bpchar']['input']>;
  _neq?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']['input']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Todos" */
  delete_Todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "Todos" */
  delete_Todos_by_pk?: Maybe<Todos>;
  /** insert data into the table: "Todos" */
  insert_Todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "Todos" */
  insert_Todos_one?: Maybe<Todos>;
  /** update data of the table: "Todos" */
  update_Todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "Todos" */
  update_Todos_by_pk?: Maybe<Todos>;
  /** update multiples rows of table: "Todos" */
  update_Todos_many?: Maybe<Array<Maybe<Todos_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _inc?: InputMaybe<Todos_Inc_Input>;
  _set?: InputMaybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _inc?: InputMaybe<Todos_Inc_Input>;
  _set?: InputMaybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_ManyArgs = {
  updates: Array<Todos_Updates>;
};

/** Boolean expression to compare columns of type "name". All fields are combined with logical 'AND'. */
export type Name_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['name']['input']>;
  _gt?: InputMaybe<Scalars['name']['input']>;
  _gte?: InputMaybe<Scalars['name']['input']>;
  _in?: InputMaybe<Array<Scalars['name']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['name']['input']>;
  _lte?: InputMaybe<Scalars['name']['input']>;
  _neq?: InputMaybe<Scalars['name']['input']>;
  _nin?: InputMaybe<Array<Scalars['name']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Todos" */
  Todos: Array<Todos>;
  /** fetch aggregated fields from the table: "Todos" */
  Todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "Todos" using primary key columns */
  Todos_by_pk?: Maybe<Todos>;
};


export type Query_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Todos" */
  Todos: Array<Todos>;
  /** fetch aggregated fields from the table: "Todos" */
  Todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "Todos" using primary key columns */
  Todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table in a streaming manner: "Todos" */
  Todos_stream: Array<Todos>;
};


export type Subscription_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTodos_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Todos_Stream_Cursor_Input>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

export type TodoQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TodoQueryQuery = { __typename?: 'query_root', Todos: Array<{ __typename?: 'Todos', id: number, name: any, task: any }> };


export const TodoQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"todoQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"task"}}]}}]}}]} as unknown as DocumentNode<TodoQueryQuery, TodoQueryQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bpchar: { input: any; output: any; }
  name: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Table to store all my todo */
export type Todos = {
  __typename?: 'Todos';
  id: Scalars['Int']['output'];
  name: Scalars['name']['output'];
  task: Scalars['bpchar']['output'];
};

/** aggregated selection of "Todos" */
export type Todos_Aggregate = {
  __typename?: 'Todos_aggregate';
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "Todos" */
export type Todos_Aggregate_Fields = {
  __typename?: 'Todos_aggregate_fields';
  avg?: Maybe<Todos_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
  stddev?: Maybe<Todos_Stddev_Fields>;
  stddev_pop?: Maybe<Todos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todos_Stddev_Samp_Fields>;
  sum?: Maybe<Todos_Sum_Fields>;
  var_pop?: Maybe<Todos_Var_Pop_Fields>;
  var_samp?: Maybe<Todos_Var_Samp_Fields>;
  variance?: Maybe<Todos_Variance_Fields>;
};


/** aggregate fields of "Todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Todos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Todos_Avg_Fields = {
  __typename?: 'Todos_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: InputMaybe<Array<Todos_Bool_Exp>>;
  _not?: InputMaybe<Todos_Bool_Exp>;
  _or?: InputMaybe<Array<Todos_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<Name_Comparison_Exp>;
  task?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "Todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint on columns "id" */
  TodosPkey = 'Todos_pkey'
}

/** input type for incrementing numeric columns in table "Todos" */
export type Todos_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Todos" */
export type Todos_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
  task?: InputMaybe<Scalars['bpchar']['input']>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: 'Todos_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  task?: Maybe<Scalars['bpchar']['output']>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: 'Todos_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  task?: Maybe<Scalars['bpchar']['output']>;
};

/** response of any mutation on the table "Todos" */
export type Todos_Mutation_Response = {
  __typename?: 'Todos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on_conflict condition type for table "Todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns?: Array<Todos_Update_Column>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

/** Ordering options when selecting data from "Todos". */
export type Todos_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  task?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Todos */
export type Todos_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Todos" */
export enum Todos_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Task = 'task'
}

/** input type for updating data in table "Todos" */
export type Todos_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
  task?: InputMaybe<Scalars['bpchar']['input']>;
};

/** aggregate stddev on columns */
export type Todos_Stddev_Fields = {
  __typename?: 'Todos_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Todos_Stddev_Pop_Fields = {
  __typename?: 'Todos_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Todos_Stddev_Samp_Fields = {
  __typename?: 'Todos_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Todos" */
export type Todos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Todos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Todos_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
  task?: InputMaybe<Scalars['bpchar']['input']>;
};

/** aggregate sum on columns */
export type Todos_Sum_Fields = {
  __typename?: 'Todos_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Todos" */
export enum Todos_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Task = 'task'
}

export type Todos_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Todos_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Todos_Set_Input>;
  /** filter the rows which have to be updated */
  where: Todos_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Todos_Var_Pop_Fields = {
  __typename?: 'Todos_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Todos_Var_Samp_Fields = {
  __typename?: 'Todos_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Todos_Variance_Fields = {
  __typename?: 'Todos_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']['input']>;
  _gt?: InputMaybe<Scalars['bpchar']['input']>;
  _gte?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']['input']>;
  _in?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']['input']>;
  _lt?: InputMaybe<Scalars['bpchar']['input']>;
  _lte?: InputMaybe<Scalars['bpchar']['input']>;
  _neq?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']['input']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Todos" */
  delete_Todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "Todos" */
  delete_Todos_by_pk?: Maybe<Todos>;
  /** insert data into the table: "Todos" */
  insert_Todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "Todos" */
  insert_Todos_one?: Maybe<Todos>;
  /** update data of the table: "Todos" */
  update_Todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "Todos" */
  update_Todos_by_pk?: Maybe<Todos>;
  /** update multiples rows of table: "Todos" */
  update_Todos_many?: Maybe<Array<Maybe<Todos_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _inc?: InputMaybe<Todos_Inc_Input>;
  _set?: InputMaybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _inc?: InputMaybe<Todos_Inc_Input>;
  _set?: InputMaybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_ManyArgs = {
  updates: Array<Todos_Updates>;
};

/** Boolean expression to compare columns of type "name". All fields are combined with logical 'AND'. */
export type Name_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['name']['input']>;
  _gt?: InputMaybe<Scalars['name']['input']>;
  _gte?: InputMaybe<Scalars['name']['input']>;
  _in?: InputMaybe<Array<Scalars['name']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['name']['input']>;
  _lte?: InputMaybe<Scalars['name']['input']>;
  _neq?: InputMaybe<Scalars['name']['input']>;
  _nin?: InputMaybe<Array<Scalars['name']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Todos" */
  Todos: Array<Todos>;
  /** fetch aggregated fields from the table: "Todos" */
  Todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "Todos" using primary key columns */
  Todos_by_pk?: Maybe<Todos>;
};


export type Query_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Todos" */
  Todos: Array<Todos>;
  /** fetch aggregated fields from the table: "Todos" */
  Todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "Todos" using primary key columns */
  Todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table in a streaming manner: "Todos" */
  Todos_stream: Array<Todos>;
};


export type Subscription_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTodos_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Todos_Stream_Cursor_Input>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

export type TodoQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TodoQueryQuery = { __typename?: 'query_root', Todos: Array<{ __typename?: 'Todos', id: number, name: any, task: any }> };
