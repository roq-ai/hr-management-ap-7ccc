/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model administrator
 *
 */
export type administrator = $Result.DefaultSelection<Prisma.$administratorPayload>;
/**
 * Model department
 *
 */
export type department = $Result.DefaultSelection<Prisma.$departmentPayload>;
/**
 * Model employee
 *
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>;
/**
 * Model hr_manager
 *
 */
export type hr_manager = $Result.DefaultSelection<Prisma.$hr_managerPayload>;
/**
 * Model job_position
 *
 */
export type job_position = $Result.DefaultSelection<Prisma.$job_positionPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model owner
 *
 */
export type owner = $Result.DefaultSelection<Prisma.$ownerPayload>;
/**
 * Model performance_review
 *
 */
export type performance_review = $Result.DefaultSelection<Prisma.$performance_reviewPayload>;
/**
 * Model role
 *
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>;
/**
 * Model salary
 *
 */
export type salary = $Result.DefaultSelection<Prisma.$salaryPayload>;
/**
 * Model schedule
 *
 */
export type schedule = $Result.DefaultSelection<Prisma.$schedulePayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Administrators
 * const administrators = await prisma.administrator.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Administrators
   * const administrators = await prisma.administrator.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.administrator`: Exposes CRUD operations for the **administrator** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Administrators
   * const administrators = await prisma.administrator.findMany()
   * ```
   */
  get administrator(): Prisma.administratorDelegate<ExtArgs>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **department** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Departments
   * const departments = await prisma.department.findMany()
   * ```
   */
  get department(): Prisma.departmentDelegate<ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   */
  get employee(): Prisma.employeeDelegate<ExtArgs>;

  /**
   * `prisma.hr_manager`: Exposes CRUD operations for the **hr_manager** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Hr_managers
   * const hr_managers = await prisma.hr_manager.findMany()
   * ```
   */
  get hr_manager(): Prisma.hr_managerDelegate<ExtArgs>;

  /**
   * `prisma.job_position`: Exposes CRUD operations for the **job_position** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Job_positions
   * const job_positions = await prisma.job_position.findMany()
   * ```
   */
  get job_position(): Prisma.job_positionDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **owner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Owners
   * const owners = await prisma.owner.findMany()
   * ```
   */
  get owner(): Prisma.ownerDelegate<ExtArgs>;

  /**
   * `prisma.performance_review`: Exposes CRUD operations for the **performance_review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Performance_reviews
   * const performance_reviews = await prisma.performance_review.findMany()
   * ```
   */
  get performance_review(): Prisma.performance_reviewDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   */
  get role(): Prisma.roleDelegate<ExtArgs>;

  /**
   * `prisma.salary`: Exposes CRUD operations for the **salary** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Salaries
   * const salaries = await prisma.salary.findMany()
   * ```
   */
  get salary(): Prisma.salaryDelegate<ExtArgs>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **schedule** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Schedules
   * const schedules = await prisma.schedule.findMany()
   * ```
   */
  get schedule(): Prisma.scheduleDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    administrator: 'administrator';
    department: 'department';
    employee: 'employee';
    hr_manager: 'hr_manager';
    job_position: 'job_position';
    organization: 'organization';
    owner: 'owner';
    performance_review: 'performance_review';
    role: 'role';
    salary: 'salary';
    schedule: 'schedule';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps:
        | 'administrator'
        | 'department'
        | 'employee'
        | 'hr_manager'
        | 'job_position'
        | 'organization'
        | 'owner'
        | 'performance_review'
        | 'role'
        | 'salary'
        | 'schedule'
        | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      administrator: {
        payload: Prisma.$administratorPayload<ExtArgs>;
        fields: Prisma.administratorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.administratorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$administratorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.administratorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$administratorPayload>;
          };
          findFirst: {
            args: Prisma.administratorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$administratorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.administratorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$administratorPayload>;
          };
          findMany: {
            args: Prisma.administratorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$administratorPayload>[];
          };
          create: {
            args: Prisma.administratorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$administratorPayload>;
          };
          createMany: {
            args: Prisma.administratorCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.administratorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$administratorPayload>;
          };
          update: {
            args: Prisma.administratorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$administratorPayload>;
          };
          deleteMany: {
            args: Prisma.administratorDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.administratorUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.administratorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$administratorPayload>;
          };
          aggregate: {
            args: Prisma.AdministratorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAdministrator>;
          };
          groupBy: {
            args: Prisma.administratorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AdministratorGroupByOutputType>[];
          };
          count: {
            args: Prisma.administratorCountArgs<ExtArgs>;
            result: $Utils.Optional<AdministratorCountAggregateOutputType> | number;
          };
        };
      };
      department: {
        payload: Prisma.$departmentPayload<ExtArgs>;
        fields: Prisma.departmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.departmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.departmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>;
          };
          findFirst: {
            args: Prisma.departmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.departmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>;
          };
          findMany: {
            args: Prisma.departmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[];
          };
          create: {
            args: Prisma.departmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>;
          };
          createMany: {
            args: Prisma.departmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.departmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>;
          };
          update: {
            args: Prisma.departmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>;
          };
          deleteMany: {
            args: Prisma.departmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.departmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.departmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>;
          };
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDepartment>;
          };
          groupBy: {
            args: Prisma.departmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DepartmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.departmentCountArgs<ExtArgs>;
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number;
          };
        };
      };
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>;
        fields: Prisma.employeeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[];
          };
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmployee>;
          };
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeGroupByOutputType>[];
          };
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number;
          };
        };
      };
      hr_manager: {
        payload: Prisma.$hr_managerPayload<ExtArgs>;
        fields: Prisma.hr_managerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.hr_managerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.hr_managerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          findFirst: {
            args: Prisma.hr_managerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.hr_managerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          findMany: {
            args: Prisma.hr_managerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>[];
          };
          create: {
            args: Prisma.hr_managerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          createMany: {
            args: Prisma.hr_managerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.hr_managerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          update: {
            args: Prisma.hr_managerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          deleteMany: {
            args: Prisma.hr_managerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.hr_managerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.hr_managerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          aggregate: {
            args: Prisma.Hr_managerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateHr_manager>;
          };
          groupBy: {
            args: Prisma.hr_managerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Hr_managerGroupByOutputType>[];
          };
          count: {
            args: Prisma.hr_managerCountArgs<ExtArgs>;
            result: $Utils.Optional<Hr_managerCountAggregateOutputType> | number;
          };
        };
      };
      job_position: {
        payload: Prisma.$job_positionPayload<ExtArgs>;
        fields: Prisma.job_positionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.job_positionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.job_positionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>;
          };
          findFirst: {
            args: Prisma.job_positionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.job_positionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>;
          };
          findMany: {
            args: Prisma.job_positionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>[];
          };
          create: {
            args: Prisma.job_positionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>;
          };
          createMany: {
            args: Prisma.job_positionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.job_positionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>;
          };
          update: {
            args: Prisma.job_positionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>;
          };
          deleteMany: {
            args: Prisma.job_positionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.job_positionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.job_positionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_positionPayload>;
          };
          aggregate: {
            args: Prisma.Job_positionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob_position>;
          };
          groupBy: {
            args: Prisma.job_positionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Job_positionGroupByOutputType>[];
          };
          count: {
            args: Prisma.job_positionCountArgs<ExtArgs>;
            result: $Utils.Optional<Job_positionCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      owner: {
        payload: Prisma.$ownerPayload<ExtArgs>;
        fields: Prisma.ownerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ownerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ownerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          findFirst: {
            args: Prisma.ownerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ownerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          findMany: {
            args: Prisma.ownerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>[];
          };
          create: {
            args: Prisma.ownerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          createMany: {
            args: Prisma.ownerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.ownerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          update: {
            args: Prisma.ownerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          deleteMany: {
            args: Prisma.ownerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ownerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ownerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOwner>;
          };
          groupBy: {
            args: Prisma.ownerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OwnerGroupByOutputType>[];
          };
          count: {
            args: Prisma.ownerCountArgs<ExtArgs>;
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number;
          };
        };
      };
      performance_review: {
        payload: Prisma.$performance_reviewPayload<ExtArgs>;
        fields: Prisma.performance_reviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.performance_reviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.performance_reviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          findFirst: {
            args: Prisma.performance_reviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.performance_reviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          findMany: {
            args: Prisma.performance_reviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>[];
          };
          create: {
            args: Prisma.performance_reviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          createMany: {
            args: Prisma.performance_reviewCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.performance_reviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          update: {
            args: Prisma.performance_reviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          deleteMany: {
            args: Prisma.performance_reviewDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.performance_reviewUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.performance_reviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          aggregate: {
            args: Prisma.Performance_reviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePerformance_review>;
          };
          groupBy: {
            args: Prisma.performance_reviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Performance_reviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.performance_reviewCountArgs<ExtArgs>;
            result: $Utils.Optional<Performance_reviewCountAggregateOutputType> | number;
          };
        };
      };
      role: {
        payload: Prisma.$rolePayload<ExtArgs>;
        fields: Prisma.roleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[];
          };
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRole>;
          };
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RoleGroupByOutputType>[];
          };
          count: {
            args: Prisma.roleCountArgs<ExtArgs>;
            result: $Utils.Optional<RoleCountAggregateOutputType> | number;
          };
        };
      };
      salary: {
        payload: Prisma.$salaryPayload<ExtArgs>;
        fields: Prisma.salaryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.salaryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salaryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.salaryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salaryPayload>;
          };
          findFirst: {
            args: Prisma.salaryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salaryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.salaryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salaryPayload>;
          };
          findMany: {
            args: Prisma.salaryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salaryPayload>[];
          };
          create: {
            args: Prisma.salaryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salaryPayload>;
          };
          createMany: {
            args: Prisma.salaryCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.salaryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salaryPayload>;
          };
          update: {
            args: Prisma.salaryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salaryPayload>;
          };
          deleteMany: {
            args: Prisma.salaryDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.salaryUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.salaryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salaryPayload>;
          };
          aggregate: {
            args: Prisma.SalaryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSalary>;
          };
          groupBy: {
            args: Prisma.salaryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SalaryGroupByOutputType>[];
          };
          count: {
            args: Prisma.salaryCountArgs<ExtArgs>;
            result: $Utils.Optional<SalaryCountAggregateOutputType> | number;
          };
        };
      };
      schedule: {
        payload: Prisma.$schedulePayload<ExtArgs>;
        fields: Prisma.scheduleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.scheduleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.scheduleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          findFirst: {
            args: Prisma.scheduleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.scheduleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          findMany: {
            args: Prisma.scheduleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[];
          };
          create: {
            args: Prisma.scheduleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          createMany: {
            args: Prisma.scheduleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.scheduleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          update: {
            args: Prisma.scheduleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          deleteMany: {
            args: Prisma.scheduleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.scheduleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.scheduleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSchedule>;
          };
          groupBy: {
            args: Prisma.scheduleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ScheduleGroupByOutputType>[];
          };
          count: {
            args: Prisma.scheduleCountArgs<ExtArgs>;
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    administrator: number;
    employee: number;
    hr_manager: number;
    owner: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrator?: boolean | OrganizationCountOutputTypeCountAdministratorArgs;
    employee?: boolean | OrganizationCountOutputTypeCountEmployeeArgs;
    hr_manager?: boolean | OrganizationCountOutputTypeCountHr_managerArgs;
    owner?: boolean | OrganizationCountOutputTypeCountOwnerArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAdministratorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: administratorWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountEmployeeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: employeeWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountHr_managerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: hr_managerWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountOwnerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ownerWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    administrator: number;
    employee: number;
    hr_manager: number;
    organization: number;
    owner: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrator?: boolean | UserCountOutputTypeCountAdministratorArgs;
    employee?: boolean | UserCountOutputTypeCountEmployeeArgs;
    hr_manager?: boolean | UserCountOutputTypeCountHr_managerArgs;
    organization?: boolean | UserCountOutputTypeCountOrganizationArgs;
    owner?: boolean | UserCountOutputTypeCountOwnerArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdministratorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: administratorWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: employeeWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHr_managerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: hr_managerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: organizationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownerWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model administrator
   */

  export type AggregateAdministrator = {
    _count: AdministratorCountAggregateOutputType | null;
    _avg: AdministratorAvgAggregateOutputType | null;
    _sum: AdministratorSumAggregateOutputType | null;
    _min: AdministratorMinAggregateOutputType | null;
    _max: AdministratorMaxAggregateOutputType | null;
  };

  export type AdministratorAvgAggregateOutputType = {
    administrator_salary: number | null;
  };

  export type AdministratorSumAggregateOutputType = {
    administrator_salary: number | null;
  };

  export type AdministratorMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    organization_id: string | null;
    hire_date: Date | null;
    administrator_department: string | null;
    job_title: string | null;
    administrator_salary: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AdministratorMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    organization_id: string | null;
    hire_date: Date | null;
    administrator_department: string | null;
    job_title: string | null;
    administrator_salary: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AdministratorCountAggregateOutputType = {
    id: number;
    user_id: number;
    organization_id: number;
    hire_date: number;
    administrator_department: number;
    job_title: number;
    administrator_salary: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AdministratorAvgAggregateInputType = {
    administrator_salary?: true;
  };

  export type AdministratorSumAggregateInputType = {
    administrator_salary?: true;
  };

  export type AdministratorMinAggregateInputType = {
    id?: true;
    user_id?: true;
    organization_id?: true;
    hire_date?: true;
    administrator_department?: true;
    job_title?: true;
    administrator_salary?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AdministratorMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    organization_id?: true;
    hire_date?: true;
    administrator_department?: true;
    job_title?: true;
    administrator_salary?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AdministratorCountAggregateInputType = {
    id?: true;
    user_id?: true;
    organization_id?: true;
    hire_date?: true;
    administrator_department?: true;
    job_title?: true;
    administrator_salary?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AdministratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which administrator to aggregate.
     */
    where?: administratorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of administrators to fetch.
     */
    orderBy?: administratorOrderByWithRelationInput | administratorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: administratorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` administrators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` administrators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned administrators
     **/
    _count?: true | AdministratorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AdministratorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AdministratorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AdministratorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AdministratorMaxAggregateInputType;
  };

  export type GetAdministratorAggregateType<T extends AdministratorAggregateArgs> = {
    [P in keyof T & keyof AggregateAdministrator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrator[P]>
      : GetScalarType<T[P], AggregateAdministrator[P]>;
  };

  export type administratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: administratorWhereInput;
    orderBy?: administratorOrderByWithAggregationInput | administratorOrderByWithAggregationInput[];
    by: AdministratorScalarFieldEnum[] | AdministratorScalarFieldEnum;
    having?: administratorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdministratorCountAggregateInputType | true;
    _avg?: AdministratorAvgAggregateInputType;
    _sum?: AdministratorSumAggregateInputType;
    _min?: AdministratorMinAggregateInputType;
    _max?: AdministratorMaxAggregateInputType;
  };

  export type AdministratorGroupByOutputType = {
    id: string;
    user_id: string;
    organization_id: string;
    hire_date: Date;
    administrator_department: string;
    job_title: string;
    administrator_salary: number;
    created_at: Date;
    updated_at: Date;
    _count: AdministratorCountAggregateOutputType | null;
    _avg: AdministratorAvgAggregateOutputType | null;
    _sum: AdministratorSumAggregateOutputType | null;
    _min: AdministratorMinAggregateOutputType | null;
    _max: AdministratorMaxAggregateOutputType | null;
  };

  type GetAdministratorGroupByPayload<T extends administratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministratorGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AdministratorGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AdministratorGroupByOutputType[P]>
          : GetScalarType<T[P], AdministratorGroupByOutputType[P]>;
      }
    >
  >;

  export type administratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        organization_id?: boolean;
        hire_date?: boolean;
        administrator_department?: boolean;
        job_title?: boolean;
        administrator_salary?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['administrator']
    >;

  export type administratorSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    hire_date?: boolean;
    administrator_department?: boolean;
    job_title?: boolean;
    administrator_salary?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type administratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $administratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'administrator';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        organization_id: string;
        hire_date: Date;
        administrator_department: string;
        job_title: string;
        administrator_salary: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['administrator']
    >;
    composites: {};
  };

  type administratorGetPayload<S extends boolean | null | undefined | administratorDefaultArgs> = $Result.GetResult<
    Prisma.$administratorPayload,
    S
  >;

  type administratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    administratorFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AdministratorCountAggregateInputType | true;
  };

  export interface administratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['administrator']; meta: { name: 'administrator' } };
    /**
     * Find zero or one Administrator that matches the filter.
     * @param {administratorFindUniqueArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends administratorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, administratorFindUniqueArgs<ExtArgs>>,
    ): Prisma__administratorClient<
      $Result.GetResult<Prisma.$administratorPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Administrator that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {administratorFindUniqueOrThrowArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends administratorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, administratorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__administratorClient<
      $Result.GetResult<Prisma.$administratorPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Administrator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administratorFindFirstArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends administratorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, administratorFindFirstArgs<ExtArgs>>,
    ): Prisma__administratorClient<
      $Result.GetResult<Prisma.$administratorPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Administrator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administratorFindFirstOrThrowArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends administratorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, administratorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__administratorClient<
      $Result.GetResult<Prisma.$administratorPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Administrators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administratorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administrators
     * const administrators = await prisma.administrator.findMany()
     *
     * // Get first 10 Administrators
     * const administrators = await prisma.administrator.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const administratorWithIdOnly = await prisma.administrator.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends administratorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, administratorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administratorPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Administrator.
     * @param {administratorCreateArgs} args - Arguments to create a Administrator.
     * @example
     * // Create one Administrator
     * const Administrator = await prisma.administrator.create({
     *   data: {
     *     // ... data to create a Administrator
     *   }
     * })
     *
     **/
    create<T extends administratorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, administratorCreateArgs<ExtArgs>>,
    ): Prisma__administratorClient<
      $Result.GetResult<Prisma.$administratorPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Administrators.
     *     @param {administratorCreateManyArgs} args - Arguments to create many Administrators.
     *     @example
     *     // Create many Administrators
     *     const administrator = await prisma.administrator.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends administratorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, administratorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Administrator.
     * @param {administratorDeleteArgs} args - Arguments to delete one Administrator.
     * @example
     * // Delete one Administrator
     * const Administrator = await prisma.administrator.delete({
     *   where: {
     *     // ... filter to delete one Administrator
     *   }
     * })
     *
     **/
    delete<T extends administratorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, administratorDeleteArgs<ExtArgs>>,
    ): Prisma__administratorClient<
      $Result.GetResult<Prisma.$administratorPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Administrator.
     * @param {administratorUpdateArgs} args - Arguments to update one Administrator.
     * @example
     * // Update one Administrator
     * const administrator = await prisma.administrator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends administratorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, administratorUpdateArgs<ExtArgs>>,
    ): Prisma__administratorClient<
      $Result.GetResult<Prisma.$administratorPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Administrators.
     * @param {administratorDeleteManyArgs} args - Arguments to filter Administrators to delete.
     * @example
     * // Delete a few Administrators
     * const { count } = await prisma.administrator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends administratorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, administratorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Administrators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administrators
     * const administrator = await prisma.administrator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends administratorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, administratorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Administrator.
     * @param {administratorUpsertArgs} args - Arguments to update or create a Administrator.
     * @example
     * // Update or create a Administrator
     * const administrator = await prisma.administrator.upsert({
     *   create: {
     *     // ... data to create a Administrator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrator we want to update
     *   }
     * })
     **/
    upsert<T extends administratorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, administratorUpsertArgs<ExtArgs>>,
    ): Prisma__administratorClient<
      $Result.GetResult<Prisma.$administratorPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Administrators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administratorCountArgs} args - Arguments to filter Administrators to count.
     * @example
     * // Count the number of Administrators
     * const count = await prisma.administrator.count({
     *   where: {
     *     // ... the filter for the Administrators we want to count
     *   }
     * })
     **/
    count<T extends administratorCountArgs>(
      args?: Subset<T, administratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministratorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Administrator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AdministratorAggregateArgs>(
      args: Subset<T, AdministratorAggregateArgs>,
    ): Prisma.PrismaPromise<GetAdministratorAggregateType<T>>;

    /**
     * Group by Administrator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends administratorGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: administratorGroupByArgs['orderBy'] }
        : { orderBy?: administratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, administratorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAdministratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the administrator model
     */
    readonly fields: administratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for administrator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__administratorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the administrator model
   */
  interface administratorFieldRefs {
    readonly id: FieldRef<'administrator', 'String'>;
    readonly user_id: FieldRef<'administrator', 'String'>;
    readonly organization_id: FieldRef<'administrator', 'String'>;
    readonly hire_date: FieldRef<'administrator', 'DateTime'>;
    readonly administrator_department: FieldRef<'administrator', 'String'>;
    readonly job_title: FieldRef<'administrator', 'String'>;
    readonly administrator_salary: FieldRef<'administrator', 'Int'>;
    readonly created_at: FieldRef<'administrator', 'DateTime'>;
    readonly updated_at: FieldRef<'administrator', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * administrator findUnique
   */
  export type administratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrator
     */
    select?: administratorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: administratorInclude<ExtArgs> | null;
    /**
     * Filter, which administrator to fetch.
     */
    where: administratorWhereUniqueInput;
  };

  /**
   * administrator findUniqueOrThrow
   */
  export type administratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrator
     */
    select?: administratorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: administratorInclude<ExtArgs> | null;
    /**
     * Filter, which administrator to fetch.
     */
    where: administratorWhereUniqueInput;
  };

  /**
   * administrator findFirst
   */
  export type administratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrator
     */
    select?: administratorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: administratorInclude<ExtArgs> | null;
    /**
     * Filter, which administrator to fetch.
     */
    where?: administratorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of administrators to fetch.
     */
    orderBy?: administratorOrderByWithRelationInput | administratorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for administrators.
     */
    cursor?: administratorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` administrators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` administrators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of administrators.
     */
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[];
  };

  /**
   * administrator findFirstOrThrow
   */
  export type administratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrator
     */
    select?: administratorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: administratorInclude<ExtArgs> | null;
    /**
     * Filter, which administrator to fetch.
     */
    where?: administratorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of administrators to fetch.
     */
    orderBy?: administratorOrderByWithRelationInput | administratorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for administrators.
     */
    cursor?: administratorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` administrators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` administrators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of administrators.
     */
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[];
  };

  /**
   * administrator findMany
   */
  export type administratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrator
     */
    select?: administratorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: administratorInclude<ExtArgs> | null;
    /**
     * Filter, which administrators to fetch.
     */
    where?: administratorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of administrators to fetch.
     */
    orderBy?: administratorOrderByWithRelationInput | administratorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing administrators.
     */
    cursor?: administratorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` administrators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` administrators.
     */
    skip?: number;
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[];
  };

  /**
   * administrator create
   */
  export type administratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrator
     */
    select?: administratorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: administratorInclude<ExtArgs> | null;
    /**
     * The data needed to create a administrator.
     */
    data: XOR<administratorCreateInput, administratorUncheckedCreateInput>;
  };

  /**
   * administrator createMany
   */
  export type administratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many administrators.
     */
    data: administratorCreateManyInput | administratorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * administrator update
   */
  export type administratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrator
     */
    select?: administratorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: administratorInclude<ExtArgs> | null;
    /**
     * The data needed to update a administrator.
     */
    data: XOR<administratorUpdateInput, administratorUncheckedUpdateInput>;
    /**
     * Choose, which administrator to update.
     */
    where: administratorWhereUniqueInput;
  };

  /**
   * administrator updateMany
   */
  export type administratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update administrators.
     */
    data: XOR<administratorUpdateManyMutationInput, administratorUncheckedUpdateManyInput>;
    /**
     * Filter which administrators to update
     */
    where?: administratorWhereInput;
  };

  /**
   * administrator upsert
   */
  export type administratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrator
     */
    select?: administratorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: administratorInclude<ExtArgs> | null;
    /**
     * The filter to search for the administrator to update in case it exists.
     */
    where: administratorWhereUniqueInput;
    /**
     * In case the administrator found by the `where` argument doesn't exist, create a new administrator with this data.
     */
    create: XOR<administratorCreateInput, administratorUncheckedCreateInput>;
    /**
     * In case the administrator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<administratorUpdateInput, administratorUncheckedUpdateInput>;
  };

  /**
   * administrator delete
   */
  export type administratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrator
     */
    select?: administratorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: administratorInclude<ExtArgs> | null;
    /**
     * Filter which administrator to delete.
     */
    where: administratorWhereUniqueInput;
  };

  /**
   * administrator deleteMany
   */
  export type administratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which administrators to delete
     */
    where?: administratorWhereInput;
  };

  /**
   * administrator without action
   */
  export type administratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrator
     */
    select?: administratorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: administratorInclude<ExtArgs> | null;
  };

  /**
   * Model department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
  };

  export type DepartmentMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DepartmentMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DepartmentCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type DepartmentMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DepartmentMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DepartmentCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which department to aggregate.
     */
    where?: departmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: departmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` departments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned departments
     **/
    _count?: true | DepartmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DepartmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DepartmentMaxAggregateInputType;
  };

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
    [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>;
  };

  export type departmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentWhereInput;
    orderBy?: departmentOrderByWithAggregationInput | departmentOrderByWithAggregationInput[];
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum;
    having?: departmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DepartmentCountAggregateInputType | true;
    _min?: DepartmentMinAggregateInputType;
    _max?: DepartmentMaxAggregateInputType;
  };

  export type DepartmentGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: DepartmentCountAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
  };

  type GetDepartmentGroupByPayload<T extends departmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DepartmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
          : GetScalarType<T[P], DepartmentGroupByOutputType[P]>;
      }
    >
  >;

  export type departmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['department']
    >;

  export type departmentSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $departmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'department';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['department']
    >;
    composites: {};
  };

  type departmentGetPayload<S extends boolean | null | undefined | departmentDefaultArgs> = $Result.GetResult<
    Prisma.$departmentPayload,
    S
  >;

  type departmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    departmentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: DepartmentCountAggregateInputType | true;
  };

  export interface departmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['department']; meta: { name: 'department' } };
    /**
     * Find zero or one Department that matches the filter.
     * @param {departmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends departmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, departmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__departmentClient<
      $Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Department that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {departmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends departmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, departmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__departmentClient<
      $Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends departmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, departmentFindFirstArgs<ExtArgs>>,
    ): Prisma__departmentClient<
      $Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends departmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, departmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__departmentClient<
      $Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     *
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends departmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, departmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Department.
     * @param {departmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     *
     **/
    create<T extends departmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, departmentCreateArgs<ExtArgs>>,
    ): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Departments.
     *     @param {departmentCreateManyArgs} args - Arguments to create many Departments.
     *     @example
     *     // Create many Departments
     *     const department = await prisma.department.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends departmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, departmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Department.
     * @param {departmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     *
     **/
    delete<T extends departmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, departmentDeleteArgs<ExtArgs>>,
    ): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Department.
     * @param {departmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends departmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, departmentUpdateArgs<ExtArgs>>,
    ): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Departments.
     * @param {departmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends departmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, departmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends departmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, departmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Department.
     * @param {departmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     **/
    upsert<T extends departmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, departmentUpsertArgs<ExtArgs>>,
    ): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
     **/
    count<T extends departmentCountArgs>(
      args?: Subset<T, departmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DepartmentAggregateArgs>(
      args: Subset<T, DepartmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>;

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends departmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentGroupByArgs['orderBy'] }
        : { orderBy?: departmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, departmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the department model
     */
    readonly fields: departmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the department model
   */
  interface departmentFieldRefs {
    readonly id: FieldRef<'department', 'String'>;
    readonly created_at: FieldRef<'department', 'DateTime'>;
    readonly updated_at: FieldRef<'department', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * department findUnique
   */
  export type departmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput;
  };

  /**
   * department findUniqueOrThrow
   */
  export type departmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput;
  };

  /**
   * department findFirst
   */
  export type departmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` departments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[];
  };

  /**
   * department findFirstOrThrow
   */
  export type departmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` departments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[];
  };

  /**
   * department findMany
   */
  export type departmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing departments.
     */
    cursor?: departmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` departments.
     */
    skip?: number;
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[];
  };

  /**
   * department create
   */
  export type departmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * The data needed to create a department.
     */
    data?: XOR<departmentCreateInput, departmentUncheckedCreateInput>;
  };

  /**
   * department createMany
   */
  export type departmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentCreateManyInput | departmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * department update
   */
  export type departmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * The data needed to update a department.
     */
    data: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>;
    /**
     * Choose, which department to update.
     */
    where: departmentWhereUniqueInput;
  };

  /**
   * department updateMany
   */
  export type departmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentUpdateManyMutationInput, departmentUncheckedUpdateManyInput>;
    /**
     * Filter which departments to update
     */
    where?: departmentWhereInput;
  };

  /**
   * department upsert
   */
  export type departmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * The filter to search for the department to update in case it exists.
     */
    where: departmentWhereUniqueInput;
    /**
     * In case the department found by the `where` argument doesn't exist, create a new department with this data.
     */
    create: XOR<departmentCreateInput, departmentUncheckedCreateInput>;
    /**
     * In case the department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>;
  };

  /**
   * department delete
   */
  export type departmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * Filter which department to delete.
     */
    where: departmentWhereUniqueInput;
  };

  /**
   * department deleteMany
   */
  export type departmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentWhereInput;
  };

  /**
   * department without action
   */
  export type departmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
  };

  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  export type EmployeeAvgAggregateOutputType = {
    employee_salary: number | null;
  };

  export type EmployeeSumAggregateOutputType = {
    employee_salary: number | null;
  };

  export type EmployeeMinAggregateOutputType = {
    id: string | null;
    hire_date: Date | null;
    job_title: string | null;
    employee_salary: number | null;
    employee_department: string | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeMaxAggregateOutputType = {
    id: string | null;
    hire_date: Date | null;
    job_title: string | null;
    employee_salary: number | null;
    employee_department: string | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeCountAggregateOutputType = {
    id: number;
    hire_date: number;
    job_title: number;
    employee_salary: number;
    employee_department: number;
    user_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EmployeeAvgAggregateInputType = {
    employee_salary?: true;
  };

  export type EmployeeSumAggregateInputType = {
    employee_salary?: true;
  };

  export type EmployeeMinAggregateInputType = {
    id?: true;
    hire_date?: true;
    job_title?: true;
    employee_salary?: true;
    employee_department?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeMaxAggregateInputType = {
    id?: true;
    hire_date?: true;
    job_title?: true;
    employee_salary?: true;
    employee_department?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeCountAggregateInputType = {
    id?: true;
    hire_date?: true;
    job_title?: true;
    employee_salary?: true;
    employee_department?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned employees
     **/
    _count?: true | EmployeeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EmployeeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EmployeeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmployeeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmployeeMaxAggregateInputType;
  };

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>;
  };

  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[];
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum;
    having?: employeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _avg?: EmployeeAvgAggregateInputType;
    _sum?: EmployeeSumAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
  };

  export type EmployeeGroupByOutputType = {
    id: string;
    hire_date: Date;
    job_title: string;
    employee_salary: number;
    employee_department: string;
    user_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EmployeeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
          : GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
      }
    >
  >;

  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        hire_date?: boolean;
        job_title?: boolean;
        employee_salary?: boolean;
        employee_department?: boolean;
        user_id?: boolean;
        organization_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['employee']
    >;

  export type employeeSelectScalar = {
    id?: boolean;
    hire_date?: boolean;
    job_title?: boolean;
    employee_salary?: boolean;
    employee_department?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type employeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'employee';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        hire_date: Date;
        job_title: string;
        employee_salary: number;
        employee_department: string;
        user_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['employee']
    >;
    composites: {};
  };

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<
    Prisma.$employeePayload,
    S
  >;

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    employeeFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: EmployeeCountAggregateInputType | true;
  };

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee']; meta: { name: 'employee' } };
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends employeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends employeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     *
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends employeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     *
     **/
    create<T extends employeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeCreateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Employees.
     *     @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends employeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     *
     **/
    delete<T extends employeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends employeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends employeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends employeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     **/
    upsert<T extends employeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
     **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EmployeeAggregateArgs>(
      args: Subset<T, EmployeeAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the employee model
     */
    readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly id: FieldRef<'employee', 'String'>;
    readonly hire_date: FieldRef<'employee', 'DateTime'>;
    readonly job_title: FieldRef<'employee', 'String'>;
    readonly employee_salary: FieldRef<'employee', 'Int'>;
    readonly employee_department: FieldRef<'employee', 'String'>;
    readonly user_id: FieldRef<'employee', 'String'>;
    readonly organization_id: FieldRef<'employee', 'String'>;
    readonly created_at: FieldRef<'employee', 'DateTime'>;
    readonly updated_at: FieldRef<'employee', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to create a employee.
     */
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
  };

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>;
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput;
  };

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput;
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
  };

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput;
  };

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
  };

  /**
   * Model hr_manager
   */

  export type AggregateHr_manager = {
    _count: Hr_managerCountAggregateOutputType | null;
    _avg: Hr_managerAvgAggregateOutputType | null;
    _sum: Hr_managerSumAggregateOutputType | null;
    _min: Hr_managerMinAggregateOutputType | null;
    _max: Hr_managerMaxAggregateOutputType | null;
  };

  export type Hr_managerAvgAggregateOutputType = {
    hr_manager_salary: number | null;
  };

  export type Hr_managerSumAggregateOutputType = {
    hr_manager_salary: number | null;
  };

  export type Hr_managerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    organization_id: string | null;
    hire_date: Date | null;
    hr_manager_department: string | null;
    job_title: string | null;
    hr_manager_salary: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Hr_managerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    organization_id: string | null;
    hire_date: Date | null;
    hr_manager_department: string | null;
    job_title: string | null;
    hr_manager_salary: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Hr_managerCountAggregateOutputType = {
    id: number;
    user_id: number;
    organization_id: number;
    hire_date: number;
    hr_manager_department: number;
    job_title: number;
    hr_manager_salary: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Hr_managerAvgAggregateInputType = {
    hr_manager_salary?: true;
  };

  export type Hr_managerSumAggregateInputType = {
    hr_manager_salary?: true;
  };

  export type Hr_managerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    organization_id?: true;
    hire_date?: true;
    hr_manager_department?: true;
    job_title?: true;
    hr_manager_salary?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Hr_managerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    organization_id?: true;
    hire_date?: true;
    hr_manager_department?: true;
    job_title?: true;
    hr_manager_salary?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Hr_managerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    organization_id?: true;
    hire_date?: true;
    hr_manager_department?: true;
    job_title?: true;
    hr_manager_salary?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Hr_managerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hr_manager to aggregate.
     */
    where?: hr_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hr_managers to fetch.
     */
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: hr_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hr_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hr_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned hr_managers
     **/
    _count?: true | Hr_managerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Hr_managerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Hr_managerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Hr_managerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Hr_managerMaxAggregateInputType;
  };

  export type GetHr_managerAggregateType<T extends Hr_managerAggregateArgs> = {
    [P in keyof T & keyof AggregateHr_manager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHr_manager[P]>
      : GetScalarType<T[P], AggregateHr_manager[P]>;
  };

  export type hr_managerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hr_managerWhereInput;
    orderBy?: hr_managerOrderByWithAggregationInput | hr_managerOrderByWithAggregationInput[];
    by: Hr_managerScalarFieldEnum[] | Hr_managerScalarFieldEnum;
    having?: hr_managerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Hr_managerCountAggregateInputType | true;
    _avg?: Hr_managerAvgAggregateInputType;
    _sum?: Hr_managerSumAggregateInputType;
    _min?: Hr_managerMinAggregateInputType;
    _max?: Hr_managerMaxAggregateInputType;
  };

  export type Hr_managerGroupByOutputType = {
    id: string;
    user_id: string;
    organization_id: string;
    hire_date: Date;
    hr_manager_department: string;
    job_title: string;
    hr_manager_salary: number;
    created_at: Date;
    updated_at: Date;
    _count: Hr_managerCountAggregateOutputType | null;
    _avg: Hr_managerAvgAggregateOutputType | null;
    _sum: Hr_managerSumAggregateOutputType | null;
    _min: Hr_managerMinAggregateOutputType | null;
    _max: Hr_managerMaxAggregateOutputType | null;
  };

  type GetHr_managerGroupByPayload<T extends hr_managerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hr_managerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Hr_managerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Hr_managerGroupByOutputType[P]>
          : GetScalarType<T[P], Hr_managerGroupByOutputType[P]>;
      }
    >
  >;

  export type hr_managerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        organization_id?: boolean;
        hire_date?: boolean;
        hr_manager_department?: boolean;
        job_title?: boolean;
        hr_manager_salary?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['hr_manager']
    >;

  export type hr_managerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    hire_date?: boolean;
    hr_manager_department?: boolean;
    job_title?: boolean;
    hr_manager_salary?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type hr_managerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $hr_managerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'hr_manager';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        organization_id: string;
        hire_date: Date;
        hr_manager_department: string;
        job_title: string;
        hr_manager_salary: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['hr_manager']
    >;
    composites: {};
  };

  type hr_managerGetPayload<S extends boolean | null | undefined | hr_managerDefaultArgs> = $Result.GetResult<
    Prisma.$hr_managerPayload,
    S
  >;

  type hr_managerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    hr_managerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Hr_managerCountAggregateInputType | true;
  };

  export interface hr_managerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hr_manager']; meta: { name: 'hr_manager' } };
    /**
     * Find zero or one Hr_manager that matches the filter.
     * @param {hr_managerFindUniqueArgs} args - Arguments to find a Hr_manager
     * @example
     * // Get one Hr_manager
     * const hr_manager = await prisma.hr_manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends hr_managerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerFindUniqueArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<
      $Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Hr_manager that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {hr_managerFindUniqueOrThrowArgs} args - Arguments to find a Hr_manager
     * @example
     * // Get one Hr_manager
     * const hr_manager = await prisma.hr_manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends hr_managerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<
      $Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Hr_manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerFindFirstArgs} args - Arguments to find a Hr_manager
     * @example
     * // Get one Hr_manager
     * const hr_manager = await prisma.hr_manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends hr_managerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerFindFirstArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<
      $Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Hr_manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerFindFirstOrThrowArgs} args - Arguments to find a Hr_manager
     * @example
     * // Get one Hr_manager
     * const hr_manager = await prisma.hr_manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends hr_managerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<
      $Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Hr_managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hr_managers
     * const hr_managers = await prisma.hr_manager.findMany()
     *
     * // Get first 10 Hr_managers
     * const hr_managers = await prisma.hr_manager.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const hr_managerWithIdOnly = await prisma.hr_manager.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends hr_managerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Hr_manager.
     * @param {hr_managerCreateArgs} args - Arguments to create a Hr_manager.
     * @example
     * // Create one Hr_manager
     * const Hr_manager = await prisma.hr_manager.create({
     *   data: {
     *     // ... data to create a Hr_manager
     *   }
     * })
     *
     **/
    create<T extends hr_managerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerCreateArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Hr_managers.
     *     @param {hr_managerCreateManyArgs} args - Arguments to create many Hr_managers.
     *     @example
     *     // Create many Hr_managers
     *     const hr_manager = await prisma.hr_manager.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends hr_managerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Hr_manager.
     * @param {hr_managerDeleteArgs} args - Arguments to delete one Hr_manager.
     * @example
     * // Delete one Hr_manager
     * const Hr_manager = await prisma.hr_manager.delete({
     *   where: {
     *     // ... filter to delete one Hr_manager
     *   }
     * })
     *
     **/
    delete<T extends hr_managerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerDeleteArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Hr_manager.
     * @param {hr_managerUpdateArgs} args - Arguments to update one Hr_manager.
     * @example
     * // Update one Hr_manager
     * const hr_manager = await prisma.hr_manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends hr_managerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerUpdateArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Hr_managers.
     * @param {hr_managerDeleteManyArgs} args - Arguments to filter Hr_managers to delete.
     * @example
     * // Delete a few Hr_managers
     * const { count } = await prisma.hr_manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends hr_managerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Hr_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hr_managers
     * const hr_manager = await prisma.hr_manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends hr_managerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Hr_manager.
     * @param {hr_managerUpsertArgs} args - Arguments to update or create a Hr_manager.
     * @example
     * // Update or create a Hr_manager
     * const hr_manager = await prisma.hr_manager.upsert({
     *   create: {
     *     // ... data to create a Hr_manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hr_manager we want to update
     *   }
     * })
     **/
    upsert<T extends hr_managerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerUpsertArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Hr_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerCountArgs} args - Arguments to filter Hr_managers to count.
     * @example
     * // Count the number of Hr_managers
     * const count = await prisma.hr_manager.count({
     *   where: {
     *     // ... the filter for the Hr_managers we want to count
     *   }
     * })
     **/
    count<T extends hr_managerCountArgs>(
      args?: Subset<T, hr_managerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hr_managerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Hr_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hr_managerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Hr_managerAggregateArgs>(
      args: Subset<T, Hr_managerAggregateArgs>,
    ): Prisma.PrismaPromise<GetHr_managerAggregateType<T>>;

    /**
     * Group by Hr_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends hr_managerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hr_managerGroupByArgs['orderBy'] }
        : { orderBy?: hr_managerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, hr_managerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetHr_managerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the hr_manager model
     */
    readonly fields: hr_managerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hr_manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hr_managerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the hr_manager model
   */
  interface hr_managerFieldRefs {
    readonly id: FieldRef<'hr_manager', 'String'>;
    readonly user_id: FieldRef<'hr_manager', 'String'>;
    readonly organization_id: FieldRef<'hr_manager', 'String'>;
    readonly hire_date: FieldRef<'hr_manager', 'DateTime'>;
    readonly hr_manager_department: FieldRef<'hr_manager', 'String'>;
    readonly job_title: FieldRef<'hr_manager', 'String'>;
    readonly hr_manager_salary: FieldRef<'hr_manager', 'Int'>;
    readonly created_at: FieldRef<'hr_manager', 'DateTime'>;
    readonly updated_at: FieldRef<'hr_manager', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * hr_manager findUnique
   */
  export type hr_managerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_manager to fetch.
     */
    where: hr_managerWhereUniqueInput;
  };

  /**
   * hr_manager findUniqueOrThrow
   */
  export type hr_managerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_manager to fetch.
     */
    where: hr_managerWhereUniqueInput;
  };

  /**
   * hr_manager findFirst
   */
  export type hr_managerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_manager to fetch.
     */
    where?: hr_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hr_managers to fetch.
     */
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for hr_managers.
     */
    cursor?: hr_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hr_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hr_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of hr_managers.
     */
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
  };

  /**
   * hr_manager findFirstOrThrow
   */
  export type hr_managerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_manager to fetch.
     */
    where?: hr_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hr_managers to fetch.
     */
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for hr_managers.
     */
    cursor?: hr_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hr_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hr_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of hr_managers.
     */
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
  };

  /**
   * hr_manager findMany
   */
  export type hr_managerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_managers to fetch.
     */
    where?: hr_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hr_managers to fetch.
     */
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing hr_managers.
     */
    cursor?: hr_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hr_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hr_managers.
     */
    skip?: number;
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
  };

  /**
   * hr_manager create
   */
  export type hr_managerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * The data needed to create a hr_manager.
     */
    data: XOR<hr_managerCreateInput, hr_managerUncheckedCreateInput>;
  };

  /**
   * hr_manager createMany
   */
  export type hr_managerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hr_managers.
     */
    data: hr_managerCreateManyInput | hr_managerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * hr_manager update
   */
  export type hr_managerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * The data needed to update a hr_manager.
     */
    data: XOR<hr_managerUpdateInput, hr_managerUncheckedUpdateInput>;
    /**
     * Choose, which hr_manager to update.
     */
    where: hr_managerWhereUniqueInput;
  };

  /**
   * hr_manager updateMany
   */
  export type hr_managerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hr_managers.
     */
    data: XOR<hr_managerUpdateManyMutationInput, hr_managerUncheckedUpdateManyInput>;
    /**
     * Filter which hr_managers to update
     */
    where?: hr_managerWhereInput;
  };

  /**
   * hr_manager upsert
   */
  export type hr_managerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * The filter to search for the hr_manager to update in case it exists.
     */
    where: hr_managerWhereUniqueInput;
    /**
     * In case the hr_manager found by the `where` argument doesn't exist, create a new hr_manager with this data.
     */
    create: XOR<hr_managerCreateInput, hr_managerUncheckedCreateInput>;
    /**
     * In case the hr_manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hr_managerUpdateInput, hr_managerUncheckedUpdateInput>;
  };

  /**
   * hr_manager delete
   */
  export type hr_managerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter which hr_manager to delete.
     */
    where: hr_managerWhereUniqueInput;
  };

  /**
   * hr_manager deleteMany
   */
  export type hr_managerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hr_managers to delete
     */
    where?: hr_managerWhereInput;
  };

  /**
   * hr_manager without action
   */
  export type hr_managerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
  };

  /**
   * Model job_position
   */

  export type AggregateJob_position = {
    _count: Job_positionCountAggregateOutputType | null;
    _min: Job_positionMinAggregateOutputType | null;
    _max: Job_positionMaxAggregateOutputType | null;
  };

  export type Job_positionMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_positionMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_positionCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Job_positionMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_positionMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_positionCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Job_positionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_position to aggregate.
     */
    where?: job_positionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_positions to fetch.
     */
    orderBy?: job_positionOrderByWithRelationInput | job_positionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: job_positionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_positions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned job_positions
     **/
    _count?: true | Job_positionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Job_positionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Job_positionMaxAggregateInputType;
  };

  export type GetJob_positionAggregateType<T extends Job_positionAggregateArgs> = {
    [P in keyof T & keyof AggregateJob_position]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_position[P]>
      : GetScalarType<T[P], AggregateJob_position[P]>;
  };

  export type job_positionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_positionWhereInput;
    orderBy?: job_positionOrderByWithAggregationInput | job_positionOrderByWithAggregationInput[];
    by: Job_positionScalarFieldEnum[] | Job_positionScalarFieldEnum;
    having?: job_positionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Job_positionCountAggregateInputType | true;
    _min?: Job_positionMinAggregateInputType;
    _max?: Job_positionMaxAggregateInputType;
  };

  export type Job_positionGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Job_positionCountAggregateOutputType | null;
    _min: Job_positionMinAggregateOutputType | null;
    _max: Job_positionMaxAggregateOutputType | null;
  };

  type GetJob_positionGroupByPayload<T extends job_positionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_positionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Job_positionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Job_positionGroupByOutputType[P]>
          : GetScalarType<T[P], Job_positionGroupByOutputType[P]>;
      }
    >
  >;

  export type job_positionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['job_position']
    >;

  export type job_positionSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $job_positionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'job_position';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['job_position']
    >;
    composites: {};
  };

  type job_positionGetPayload<S extends boolean | null | undefined | job_positionDefaultArgs> = $Result.GetResult<
    Prisma.$job_positionPayload,
    S
  >;

  type job_positionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    job_positionFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Job_positionCountAggregateInputType | true;
  };

  export interface job_positionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_position']; meta: { name: 'job_position' } };
    /**
     * Find zero or one Job_position that matches the filter.
     * @param {job_positionFindUniqueArgs} args - Arguments to find a Job_position
     * @example
     * // Get one Job_position
     * const job_position = await prisma.job_position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends job_positionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, job_positionFindUniqueArgs<ExtArgs>>,
    ): Prisma__job_positionClient<
      $Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Job_position that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {job_positionFindUniqueOrThrowArgs} args - Arguments to find a Job_position
     * @example
     * // Get one Job_position
     * const job_position = await prisma.job_position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends job_positionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_positionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__job_positionClient<
      $Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Job_position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionFindFirstArgs} args - Arguments to find a Job_position
     * @example
     * // Get one Job_position
     * const job_position = await prisma.job_position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends job_positionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, job_positionFindFirstArgs<ExtArgs>>,
    ): Prisma__job_positionClient<
      $Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Job_position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionFindFirstOrThrowArgs} args - Arguments to find a Job_position
     * @example
     * // Get one Job_position
     * const job_position = await prisma.job_position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends job_positionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_positionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__job_positionClient<
      $Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Job_positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_positions
     * const job_positions = await prisma.job_position.findMany()
     *
     * // Get first 10 Job_positions
     * const job_positions = await prisma.job_position.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const job_positionWithIdOnly = await prisma.job_position.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends job_positionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_positionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Job_position.
     * @param {job_positionCreateArgs} args - Arguments to create a Job_position.
     * @example
     * // Create one Job_position
     * const Job_position = await prisma.job_position.create({
     *   data: {
     *     // ... data to create a Job_position
     *   }
     * })
     *
     **/
    create<T extends job_positionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, job_positionCreateArgs<ExtArgs>>,
    ): Prisma__job_positionClient<$Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Job_positions.
     *     @param {job_positionCreateManyArgs} args - Arguments to create many Job_positions.
     *     @example
     *     // Create many Job_positions
     *     const job_position = await prisma.job_position.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends job_positionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_positionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Job_position.
     * @param {job_positionDeleteArgs} args - Arguments to delete one Job_position.
     * @example
     * // Delete one Job_position
     * const Job_position = await prisma.job_position.delete({
     *   where: {
     *     // ... filter to delete one Job_position
     *   }
     * })
     *
     **/
    delete<T extends job_positionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, job_positionDeleteArgs<ExtArgs>>,
    ): Prisma__job_positionClient<$Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Job_position.
     * @param {job_positionUpdateArgs} args - Arguments to update one Job_position.
     * @example
     * // Update one Job_position
     * const job_position = await prisma.job_position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends job_positionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, job_positionUpdateArgs<ExtArgs>>,
    ): Prisma__job_positionClient<$Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Job_positions.
     * @param {job_positionDeleteManyArgs} args - Arguments to filter Job_positions to delete.
     * @example
     * // Delete a few Job_positions
     * const { count } = await prisma.job_position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends job_positionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_positionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Job_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_positions
     * const job_position = await prisma.job_position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends job_positionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, job_positionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job_position.
     * @param {job_positionUpsertArgs} args - Arguments to update or create a Job_position.
     * @example
     * // Update or create a Job_position
     * const job_position = await prisma.job_position.upsert({
     *   create: {
     *     // ... data to create a Job_position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_position we want to update
     *   }
     * })
     **/
    upsert<T extends job_positionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, job_positionUpsertArgs<ExtArgs>>,
    ): Prisma__job_positionClient<$Result.GetResult<Prisma.$job_positionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Job_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionCountArgs} args - Arguments to filter Job_positions to count.
     * @example
     * // Count the number of Job_positions
     * const count = await prisma.job_position.count({
     *   where: {
     *     // ... the filter for the Job_positions we want to count
     *   }
     * })
     **/
    count<T extends job_positionCountArgs>(
      args?: Subset<T, job_positionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_positionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job_position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_positionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Job_positionAggregateArgs>(
      args: Subset<T, Job_positionAggregateArgs>,
    ): Prisma.PrismaPromise<GetJob_positionAggregateType<T>>;

    /**
     * Group by Job_position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends job_positionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_positionGroupByArgs['orderBy'] }
        : { orderBy?: job_positionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, job_positionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJob_positionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the job_position model
     */
    readonly fields: job_positionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_positionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the job_position model
   */
  interface job_positionFieldRefs {
    readonly id: FieldRef<'job_position', 'String'>;
    readonly created_at: FieldRef<'job_position', 'DateTime'>;
    readonly updated_at: FieldRef<'job_position', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * job_position findUnique
   */
  export type job_positionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Filter, which job_position to fetch.
     */
    where: job_positionWhereUniqueInput;
  };

  /**
   * job_position findUniqueOrThrow
   */
  export type job_positionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Filter, which job_position to fetch.
     */
    where: job_positionWhereUniqueInput;
  };

  /**
   * job_position findFirst
   */
  export type job_positionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Filter, which job_position to fetch.
     */
    where?: job_positionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_positions to fetch.
     */
    orderBy?: job_positionOrderByWithRelationInput | job_positionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_positions.
     */
    cursor?: job_positionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_positions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_positions.
     */
    distinct?: Job_positionScalarFieldEnum | Job_positionScalarFieldEnum[];
  };

  /**
   * job_position findFirstOrThrow
   */
  export type job_positionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Filter, which job_position to fetch.
     */
    where?: job_positionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_positions to fetch.
     */
    orderBy?: job_positionOrderByWithRelationInput | job_positionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_positions.
     */
    cursor?: job_positionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_positions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_positions.
     */
    distinct?: Job_positionScalarFieldEnum | Job_positionScalarFieldEnum[];
  };

  /**
   * job_position findMany
   */
  export type job_positionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Filter, which job_positions to fetch.
     */
    where?: job_positionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_positions to fetch.
     */
    orderBy?: job_positionOrderByWithRelationInput | job_positionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing job_positions.
     */
    cursor?: job_positionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_positions.
     */
    skip?: number;
    distinct?: Job_positionScalarFieldEnum | Job_positionScalarFieldEnum[];
  };

  /**
   * job_position create
   */
  export type job_positionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * The data needed to create a job_position.
     */
    data?: XOR<job_positionCreateInput, job_positionUncheckedCreateInput>;
  };

  /**
   * job_position createMany
   */
  export type job_positionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_positions.
     */
    data: job_positionCreateManyInput | job_positionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * job_position update
   */
  export type job_positionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * The data needed to update a job_position.
     */
    data: XOR<job_positionUpdateInput, job_positionUncheckedUpdateInput>;
    /**
     * Choose, which job_position to update.
     */
    where: job_positionWhereUniqueInput;
  };

  /**
   * job_position updateMany
   */
  export type job_positionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_positions.
     */
    data: XOR<job_positionUpdateManyMutationInput, job_positionUncheckedUpdateManyInput>;
    /**
     * Filter which job_positions to update
     */
    where?: job_positionWhereInput;
  };

  /**
   * job_position upsert
   */
  export type job_positionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * The filter to search for the job_position to update in case it exists.
     */
    where: job_positionWhereUniqueInput;
    /**
     * In case the job_position found by the `where` argument doesn't exist, create a new job_position with this data.
     */
    create: XOR<job_positionCreateInput, job_positionUncheckedCreateInput>;
    /**
     * In case the job_position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_positionUpdateInput, job_positionUncheckedUpdateInput>;
  };

  /**
   * job_position delete
   */
  export type job_positionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
    /**
     * Filter which job_position to delete.
     */
    where: job_positionWhereUniqueInput;
  };

  /**
   * job_position deleteMany
   */
  export type job_positionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_positions to delete
     */
    where?: job_positionWhereInput;
  };

  /**
   * job_position without action
   */
  export type job_positionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_position
     */
    select?: job_positionSelect<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    country: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    country?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    country?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    country?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        address?: boolean;
        city?: boolean;
        state?: boolean;
        country?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        administrator?: boolean | organization$administratorArgs<ExtArgs>;
        employee?: boolean | organization$employeeArgs<ExtArgs>;
        hr_manager?: boolean | organization$hr_managerArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        owner?: boolean | organization$ownerArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    country?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrator?: boolean | organization$administratorArgs<ExtArgs>;
    employee?: boolean | organization$employeeArgs<ExtArgs>;
    hr_manager?: boolean | organization$hr_managerArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    owner?: boolean | organization$ownerArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      administrator: Prisma.$administratorPayload<ExtArgs>[];
      employee: Prisma.$employeePayload<ExtArgs>[];
      hr_manager: Prisma.$hr_managerPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      owner: Prisma.$ownerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        country: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    administrator<T extends organization$administratorArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$administratorArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administratorPayload<ExtArgs>, T, 'findMany'> | Null>;

    employee<T extends organization$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    hr_manager<T extends organization$hr_managerArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$hr_managerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    owner<T extends organization$ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly address: FieldRef<'organization', 'String'>;
    readonly city: FieldRef<'organization', 'String'>;
    readonly state: FieldRef<'organization', 'String'>;
    readonly country: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly user_id: FieldRef<'organization', 'String'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.administrator
   */
  export type organization$administratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrator
     */
    select?: administratorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: administratorInclude<ExtArgs> | null;
    where?: administratorWhereInput;
    orderBy?: administratorOrderByWithRelationInput | administratorOrderByWithRelationInput[];
    cursor?: administratorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[];
  };

  /**
   * organization.employee
   */
  export type organization$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * organization.hr_manager
   */
  export type organization$hr_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    where?: hr_managerWhereInput;
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    cursor?: hr_managerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
  };

  /**
   * organization.owner
   */
  export type organization$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    cursor?: ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null;
    _avg: OwnerAvgAggregateOutputType | null;
    _sum: OwnerSumAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
  };

  export type OwnerAvgAggregateOutputType = {
    total_employees: number | null;
  };

  export type OwnerSumAggregateOutputType = {
    total_employees: number | null;
  };

  export type OwnerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    organization_id: string | null;
    established_date: Date | null;
    industry: string | null;
    total_employees: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OwnerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    organization_id: string | null;
    established_date: Date | null;
    industry: string | null;
    total_employees: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OwnerCountAggregateOutputType = {
    id: number;
    user_id: number;
    organization_id: number;
    established_date: number;
    industry: number;
    total_employees: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OwnerAvgAggregateInputType = {
    total_employees?: true;
  };

  export type OwnerSumAggregateInputType = {
    total_employees?: true;
  };

  export type OwnerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    organization_id?: true;
    established_date?: true;
    industry?: true;
    total_employees?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OwnerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    organization_id?: true;
    established_date?: true;
    industry?: true;
    total_employees?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OwnerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    organization_id?: true;
    established_date?: true;
    industry?: true;
    total_employees?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owner to aggregate.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned owners
     **/
    _count?: true | OwnerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OwnerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OwnerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OwnerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OwnerMaxAggregateInputType;
  };

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
    [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>;
  };

  export type ownerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithAggregationInput | ownerOrderByWithAggregationInput[];
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum;
    having?: ownerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OwnerCountAggregateInputType | true;
    _avg?: OwnerAvgAggregateInputType;
    _sum?: OwnerSumAggregateInputType;
    _min?: OwnerMinAggregateInputType;
    _max?: OwnerMaxAggregateInputType;
  };

  export type OwnerGroupByOutputType = {
    id: string;
    user_id: string;
    organization_id: string;
    established_date: Date;
    industry: string;
    total_employees: number;
    created_at: Date;
    updated_at: Date;
    _count: OwnerCountAggregateOutputType | null;
    _avg: OwnerAvgAggregateOutputType | null;
    _sum: OwnerSumAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
  };

  type GetOwnerGroupByPayload<T extends ownerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OwnerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
          : GetScalarType<T[P], OwnerGroupByOutputType[P]>;
      }
    >
  >;

  export type ownerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      organization_id?: boolean;
      established_date?: boolean;
      industry?: boolean;
      total_employees?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      organization?: boolean | organizationDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['owner']
  >;

  export type ownerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    established_date?: boolean;
    industry?: boolean;
    total_employees?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ownerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $ownerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'owner';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        organization_id: string;
        established_date: Date;
        industry: string;
        total_employees: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['owner']
    >;
    composites: {};
  };

  type ownerGetPayload<S extends boolean | null | undefined | ownerDefaultArgs> = $Result.GetResult<
    Prisma.$ownerPayload,
    S
  >;

  type ownerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ownerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OwnerCountAggregateInputType | true;
  };

  export interface ownerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['owner']; meta: { name: 'owner' } };
    /**
     * Find zero or one Owner that matches the filter.
     * @param {ownerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ownerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ownerFindUniqueArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Owner that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ownerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ownerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ownerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindFirstArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ownerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     *
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ownerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Owner.
     * @param {ownerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     *
     **/
    create<T extends ownerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ownerCreateArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Owners.
     *     @param {ownerCreateManyArgs} args - Arguments to create many Owners.
     *     @example
     *     // Create many Owners
     *     const owner = await prisma.owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ownerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Owner.
     * @param {ownerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     *
     **/
    delete<T extends ownerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ownerDeleteArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Owner.
     * @param {ownerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ownerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpdateArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Owners.
     * @param {ownerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ownerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ownerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Owner.
     * @param {ownerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     **/
    upsert<T extends ownerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpsertArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
     **/
    count<T extends ownerCountArgs>(
      args?: Subset<T, ownerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OwnerAggregateArgs>(
      args: Subset<T, OwnerAggregateArgs>,
    ): Prisma.PrismaPromise<GetOwnerAggregateType<T>>;

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ownerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ownerGroupByArgs['orderBy'] }
        : { orderBy?: ownerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ownerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the owner model
     */
    readonly fields: ownerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ownerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the owner model
   */
  interface ownerFieldRefs {
    readonly id: FieldRef<'owner', 'String'>;
    readonly user_id: FieldRef<'owner', 'String'>;
    readonly organization_id: FieldRef<'owner', 'String'>;
    readonly established_date: FieldRef<'owner', 'DateTime'>;
    readonly industry: FieldRef<'owner', 'String'>;
    readonly total_employees: FieldRef<'owner', 'Int'>;
    readonly created_at: FieldRef<'owner', 'DateTime'>;
    readonly updated_at: FieldRef<'owner', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * owner findUnique
   */
  export type ownerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner findUniqueOrThrow
   */
  export type ownerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner findFirst
   */
  export type ownerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner findFirstOrThrow
   */
  export type ownerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner findMany
   */
  export type ownerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owners to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner create
   */
  export type ownerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The data needed to create a owner.
     */
    data: XOR<ownerCreateInput, ownerUncheckedCreateInput>;
  };

  /**
   * owner createMany
   */
  export type ownerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many owners.
     */
    data: ownerCreateManyInput | ownerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * owner update
   */
  export type ownerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The data needed to update a owner.
     */
    data: XOR<ownerUpdateInput, ownerUncheckedUpdateInput>;
    /**
     * Choose, which owner to update.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner updateMany
   */
  export type ownerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update owners.
     */
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyInput>;
    /**
     * Filter which owners to update
     */
    where?: ownerWhereInput;
  };

  /**
   * owner upsert
   */
  export type ownerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The filter to search for the owner to update in case it exists.
     */
    where: ownerWhereUniqueInput;
    /**
     * In case the owner found by the `where` argument doesn't exist, create a new owner with this data.
     */
    create: XOR<ownerCreateInput, ownerUncheckedCreateInput>;
    /**
     * In case the owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ownerUpdateInput, ownerUncheckedUpdateInput>;
  };

  /**
   * owner delete
   */
  export type ownerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter which owner to delete.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner deleteMany
   */
  export type ownerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owners to delete
     */
    where?: ownerWhereInput;
  };

  /**
   * owner without action
   */
  export type ownerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
  };

  /**
   * Model performance_review
   */

  export type AggregatePerformance_review = {
    _count: Performance_reviewCountAggregateOutputType | null;
    _min: Performance_reviewMinAggregateOutputType | null;
    _max: Performance_reviewMaxAggregateOutputType | null;
  };

  export type Performance_reviewMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Performance_reviewMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Performance_reviewCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Performance_reviewMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Performance_reviewMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Performance_reviewCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Performance_reviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which performance_review to aggregate.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned performance_reviews
     **/
    _count?: true | Performance_reviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Performance_reviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Performance_reviewMaxAggregateInputType;
  };

  export type GetPerformance_reviewAggregateType<T extends Performance_reviewAggregateArgs> = {
    [P in keyof T & keyof AggregatePerformance_review]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerformance_review[P]>
      : GetScalarType<T[P], AggregatePerformance_review[P]>;
  };

  export type performance_reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: performance_reviewWhereInput;
    orderBy?: performance_reviewOrderByWithAggregationInput | performance_reviewOrderByWithAggregationInput[];
    by: Performance_reviewScalarFieldEnum[] | Performance_reviewScalarFieldEnum;
    having?: performance_reviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Performance_reviewCountAggregateInputType | true;
    _min?: Performance_reviewMinAggregateInputType;
    _max?: Performance_reviewMaxAggregateInputType;
  };

  export type Performance_reviewGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Performance_reviewCountAggregateOutputType | null;
    _min: Performance_reviewMinAggregateOutputType | null;
    _max: Performance_reviewMaxAggregateOutputType | null;
  };

  type GetPerformance_reviewGroupByPayload<T extends performance_reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Performance_reviewGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Performance_reviewGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Performance_reviewGroupByOutputType[P]>
          : GetScalarType<T[P], Performance_reviewGroupByOutputType[P]>;
      }
    >
  >;

  export type performance_reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['performance_review']
    >;

  export type performance_reviewSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $performance_reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'performance_review';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['performance_review']
    >;
    composites: {};
  };

  type performance_reviewGetPayload<S extends boolean | null | undefined | performance_reviewDefaultArgs> =
    $Result.GetResult<Prisma.$performance_reviewPayload, S>;

  type performance_reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    performance_reviewFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Performance_reviewCountAggregateInputType | true;
  };

  export interface performance_reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['performance_review'];
      meta: { name: 'performance_review' };
    };
    /**
     * Find zero or one Performance_review that matches the filter.
     * @param {performance_reviewFindUniqueArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends performance_reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Performance_review that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {performance_reviewFindUniqueOrThrowArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends performance_reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Performance_review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewFindFirstArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends performance_reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindFirstArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Performance_review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewFindFirstOrThrowArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends performance_reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Performance_reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Performance_reviews
     * const performance_reviews = await prisma.performance_review.findMany()
     *
     * // Get first 10 Performance_reviews
     * const performance_reviews = await prisma.performance_review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const performance_reviewWithIdOnly = await prisma.performance_review.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends performance_reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Performance_review.
     * @param {performance_reviewCreateArgs} args - Arguments to create a Performance_review.
     * @example
     * // Create one Performance_review
     * const Performance_review = await prisma.performance_review.create({
     *   data: {
     *     // ... data to create a Performance_review
     *   }
     * })
     *
     **/
    create<T extends performance_reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewCreateArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Performance_reviews.
     *     @param {performance_reviewCreateManyArgs} args - Arguments to create many Performance_reviews.
     *     @example
     *     // Create many Performance_reviews
     *     const performance_review = await prisma.performance_review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends performance_reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Performance_review.
     * @param {performance_reviewDeleteArgs} args - Arguments to delete one Performance_review.
     * @example
     * // Delete one Performance_review
     * const Performance_review = await prisma.performance_review.delete({
     *   where: {
     *     // ... filter to delete one Performance_review
     *   }
     * })
     *
     **/
    delete<T extends performance_reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewDeleteArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Performance_review.
     * @param {performance_reviewUpdateArgs} args - Arguments to update one Performance_review.
     * @example
     * // Update one Performance_review
     * const performance_review = await prisma.performance_review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends performance_reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewUpdateArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Performance_reviews.
     * @param {performance_reviewDeleteManyArgs} args - Arguments to filter Performance_reviews to delete.
     * @example
     * // Delete a few Performance_reviews
     * const { count } = await prisma.performance_review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends performance_reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Performance_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Performance_reviews
     * const performance_review = await prisma.performance_review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends performance_reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Performance_review.
     * @param {performance_reviewUpsertArgs} args - Arguments to update or create a Performance_review.
     * @example
     * // Update or create a Performance_review
     * const performance_review = await prisma.performance_review.upsert({
     *   create: {
     *     // ... data to create a Performance_review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Performance_review we want to update
     *   }
     * })
     **/
    upsert<T extends performance_reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewUpsertArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Performance_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewCountArgs} args - Arguments to filter Performance_reviews to count.
     * @example
     * // Count the number of Performance_reviews
     * const count = await prisma.performance_review.count({
     *   where: {
     *     // ... the filter for the Performance_reviews we want to count
     *   }
     * })
     **/
    count<T extends performance_reviewCountArgs>(
      args?: Subset<T, performance_reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Performance_reviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Performance_review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Performance_reviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Performance_reviewAggregateArgs>(
      args: Subset<T, Performance_reviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetPerformance_reviewAggregateType<T>>;

    /**
     * Group by Performance_review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends performance_reviewGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: performance_reviewGroupByArgs['orderBy'] }
        : { orderBy?: performance_reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, performance_reviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPerformance_reviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the performance_review model
     */
    readonly fields: performance_reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for performance_review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__performance_reviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the performance_review model
   */
  interface performance_reviewFieldRefs {
    readonly id: FieldRef<'performance_review', 'String'>;
    readonly created_at: FieldRef<'performance_review', 'DateTime'>;
    readonly updated_at: FieldRef<'performance_review', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * performance_review findUnique
   */
  export type performance_reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review findUniqueOrThrow
   */
  export type performance_reviewFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review findFirst
   */
  export type performance_reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for performance_reviews.
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of performance_reviews.
     */
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * performance_review findFirstOrThrow
   */
  export type performance_reviewFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for performance_reviews.
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of performance_reviews.
     */
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * performance_review findMany
   */
  export type performance_reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Filter, which performance_reviews to fetch.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing performance_reviews.
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * performance_review create
   */
  export type performance_reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * The data needed to create a performance_review.
     */
    data?: XOR<performance_reviewCreateInput, performance_reviewUncheckedCreateInput>;
  };

  /**
   * performance_review createMany
   */
  export type performance_reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many performance_reviews.
     */
    data: performance_reviewCreateManyInput | performance_reviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * performance_review update
   */
  export type performance_reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * The data needed to update a performance_review.
     */
    data: XOR<performance_reviewUpdateInput, performance_reviewUncheckedUpdateInput>;
    /**
     * Choose, which performance_review to update.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review updateMany
   */
  export type performance_reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update performance_reviews.
     */
    data: XOR<performance_reviewUpdateManyMutationInput, performance_reviewUncheckedUpdateManyInput>;
    /**
     * Filter which performance_reviews to update
     */
    where?: performance_reviewWhereInput;
  };

  /**
   * performance_review upsert
   */
  export type performance_reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * The filter to search for the performance_review to update in case it exists.
     */
    where: performance_reviewWhereUniqueInput;
    /**
     * In case the performance_review found by the `where` argument doesn't exist, create a new performance_review with this data.
     */
    create: XOR<performance_reviewCreateInput, performance_reviewUncheckedCreateInput>;
    /**
     * In case the performance_review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<performance_reviewUpdateInput, performance_reviewUncheckedUpdateInput>;
  };

  /**
   * performance_review delete
   */
  export type performance_reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Filter which performance_review to delete.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review deleteMany
   */
  export type performance_reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which performance_reviews to delete
     */
    where?: performance_reviewWhereInput;
  };

  /**
   * performance_review without action
   */
  export type performance_reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
  };

  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
  };

  export type RoleMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RoleMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RoleCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RoleMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RoleMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RoleCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned roles
     **/
    _count?: true | RoleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RoleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RoleMaxAggregateInputType;
  };

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
    [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>;
  };

  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput;
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[];
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum;
    having?: roleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoleCountAggregateInputType | true;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
  };

  export type RoleGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
  };

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RoleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
          : GetScalarType<T[P], RoleGroupByOutputType[P]>;
      }
    >
  >;

  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['role']
  >;

  export type roleSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'role';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['role']
    >;
    composites: {};
  };

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<
    Prisma.$rolePayload,
    S
  >;

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    roleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: RoleCountAggregateInputType | true;
  };

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role']; meta: { name: 'role' } };
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends roleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Role that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends roleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     *
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends roleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     *
     **/
    create<T extends roleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, roleCreateArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Roles.
     *     @param {roleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends roleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     *
     **/
    delete<T extends roleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, roleDeleteArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends roleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpdateArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends roleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends roleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     **/
    upsert<T extends roleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpsertArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
     **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RoleAggregateArgs>(
      args: Subset<T, RoleAggregateArgs>,
    ): Prisma.PrismaPromise<GetRoleAggregateType<T>>;

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the role model
     */
    readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly id: FieldRef<'role', 'String'>;
    readonly created_at: FieldRef<'role', 'DateTime'>;
    readonly updated_at: FieldRef<'role', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * The data needed to create a role.
     */
    data?: XOR<roleCreateInput, roleUncheckedCreateInput>;
  };

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>;
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>;
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput;
  };

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput;
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>;
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>;
  };

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput;
  };

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
  };

  /**
   * Model salary
   */

  export type AggregateSalary = {
    _count: SalaryCountAggregateOutputType | null;
    _min: SalaryMinAggregateOutputType | null;
    _max: SalaryMaxAggregateOutputType | null;
  };

  export type SalaryMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SalaryMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SalaryCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type SalaryMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SalaryMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SalaryCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type SalaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which salary to aggregate.
     */
    where?: salaryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of salaries to fetch.
     */
    orderBy?: salaryOrderByWithRelationInput | salaryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: salaryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` salaries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` salaries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned salaries
     **/
    _count?: true | SalaryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SalaryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SalaryMaxAggregateInputType;
  };

  export type GetSalaryAggregateType<T extends SalaryAggregateArgs> = {
    [P in keyof T & keyof AggregateSalary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalary[P]>
      : GetScalarType<T[P], AggregateSalary[P]>;
  };

  export type salaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salaryWhereInput;
    orderBy?: salaryOrderByWithAggregationInput | salaryOrderByWithAggregationInput[];
    by: SalaryScalarFieldEnum[] | SalaryScalarFieldEnum;
    having?: salaryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalaryCountAggregateInputType | true;
    _min?: SalaryMinAggregateInputType;
    _max?: SalaryMaxAggregateInputType;
  };

  export type SalaryGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: SalaryCountAggregateOutputType | null;
    _min: SalaryMinAggregateOutputType | null;
    _max: SalaryMaxAggregateOutputType | null;
  };

  type GetSalaryGroupByPayload<T extends salaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SalaryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SalaryGroupByOutputType[P]>
          : GetScalarType<T[P], SalaryGroupByOutputType[P]>;
      }
    >
  >;

  export type salarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['salary']
  >;

  export type salarySelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $salaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'salary';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['salary']
    >;
    composites: {};
  };

  type salaryGetPayload<S extends boolean | null | undefined | salaryDefaultArgs> = $Result.GetResult<
    Prisma.$salaryPayload,
    S
  >;

  type salaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    salaryFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: SalaryCountAggregateInputType | true;
  };

  export interface salaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['salary']; meta: { name: 'salary' } };
    /**
     * Find zero or one Salary that matches the filter.
     * @param {salaryFindUniqueArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends salaryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, salaryFindUniqueArgs<ExtArgs>>,
    ): Prisma__salaryClient<$Result.GetResult<Prisma.$salaryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Salary that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {salaryFindUniqueOrThrowArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends salaryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, salaryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__salaryClient<$Result.GetResult<Prisma.$salaryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Salary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salaryFindFirstArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends salaryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, salaryFindFirstArgs<ExtArgs>>,
    ): Prisma__salaryClient<$Result.GetResult<Prisma.$salaryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Salary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salaryFindFirstOrThrowArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends salaryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, salaryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__salaryClient<$Result.GetResult<Prisma.$salaryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Salaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salaryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salaries
     * const salaries = await prisma.salary.findMany()
     *
     * // Get first 10 Salaries
     * const salaries = await prisma.salary.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const salaryWithIdOnly = await prisma.salary.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends salaryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, salaryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salaryPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Salary.
     * @param {salaryCreateArgs} args - Arguments to create a Salary.
     * @example
     * // Create one Salary
     * const Salary = await prisma.salary.create({
     *   data: {
     *     // ... data to create a Salary
     *   }
     * })
     *
     **/
    create<T extends salaryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, salaryCreateArgs<ExtArgs>>,
    ): Prisma__salaryClient<$Result.GetResult<Prisma.$salaryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Salaries.
     *     @param {salaryCreateManyArgs} args - Arguments to create many Salaries.
     *     @example
     *     // Create many Salaries
     *     const salary = await prisma.salary.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends salaryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, salaryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Salary.
     * @param {salaryDeleteArgs} args - Arguments to delete one Salary.
     * @example
     * // Delete one Salary
     * const Salary = await prisma.salary.delete({
     *   where: {
     *     // ... filter to delete one Salary
     *   }
     * })
     *
     **/
    delete<T extends salaryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, salaryDeleteArgs<ExtArgs>>,
    ): Prisma__salaryClient<$Result.GetResult<Prisma.$salaryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Salary.
     * @param {salaryUpdateArgs} args - Arguments to update one Salary.
     * @example
     * // Update one Salary
     * const salary = await prisma.salary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends salaryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, salaryUpdateArgs<ExtArgs>>,
    ): Prisma__salaryClient<$Result.GetResult<Prisma.$salaryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Salaries.
     * @param {salaryDeleteManyArgs} args - Arguments to filter Salaries to delete.
     * @example
     * // Delete a few Salaries
     * const { count } = await prisma.salary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends salaryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, salaryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Salaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salaries
     * const salary = await prisma.salary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends salaryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, salaryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Salary.
     * @param {salaryUpsertArgs} args - Arguments to update or create a Salary.
     * @example
     * // Update or create a Salary
     * const salary = await prisma.salary.upsert({
     *   create: {
     *     // ... data to create a Salary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Salary we want to update
     *   }
     * })
     **/
    upsert<T extends salaryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, salaryUpsertArgs<ExtArgs>>,
    ): Prisma__salaryClient<$Result.GetResult<Prisma.$salaryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Salaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salaryCountArgs} args - Arguments to filter Salaries to count.
     * @example
     * // Count the number of Salaries
     * const count = await prisma.salary.count({
     *   where: {
     *     // ... the filter for the Salaries we want to count
     *   }
     * })
     **/
    count<T extends salaryCountArgs>(
      args?: Subset<T, salaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Salary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SalaryAggregateArgs>(
      args: Subset<T, SalaryAggregateArgs>,
    ): Prisma.PrismaPromise<GetSalaryAggregateType<T>>;

    /**
     * Group by Salary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends salaryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: salaryGroupByArgs['orderBy'] }
        : { orderBy?: salaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, salaryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSalaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the salary model
     */
    readonly fields: salaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for salary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__salaryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the salary model
   */
  interface salaryFieldRefs {
    readonly id: FieldRef<'salary', 'String'>;
    readonly created_at: FieldRef<'salary', 'DateTime'>;
    readonly updated_at: FieldRef<'salary', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * salary findUnique
   */
  export type salaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salary
     */
    select?: salarySelect<ExtArgs> | null;
    /**
     * Filter, which salary to fetch.
     */
    where: salaryWhereUniqueInput;
  };

  /**
   * salary findUniqueOrThrow
   */
  export type salaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salary
     */
    select?: salarySelect<ExtArgs> | null;
    /**
     * Filter, which salary to fetch.
     */
    where: salaryWhereUniqueInput;
  };

  /**
   * salary findFirst
   */
  export type salaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salary
     */
    select?: salarySelect<ExtArgs> | null;
    /**
     * Filter, which salary to fetch.
     */
    where?: salaryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of salaries to fetch.
     */
    orderBy?: salaryOrderByWithRelationInput | salaryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for salaries.
     */
    cursor?: salaryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` salaries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` salaries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of salaries.
     */
    distinct?: SalaryScalarFieldEnum | SalaryScalarFieldEnum[];
  };

  /**
   * salary findFirstOrThrow
   */
  export type salaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salary
     */
    select?: salarySelect<ExtArgs> | null;
    /**
     * Filter, which salary to fetch.
     */
    where?: salaryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of salaries to fetch.
     */
    orderBy?: salaryOrderByWithRelationInput | salaryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for salaries.
     */
    cursor?: salaryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` salaries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` salaries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of salaries.
     */
    distinct?: SalaryScalarFieldEnum | SalaryScalarFieldEnum[];
  };

  /**
   * salary findMany
   */
  export type salaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salary
     */
    select?: salarySelect<ExtArgs> | null;
    /**
     * Filter, which salaries to fetch.
     */
    where?: salaryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of salaries to fetch.
     */
    orderBy?: salaryOrderByWithRelationInput | salaryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing salaries.
     */
    cursor?: salaryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` salaries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` salaries.
     */
    skip?: number;
    distinct?: SalaryScalarFieldEnum | SalaryScalarFieldEnum[];
  };

  /**
   * salary create
   */
  export type salaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salary
     */
    select?: salarySelect<ExtArgs> | null;
    /**
     * The data needed to create a salary.
     */
    data?: XOR<salaryCreateInput, salaryUncheckedCreateInput>;
  };

  /**
   * salary createMany
   */
  export type salaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many salaries.
     */
    data: salaryCreateManyInput | salaryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * salary update
   */
  export type salaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salary
     */
    select?: salarySelect<ExtArgs> | null;
    /**
     * The data needed to update a salary.
     */
    data: XOR<salaryUpdateInput, salaryUncheckedUpdateInput>;
    /**
     * Choose, which salary to update.
     */
    where: salaryWhereUniqueInput;
  };

  /**
   * salary updateMany
   */
  export type salaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update salaries.
     */
    data: XOR<salaryUpdateManyMutationInput, salaryUncheckedUpdateManyInput>;
    /**
     * Filter which salaries to update
     */
    where?: salaryWhereInput;
  };

  /**
   * salary upsert
   */
  export type salaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salary
     */
    select?: salarySelect<ExtArgs> | null;
    /**
     * The filter to search for the salary to update in case it exists.
     */
    where: salaryWhereUniqueInput;
    /**
     * In case the salary found by the `where` argument doesn't exist, create a new salary with this data.
     */
    create: XOR<salaryCreateInput, salaryUncheckedCreateInput>;
    /**
     * In case the salary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<salaryUpdateInput, salaryUncheckedUpdateInput>;
  };

  /**
   * salary delete
   */
  export type salaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salary
     */
    select?: salarySelect<ExtArgs> | null;
    /**
     * Filter which salary to delete.
     */
    where: salaryWhereUniqueInput;
  };

  /**
   * salary deleteMany
   */
  export type salaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which salaries to delete
     */
    where?: salaryWhereInput;
  };

  /**
   * salary without action
   */
  export type salaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the salary
     */
    select?: salarySelect<ExtArgs> | null;
  };

  /**
   * Model schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
  };

  export type ScheduleMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ScheduleMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ScheduleCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ScheduleMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ScheduleMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ScheduleCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedule to aggregate.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned schedules
     **/
    _count?: true | ScheduleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ScheduleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ScheduleMaxAggregateInputType;
  };

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>;
  };

  export type scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduleWhereInput;
    orderBy?: scheduleOrderByWithAggregationInput | scheduleOrderByWithAggregationInput[];
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum;
    having?: scheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScheduleCountAggregateInputType | true;
    _min?: ScheduleMinAggregateInputType;
    _max?: ScheduleMaxAggregateInputType;
  };

  export type ScheduleGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
  };

  type GetScheduleGroupByPayload<T extends scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ScheduleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
          : GetScalarType<T[P], ScheduleGroupByOutputType[P]>;
      }
    >
  >;

  export type scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['schedule']
    >;

  export type scheduleSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'schedule';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['schedule']
    >;
    composites: {};
  };

  type scheduleGetPayload<S extends boolean | null | undefined | scheduleDefaultArgs> = $Result.GetResult<
    Prisma.$schedulePayload,
    S
  >;

  type scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    scheduleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ScheduleCountAggregateInputType | true;
  };

  export interface scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedule']; meta: { name: 'schedule' } };
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {scheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends scheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleFindUniqueArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Schedule that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {scheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends scheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends scheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindFirstArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends scheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     *
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends scheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Schedule.
     * @param {scheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     *
     **/
    create<T extends scheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleCreateArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Schedules.
     *     @param {scheduleCreateManyArgs} args - Arguments to create many Schedules.
     *     @example
     *     // Create many Schedules
     *     const schedule = await prisma.schedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends scheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Schedule.
     * @param {scheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     *
     **/
    delete<T extends scheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleDeleteArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Schedule.
     * @param {scheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends scheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpdateArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Schedules.
     * @param {scheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends scheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends scheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Schedule.
     * @param {scheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     **/
    upsert<T extends scheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpsertArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
     **/
    count<T extends scheduleCountArgs>(
      args?: Subset<T, scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ScheduleAggregateArgs>(
      args: Subset<T, ScheduleAggregateArgs>,
    ): Prisma.PrismaPromise<GetScheduleAggregateType<T>>;

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends scheduleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scheduleGroupByArgs['orderBy'] }
        : { orderBy?: scheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, scheduleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the schedule model
     */
    readonly fields: scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scheduleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the schedule model
   */
  interface scheduleFieldRefs {
    readonly id: FieldRef<'schedule', 'String'>;
    readonly created_at: FieldRef<'schedule', 'DateTime'>;
    readonly updated_at: FieldRef<'schedule', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * schedule findUnique
   */
  export type scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule findUniqueOrThrow
   */
  export type scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule findFirst
   */
  export type scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule findFirstOrThrow
   */
  export type scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule findMany
   */
  export type scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedules to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule create
   */
  export type scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * The data needed to create a schedule.
     */
    data?: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>;
  };

  /**
   * schedule createMany
   */
  export type scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: scheduleCreateManyInput | scheduleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * schedule update
   */
  export type scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * The data needed to update a schedule.
     */
    data: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>;
    /**
     * Choose, which schedule to update.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule updateMany
   */
  export type scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyInput>;
    /**
     * Filter which schedules to update
     */
    where?: scheduleWhereInput;
  };

  /**
   * schedule upsert
   */
  export type scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * The filter to search for the schedule to update in case it exists.
     */
    where: scheduleWhereUniqueInput;
    /**
     * In case the schedule found by the `where` argument doesn't exist, create a new schedule with this data.
     */
    create: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>;
    /**
     * In case the schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>;
  };

  /**
   * schedule delete
   */
  export type scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter which schedule to delete.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule deleteMany
   */
  export type scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: scheduleWhereInput;
  };

  /**
   * schedule without action
   */
  export type scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      administrator?: boolean | user$administratorArgs<ExtArgs>;
      employee?: boolean | user$employeeArgs<ExtArgs>;
      hr_manager?: boolean | user$hr_managerArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      owner?: boolean | user$ownerArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrator?: boolean | user$administratorArgs<ExtArgs>;
    employee?: boolean | user$employeeArgs<ExtArgs>;
    hr_manager?: boolean | user$hr_managerArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    owner?: boolean | user$ownerArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      administrator: Prisma.$administratorPayload<ExtArgs>[];
      employee: Prisma.$employeePayload<ExtArgs>[];
      hr_manager: Prisma.$hr_managerPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>[];
      owner: Prisma.$ownerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    administrator<T extends user$administratorArgs<ExtArgs> = {}>(
      args?: Subset<T, user$administratorArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administratorPayload<ExtArgs>, T, 'findMany'> | Null>;

    employee<T extends user$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, user$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    hr_manager<T extends user$hr_managerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$hr_managerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'> | Null>;

    owner<T extends user$ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.administrator
   */
  export type user$administratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrator
     */
    select?: administratorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: administratorInclude<ExtArgs> | null;
    where?: administratorWhereInput;
    orderBy?: administratorOrderByWithRelationInput | administratorOrderByWithRelationInput[];
    cursor?: administratorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[];
  };

  /**
   * user.employee
   */
  export type user$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * user.hr_manager
   */
  export type user$hr_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    where?: hr_managerWhereInput;
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    cursor?: hr_managerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    cursor?: organizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * user.owner
   */
  export type user$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    cursor?: ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AdministratorScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    organization_id: 'organization_id';
    hire_date: 'hire_date';
    administrator_department: 'administrator_department';
    job_title: 'job_title';
    administrator_salary: 'administrator_salary';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AdministratorScalarFieldEnum =
    (typeof AdministratorScalarFieldEnum)[keyof typeof AdministratorScalarFieldEnum];

  export const DepartmentScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum];

  export const EmployeeScalarFieldEnum: {
    id: 'id';
    hire_date: 'hire_date';
    job_title: 'job_title';
    employee_salary: 'employee_salary';
    employee_department: 'employee_department';
    user_id: 'user_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];

  export const Hr_managerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    organization_id: 'organization_id';
    hire_date: 'hire_date';
    hr_manager_department: 'hr_manager_department';
    job_title: 'job_title';
    hr_manager_salary: 'hr_manager_salary';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Hr_managerScalarFieldEnum = (typeof Hr_managerScalarFieldEnum)[keyof typeof Hr_managerScalarFieldEnum];

  export const Job_positionScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Job_positionScalarFieldEnum =
    (typeof Job_positionScalarFieldEnum)[keyof typeof Job_positionScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    country: 'country';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const OwnerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    organization_id: 'organization_id';
    established_date: 'established_date';
    industry: 'industry';
    total_employees: 'total_employees';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum];

  export const Performance_reviewScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Performance_reviewScalarFieldEnum =
    (typeof Performance_reviewScalarFieldEnum)[keyof typeof Performance_reviewScalarFieldEnum];

  export const RoleScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];

  export const SalaryScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type SalaryScalarFieldEnum = (typeof SalaryScalarFieldEnum)[keyof typeof SalaryScalarFieldEnum];

  export const ScheduleScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type administratorWhereInput = {
    AND?: administratorWhereInput | administratorWhereInput[];
    OR?: administratorWhereInput[];
    NOT?: administratorWhereInput | administratorWhereInput[];
    id?: UuidFilter<'administrator'> | string;
    user_id?: UuidFilter<'administrator'> | string;
    organization_id?: UuidFilter<'administrator'> | string;
    hire_date?: DateTimeFilter<'administrator'> | Date | string;
    administrator_department?: StringFilter<'administrator'> | string;
    job_title?: StringFilter<'administrator'> | string;
    administrator_salary?: IntFilter<'administrator'> | number;
    created_at?: DateTimeFilter<'administrator'> | Date | string;
    updated_at?: DateTimeFilter<'administrator'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type administratorOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    hire_date?: SortOrder;
    administrator_department?: SortOrder;
    job_title?: SortOrder;
    administrator_salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type administratorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: administratorWhereInput | administratorWhereInput[];
      OR?: administratorWhereInput[];
      NOT?: administratorWhereInput | administratorWhereInput[];
      user_id?: UuidFilter<'administrator'> | string;
      organization_id?: UuidFilter<'administrator'> | string;
      hire_date?: DateTimeFilter<'administrator'> | Date | string;
      administrator_department?: StringFilter<'administrator'> | string;
      job_title?: StringFilter<'administrator'> | string;
      administrator_salary?: IntFilter<'administrator'> | number;
      created_at?: DateTimeFilter<'administrator'> | Date | string;
      updated_at?: DateTimeFilter<'administrator'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type administratorOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    hire_date?: SortOrder;
    administrator_department?: SortOrder;
    job_title?: SortOrder;
    administrator_salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: administratorCountOrderByAggregateInput;
    _avg?: administratorAvgOrderByAggregateInput;
    _max?: administratorMaxOrderByAggregateInput;
    _min?: administratorMinOrderByAggregateInput;
    _sum?: administratorSumOrderByAggregateInput;
  };

  export type administratorScalarWhereWithAggregatesInput = {
    AND?: administratorScalarWhereWithAggregatesInput | administratorScalarWhereWithAggregatesInput[];
    OR?: administratorScalarWhereWithAggregatesInput[];
    NOT?: administratorScalarWhereWithAggregatesInput | administratorScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'administrator'> | string;
    user_id?: UuidWithAggregatesFilter<'administrator'> | string;
    organization_id?: UuidWithAggregatesFilter<'administrator'> | string;
    hire_date?: DateTimeWithAggregatesFilter<'administrator'> | Date | string;
    administrator_department?: StringWithAggregatesFilter<'administrator'> | string;
    job_title?: StringWithAggregatesFilter<'administrator'> | string;
    administrator_salary?: IntWithAggregatesFilter<'administrator'> | number;
    created_at?: DateTimeWithAggregatesFilter<'administrator'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'administrator'> | Date | string;
  };

  export type departmentWhereInput = {
    AND?: departmentWhereInput | departmentWhereInput[];
    OR?: departmentWhereInput[];
    NOT?: departmentWhereInput | departmentWhereInput[];
    id?: UuidFilter<'department'> | string;
    created_at?: DateTimeFilter<'department'> | Date | string;
    updated_at?: DateTimeFilter<'department'> | Date | string;
  };

  export type departmentOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type departmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: departmentWhereInput | departmentWhereInput[];
      OR?: departmentWhereInput[];
      NOT?: departmentWhereInput | departmentWhereInput[];
      created_at?: DateTimeFilter<'department'> | Date | string;
      updated_at?: DateTimeFilter<'department'> | Date | string;
    },
    'id'
  >;

  export type departmentOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: departmentCountOrderByAggregateInput;
    _max?: departmentMaxOrderByAggregateInput;
    _min?: departmentMinOrderByAggregateInput;
  };

  export type departmentScalarWhereWithAggregatesInput = {
    AND?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[];
    OR?: departmentScalarWhereWithAggregatesInput[];
    NOT?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'department'> | string;
    created_at?: DateTimeWithAggregatesFilter<'department'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'department'> | Date | string;
  };

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[];
    OR?: employeeWhereInput[];
    NOT?: employeeWhereInput | employeeWhereInput[];
    id?: UuidFilter<'employee'> | string;
    hire_date?: DateTimeFilter<'employee'> | Date | string;
    job_title?: StringFilter<'employee'> | string;
    employee_salary?: IntFilter<'employee'> | number;
    employee_department?: StringFilter<'employee'> | string;
    user_id?: UuidFilter<'employee'> | string;
    organization_id?: UuidFilter<'employee'> | string;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type employeeOrderByWithRelationInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    employee_salary?: SortOrder;
    employee_department?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type employeeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: employeeWhereInput | employeeWhereInput[];
      OR?: employeeWhereInput[];
      NOT?: employeeWhereInput | employeeWhereInput[];
      hire_date?: DateTimeFilter<'employee'> | Date | string;
      job_title?: StringFilter<'employee'> | string;
      employee_salary?: IntFilter<'employee'> | number;
      employee_department?: StringFilter<'employee'> | string;
      user_id?: UuidFilter<'employee'> | string;
      organization_id?: UuidFilter<'employee'> | string;
      created_at?: DateTimeFilter<'employee'> | Date | string;
      updated_at?: DateTimeFilter<'employee'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type employeeOrderByWithAggregationInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    employee_salary?: SortOrder;
    employee_department?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: employeeCountOrderByAggregateInput;
    _avg?: employeeAvgOrderByAggregateInput;
    _max?: employeeMaxOrderByAggregateInput;
    _min?: employeeMinOrderByAggregateInput;
    _sum?: employeeSumOrderByAggregateInput;
  };

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    OR?: employeeScalarWhereWithAggregatesInput[];
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'employee'> | string;
    hire_date?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    job_title?: StringWithAggregatesFilter<'employee'> | string;
    employee_salary?: IntWithAggregatesFilter<'employee'> | number;
    employee_department?: StringWithAggregatesFilter<'employee'> | string;
    user_id?: UuidWithAggregatesFilter<'employee'> | string;
    organization_id?: UuidWithAggregatesFilter<'employee'> | string;
    created_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
  };

  export type hr_managerWhereInput = {
    AND?: hr_managerWhereInput | hr_managerWhereInput[];
    OR?: hr_managerWhereInput[];
    NOT?: hr_managerWhereInput | hr_managerWhereInput[];
    id?: UuidFilter<'hr_manager'> | string;
    user_id?: UuidFilter<'hr_manager'> | string;
    organization_id?: UuidFilter<'hr_manager'> | string;
    hire_date?: DateTimeFilter<'hr_manager'> | Date | string;
    hr_manager_department?: StringFilter<'hr_manager'> | string;
    job_title?: StringFilter<'hr_manager'> | string;
    hr_manager_salary?: IntFilter<'hr_manager'> | number;
    created_at?: DateTimeFilter<'hr_manager'> | Date | string;
    updated_at?: DateTimeFilter<'hr_manager'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type hr_managerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    hire_date?: SortOrder;
    hr_manager_department?: SortOrder;
    job_title?: SortOrder;
    hr_manager_salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type hr_managerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: hr_managerWhereInput | hr_managerWhereInput[];
      OR?: hr_managerWhereInput[];
      NOT?: hr_managerWhereInput | hr_managerWhereInput[];
      user_id?: UuidFilter<'hr_manager'> | string;
      organization_id?: UuidFilter<'hr_manager'> | string;
      hire_date?: DateTimeFilter<'hr_manager'> | Date | string;
      hr_manager_department?: StringFilter<'hr_manager'> | string;
      job_title?: StringFilter<'hr_manager'> | string;
      hr_manager_salary?: IntFilter<'hr_manager'> | number;
      created_at?: DateTimeFilter<'hr_manager'> | Date | string;
      updated_at?: DateTimeFilter<'hr_manager'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type hr_managerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    hire_date?: SortOrder;
    hr_manager_department?: SortOrder;
    job_title?: SortOrder;
    hr_manager_salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: hr_managerCountOrderByAggregateInput;
    _avg?: hr_managerAvgOrderByAggregateInput;
    _max?: hr_managerMaxOrderByAggregateInput;
    _min?: hr_managerMinOrderByAggregateInput;
    _sum?: hr_managerSumOrderByAggregateInput;
  };

  export type hr_managerScalarWhereWithAggregatesInput = {
    AND?: hr_managerScalarWhereWithAggregatesInput | hr_managerScalarWhereWithAggregatesInput[];
    OR?: hr_managerScalarWhereWithAggregatesInput[];
    NOT?: hr_managerScalarWhereWithAggregatesInput | hr_managerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'hr_manager'> | string;
    user_id?: UuidWithAggregatesFilter<'hr_manager'> | string;
    organization_id?: UuidWithAggregatesFilter<'hr_manager'> | string;
    hire_date?: DateTimeWithAggregatesFilter<'hr_manager'> | Date | string;
    hr_manager_department?: StringWithAggregatesFilter<'hr_manager'> | string;
    job_title?: StringWithAggregatesFilter<'hr_manager'> | string;
    hr_manager_salary?: IntWithAggregatesFilter<'hr_manager'> | number;
    created_at?: DateTimeWithAggregatesFilter<'hr_manager'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'hr_manager'> | Date | string;
  };

  export type job_positionWhereInput = {
    AND?: job_positionWhereInput | job_positionWhereInput[];
    OR?: job_positionWhereInput[];
    NOT?: job_positionWhereInput | job_positionWhereInput[];
    id?: UuidFilter<'job_position'> | string;
    created_at?: DateTimeFilter<'job_position'> | Date | string;
    updated_at?: DateTimeFilter<'job_position'> | Date | string;
  };

  export type job_positionOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_positionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: job_positionWhereInput | job_positionWhereInput[];
      OR?: job_positionWhereInput[];
      NOT?: job_positionWhereInput | job_positionWhereInput[];
      created_at?: DateTimeFilter<'job_position'> | Date | string;
      updated_at?: DateTimeFilter<'job_position'> | Date | string;
    },
    'id'
  >;

  export type job_positionOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: job_positionCountOrderByAggregateInput;
    _max?: job_positionMaxOrderByAggregateInput;
    _min?: job_positionMinOrderByAggregateInput;
  };

  export type job_positionScalarWhereWithAggregatesInput = {
    AND?: job_positionScalarWhereWithAggregatesInput | job_positionScalarWhereWithAggregatesInput[];
    OR?: job_positionScalarWhereWithAggregatesInput[];
    NOT?: job_positionScalarWhereWithAggregatesInput | job_positionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'job_position'> | string;
    created_at?: DateTimeWithAggregatesFilter<'job_position'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'job_position'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    address?: StringNullableFilter<'organization'> | string | null;
    city?: StringNullableFilter<'organization'> | string | null;
    state?: StringNullableFilter<'organization'> | string | null;
    country?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
    administrator?: AdministratorListRelationFilter;
    employee?: EmployeeListRelationFilter;
    hr_manager?: Hr_managerListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    owner?: OwnerListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    country?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    administrator?: administratorOrderByRelationAggregateInput;
    employee?: employeeOrderByRelationAggregateInput;
    hr_manager?: hr_managerOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    owner?: ownerOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      address?: StringNullableFilter<'organization'> | string | null;
      city?: StringNullableFilter<'organization'> | string | null;
      state?: StringNullableFilter<'organization'> | string | null;
      country?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user_id?: UuidFilter<'organization'> | string;
      tenant_id?: StringFilter<'organization'> | string;
      administrator?: AdministratorListRelationFilter;
      employee?: EmployeeListRelationFilter;
      hr_manager?: Hr_managerListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      owner?: OwnerListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    country?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    address?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    city?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    state?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    country?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'organization'> | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type ownerWhereInput = {
    AND?: ownerWhereInput | ownerWhereInput[];
    OR?: ownerWhereInput[];
    NOT?: ownerWhereInput | ownerWhereInput[];
    id?: UuidFilter<'owner'> | string;
    user_id?: UuidFilter<'owner'> | string;
    organization_id?: UuidFilter<'owner'> | string;
    established_date?: DateTimeFilter<'owner'> | Date | string;
    industry?: StringFilter<'owner'> | string;
    total_employees?: IntFilter<'owner'> | number;
    created_at?: DateTimeFilter<'owner'> | Date | string;
    updated_at?: DateTimeFilter<'owner'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type ownerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    total_employees?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type ownerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ownerWhereInput | ownerWhereInput[];
      OR?: ownerWhereInput[];
      NOT?: ownerWhereInput | ownerWhereInput[];
      user_id?: UuidFilter<'owner'> | string;
      organization_id?: UuidFilter<'owner'> | string;
      established_date?: DateTimeFilter<'owner'> | Date | string;
      industry?: StringFilter<'owner'> | string;
      total_employees?: IntFilter<'owner'> | number;
      created_at?: DateTimeFilter<'owner'> | Date | string;
      updated_at?: DateTimeFilter<'owner'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type ownerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    total_employees?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ownerCountOrderByAggregateInput;
    _avg?: ownerAvgOrderByAggregateInput;
    _max?: ownerMaxOrderByAggregateInput;
    _min?: ownerMinOrderByAggregateInput;
    _sum?: ownerSumOrderByAggregateInput;
  };

  export type ownerScalarWhereWithAggregatesInput = {
    AND?: ownerScalarWhereWithAggregatesInput | ownerScalarWhereWithAggregatesInput[];
    OR?: ownerScalarWhereWithAggregatesInput[];
    NOT?: ownerScalarWhereWithAggregatesInput | ownerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'owner'> | string;
    user_id?: UuidWithAggregatesFilter<'owner'> | string;
    organization_id?: UuidWithAggregatesFilter<'owner'> | string;
    established_date?: DateTimeWithAggregatesFilter<'owner'> | Date | string;
    industry?: StringWithAggregatesFilter<'owner'> | string;
    total_employees?: IntWithAggregatesFilter<'owner'> | number;
    created_at?: DateTimeWithAggregatesFilter<'owner'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'owner'> | Date | string;
  };

  export type performance_reviewWhereInput = {
    AND?: performance_reviewWhereInput | performance_reviewWhereInput[];
    OR?: performance_reviewWhereInput[];
    NOT?: performance_reviewWhereInput | performance_reviewWhereInput[];
    id?: UuidFilter<'performance_review'> | string;
    created_at?: DateTimeFilter<'performance_review'> | Date | string;
    updated_at?: DateTimeFilter<'performance_review'> | Date | string;
  };

  export type performance_reviewOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_reviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: performance_reviewWhereInput | performance_reviewWhereInput[];
      OR?: performance_reviewWhereInput[];
      NOT?: performance_reviewWhereInput | performance_reviewWhereInput[];
      created_at?: DateTimeFilter<'performance_review'> | Date | string;
      updated_at?: DateTimeFilter<'performance_review'> | Date | string;
    },
    'id'
  >;

  export type performance_reviewOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: performance_reviewCountOrderByAggregateInput;
    _max?: performance_reviewMaxOrderByAggregateInput;
    _min?: performance_reviewMinOrderByAggregateInput;
  };

  export type performance_reviewScalarWhereWithAggregatesInput = {
    AND?: performance_reviewScalarWhereWithAggregatesInput | performance_reviewScalarWhereWithAggregatesInput[];
    OR?: performance_reviewScalarWhereWithAggregatesInput[];
    NOT?: performance_reviewScalarWhereWithAggregatesInput | performance_reviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'performance_review'> | string;
    created_at?: DateTimeWithAggregatesFilter<'performance_review'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'performance_review'> | Date | string;
  };

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[];
    OR?: roleWhereInput[];
    NOT?: roleWhereInput | roleWhereInput[];
    id?: UuidFilter<'role'> | string;
    created_at?: DateTimeFilter<'role'> | Date | string;
    updated_at?: DateTimeFilter<'role'> | Date | string;
  };

  export type roleOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type roleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: roleWhereInput | roleWhereInput[];
      OR?: roleWhereInput[];
      NOT?: roleWhereInput | roleWhereInput[];
      created_at?: DateTimeFilter<'role'> | Date | string;
      updated_at?: DateTimeFilter<'role'> | Date | string;
    },
    'id'
  >;

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: roleCountOrderByAggregateInput;
    _max?: roleMaxOrderByAggregateInput;
    _min?: roleMinOrderByAggregateInput;
  };

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[];
    OR?: roleScalarWhereWithAggregatesInput[];
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'role'> | string;
    created_at?: DateTimeWithAggregatesFilter<'role'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'role'> | Date | string;
  };

  export type salaryWhereInput = {
    AND?: salaryWhereInput | salaryWhereInput[];
    OR?: salaryWhereInput[];
    NOT?: salaryWhereInput | salaryWhereInput[];
    id?: UuidFilter<'salary'> | string;
    created_at?: DateTimeFilter<'salary'> | Date | string;
    updated_at?: DateTimeFilter<'salary'> | Date | string;
  };

  export type salaryOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salaryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: salaryWhereInput | salaryWhereInput[];
      OR?: salaryWhereInput[];
      NOT?: salaryWhereInput | salaryWhereInput[];
      created_at?: DateTimeFilter<'salary'> | Date | string;
      updated_at?: DateTimeFilter<'salary'> | Date | string;
    },
    'id'
  >;

  export type salaryOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: salaryCountOrderByAggregateInput;
    _max?: salaryMaxOrderByAggregateInput;
    _min?: salaryMinOrderByAggregateInput;
  };

  export type salaryScalarWhereWithAggregatesInput = {
    AND?: salaryScalarWhereWithAggregatesInput | salaryScalarWhereWithAggregatesInput[];
    OR?: salaryScalarWhereWithAggregatesInput[];
    NOT?: salaryScalarWhereWithAggregatesInput | salaryScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'salary'> | string;
    created_at?: DateTimeWithAggregatesFilter<'salary'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'salary'> | Date | string;
  };

  export type scheduleWhereInput = {
    AND?: scheduleWhereInput | scheduleWhereInput[];
    OR?: scheduleWhereInput[];
    NOT?: scheduleWhereInput | scheduleWhereInput[];
    id?: UuidFilter<'schedule'> | string;
    created_at?: DateTimeFilter<'schedule'> | Date | string;
    updated_at?: DateTimeFilter<'schedule'> | Date | string;
  };

  export type scheduleOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: scheduleWhereInput | scheduleWhereInput[];
      OR?: scheduleWhereInput[];
      NOT?: scheduleWhereInput | scheduleWhereInput[];
      created_at?: DateTimeFilter<'schedule'> | Date | string;
      updated_at?: DateTimeFilter<'schedule'> | Date | string;
    },
    'id'
  >;

  export type scheduleOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: scheduleCountOrderByAggregateInput;
    _max?: scheduleMaxOrderByAggregateInput;
    _min?: scheduleMinOrderByAggregateInput;
  };

  export type scheduleScalarWhereWithAggregatesInput = {
    AND?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[];
    OR?: scheduleScalarWhereWithAggregatesInput[];
    NOT?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'schedule'> | string;
    created_at?: DateTimeWithAggregatesFilter<'schedule'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'schedule'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    administrator?: AdministratorListRelationFilter;
    employee?: EmployeeListRelationFilter;
    hr_manager?: Hr_managerListRelationFilter;
    organization?: OrganizationListRelationFilter;
    owner?: OwnerListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    administrator?: administratorOrderByRelationAggregateInput;
    employee?: employeeOrderByRelationAggregateInput;
    hr_manager?: hr_managerOrderByRelationAggregateInput;
    organization?: organizationOrderByRelationAggregateInput;
    owner?: ownerOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      administrator?: AdministratorListRelationFilter;
      employee?: EmployeeListRelationFilter;
      hr_manager?: Hr_managerListRelationFilter;
      organization?: OrganizationListRelationFilter;
      owner?: OwnerListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type administratorCreateInput = {
    id?: string;
    hire_date: Date | string;
    administrator_department: string;
    job_title: string;
    administrator_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutAdministratorInput;
    user: userCreateNestedOneWithoutAdministratorInput;
  };

  export type administratorUncheckedCreateInput = {
    id?: string;
    user_id: string;
    organization_id: string;
    hire_date: Date | string;
    administrator_department: string;
    job_title: string;
    administrator_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type administratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    administrator_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutAdministratorNestedInput;
    user?: userUpdateOneRequiredWithoutAdministratorNestedInput;
  };

  export type administratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    administrator_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type administratorCreateManyInput = {
    id?: string;
    user_id: string;
    organization_id: string;
    hire_date: Date | string;
    administrator_department: string;
    job_title: string;
    administrator_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type administratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    administrator_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type administratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    administrator_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type departmentCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type departmentUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type departmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type departmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type departmentCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type departmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type departmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    employee_salary: number;
    employee_department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    employee_salary: number;
    employee_department: string;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    employee_salary?: IntFieldUpdateOperationsInput | number;
    employee_department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    employee_salary?: IntFieldUpdateOperationsInput | number;
    employee_department?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateManyInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    employee_salary: number;
    employee_department: string;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    employee_salary?: IntFieldUpdateOperationsInput | number;
    employee_department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    employee_salary?: IntFieldUpdateOperationsInput | number;
    employee_department?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerCreateInput = {
    id?: string;
    hire_date: Date | string;
    hr_manager_department: string;
    job_title: string;
    hr_manager_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutHr_managerInput;
    user: userCreateNestedOneWithoutHr_managerInput;
  };

  export type hr_managerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    organization_id: string;
    hire_date: Date | string;
    hr_manager_department: string;
    job_title: string;
    hr_manager_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    hr_manager_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hr_manager_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutHr_managerNestedInput;
    user?: userUpdateOneRequiredWithoutHr_managerNestedInput;
  };

  export type hr_managerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    hr_manager_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hr_manager_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerCreateManyInput = {
    id?: string;
    user_id: string;
    organization_id: string;
    hire_date: Date | string;
    hr_manager_department: string;
    job_title: string;
    hr_manager_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    hr_manager_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hr_manager_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    hr_manager_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hr_manager_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_positionCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_positionUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_positionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_positionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_positionCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_positionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_positionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    administrator?: administratorCreateNestedManyWithoutOrganizationInput;
    employee?: employeeCreateNestedManyWithoutOrganizationInput;
    hr_manager?: hr_managerCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
    owner?: ownerCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    administrator?: administratorUncheckedCreateNestedManyWithoutOrganizationInput;
    employee?: employeeUncheckedCreateNestedManyWithoutOrganizationInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutOrganizationInput;
    owner?: ownerUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    administrator?: administratorUpdateManyWithoutOrganizationNestedInput;
    employee?: employeeUpdateManyWithoutOrganizationNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    owner?: ownerUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    administrator?: administratorUncheckedUpdateManyWithoutOrganizationNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutOrganizationNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutOrganizationNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type ownerCreateInput = {
    id?: string;
    established_date: Date | string;
    industry: string;
    total_employees: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutOwnerInput;
    user: userCreateNestedOneWithoutOwnerInput;
  };

  export type ownerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    organization_id: string;
    established_date: Date | string;
    industry: string;
    total_employees: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    established_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: StringFieldUpdateOperationsInput | string;
    total_employees?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutOwnerNestedInput;
    user?: userUpdateOneRequiredWithoutOwnerNestedInput;
  };

  export type ownerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    established_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: StringFieldUpdateOperationsInput | string;
    total_employees?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerCreateManyInput = {
    id?: string;
    user_id: string;
    organization_id: string;
    established_date: Date | string;
    industry: string;
    total_employees: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    established_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: StringFieldUpdateOperationsInput | string;
    total_employees?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    established_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: StringFieldUpdateOperationsInput | string;
    total_employees?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type roleUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type roleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type roleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salaryCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salaryUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salaryCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    administrator?: administratorCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    administrator?: administratorUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator?: administratorUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator?: administratorUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput;
    isNot?: organizationWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type administratorCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    hire_date?: SortOrder;
    administrator_department?: SortOrder;
    job_title?: SortOrder;
    administrator_salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type administratorAvgOrderByAggregateInput = {
    administrator_salary?: SortOrder;
  };

  export type administratorMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    hire_date?: SortOrder;
    administrator_department?: SortOrder;
    job_title?: SortOrder;
    administrator_salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type administratorMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    hire_date?: SortOrder;
    administrator_department?: SortOrder;
    job_title?: SortOrder;
    administrator_salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type administratorSumOrderByAggregateInput = {
    administrator_salary?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type departmentCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type departmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type departmentMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeCountOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    employee_salary?: SortOrder;
    employee_department?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeAvgOrderByAggregateInput = {
    employee_salary?: SortOrder;
  };

  export type employeeMaxOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    employee_salary?: SortOrder;
    employee_department?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeMinOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    employee_salary?: SortOrder;
    employee_department?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeSumOrderByAggregateInput = {
    employee_salary?: SortOrder;
  };

  export type hr_managerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    hire_date?: SortOrder;
    hr_manager_department?: SortOrder;
    job_title?: SortOrder;
    hr_manager_salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type hr_managerAvgOrderByAggregateInput = {
    hr_manager_salary?: SortOrder;
  };

  export type hr_managerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    hire_date?: SortOrder;
    hr_manager_department?: SortOrder;
    job_title?: SortOrder;
    hr_manager_salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type hr_managerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    hire_date?: SortOrder;
    hr_manager_department?: SortOrder;
    job_title?: SortOrder;
    hr_manager_salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type hr_managerSumOrderByAggregateInput = {
    hr_manager_salary?: SortOrder;
  };

  export type job_positionCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_positionMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_positionMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type AdministratorListRelationFilter = {
    every?: administratorWhereInput;
    some?: administratorWhereInput;
    none?: administratorWhereInput;
  };

  export type EmployeeListRelationFilter = {
    every?: employeeWhereInput;
    some?: employeeWhereInput;
    none?: employeeWhereInput;
  };

  export type Hr_managerListRelationFilter = {
    every?: hr_managerWhereInput;
    some?: hr_managerWhereInput;
    none?: hr_managerWhereInput;
  };

  export type OwnerListRelationFilter = {
    every?: ownerWhereInput;
    some?: ownerWhereInput;
    none?: ownerWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type administratorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type employeeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type hr_managerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ownerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type ownerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    total_employees?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerAvgOrderByAggregateInput = {
    total_employees?: SortOrder;
  };

  export type ownerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    total_employees?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    total_employees?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerSumOrderByAggregateInput = {
    total_employees?: SortOrder;
  };

  export type performance_reviewCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_reviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_reviewMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salaryCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salaryMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salaryMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput;
    some?: organizationWhereInput;
    none?: organizationWhereInput;
  };

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationCreateNestedOneWithoutAdministratorInput = {
    create?: XOR<organizationCreateWithoutAdministratorInput, organizationUncheckedCreateWithoutAdministratorInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutAdministratorInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAdministratorInput = {
    create?: XOR<userCreateWithoutAdministratorInput, userUncheckedCreateWithoutAdministratorInput>;
    connectOrCreate?: userCreateOrConnectWithoutAdministratorInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type organizationUpdateOneRequiredWithoutAdministratorNestedInput = {
    create?: XOR<organizationCreateWithoutAdministratorInput, organizationUncheckedCreateWithoutAdministratorInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutAdministratorInput;
    upsert?: organizationUpsertWithoutAdministratorInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutAdministratorInput, organizationUpdateWithoutAdministratorInput>,
      organizationUncheckedUpdateWithoutAdministratorInput
    >;
  };

  export type userUpdateOneRequiredWithoutAdministratorNestedInput = {
    create?: XOR<userCreateWithoutAdministratorInput, userUncheckedCreateWithoutAdministratorInput>;
    connectOrCreate?: userCreateOrConnectWithoutAdministratorInput;
    upsert?: userUpsertWithoutAdministratorInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAdministratorInput, userUpdateWithoutAdministratorInput>,
      userUncheckedUpdateWithoutAdministratorInput
    >;
  };

  export type organizationCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<organizationCreateWithoutEmployeeInput, organizationUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutEmployeeInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
  };

  export type organizationUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<organizationCreateWithoutEmployeeInput, organizationUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutEmployeeInput;
    upsert?: organizationUpsertWithoutEmployeeInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutEmployeeInput, organizationUpdateWithoutEmployeeInput>,
      organizationUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type userUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    upsert?: userUpsertWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEmployeeInput, userUpdateWithoutEmployeeInput>,
      userUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type organizationCreateNestedOneWithoutHr_managerInput = {
    create?: XOR<organizationCreateWithoutHr_managerInput, organizationUncheckedCreateWithoutHr_managerInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutHr_managerInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutHr_managerInput = {
    create?: XOR<userCreateWithoutHr_managerInput, userUncheckedCreateWithoutHr_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutHr_managerInput;
    connect?: userWhereUniqueInput;
  };

  export type organizationUpdateOneRequiredWithoutHr_managerNestedInput = {
    create?: XOR<organizationCreateWithoutHr_managerInput, organizationUncheckedCreateWithoutHr_managerInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutHr_managerInput;
    upsert?: organizationUpsertWithoutHr_managerInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutHr_managerInput, organizationUpdateWithoutHr_managerInput>,
      organizationUncheckedUpdateWithoutHr_managerInput
    >;
  };

  export type userUpdateOneRequiredWithoutHr_managerNestedInput = {
    create?: XOR<userCreateWithoutHr_managerInput, userUncheckedCreateWithoutHr_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutHr_managerInput;
    upsert?: userUpsertWithoutHr_managerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutHr_managerInput, userUpdateWithoutHr_managerInput>,
      userUncheckedUpdateWithoutHr_managerInput
    >;
  };

  export type administratorCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<administratorCreateWithoutOrganizationInput, administratorUncheckedCreateWithoutOrganizationInput>
      | administratorCreateWithoutOrganizationInput[]
      | administratorUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | administratorCreateOrConnectWithoutOrganizationInput
      | administratorCreateOrConnectWithoutOrganizationInput[];
    createMany?: administratorCreateManyOrganizationInputEnvelope;
    connect?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
  };

  export type employeeCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<employeeCreateWithoutOrganizationInput, employeeUncheckedCreateWithoutOrganizationInput>
      | employeeCreateWithoutOrganizationInput[]
      | employeeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | employeeCreateOrConnectWithoutOrganizationInput
      | employeeCreateOrConnectWithoutOrganizationInput[];
    createMany?: employeeCreateManyOrganizationInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type hr_managerCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<hr_managerCreateWithoutOrganizationInput, hr_managerUncheckedCreateWithoutOrganizationInput>
      | hr_managerCreateWithoutOrganizationInput[]
      | hr_managerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | hr_managerCreateOrConnectWithoutOrganizationInput
      | hr_managerCreateOrConnectWithoutOrganizationInput[];
    createMany?: hr_managerCreateManyOrganizationInputEnvelope;
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
  };

  export type ownerCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<ownerCreateWithoutOrganizationInput, ownerUncheckedCreateWithoutOrganizationInput>
      | ownerCreateWithoutOrganizationInput[]
      | ownerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutOrganizationInput | ownerCreateOrConnectWithoutOrganizationInput[];
    createMany?: ownerCreateManyOrganizationInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type administratorUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<administratorCreateWithoutOrganizationInput, administratorUncheckedCreateWithoutOrganizationInput>
      | administratorCreateWithoutOrganizationInput[]
      | administratorUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | administratorCreateOrConnectWithoutOrganizationInput
      | administratorCreateOrConnectWithoutOrganizationInput[];
    createMany?: administratorCreateManyOrganizationInputEnvelope;
    connect?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
  };

  export type employeeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<employeeCreateWithoutOrganizationInput, employeeUncheckedCreateWithoutOrganizationInput>
      | employeeCreateWithoutOrganizationInput[]
      | employeeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | employeeCreateOrConnectWithoutOrganizationInput
      | employeeCreateOrConnectWithoutOrganizationInput[];
    createMany?: employeeCreateManyOrganizationInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type hr_managerUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<hr_managerCreateWithoutOrganizationInput, hr_managerUncheckedCreateWithoutOrganizationInput>
      | hr_managerCreateWithoutOrganizationInput[]
      | hr_managerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | hr_managerCreateOrConnectWithoutOrganizationInput
      | hr_managerCreateOrConnectWithoutOrganizationInput[];
    createMany?: hr_managerCreateManyOrganizationInputEnvelope;
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
  };

  export type ownerUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<ownerCreateWithoutOrganizationInput, ownerUncheckedCreateWithoutOrganizationInput>
      | ownerCreateWithoutOrganizationInput[]
      | ownerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutOrganizationInput | ownerCreateOrConnectWithoutOrganizationInput[];
    createMany?: ownerCreateManyOrganizationInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type administratorUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<administratorCreateWithoutOrganizationInput, administratorUncheckedCreateWithoutOrganizationInput>
      | administratorCreateWithoutOrganizationInput[]
      | administratorUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | administratorCreateOrConnectWithoutOrganizationInput
      | administratorCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | administratorUpsertWithWhereUniqueWithoutOrganizationInput
      | administratorUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: administratorCreateManyOrganizationInputEnvelope;
    set?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    disconnect?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    delete?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    connect?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    update?:
      | administratorUpdateWithWhereUniqueWithoutOrganizationInput
      | administratorUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | administratorUpdateManyWithWhereWithoutOrganizationInput
      | administratorUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: administratorScalarWhereInput | administratorScalarWhereInput[];
  };

  export type employeeUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<employeeCreateWithoutOrganizationInput, employeeUncheckedCreateWithoutOrganizationInput>
      | employeeCreateWithoutOrganizationInput[]
      | employeeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | employeeCreateOrConnectWithoutOrganizationInput
      | employeeCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | employeeUpsertWithWhereUniqueWithoutOrganizationInput
      | employeeUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: employeeCreateManyOrganizationInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?:
      | employeeUpdateWithWhereUniqueWithoutOrganizationInput
      | employeeUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | employeeUpdateManyWithWhereWithoutOrganizationInput
      | employeeUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type hr_managerUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<hr_managerCreateWithoutOrganizationInput, hr_managerUncheckedCreateWithoutOrganizationInput>
      | hr_managerCreateWithoutOrganizationInput[]
      | hr_managerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | hr_managerCreateOrConnectWithoutOrganizationInput
      | hr_managerCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | hr_managerUpsertWithWhereUniqueWithoutOrganizationInput
      | hr_managerUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: hr_managerCreateManyOrganizationInputEnvelope;
    set?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    disconnect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    delete?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    update?:
      | hr_managerUpdateWithWhereUniqueWithoutOrganizationInput
      | hr_managerUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | hr_managerUpdateManyWithWhereWithoutOrganizationInput
      | hr_managerUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    upsert?: userUpsertWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrganizationInput, userUpdateWithoutOrganizationInput>,
      userUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type ownerUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<ownerCreateWithoutOrganizationInput, ownerUncheckedCreateWithoutOrganizationInput>
      | ownerCreateWithoutOrganizationInput[]
      | ownerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutOrganizationInput | ownerCreateOrConnectWithoutOrganizationInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutOrganizationInput | ownerUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: ownerCreateManyOrganizationInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutOrganizationInput | ownerUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutOrganizationInput | ownerUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type administratorUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<administratorCreateWithoutOrganizationInput, administratorUncheckedCreateWithoutOrganizationInput>
      | administratorCreateWithoutOrganizationInput[]
      | administratorUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | administratorCreateOrConnectWithoutOrganizationInput
      | administratorCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | administratorUpsertWithWhereUniqueWithoutOrganizationInput
      | administratorUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: administratorCreateManyOrganizationInputEnvelope;
    set?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    disconnect?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    delete?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    connect?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    update?:
      | administratorUpdateWithWhereUniqueWithoutOrganizationInput
      | administratorUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | administratorUpdateManyWithWhereWithoutOrganizationInput
      | administratorUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: administratorScalarWhereInput | administratorScalarWhereInput[];
  };

  export type employeeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<employeeCreateWithoutOrganizationInput, employeeUncheckedCreateWithoutOrganizationInput>
      | employeeCreateWithoutOrganizationInput[]
      | employeeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | employeeCreateOrConnectWithoutOrganizationInput
      | employeeCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | employeeUpsertWithWhereUniqueWithoutOrganizationInput
      | employeeUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: employeeCreateManyOrganizationInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?:
      | employeeUpdateWithWhereUniqueWithoutOrganizationInput
      | employeeUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | employeeUpdateManyWithWhereWithoutOrganizationInput
      | employeeUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type hr_managerUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<hr_managerCreateWithoutOrganizationInput, hr_managerUncheckedCreateWithoutOrganizationInput>
      | hr_managerCreateWithoutOrganizationInput[]
      | hr_managerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | hr_managerCreateOrConnectWithoutOrganizationInput
      | hr_managerCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | hr_managerUpsertWithWhereUniqueWithoutOrganizationInput
      | hr_managerUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: hr_managerCreateManyOrganizationInputEnvelope;
    set?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    disconnect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    delete?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    update?:
      | hr_managerUpdateWithWhereUniqueWithoutOrganizationInput
      | hr_managerUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | hr_managerUpdateManyWithWhereWithoutOrganizationInput
      | hr_managerUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
  };

  export type ownerUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<ownerCreateWithoutOrganizationInput, ownerUncheckedCreateWithoutOrganizationInput>
      | ownerCreateWithoutOrganizationInput[]
      | ownerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutOrganizationInput | ownerCreateOrConnectWithoutOrganizationInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutOrganizationInput | ownerUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: ownerCreateManyOrganizationInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutOrganizationInput | ownerUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutOrganizationInput | ownerUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type organizationCreateNestedOneWithoutOwnerInput = {
    create?: XOR<organizationCreateWithoutOwnerInput, organizationUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutOwnerInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutOwnerInput = {
    create?: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: userCreateOrConnectWithoutOwnerInput;
    connect?: userWhereUniqueInput;
  };

  export type organizationUpdateOneRequiredWithoutOwnerNestedInput = {
    create?: XOR<organizationCreateWithoutOwnerInput, organizationUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutOwnerInput;
    upsert?: organizationUpsertWithoutOwnerInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutOwnerInput, organizationUpdateWithoutOwnerInput>,
      organizationUncheckedUpdateWithoutOwnerInput
    >;
  };

  export type userUpdateOneRequiredWithoutOwnerNestedInput = {
    create?: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: userCreateOrConnectWithoutOwnerInput;
    upsert?: userUpsertWithoutOwnerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOwnerInput, userUpdateWithoutOwnerInput>,
      userUncheckedUpdateWithoutOwnerInput
    >;
  };

  export type administratorCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<administratorCreateWithoutUserInput, administratorUncheckedCreateWithoutUserInput>
      | administratorCreateWithoutUserInput[]
      | administratorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: administratorCreateOrConnectWithoutUserInput | administratorCreateOrConnectWithoutUserInput[];
    createMany?: administratorCreateManyUserInputEnvelope;
    connect?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
  };

  export type employeeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type hr_managerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>
      | hr_managerCreateWithoutUserInput[]
      | hr_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutUserInput | hr_managerCreateOrConnectWithoutUserInput[];
    createMany?: hr_managerCreateManyUserInputEnvelope;
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
  };

  export type organizationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type ownerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type administratorUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<administratorCreateWithoutUserInput, administratorUncheckedCreateWithoutUserInput>
      | administratorCreateWithoutUserInput[]
      | administratorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: administratorCreateOrConnectWithoutUserInput | administratorCreateOrConnectWithoutUserInput[];
    createMany?: administratorCreateManyUserInputEnvelope;
    connect?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
  };

  export type employeeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type hr_managerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>
      | hr_managerCreateWithoutUserInput[]
      | hr_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutUserInput | hr_managerCreateOrConnectWithoutUserInput[];
    createMany?: hr_managerCreateManyUserInputEnvelope;
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
  };

  export type organizationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type ownerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type administratorUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<administratorCreateWithoutUserInput, administratorUncheckedCreateWithoutUserInput>
      | administratorCreateWithoutUserInput[]
      | administratorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: administratorCreateOrConnectWithoutUserInput | administratorCreateOrConnectWithoutUserInput[];
    upsert?: administratorUpsertWithWhereUniqueWithoutUserInput | administratorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: administratorCreateManyUserInputEnvelope;
    set?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    disconnect?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    delete?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    connect?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    update?: administratorUpdateWithWhereUniqueWithoutUserInput | administratorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: administratorUpdateManyWithWhereWithoutUserInput | administratorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: administratorScalarWhereInput | administratorScalarWhereInput[];
  };

  export type employeeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type hr_managerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>
      | hr_managerCreateWithoutUserInput[]
      | hr_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutUserInput | hr_managerCreateOrConnectWithoutUserInput[];
    upsert?: hr_managerUpsertWithWhereUniqueWithoutUserInput | hr_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: hr_managerCreateManyUserInputEnvelope;
    set?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    disconnect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    delete?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    update?: hr_managerUpdateWithWhereUniqueWithoutUserInput | hr_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: hr_managerUpdateManyWithWhereWithoutUserInput | hr_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
  };

  export type organizationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type ownerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutUserInput | ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutUserInput | ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutUserInput | ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type administratorUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<administratorCreateWithoutUserInput, administratorUncheckedCreateWithoutUserInput>
      | administratorCreateWithoutUserInput[]
      | administratorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: administratorCreateOrConnectWithoutUserInput | administratorCreateOrConnectWithoutUserInput[];
    upsert?: administratorUpsertWithWhereUniqueWithoutUserInput | administratorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: administratorCreateManyUserInputEnvelope;
    set?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    disconnect?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    delete?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    connect?: administratorWhereUniqueInput | administratorWhereUniqueInput[];
    update?: administratorUpdateWithWhereUniqueWithoutUserInput | administratorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: administratorUpdateManyWithWhereWithoutUserInput | administratorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: administratorScalarWhereInput | administratorScalarWhereInput[];
  };

  export type employeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type hr_managerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>
      | hr_managerCreateWithoutUserInput[]
      | hr_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutUserInput | hr_managerCreateOrConnectWithoutUserInput[];
    upsert?: hr_managerUpsertWithWhereUniqueWithoutUserInput | hr_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: hr_managerCreateManyUserInputEnvelope;
    set?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    disconnect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    delete?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    update?: hr_managerUpdateWithWhereUniqueWithoutUserInput | hr_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: hr_managerUpdateManyWithWhereWithoutUserInput | hr_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
  };

  export type organizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type ownerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutUserInput | ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutUserInput | ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutUserInput | ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type organizationCreateWithoutAdministratorInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeCreateNestedManyWithoutOrganizationInput;
    hr_manager?: hr_managerCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
    owner?: ownerCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutAdministratorInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    employee?: employeeUncheckedCreateNestedManyWithoutOrganizationInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutOrganizationInput;
    owner?: ownerUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutAdministratorInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutAdministratorInput, organizationUncheckedCreateWithoutAdministratorInput>;
  };

  export type userCreateWithoutAdministratorInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAdministratorInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAdministratorInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAdministratorInput, userUncheckedCreateWithoutAdministratorInput>;
  };

  export type organizationUpsertWithoutAdministratorInput = {
    update: XOR<organizationUpdateWithoutAdministratorInput, organizationUncheckedUpdateWithoutAdministratorInput>;
    create: XOR<organizationCreateWithoutAdministratorInput, organizationUncheckedCreateWithoutAdministratorInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutAdministratorInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutAdministratorInput, organizationUncheckedUpdateWithoutAdministratorInput>;
  };

  export type organizationUpdateWithoutAdministratorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUpdateManyWithoutOrganizationNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    owner?: ownerUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutAdministratorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUncheckedUpdateManyWithoutOrganizationNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutOrganizationNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutAdministratorInput = {
    update: XOR<userUpdateWithoutAdministratorInput, userUncheckedUpdateWithoutAdministratorInput>;
    create: XOR<userCreateWithoutAdministratorInput, userUncheckedCreateWithoutAdministratorInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAdministratorInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAdministratorInput, userUncheckedUpdateWithoutAdministratorInput>;
  };

  export type userUpdateWithoutAdministratorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAdministratorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type organizationCreateWithoutEmployeeInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    administrator?: administratorCreateNestedManyWithoutOrganizationInput;
    hr_manager?: hr_managerCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
    owner?: ownerCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    administrator?: administratorUncheckedCreateNestedManyWithoutOrganizationInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutOrganizationInput;
    owner?: ownerUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutEmployeeInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutEmployeeInput, organizationUncheckedCreateWithoutEmployeeInput>;
  };

  export type userCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    administrator?: administratorCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    administrator?: administratorUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutEmployeeInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
  };

  export type organizationUpsertWithoutEmployeeInput = {
    update: XOR<organizationUpdateWithoutEmployeeInput, organizationUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<organizationCreateWithoutEmployeeInput, organizationUncheckedCreateWithoutEmployeeInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutEmployeeInput, organizationUncheckedUpdateWithoutEmployeeInput>;
  };

  export type organizationUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    administrator?: administratorUpdateManyWithoutOrganizationNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    owner?: ownerUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    administrator?: administratorUncheckedUpdateManyWithoutOrganizationNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutOrganizationNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutEmployeeInput = {
    update: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
  };

  export type userUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator?: administratorUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator?: administratorUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type organizationCreateWithoutHr_managerInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    administrator?: administratorCreateNestedManyWithoutOrganizationInput;
    employee?: employeeCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
    owner?: ownerCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutHr_managerInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    administrator?: administratorUncheckedCreateNestedManyWithoutOrganizationInput;
    employee?: employeeUncheckedCreateNestedManyWithoutOrganizationInput;
    owner?: ownerUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutHr_managerInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutHr_managerInput, organizationUncheckedCreateWithoutHr_managerInput>;
  };

  export type userCreateWithoutHr_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    administrator?: administratorCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutHr_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    administrator?: administratorUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutHr_managerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutHr_managerInput, userUncheckedCreateWithoutHr_managerInput>;
  };

  export type organizationUpsertWithoutHr_managerInput = {
    update: XOR<organizationUpdateWithoutHr_managerInput, organizationUncheckedUpdateWithoutHr_managerInput>;
    create: XOR<organizationCreateWithoutHr_managerInput, organizationUncheckedCreateWithoutHr_managerInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutHr_managerInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutHr_managerInput, organizationUncheckedUpdateWithoutHr_managerInput>;
  };

  export type organizationUpdateWithoutHr_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    administrator?: administratorUpdateManyWithoutOrganizationNestedInput;
    employee?: employeeUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    owner?: ownerUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutHr_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    administrator?: administratorUncheckedUpdateManyWithoutOrganizationNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutOrganizationNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutHr_managerInput = {
    update: XOR<userUpdateWithoutHr_managerInput, userUncheckedUpdateWithoutHr_managerInput>;
    create: XOR<userCreateWithoutHr_managerInput, userUncheckedCreateWithoutHr_managerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutHr_managerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutHr_managerInput, userUncheckedUpdateWithoutHr_managerInput>;
  };

  export type userUpdateWithoutHr_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator?: administratorUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutHr_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator?: administratorUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type administratorCreateWithoutOrganizationInput = {
    id?: string;
    hire_date: Date | string;
    administrator_department: string;
    job_title: string;
    administrator_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutAdministratorInput;
  };

  export type administratorUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    user_id: string;
    hire_date: Date | string;
    administrator_department: string;
    job_title: string;
    administrator_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type administratorCreateOrConnectWithoutOrganizationInput = {
    where: administratorWhereUniqueInput;
    create: XOR<administratorCreateWithoutOrganizationInput, administratorUncheckedCreateWithoutOrganizationInput>;
  };

  export type administratorCreateManyOrganizationInputEnvelope = {
    data: administratorCreateManyOrganizationInput | administratorCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type employeeCreateWithoutOrganizationInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    employee_salary: number;
    employee_department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    employee_salary: number;
    employee_department: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeCreateOrConnectWithoutOrganizationInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutOrganizationInput, employeeUncheckedCreateWithoutOrganizationInput>;
  };

  export type employeeCreateManyOrganizationInputEnvelope = {
    data: employeeCreateManyOrganizationInput | employeeCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type hr_managerCreateWithoutOrganizationInput = {
    id?: string;
    hire_date: Date | string;
    hr_manager_department: string;
    job_title: string;
    hr_manager_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutHr_managerInput;
  };

  export type hr_managerUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    user_id: string;
    hire_date: Date | string;
    hr_manager_department: string;
    job_title: string;
    hr_manager_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerCreateOrConnectWithoutOrganizationInput = {
    where: hr_managerWhereUniqueInput;
    create: XOR<hr_managerCreateWithoutOrganizationInput, hr_managerUncheckedCreateWithoutOrganizationInput>;
  };

  export type hr_managerCreateManyOrganizationInputEnvelope = {
    data: hr_managerCreateManyOrganizationInput | hr_managerCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    administrator?: administratorCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    administrator?: administratorUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type ownerCreateWithoutOrganizationInput = {
    id?: string;
    established_date: Date | string;
    industry: string;
    total_employees: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutOwnerInput;
  };

  export type ownerUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    user_id: string;
    established_date: Date | string;
    industry: string;
    total_employees: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateOrConnectWithoutOrganizationInput = {
    where: ownerWhereUniqueInput;
    create: XOR<ownerCreateWithoutOrganizationInput, ownerUncheckedCreateWithoutOrganizationInput>;
  };

  export type ownerCreateManyOrganizationInputEnvelope = {
    data: ownerCreateManyOrganizationInput | ownerCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type administratorUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: administratorWhereUniqueInput;
    update: XOR<administratorUpdateWithoutOrganizationInput, administratorUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<administratorCreateWithoutOrganizationInput, administratorUncheckedCreateWithoutOrganizationInput>;
  };

  export type administratorUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: administratorWhereUniqueInput;
    data: XOR<administratorUpdateWithoutOrganizationInput, administratorUncheckedUpdateWithoutOrganizationInput>;
  };

  export type administratorUpdateManyWithWhereWithoutOrganizationInput = {
    where: administratorScalarWhereInput;
    data: XOR<administratorUpdateManyMutationInput, administratorUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type administratorScalarWhereInput = {
    AND?: administratorScalarWhereInput | administratorScalarWhereInput[];
    OR?: administratorScalarWhereInput[];
    NOT?: administratorScalarWhereInput | administratorScalarWhereInput[];
    id?: UuidFilter<'administrator'> | string;
    user_id?: UuidFilter<'administrator'> | string;
    organization_id?: UuidFilter<'administrator'> | string;
    hire_date?: DateTimeFilter<'administrator'> | Date | string;
    administrator_department?: StringFilter<'administrator'> | string;
    job_title?: StringFilter<'administrator'> | string;
    administrator_salary?: IntFilter<'administrator'> | number;
    created_at?: DateTimeFilter<'administrator'> | Date | string;
    updated_at?: DateTimeFilter<'administrator'> | Date | string;
  };

  export type employeeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutOrganizationInput, employeeUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<employeeCreateWithoutOrganizationInput, employeeUncheckedCreateWithoutOrganizationInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutOrganizationInput, employeeUncheckedUpdateWithoutOrganizationInput>;
  };

  export type employeeUpdateManyWithWhereWithoutOrganizationInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type employeeScalarWhereInput = {
    AND?: employeeScalarWhereInput | employeeScalarWhereInput[];
    OR?: employeeScalarWhereInput[];
    NOT?: employeeScalarWhereInput | employeeScalarWhereInput[];
    id?: UuidFilter<'employee'> | string;
    hire_date?: DateTimeFilter<'employee'> | Date | string;
    job_title?: StringFilter<'employee'> | string;
    employee_salary?: IntFilter<'employee'> | number;
    employee_department?: StringFilter<'employee'> | string;
    user_id?: UuidFilter<'employee'> | string;
    organization_id?: UuidFilter<'employee'> | string;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
  };

  export type hr_managerUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: hr_managerWhereUniqueInput;
    update: XOR<hr_managerUpdateWithoutOrganizationInput, hr_managerUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<hr_managerCreateWithoutOrganizationInput, hr_managerUncheckedCreateWithoutOrganizationInput>;
  };

  export type hr_managerUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: hr_managerWhereUniqueInput;
    data: XOR<hr_managerUpdateWithoutOrganizationInput, hr_managerUncheckedUpdateWithoutOrganizationInput>;
  };

  export type hr_managerUpdateManyWithWhereWithoutOrganizationInput = {
    where: hr_managerScalarWhereInput;
    data: XOR<hr_managerUpdateManyMutationInput, hr_managerUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type hr_managerScalarWhereInput = {
    AND?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
    OR?: hr_managerScalarWhereInput[];
    NOT?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
    id?: UuidFilter<'hr_manager'> | string;
    user_id?: UuidFilter<'hr_manager'> | string;
    organization_id?: UuidFilter<'hr_manager'> | string;
    hire_date?: DateTimeFilter<'hr_manager'> | Date | string;
    hr_manager_department?: StringFilter<'hr_manager'> | string;
    job_title?: StringFilter<'hr_manager'> | string;
    hr_manager_salary?: IntFilter<'hr_manager'> | number;
    created_at?: DateTimeFilter<'hr_manager'> | Date | string;
    updated_at?: DateTimeFilter<'hr_manager'> | Date | string;
  };

  export type userUpsertWithoutOrganizationInput = {
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator?: administratorUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator?: administratorUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ownerUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ownerWhereUniqueInput;
    update: XOR<ownerUpdateWithoutOrganizationInput, ownerUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<ownerCreateWithoutOrganizationInput, ownerUncheckedCreateWithoutOrganizationInput>;
  };

  export type ownerUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ownerWhereUniqueInput;
    data: XOR<ownerUpdateWithoutOrganizationInput, ownerUncheckedUpdateWithoutOrganizationInput>;
  };

  export type ownerUpdateManyWithWhereWithoutOrganizationInput = {
    where: ownerScalarWhereInput;
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type ownerScalarWhereInput = {
    AND?: ownerScalarWhereInput | ownerScalarWhereInput[];
    OR?: ownerScalarWhereInput[];
    NOT?: ownerScalarWhereInput | ownerScalarWhereInput[];
    id?: UuidFilter<'owner'> | string;
    user_id?: UuidFilter<'owner'> | string;
    organization_id?: UuidFilter<'owner'> | string;
    established_date?: DateTimeFilter<'owner'> | Date | string;
    industry?: StringFilter<'owner'> | string;
    total_employees?: IntFilter<'owner'> | number;
    created_at?: DateTimeFilter<'owner'> | Date | string;
    updated_at?: DateTimeFilter<'owner'> | Date | string;
  };

  export type organizationCreateWithoutOwnerInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    administrator?: administratorCreateNestedManyWithoutOrganizationInput;
    employee?: employeeCreateNestedManyWithoutOrganizationInput;
    hr_manager?: hr_managerCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutOwnerInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    administrator?: administratorUncheckedCreateNestedManyWithoutOrganizationInput;
    employee?: employeeUncheckedCreateNestedManyWithoutOrganizationInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutOwnerInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutOwnerInput, organizationUncheckedCreateWithoutOwnerInput>;
  };

  export type userCreateWithoutOwnerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    administrator?: administratorCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOwnerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    administrator?: administratorUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOwnerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
  };

  export type organizationUpsertWithoutOwnerInput = {
    update: XOR<organizationUpdateWithoutOwnerInput, organizationUncheckedUpdateWithoutOwnerInput>;
    create: XOR<organizationCreateWithoutOwnerInput, organizationUncheckedCreateWithoutOwnerInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutOwnerInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutOwnerInput, organizationUncheckedUpdateWithoutOwnerInput>;
  };

  export type organizationUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    administrator?: administratorUpdateManyWithoutOrganizationNestedInput;
    employee?: employeeUpdateManyWithoutOrganizationNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    administrator?: administratorUncheckedUpdateManyWithoutOrganizationNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutOrganizationNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutOwnerInput = {
    update: XOR<userUpdateWithoutOwnerInput, userUncheckedUpdateWithoutOwnerInput>;
    create: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOwnerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOwnerInput, userUncheckedUpdateWithoutOwnerInput>;
  };

  export type userUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator?: administratorUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator?: administratorUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type administratorCreateWithoutUserInput = {
    id?: string;
    hire_date: Date | string;
    administrator_department: string;
    job_title: string;
    administrator_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutAdministratorInput;
  };

  export type administratorUncheckedCreateWithoutUserInput = {
    id?: string;
    organization_id: string;
    hire_date: Date | string;
    administrator_department: string;
    job_title: string;
    administrator_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type administratorCreateOrConnectWithoutUserInput = {
    where: administratorWhereUniqueInput;
    create: XOR<administratorCreateWithoutUserInput, administratorUncheckedCreateWithoutUserInput>;
  };

  export type administratorCreateManyUserInputEnvelope = {
    data: administratorCreateManyUserInput | administratorCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type employeeCreateWithoutUserInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    employee_salary: number;
    employee_department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutUserInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    employee_salary: number;
    employee_department: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeCreateOrConnectWithoutUserInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeCreateManyUserInputEnvelope = {
    data: employeeCreateManyUserInput | employeeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type hr_managerCreateWithoutUserInput = {
    id?: string;
    hire_date: Date | string;
    hr_manager_department: string;
    job_title: string;
    hr_manager_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutHr_managerInput;
  };

  export type hr_managerUncheckedCreateWithoutUserInput = {
    id?: string;
    organization_id: string;
    hire_date: Date | string;
    hr_manager_department: string;
    job_title: string;
    hr_manager_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerCreateOrConnectWithoutUserInput = {
    where: hr_managerWhereUniqueInput;
    create: XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>;
  };

  export type hr_managerCreateManyUserInputEnvelope = {
    data: hr_managerCreateManyUserInput | hr_managerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    administrator?: administratorCreateNestedManyWithoutOrganizationInput;
    employee?: employeeCreateNestedManyWithoutOrganizationInput;
    hr_manager?: hr_managerCreateNestedManyWithoutOrganizationInput;
    owner?: ownerCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    administrator?: administratorUncheckedCreateNestedManyWithoutOrganizationInput;
    employee?: employeeUncheckedCreateNestedManyWithoutOrganizationInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutOrganizationInput;
    owner?: ownerUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationCreateManyUserInputEnvelope = {
    data: organizationCreateManyUserInput | organizationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ownerCreateWithoutUserInput = {
    id?: string;
    established_date: Date | string;
    industry: string;
    total_employees: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutOwnerInput;
  };

  export type ownerUncheckedCreateWithoutUserInput = {
    id?: string;
    organization_id: string;
    established_date: Date | string;
    industry: string;
    total_employees: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateOrConnectWithoutUserInput = {
    where: ownerWhereUniqueInput;
    create: XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>;
  };

  export type ownerCreateManyUserInputEnvelope = {
    data: ownerCreateManyUserInput | ownerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type administratorUpsertWithWhereUniqueWithoutUserInput = {
    where: administratorWhereUniqueInput;
    update: XOR<administratorUpdateWithoutUserInput, administratorUncheckedUpdateWithoutUserInput>;
    create: XOR<administratorCreateWithoutUserInput, administratorUncheckedCreateWithoutUserInput>;
  };

  export type administratorUpdateWithWhereUniqueWithoutUserInput = {
    where: administratorWhereUniqueInput;
    data: XOR<administratorUpdateWithoutUserInput, administratorUncheckedUpdateWithoutUserInput>;
  };

  export type administratorUpdateManyWithWhereWithoutUserInput = {
    where: administratorScalarWhereInput;
    data: XOR<administratorUpdateManyMutationInput, administratorUncheckedUpdateManyWithoutUserInput>;
  };

  export type employeeUpsertWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
  };

  export type employeeUpdateManyWithWhereWithoutUserInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutUserInput>;
  };

  export type hr_managerUpsertWithWhereUniqueWithoutUserInput = {
    where: hr_managerWhereUniqueInput;
    update: XOR<hr_managerUpdateWithoutUserInput, hr_managerUncheckedUpdateWithoutUserInput>;
    create: XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>;
  };

  export type hr_managerUpdateWithWhereUniqueWithoutUserInput = {
    where: hr_managerWhereUniqueInput;
    data: XOR<hr_managerUpdateWithoutUserInput, hr_managerUncheckedUpdateWithoutUserInput>;
  };

  export type hr_managerUpdateManyWithWhereWithoutUserInput = {
    where: hr_managerScalarWhereInput;
    data: XOR<hr_managerUpdateManyMutationInput, hr_managerUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationUpsertWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationUpdateWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateManyWithWhereWithoutUserInput = {
    where: organizationScalarWhereInput;
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[];
    OR?: organizationScalarWhereInput[];
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    address?: StringNullableFilter<'organization'> | string | null;
    city?: StringNullableFilter<'organization'> | string | null;
    state?: StringNullableFilter<'organization'> | string | null;
    country?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
  };

  export type ownerUpsertWithWhereUniqueWithoutUserInput = {
    where: ownerWhereUniqueInput;
    update: XOR<ownerUpdateWithoutUserInput, ownerUncheckedUpdateWithoutUserInput>;
    create: XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>;
  };

  export type ownerUpdateWithWhereUniqueWithoutUserInput = {
    where: ownerWhereUniqueInput;
    data: XOR<ownerUpdateWithoutUserInput, ownerUncheckedUpdateWithoutUserInput>;
  };

  export type ownerUpdateManyWithWhereWithoutUserInput = {
    where: ownerScalarWhereInput;
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyWithoutUserInput>;
  };

  export type administratorCreateManyOrganizationInput = {
    id?: string;
    user_id: string;
    hire_date: Date | string;
    administrator_department: string;
    job_title: string;
    administrator_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeCreateManyOrganizationInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    employee_salary: number;
    employee_department: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerCreateManyOrganizationInput = {
    id?: string;
    user_id: string;
    hire_date: Date | string;
    hr_manager_department: string;
    job_title: string;
    hr_manager_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateManyOrganizationInput = {
    id?: string;
    user_id: string;
    established_date: Date | string;
    industry: string;
    total_employees: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type administratorUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    administrator_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutAdministratorNestedInput;
  };

  export type administratorUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    administrator_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type administratorUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    administrator_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    employee_salary?: IntFieldUpdateOperationsInput | number;
    employee_department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    employee_salary?: IntFieldUpdateOperationsInput | number;
    employee_department?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    employee_salary?: IntFieldUpdateOperationsInput | number;
    employee_department?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    hr_manager_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hr_manager_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutHr_managerNestedInput;
  };

  export type hr_managerUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    hr_manager_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hr_manager_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    hr_manager_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hr_manager_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    established_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: StringFieldUpdateOperationsInput | string;
    total_employees?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutOwnerNestedInput;
  };

  export type ownerUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    established_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: StringFieldUpdateOperationsInput | string;
    total_employees?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    established_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: StringFieldUpdateOperationsInput | string;
    total_employees?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type administratorCreateManyUserInput = {
    id?: string;
    organization_id: string;
    hire_date: Date | string;
    administrator_department: string;
    job_title: string;
    administrator_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeCreateManyUserInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    employee_salary: number;
    employee_department: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerCreateManyUserInput = {
    id?: string;
    organization_id: string;
    hire_date: Date | string;
    hr_manager_department: string;
    job_title: string;
    hr_manager_salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type ownerCreateManyUserInput = {
    id?: string;
    organization_id: string;
    established_date: Date | string;
    industry: string;
    total_employees: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type administratorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    administrator_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutAdministratorNestedInput;
  };

  export type administratorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    administrator_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type administratorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    administrator_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    administrator_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    employee_salary?: IntFieldUpdateOperationsInput | number;
    employee_department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    employee_salary?: IntFieldUpdateOperationsInput | number;
    employee_department?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    employee_salary?: IntFieldUpdateOperationsInput | number;
    employee_department?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    hr_manager_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hr_manager_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutHr_managerNestedInput;
  };

  export type hr_managerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    hr_manager_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hr_manager_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    hr_manager_department?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hr_manager_salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    administrator?: administratorUpdateManyWithoutOrganizationNestedInput;
    employee?: employeeUpdateManyWithoutOrganizationNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutOrganizationNestedInput;
    owner?: ownerUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    administrator?: administratorUncheckedUpdateManyWithoutOrganizationNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutOrganizationNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutOrganizationNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type ownerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    established_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: StringFieldUpdateOperationsInput | string;
    total_employees?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutOwnerNestedInput;
  };

  export type ownerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    established_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: StringFieldUpdateOperationsInput | string;
    total_employees?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    established_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    industry?: StringFieldUpdateOperationsInput | string;
    total_employees?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use administratorDefaultArgs instead
   */
  export type administratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    administratorDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use departmentDefaultArgs instead
   */
  export type departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    departmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use employeeDefaultArgs instead
   */
  export type employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    employeeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use hr_managerDefaultArgs instead
   */
  export type hr_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    hr_managerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use job_positionDefaultArgs instead
   */
  export type job_positionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    job_positionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ownerDefaultArgs instead
   */
  export type ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ownerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use performance_reviewDefaultArgs instead
   */
  export type performance_reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    performance_reviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use roleDefaultArgs instead
   */
  export type roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = roleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use salaryDefaultArgs instead
   */
  export type salaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    salaryDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use scheduleDefaultArgs instead
   */
  export type scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    scheduleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
