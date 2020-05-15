import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    systems: <T = Array<System | null>>(args: { where?: SystemWhereInput | null, orderBy?: SystemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    corporations: <T = Array<Corporation | null>>(args: { where?: CorporationWhereInput | null, orderBy?: CorporationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    statics: <T = Array<Static | null>>(args: { where?: StaticWhereInput | null, orderBy?: StaticOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    factions: <T = Array<Faction | null>>(args: { where?: FactionWhereInput | null, orderBy?: FactionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alliances: <T = Array<Alliance | null>>(args: { where?: AllianceWhereInput | null, orderBy?: AllianceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    system: <T = System | null>(args: { where: SystemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    corporation: <T = Corporation | null>(args: { where: CorporationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    static: <T = Static | null>(args: { where: StaticWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    faction: <T = Faction | null>(args: { where: FactionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    alliance: <T = Alliance | null>(args: { where: AllianceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    systemsConnection: <T = SystemConnection>(args: { where?: SystemWhereInput | null, orderBy?: SystemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    corporationsConnection: <T = CorporationConnection>(args: { where?: CorporationWhereInput | null, orderBy?: CorporationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    staticsConnection: <T = StaticConnection>(args: { where?: StaticWhereInput | null, orderBy?: StaticOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    factionsConnection: <T = FactionConnection>(args: { where?: FactionWhereInput | null, orderBy?: FactionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    alliancesConnection: <T = AllianceConnection>(args: { where?: AllianceWhereInput | null, orderBy?: AllianceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createSystem: <T = System>(args: { data: SystemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCorporation: <T = Corporation>(args: { data: CorporationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStatic: <T = Static>(args: { data: StaticCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFaction: <T = Faction>(args: { data: FactionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAlliance: <T = Alliance>(args: { data: AllianceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSystem: <T = System | null>(args: { data: SystemUpdateInput, where: SystemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCorporation: <T = Corporation | null>(args: { data: CorporationUpdateInput, where: CorporationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateStatic: <T = Static | null>(args: { data: StaticUpdateInput, where: StaticWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateFaction: <T = Faction | null>(args: { data: FactionUpdateInput, where: FactionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateAlliance: <T = Alliance | null>(args: { data: AllianceUpdateInput, where: AllianceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteSystem: <T = System | null>(args: { where: SystemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCorporation: <T = Corporation | null>(args: { where: CorporationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteStatic: <T = Static | null>(args: { where: StaticWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteFaction: <T = Faction | null>(args: { where: FactionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteAlliance: <T = Alliance | null>(args: { where: AllianceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertSystem: <T = System>(args: { where: SystemWhereUniqueInput, create: SystemCreateInput, update: SystemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCorporation: <T = Corporation>(args: { where: CorporationWhereUniqueInput, create: CorporationCreateInput, update: CorporationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStatic: <T = Static>(args: { where: StaticWhereUniqueInput, create: StaticCreateInput, update: StaticUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFaction: <T = Faction>(args: { where: FactionWhereUniqueInput, create: FactionCreateInput, update: FactionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAlliance: <T = Alliance>(args: { where: AllianceWhereUniqueInput, create: AllianceCreateInput, update: AllianceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySystems: <T = BatchPayload>(args: { data: SystemUpdateManyMutationInput, where?: SystemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCorporations: <T = BatchPayload>(args: { data: CorporationUpdateManyMutationInput, where?: CorporationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStatics: <T = BatchPayload>(args: { data: StaticUpdateManyMutationInput, where?: StaticWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFactions: <T = BatchPayload>(args: { data: FactionUpdateManyMutationInput, where?: FactionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAlliances: <T = BatchPayload>(args: { data: AllianceUpdateManyMutationInput, where?: AllianceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySystems: <T = BatchPayload>(args: { where?: SystemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCorporations: <T = BatchPayload>(args: { where?: CorporationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStatics: <T = BatchPayload>(args: { where?: StaticWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFactions: <T = BatchPayload>(args: { where?: FactionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAlliances: <T = BatchPayload>(args: { where?: AllianceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    system: <T = SystemSubscriptionPayload | null>(args: { where?: SystemSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    corporation: <T = CorporationSubscriptionPayload | null>(args: { where?: CorporationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    static: <T = StaticSubscriptionPayload | null>(args: { where?: StaticSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    faction: <T = FactionSubscriptionPayload | null>(args: { where?: FactionSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    alliance: <T = AllianceSubscriptionPayload | null>(args: { where?: AllianceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  System: (where?: SystemWhereInput) => Promise<boolean>
  Corporation: (where?: CorporationWhereInput) => Promise<boolean>
  Static: (where?: StaticWhereInput) => Promise<boolean>
  Faction: (where?: FactionWhereInput) => Promise<boolean>
  Alliance: (where?: AllianceWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAlliance {
  count: Int!
}

type AggregateCorporation {
  count: Int!
}

type AggregateFaction {
  count: Int!
}

type AggregateStatic {
  count: Int!
}

type AggregateSystem {
  count: Int!
}

type Alliance {
  id: Int!
  name: String!
  ticker: String!
  dateFounded: DateTime
  factionId: Faction
}

"""A connection to a list of items."""
type AllianceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AllianceEdge]!
  aggregate: AggregateAlliance!
}

input AllianceCreateInput {
  name: String!
  ticker: String!
  dateFounded: DateTime
  factionId: FactionCreateOneInput
}

input AllianceCreateOneInput {
  create: AllianceCreateInput
  connect: AllianceWhereUniqueInput
}

"""An edge in a connection."""
type AllianceEdge {
  """The item at the end of the edge."""
  node: Alliance!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AllianceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  ticker_ASC
  ticker_DESC
  dateFounded_ASC
  dateFounded_DESC
}

type AlliancePreviousValues {
  id: Int!
  name: String!
  ticker: String!
  dateFounded: DateTime
}

type AllianceSubscriptionPayload {
  mutation: MutationType!
  node: Alliance
  updatedFields: [String!]
  previousValues: AlliancePreviousValues
}

input AllianceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AllianceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AllianceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AllianceSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AllianceWhereInput
}

input AllianceUpdateDataInput {
  name: String
  ticker: String
  dateFounded: DateTime
  factionId: FactionUpdateOneInput
}

input AllianceUpdateInput {
  name: String
  ticker: String
  dateFounded: DateTime
  factionId: FactionUpdateOneInput
}

input AllianceUpdateManyMutationInput {
  name: String
  ticker: String
  dateFounded: DateTime
}

input AllianceUpdateOneInput {
  create: AllianceCreateInput
  connect: AllianceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: AllianceUpdateDataInput
  upsert: AllianceUpsertNestedInput
}

input AllianceUpsertNestedInput {
  update: AllianceUpdateDataInput!
  create: AllianceCreateInput!
}

input AllianceWhereInput {
  """Logical AND on all given filters."""
  AND: [AllianceWhereInput!]

  """Logical OR on all given filters."""
  OR: [AllianceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AllianceWhereInput!]
  id: Int

  """All values that are not equal to given value."""
  id_not: Int

  """All values that are contained in given list."""
  id_in: [Int!]

  """All values that are not contained in given list."""
  id_not_in: [Int!]

  """All values less than the given value."""
  id_lt: Int

  """All values less than or equal the given value."""
  id_lte: Int

  """All values greater than the given value."""
  id_gt: Int

  """All values greater than or equal the given value."""
  id_gte: Int
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  ticker: String

  """All values that are not equal to given value."""
  ticker_not: String

  """All values that are contained in given list."""
  ticker_in: [String!]

  """All values that are not contained in given list."""
  ticker_not_in: [String!]

  """All values less than the given value."""
  ticker_lt: String

  """All values less than or equal the given value."""
  ticker_lte: String

  """All values greater than the given value."""
  ticker_gt: String

  """All values greater than or equal the given value."""
  ticker_gte: String

  """All values containing the given string."""
  ticker_contains: String

  """All values not containing the given string."""
  ticker_not_contains: String

  """All values starting with the given string."""
  ticker_starts_with: String

  """All values not starting with the given string."""
  ticker_not_starts_with: String

  """All values ending with the given string."""
  ticker_ends_with: String

  """All values not ending with the given string."""
  ticker_not_ends_with: String
  dateFounded: DateTime

  """All values that are not equal to given value."""
  dateFounded_not: DateTime

  """All values that are contained in given list."""
  dateFounded_in: [DateTime!]

  """All values that are not contained in given list."""
  dateFounded_not_in: [DateTime!]

  """All values less than the given value."""
  dateFounded_lt: DateTime

  """All values less than or equal the given value."""
  dateFounded_lte: DateTime

  """All values greater than the given value."""
  dateFounded_gt: DateTime

  """All values greater than or equal the given value."""
  dateFounded_gte: DateTime
  factionId: FactionWhereInput
}

input AllianceWhereUniqueInput {
  id: Int
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Corporation {
  id: Int!
  name: String!
  ticker: String!
  dateFounded: DateTime
  memberCount: Int!
  isNPC: Boolean!
  allianceId: Alliance
  factionId: Faction
}

"""A connection to a list of items."""
type CorporationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CorporationEdge]!
  aggregate: AggregateCorporation!
}

input CorporationCreateInput {
  name: String!
  ticker: String!
  dateFounded: DateTime
  memberCount: Int!
  isNPC: Boolean!
  allianceId: AllianceCreateOneInput
  factionId: FactionCreateOneInput
}

"""An edge in a connection."""
type CorporationEdge {
  """The item at the end of the edge."""
  node: Corporation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CorporationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  ticker_ASC
  ticker_DESC
  dateFounded_ASC
  dateFounded_DESC
  memberCount_ASC
  memberCount_DESC
  isNPC_ASC
  isNPC_DESC
}

type CorporationPreviousValues {
  id: Int!
  name: String!
  ticker: String!
  dateFounded: DateTime
  memberCount: Int!
  isNPC: Boolean!
}

type CorporationSubscriptionPayload {
  mutation: MutationType!
  node: Corporation
  updatedFields: [String!]
  previousValues: CorporationPreviousValues
}

input CorporationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CorporationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CorporationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CorporationSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CorporationWhereInput
}

input CorporationUpdateInput {
  name: String
  ticker: String
  dateFounded: DateTime
  memberCount: Int
  isNPC: Boolean
  allianceId: AllianceUpdateOneInput
  factionId: FactionUpdateOneInput
}

input CorporationUpdateManyMutationInput {
  name: String
  ticker: String
  dateFounded: DateTime
  memberCount: Int
  isNPC: Boolean
}

input CorporationWhereInput {
  """Logical AND on all given filters."""
  AND: [CorporationWhereInput!]

  """Logical OR on all given filters."""
  OR: [CorporationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CorporationWhereInput!]
  id: Int

  """All values that are not equal to given value."""
  id_not: Int

  """All values that are contained in given list."""
  id_in: [Int!]

  """All values that are not contained in given list."""
  id_not_in: [Int!]

  """All values less than the given value."""
  id_lt: Int

  """All values less than or equal the given value."""
  id_lte: Int

  """All values greater than the given value."""
  id_gt: Int

  """All values greater than or equal the given value."""
  id_gte: Int
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  ticker: String

  """All values that are not equal to given value."""
  ticker_not: String

  """All values that are contained in given list."""
  ticker_in: [String!]

  """All values that are not contained in given list."""
  ticker_not_in: [String!]

  """All values less than the given value."""
  ticker_lt: String

  """All values less than or equal the given value."""
  ticker_lte: String

  """All values greater than the given value."""
  ticker_gt: String

  """All values greater than or equal the given value."""
  ticker_gte: String

  """All values containing the given string."""
  ticker_contains: String

  """All values not containing the given string."""
  ticker_not_contains: String

  """All values starting with the given string."""
  ticker_starts_with: String

  """All values not starting with the given string."""
  ticker_not_starts_with: String

  """All values ending with the given string."""
  ticker_ends_with: String

  """All values not ending with the given string."""
  ticker_not_ends_with: String
  dateFounded: DateTime

  """All values that are not equal to given value."""
  dateFounded_not: DateTime

  """All values that are contained in given list."""
  dateFounded_in: [DateTime!]

  """All values that are not contained in given list."""
  dateFounded_not_in: [DateTime!]

  """All values less than the given value."""
  dateFounded_lt: DateTime

  """All values less than or equal the given value."""
  dateFounded_lte: DateTime

  """All values greater than the given value."""
  dateFounded_gt: DateTime

  """All values greater than or equal the given value."""
  dateFounded_gte: DateTime
  memberCount: Int

  """All values that are not equal to given value."""
  memberCount_not: Int

  """All values that are contained in given list."""
  memberCount_in: [Int!]

  """All values that are not contained in given list."""
  memberCount_not_in: [Int!]

  """All values less than the given value."""
  memberCount_lt: Int

  """All values less than or equal the given value."""
  memberCount_lte: Int

  """All values greater than the given value."""
  memberCount_gt: Int

  """All values greater than or equal the given value."""
  memberCount_gte: Int
  isNPC: Boolean

  """All values that are not equal to given value."""
  isNPC_not: Boolean
  allianceId: AllianceWhereInput
  factionId: FactionWhereInput
}

input CorporationWhereUniqueInput {
  id: Int
}

scalar DateTime

type Faction {
  id: Int!
  name: String!
  description: String
  sizeFactor: Int!
  stationCount: Int!
  stationSystemCount: Int!
}

"""A connection to a list of items."""
type FactionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FactionEdge]!
  aggregate: AggregateFaction!
}

input FactionCreateInput {
  name: String!
  description: String
  sizeFactor: Int!
  stationCount: Int!
  stationSystemCount: Int!
}

input FactionCreateOneInput {
  create: FactionCreateInput
  connect: FactionWhereUniqueInput
}

"""An edge in a connection."""
type FactionEdge {
  """The item at the end of the edge."""
  node: Faction!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FactionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  sizeFactor_ASC
  sizeFactor_DESC
  stationCount_ASC
  stationCount_DESC
  stationSystemCount_ASC
  stationSystemCount_DESC
}

type FactionPreviousValues {
  id: Int!
  name: String!
  description: String
  sizeFactor: Int!
  stationCount: Int!
  stationSystemCount: Int!
}

type FactionSubscriptionPayload {
  mutation: MutationType!
  node: Faction
  updatedFields: [String!]
  previousValues: FactionPreviousValues
}

input FactionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FactionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FactionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FactionSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FactionWhereInput
}

input FactionUpdateDataInput {
  name: String
  description: String
  sizeFactor: Int
  stationCount: Int
  stationSystemCount: Int
}

input FactionUpdateInput {
  name: String
  description: String
  sizeFactor: Int
  stationCount: Int
  stationSystemCount: Int
}

input FactionUpdateManyMutationInput {
  name: String
  description: String
  sizeFactor: Int
  stationCount: Int
  stationSystemCount: Int
}

input FactionUpdateOneInput {
  create: FactionCreateInput
  connect: FactionWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FactionUpdateDataInput
  upsert: FactionUpsertNestedInput
}

input FactionUpsertNestedInput {
  update: FactionUpdateDataInput!
  create: FactionCreateInput!
}

input FactionWhereInput {
  """Logical AND on all given filters."""
  AND: [FactionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FactionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FactionWhereInput!]
  id: Int

  """All values that are not equal to given value."""
  id_not: Int

  """All values that are contained in given list."""
  id_in: [Int!]

  """All values that are not contained in given list."""
  id_not_in: [Int!]

  """All values less than the given value."""
  id_lt: Int

  """All values less than or equal the given value."""
  id_lte: Int

  """All values greater than the given value."""
  id_gt: Int

  """All values greater than or equal the given value."""
  id_gte: Int
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  sizeFactor: Int

  """All values that are not equal to given value."""
  sizeFactor_not: Int

  """All values that are contained in given list."""
  sizeFactor_in: [Int!]

  """All values that are not contained in given list."""
  sizeFactor_not_in: [Int!]

  """All values less than the given value."""
  sizeFactor_lt: Int

  """All values less than or equal the given value."""
  sizeFactor_lte: Int

  """All values greater than the given value."""
  sizeFactor_gt: Int

  """All values greater than or equal the given value."""
  sizeFactor_gte: Int
  stationCount: Int

  """All values that are not equal to given value."""
  stationCount_not: Int

  """All values that are contained in given list."""
  stationCount_in: [Int!]

  """All values that are not contained in given list."""
  stationCount_not_in: [Int!]

  """All values less than the given value."""
  stationCount_lt: Int

  """All values less than or equal the given value."""
  stationCount_lte: Int

  """All values greater than the given value."""
  stationCount_gt: Int

  """All values greater than or equal the given value."""
  stationCount_gte: Int
  stationSystemCount: Int

  """All values that are not equal to given value."""
  stationSystemCount_not: Int

  """All values that are contained in given list."""
  stationSystemCount_in: [Int!]

  """All values that are not contained in given list."""
  stationSystemCount_not_in: [Int!]

  """All values less than the given value."""
  stationSystemCount_lt: Int

  """All values less than or equal the given value."""
  stationSystemCount_lte: Int

  """All values greater than the given value."""
  stationSystemCount_gt: Int

  """All values greater than or equal the given value."""
  stationSystemCount_gte: Int
}

input FactionWhereUniqueInput {
  id: Int
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createSystem(data: SystemCreateInput!): System!
  createCorporation(data: CorporationCreateInput!): Corporation!
  createStatic(data: StaticCreateInput!): Static!
  createFaction(data: FactionCreateInput!): Faction!
  createAlliance(data: AllianceCreateInput!): Alliance!
  updateSystem(data: SystemUpdateInput!, where: SystemWhereUniqueInput!): System
  updateCorporation(data: CorporationUpdateInput!, where: CorporationWhereUniqueInput!): Corporation
  updateStatic(data: StaticUpdateInput!, where: StaticWhereUniqueInput!): Static
  updateFaction(data: FactionUpdateInput!, where: FactionWhereUniqueInput!): Faction
  updateAlliance(data: AllianceUpdateInput!, where: AllianceWhereUniqueInput!): Alliance
  deleteSystem(where: SystemWhereUniqueInput!): System
  deleteCorporation(where: CorporationWhereUniqueInput!): Corporation
  deleteStatic(where: StaticWhereUniqueInput!): Static
  deleteFaction(where: FactionWhereUniqueInput!): Faction
  deleteAlliance(where: AllianceWhereUniqueInput!): Alliance
  upsertSystem(where: SystemWhereUniqueInput!, create: SystemCreateInput!, update: SystemUpdateInput!): System!
  upsertCorporation(where: CorporationWhereUniqueInput!, create: CorporationCreateInput!, update: CorporationUpdateInput!): Corporation!
  upsertStatic(where: StaticWhereUniqueInput!, create: StaticCreateInput!, update: StaticUpdateInput!): Static!
  upsertFaction(where: FactionWhereUniqueInput!, create: FactionCreateInput!, update: FactionUpdateInput!): Faction!
  upsertAlliance(where: AllianceWhereUniqueInput!, create: AllianceCreateInput!, update: AllianceUpdateInput!): Alliance!
  updateManySystems(data: SystemUpdateManyMutationInput!, where: SystemWhereInput): BatchPayload!
  updateManyCorporations(data: CorporationUpdateManyMutationInput!, where: CorporationWhereInput): BatchPayload!
  updateManyStatics(data: StaticUpdateManyMutationInput!, where: StaticWhereInput): BatchPayload!
  updateManyFactions(data: FactionUpdateManyMutationInput!, where: FactionWhereInput): BatchPayload!
  updateManyAlliances(data: AllianceUpdateManyMutationInput!, where: AllianceWhereInput): BatchPayload!
  deleteManySystems(where: SystemWhereInput): BatchPayload!
  deleteManyCorporations(where: CorporationWhereInput): BatchPayload!
  deleteManyStatics(where: StaticWhereInput): BatchPayload!
  deleteManyFactions(where: FactionWhereInput): BatchPayload!
  deleteManyAlliances(where: AllianceWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  systems(where: SystemWhereInput, orderBy: SystemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [System]!
  corporations(where: CorporationWhereInput, orderBy: CorporationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Corporation]!
  statics(where: StaticWhereInput, orderBy: StaticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Static]!
  factions(where: FactionWhereInput, orderBy: FactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Faction]!
  alliances(where: AllianceWhereInput, orderBy: AllianceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Alliance]!
  system(where: SystemWhereUniqueInput!): System
  corporation(where: CorporationWhereUniqueInput!): Corporation
  static(where: StaticWhereUniqueInput!): Static
  faction(where: FactionWhereUniqueInput!): Faction
  alliance(where: AllianceWhereUniqueInput!): Alliance
  systemsConnection(where: SystemWhereInput, orderBy: SystemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SystemConnection!
  corporationsConnection(where: CorporationWhereInput, orderBy: CorporationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CorporationConnection!
  staticsConnection(where: StaticWhereInput, orderBy: StaticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StaticConnection!
  factionsConnection(where: FactionWhereInput, orderBy: FactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FactionConnection!
  alliancesConnection(where: AllianceWhereInput, orderBy: AllianceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AllianceConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Static {
  id: Int!
  name: String!
  targetClass: Float!
  lifetime: Float!
  maxMass: Float!
  massRegen: Float!
  maxOnePass: Float!
}

"""A connection to a list of items."""
type StaticConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [StaticEdge]!
  aggregate: AggregateStatic!
}

input StaticCreateInput {
  name: String!
  targetClass: Float!
  lifetime: Float!
  maxMass: Float!
  massRegen: Float!
  maxOnePass: Float!
}

input StaticCreateManyInput {
  create: [StaticCreateInput!]
  connect: [StaticWhereUniqueInput!]
}

"""An edge in a connection."""
type StaticEdge {
  """The item at the end of the edge."""
  node: Static!

  """A cursor for use in pagination."""
  cursor: String!
}

enum StaticOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  targetClass_ASC
  targetClass_DESC
  lifetime_ASC
  lifetime_DESC
  maxMass_ASC
  maxMass_DESC
  massRegen_ASC
  massRegen_DESC
  maxOnePass_ASC
  maxOnePass_DESC
}

type StaticPreviousValues {
  id: Int!
  name: String!
  targetClass: Float!
  lifetime: Float!
  maxMass: Float!
  massRegen: Float!
  maxOnePass: Float!
}

input StaticScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [StaticScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [StaticScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StaticScalarWhereInput!]
  id: Int

  """All values that are not equal to given value."""
  id_not: Int

  """All values that are contained in given list."""
  id_in: [Int!]

  """All values that are not contained in given list."""
  id_not_in: [Int!]

  """All values less than the given value."""
  id_lt: Int

  """All values less than or equal the given value."""
  id_lte: Int

  """All values greater than the given value."""
  id_gt: Int

  """All values greater than or equal the given value."""
  id_gte: Int
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  targetClass: Float

  """All values that are not equal to given value."""
  targetClass_not: Float

  """All values that are contained in given list."""
  targetClass_in: [Float!]

  """All values that are not contained in given list."""
  targetClass_not_in: [Float!]

  """All values less than the given value."""
  targetClass_lt: Float

  """All values less than or equal the given value."""
  targetClass_lte: Float

  """All values greater than the given value."""
  targetClass_gt: Float

  """All values greater than or equal the given value."""
  targetClass_gte: Float
  lifetime: Float

  """All values that are not equal to given value."""
  lifetime_not: Float

  """All values that are contained in given list."""
  lifetime_in: [Float!]

  """All values that are not contained in given list."""
  lifetime_not_in: [Float!]

  """All values less than the given value."""
  lifetime_lt: Float

  """All values less than or equal the given value."""
  lifetime_lte: Float

  """All values greater than the given value."""
  lifetime_gt: Float

  """All values greater than or equal the given value."""
  lifetime_gte: Float
  maxMass: Float

  """All values that are not equal to given value."""
  maxMass_not: Float

  """All values that are contained in given list."""
  maxMass_in: [Float!]

  """All values that are not contained in given list."""
  maxMass_not_in: [Float!]

  """All values less than the given value."""
  maxMass_lt: Float

  """All values less than or equal the given value."""
  maxMass_lte: Float

  """All values greater than the given value."""
  maxMass_gt: Float

  """All values greater than or equal the given value."""
  maxMass_gte: Float
  massRegen: Float

  """All values that are not equal to given value."""
  massRegen_not: Float

  """All values that are contained in given list."""
  massRegen_in: [Float!]

  """All values that are not contained in given list."""
  massRegen_not_in: [Float!]

  """All values less than the given value."""
  massRegen_lt: Float

  """All values less than or equal the given value."""
  massRegen_lte: Float

  """All values greater than the given value."""
  massRegen_gt: Float

  """All values greater than or equal the given value."""
  massRegen_gte: Float
  maxOnePass: Float

  """All values that are not equal to given value."""
  maxOnePass_not: Float

  """All values that are contained in given list."""
  maxOnePass_in: [Float!]

  """All values that are not contained in given list."""
  maxOnePass_not_in: [Float!]

  """All values less than the given value."""
  maxOnePass_lt: Float

  """All values less than or equal the given value."""
  maxOnePass_lte: Float

  """All values greater than the given value."""
  maxOnePass_gt: Float

  """All values greater than or equal the given value."""
  maxOnePass_gte: Float
}

type StaticSubscriptionPayload {
  mutation: MutationType!
  node: Static
  updatedFields: [String!]
  previousValues: StaticPreviousValues
}

input StaticSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [StaticSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [StaticSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StaticSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: StaticWhereInput
}

input StaticUpdateDataInput {
  name: String
  targetClass: Float
  lifetime: Float
  maxMass: Float
  massRegen: Float
  maxOnePass: Float
}

input StaticUpdateInput {
  name: String
  targetClass: Float
  lifetime: Float
  maxMass: Float
  massRegen: Float
  maxOnePass: Float
}

input StaticUpdateManyDataInput {
  name: String
  targetClass: Float
  lifetime: Float
  maxMass: Float
  massRegen: Float
  maxOnePass: Float
}

input StaticUpdateManyInput {
  create: [StaticCreateInput!]
  connect: [StaticWhereUniqueInput!]
  set: [StaticWhereUniqueInput!]
  disconnect: [StaticWhereUniqueInput!]
  delete: [StaticWhereUniqueInput!]
  update: [StaticUpdateWithWhereUniqueNestedInput!]
  updateMany: [StaticUpdateManyWithWhereNestedInput!]
  deleteMany: [StaticScalarWhereInput!]
  upsert: [StaticUpsertWithWhereUniqueNestedInput!]
}

input StaticUpdateManyMutationInput {
  name: String
  targetClass: Float
  lifetime: Float
  maxMass: Float
  massRegen: Float
  maxOnePass: Float
}

input StaticUpdateManyWithWhereNestedInput {
  where: StaticScalarWhereInput!
  data: StaticUpdateManyDataInput!
}

input StaticUpdateWithWhereUniqueNestedInput {
  where: StaticWhereUniqueInput!
  data: StaticUpdateDataInput!
}

input StaticUpsertWithWhereUniqueNestedInput {
  where: StaticWhereUniqueInput!
  update: StaticUpdateDataInput!
  create: StaticCreateInput!
}

input StaticWhereInput {
  """Logical AND on all given filters."""
  AND: [StaticWhereInput!]

  """Logical OR on all given filters."""
  OR: [StaticWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StaticWhereInput!]
  id: Int

  """All values that are not equal to given value."""
  id_not: Int

  """All values that are contained in given list."""
  id_in: [Int!]

  """All values that are not contained in given list."""
  id_not_in: [Int!]

  """All values less than the given value."""
  id_lt: Int

  """All values less than or equal the given value."""
  id_lte: Int

  """All values greater than the given value."""
  id_gt: Int

  """All values greater than or equal the given value."""
  id_gte: Int
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  targetClass: Float

  """All values that are not equal to given value."""
  targetClass_not: Float

  """All values that are contained in given list."""
  targetClass_in: [Float!]

  """All values that are not contained in given list."""
  targetClass_not_in: [Float!]

  """All values less than the given value."""
  targetClass_lt: Float

  """All values less than or equal the given value."""
  targetClass_lte: Float

  """All values greater than the given value."""
  targetClass_gt: Float

  """All values greater than or equal the given value."""
  targetClass_gte: Float
  lifetime: Float

  """All values that are not equal to given value."""
  lifetime_not: Float

  """All values that are contained in given list."""
  lifetime_in: [Float!]

  """All values that are not contained in given list."""
  lifetime_not_in: [Float!]

  """All values less than the given value."""
  lifetime_lt: Float

  """All values less than or equal the given value."""
  lifetime_lte: Float

  """All values greater than the given value."""
  lifetime_gt: Float

  """All values greater than or equal the given value."""
  lifetime_gte: Float
  maxMass: Float

  """All values that are not equal to given value."""
  maxMass_not: Float

  """All values that are contained in given list."""
  maxMass_in: [Float!]

  """All values that are not contained in given list."""
  maxMass_not_in: [Float!]

  """All values less than the given value."""
  maxMass_lt: Float

  """All values less than or equal the given value."""
  maxMass_lte: Float

  """All values greater than the given value."""
  maxMass_gt: Float

  """All values greater than or equal the given value."""
  maxMass_gte: Float
  massRegen: Float

  """All values that are not equal to given value."""
  massRegen_not: Float

  """All values that are contained in given list."""
  massRegen_in: [Float!]

  """All values that are not contained in given list."""
  massRegen_not_in: [Float!]

  """All values less than the given value."""
  massRegen_lt: Float

  """All values less than or equal the given value."""
  massRegen_lte: Float

  """All values greater than the given value."""
  massRegen_gt: Float

  """All values greater than or equal the given value."""
  massRegen_gte: Float
  maxOnePass: Float

  """All values that are not equal to given value."""
  maxOnePass_not: Float

  """All values that are contained in given list."""
  maxOnePass_in: [Float!]

  """All values that are not contained in given list."""
  maxOnePass_not_in: [Float!]

  """All values less than the given value."""
  maxOnePass_lt: Float

  """All values less than or equal the given value."""
  maxOnePass_lte: Float

  """All values greater than the given value."""
  maxOnePass_gt: Float

  """All values greater than or equal the given value."""
  maxOnePass_gte: Float
}

input StaticWhereUniqueInput {
  id: Int
}

type Subscription {
  system(where: SystemSubscriptionWhereInput): SystemSubscriptionPayload
  corporation(where: CorporationSubscriptionWhereInput): CorporationSubscriptionPayload
  static(where: StaticSubscriptionWhereInput): StaticSubscriptionPayload
  faction(where: FactionSubscriptionWhereInput): FactionSubscriptionPayload
  alliance(where: AllianceSubscriptionWhereInput): AllianceSubscriptionPayload
}

type System {
  id: Int!
  constellationId: Int
  starId: Int
  regionId: Int
  systemName: String!
  security: String
  trueSec: Float!
  securityStatus: Float!
  securityClass: String
  effect: String
  statics(where: StaticWhereInput, orderBy: StaticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Static!]
}

"""A connection to a list of items."""
type SystemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SystemEdge]!
  aggregate: AggregateSystem!
}

input SystemCreateInput {
  constellationId: Int
  starId: Int
  regionId: Int
  systemName: String!
  security: String
  trueSec: Float!
  securityStatus: Float!
  securityClass: String
  effect: String
  statics: StaticCreateManyInput
}

"""An edge in a connection."""
type SystemEdge {
  """The item at the end of the edge."""
  node: System!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SystemOrderByInput {
  id_ASC
  id_DESC
  constellationId_ASC
  constellationId_DESC
  starId_ASC
  starId_DESC
  regionId_ASC
  regionId_DESC
  systemName_ASC
  systemName_DESC
  security_ASC
  security_DESC
  trueSec_ASC
  trueSec_DESC
  securityStatus_ASC
  securityStatus_DESC
  securityClass_ASC
  securityClass_DESC
  effect_ASC
  effect_DESC
}

type SystemPreviousValues {
  id: Int!
  constellationId: Int
  starId: Int
  regionId: Int
  systemName: String!
  security: String
  trueSec: Float!
  securityStatus: Float!
  securityClass: String
  effect: String
}

type SystemSubscriptionPayload {
  mutation: MutationType!
  node: System
  updatedFields: [String!]
  previousValues: SystemPreviousValues
}

input SystemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SystemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SystemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SystemSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SystemWhereInput
}

input SystemUpdateInput {
  constellationId: Int
  starId: Int
  regionId: Int
  systemName: String
  security: String
  trueSec: Float
  securityStatus: Float
  securityClass: String
  effect: String
  statics: StaticUpdateManyInput
}

input SystemUpdateManyMutationInput {
  constellationId: Int
  starId: Int
  regionId: Int
  systemName: String
  security: String
  trueSec: Float
  securityStatus: Float
  securityClass: String
  effect: String
}

input SystemWhereInput {
  """Logical AND on all given filters."""
  AND: [SystemWhereInput!]

  """Logical OR on all given filters."""
  OR: [SystemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SystemWhereInput!]
  id: Int

  """All values that are not equal to given value."""
  id_not: Int

  """All values that are contained in given list."""
  id_in: [Int!]

  """All values that are not contained in given list."""
  id_not_in: [Int!]

  """All values less than the given value."""
  id_lt: Int

  """All values less than or equal the given value."""
  id_lte: Int

  """All values greater than the given value."""
  id_gt: Int

  """All values greater than or equal the given value."""
  id_gte: Int
  constellationId: Int

  """All values that are not equal to given value."""
  constellationId_not: Int

  """All values that are contained in given list."""
  constellationId_in: [Int!]

  """All values that are not contained in given list."""
  constellationId_not_in: [Int!]

  """All values less than the given value."""
  constellationId_lt: Int

  """All values less than or equal the given value."""
  constellationId_lte: Int

  """All values greater than the given value."""
  constellationId_gt: Int

  """All values greater than or equal the given value."""
  constellationId_gte: Int
  starId: Int

  """All values that are not equal to given value."""
  starId_not: Int

  """All values that are contained in given list."""
  starId_in: [Int!]

  """All values that are not contained in given list."""
  starId_not_in: [Int!]

  """All values less than the given value."""
  starId_lt: Int

  """All values less than or equal the given value."""
  starId_lte: Int

  """All values greater than the given value."""
  starId_gt: Int

  """All values greater than or equal the given value."""
  starId_gte: Int
  regionId: Int

  """All values that are not equal to given value."""
  regionId_not: Int

  """All values that are contained in given list."""
  regionId_in: [Int!]

  """All values that are not contained in given list."""
  regionId_not_in: [Int!]

  """All values less than the given value."""
  regionId_lt: Int

  """All values less than or equal the given value."""
  regionId_lte: Int

  """All values greater than the given value."""
  regionId_gt: Int

  """All values greater than or equal the given value."""
  regionId_gte: Int
  systemName: String

  """All values that are not equal to given value."""
  systemName_not: String

  """All values that are contained in given list."""
  systemName_in: [String!]

  """All values that are not contained in given list."""
  systemName_not_in: [String!]

  """All values less than the given value."""
  systemName_lt: String

  """All values less than or equal the given value."""
  systemName_lte: String

  """All values greater than the given value."""
  systemName_gt: String

  """All values greater than or equal the given value."""
  systemName_gte: String

  """All values containing the given string."""
  systemName_contains: String

  """All values not containing the given string."""
  systemName_not_contains: String

  """All values starting with the given string."""
  systemName_starts_with: String

  """All values not starting with the given string."""
  systemName_not_starts_with: String

  """All values ending with the given string."""
  systemName_ends_with: String

  """All values not ending with the given string."""
  systemName_not_ends_with: String
  security: String

  """All values that are not equal to given value."""
  security_not: String

  """All values that are contained in given list."""
  security_in: [String!]

  """All values that are not contained in given list."""
  security_not_in: [String!]

  """All values less than the given value."""
  security_lt: String

  """All values less than or equal the given value."""
  security_lte: String

  """All values greater than the given value."""
  security_gt: String

  """All values greater than or equal the given value."""
  security_gte: String

  """All values containing the given string."""
  security_contains: String

  """All values not containing the given string."""
  security_not_contains: String

  """All values starting with the given string."""
  security_starts_with: String

  """All values not starting with the given string."""
  security_not_starts_with: String

  """All values ending with the given string."""
  security_ends_with: String

  """All values not ending with the given string."""
  security_not_ends_with: String
  trueSec: Float

  """All values that are not equal to given value."""
  trueSec_not: Float

  """All values that are contained in given list."""
  trueSec_in: [Float!]

  """All values that are not contained in given list."""
  trueSec_not_in: [Float!]

  """All values less than the given value."""
  trueSec_lt: Float

  """All values less than or equal the given value."""
  trueSec_lte: Float

  """All values greater than the given value."""
  trueSec_gt: Float

  """All values greater than or equal the given value."""
  trueSec_gte: Float
  securityStatus: Float

  """All values that are not equal to given value."""
  securityStatus_not: Float

  """All values that are contained in given list."""
  securityStatus_in: [Float!]

  """All values that are not contained in given list."""
  securityStatus_not_in: [Float!]

  """All values less than the given value."""
  securityStatus_lt: Float

  """All values less than or equal the given value."""
  securityStatus_lte: Float

  """All values greater than the given value."""
  securityStatus_gt: Float

  """All values greater than or equal the given value."""
  securityStatus_gte: Float
  securityClass: String

  """All values that are not equal to given value."""
  securityClass_not: String

  """All values that are contained in given list."""
  securityClass_in: [String!]

  """All values that are not contained in given list."""
  securityClass_not_in: [String!]

  """All values less than the given value."""
  securityClass_lt: String

  """All values less than or equal the given value."""
  securityClass_lte: String

  """All values greater than the given value."""
  securityClass_gt: String

  """All values greater than or equal the given value."""
  securityClass_gte: String

  """All values containing the given string."""
  securityClass_contains: String

  """All values not containing the given string."""
  securityClass_not_contains: String

  """All values starting with the given string."""
  securityClass_starts_with: String

  """All values not starting with the given string."""
  securityClass_not_starts_with: String

  """All values ending with the given string."""
  securityClass_ends_with: String

  """All values not ending with the given string."""
  securityClass_not_ends_with: String
  effect: String

  """All values that are not equal to given value."""
  effect_not: String

  """All values that are contained in given list."""
  effect_in: [String!]

  """All values that are not contained in given list."""
  effect_not_in: [String!]

  """All values less than the given value."""
  effect_lt: String

  """All values less than or equal the given value."""
  effect_lte: String

  """All values greater than the given value."""
  effect_gt: String

  """All values greater than or equal the given value."""
  effect_gte: String

  """All values containing the given string."""
  effect_contains: String

  """All values not containing the given string."""
  effect_not_contains: String

  """All values starting with the given string."""
  effect_starts_with: String

  """All values not starting with the given string."""
  effect_not_starts_with: String

  """All values ending with the given string."""
  effect_ends_with: String

  """All values not ending with the given string."""
  effect_not_ends_with: String
  statics_every: StaticWhereInput
  statics_some: StaticWhereInput
  statics_none: StaticWhereInput
}

input SystemWhereUniqueInput {
  id: Int
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type AllianceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'ticker_ASC' |
  'ticker_DESC' |
  'dateFounded_ASC' |
  'dateFounded_DESC'

export type CorporationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'ticker_ASC' |
  'ticker_DESC' |
  'dateFounded_ASC' |
  'dateFounded_DESC' |
  'memberCount_ASC' |
  'memberCount_DESC' |
  'isNPC_ASC' |
  'isNPC_DESC'

export type FactionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'sizeFactor_ASC' |
  'sizeFactor_DESC' |
  'stationCount_ASC' |
  'stationCount_DESC' |
  'stationSystemCount_ASC' |
  'stationSystemCount_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type StaticOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'targetClass_ASC' |
  'targetClass_DESC' |
  'lifetime_ASC' |
  'lifetime_DESC' |
  'maxMass_ASC' |
  'maxMass_DESC' |
  'massRegen_ASC' |
  'massRegen_DESC' |
  'maxOnePass_ASC' |
  'maxOnePass_DESC'

export type SystemOrderByInput =   'id_ASC' |
  'id_DESC' |
  'constellationId_ASC' |
  'constellationId_DESC' |
  'starId_ASC' |
  'starId_DESC' |
  'regionId_ASC' |
  'regionId_DESC' |
  'systemName_ASC' |
  'systemName_DESC' |
  'security_ASC' |
  'security_DESC' |
  'trueSec_ASC' |
  'trueSec_DESC' |
  'securityStatus_ASC' |
  'securityStatus_DESC' |
  'securityClass_ASC' |
  'securityClass_DESC' |
  'effect_ASC' |
  'effect_DESC'

export interface AllianceCreateInput {
  name: String
  ticker: String
  dateFounded?: DateTime | null
  factionId?: FactionCreateOneInput | null
}

export interface AllianceCreateOneInput {
  create?: AllianceCreateInput | null
  connect?: AllianceWhereUniqueInput | null
}

export interface AllianceSubscriptionWhereInput {
  AND?: AllianceSubscriptionWhereInput[] | AllianceSubscriptionWhereInput | null
  OR?: AllianceSubscriptionWhereInput[] | AllianceSubscriptionWhereInput | null
  NOT?: AllianceSubscriptionWhereInput[] | AllianceSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: AllianceWhereInput | null
}

export interface AllianceUpdateDataInput {
  name?: String | null
  ticker?: String | null
  dateFounded?: DateTime | null
  factionId?: FactionUpdateOneInput | null
}

export interface AllianceUpdateInput {
  name?: String | null
  ticker?: String | null
  dateFounded?: DateTime | null
  factionId?: FactionUpdateOneInput | null
}

export interface AllianceUpdateManyMutationInput {
  name?: String | null
  ticker?: String | null
  dateFounded?: DateTime | null
}

export interface AllianceUpdateOneInput {
  create?: AllianceCreateInput | null
  connect?: AllianceWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: AllianceUpdateDataInput | null
  upsert?: AllianceUpsertNestedInput | null
}

export interface AllianceUpsertNestedInput {
  update: AllianceUpdateDataInput
  create: AllianceCreateInput
}

export interface AllianceWhereInput {
  AND?: AllianceWhereInput[] | AllianceWhereInput | null
  OR?: AllianceWhereInput[] | AllianceWhereInput | null
  NOT?: AllianceWhereInput[] | AllianceWhereInput | null
  id?: Int | null
  id_not?: Int | null
  id_in?: Int[] | Int | null
  id_not_in?: Int[] | Int | null
  id_lt?: Int | null
  id_lte?: Int | null
  id_gt?: Int | null
  id_gte?: Int | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  ticker?: String | null
  ticker_not?: String | null
  ticker_in?: String[] | String | null
  ticker_not_in?: String[] | String | null
  ticker_lt?: String | null
  ticker_lte?: String | null
  ticker_gt?: String | null
  ticker_gte?: String | null
  ticker_contains?: String | null
  ticker_not_contains?: String | null
  ticker_starts_with?: String | null
  ticker_not_starts_with?: String | null
  ticker_ends_with?: String | null
  ticker_not_ends_with?: String | null
  dateFounded?: DateTime | null
  dateFounded_not?: DateTime | null
  dateFounded_in?: DateTime[] | DateTime | null
  dateFounded_not_in?: DateTime[] | DateTime | null
  dateFounded_lt?: DateTime | null
  dateFounded_lte?: DateTime | null
  dateFounded_gt?: DateTime | null
  dateFounded_gte?: DateTime | null
  factionId?: FactionWhereInput | null
}

export interface AllianceWhereUniqueInput {
  id?: Int | null
}

export interface CorporationCreateInput {
  name: String
  ticker: String
  dateFounded?: DateTime | null
  memberCount: Int
  isNPC: Boolean
  allianceId?: AllianceCreateOneInput | null
  factionId?: FactionCreateOneInput | null
}

export interface CorporationSubscriptionWhereInput {
  AND?: CorporationSubscriptionWhereInput[] | CorporationSubscriptionWhereInput | null
  OR?: CorporationSubscriptionWhereInput[] | CorporationSubscriptionWhereInput | null
  NOT?: CorporationSubscriptionWhereInput[] | CorporationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CorporationWhereInput | null
}

export interface CorporationUpdateInput {
  name?: String | null
  ticker?: String | null
  dateFounded?: DateTime | null
  memberCount?: Int | null
  isNPC?: Boolean | null
  allianceId?: AllianceUpdateOneInput | null
  factionId?: FactionUpdateOneInput | null
}

export interface CorporationUpdateManyMutationInput {
  name?: String | null
  ticker?: String | null
  dateFounded?: DateTime | null
  memberCount?: Int | null
  isNPC?: Boolean | null
}

export interface CorporationWhereInput {
  AND?: CorporationWhereInput[] | CorporationWhereInput | null
  OR?: CorporationWhereInput[] | CorporationWhereInput | null
  NOT?: CorporationWhereInput[] | CorporationWhereInput | null
  id?: Int | null
  id_not?: Int | null
  id_in?: Int[] | Int | null
  id_not_in?: Int[] | Int | null
  id_lt?: Int | null
  id_lte?: Int | null
  id_gt?: Int | null
  id_gte?: Int | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  ticker?: String | null
  ticker_not?: String | null
  ticker_in?: String[] | String | null
  ticker_not_in?: String[] | String | null
  ticker_lt?: String | null
  ticker_lte?: String | null
  ticker_gt?: String | null
  ticker_gte?: String | null
  ticker_contains?: String | null
  ticker_not_contains?: String | null
  ticker_starts_with?: String | null
  ticker_not_starts_with?: String | null
  ticker_ends_with?: String | null
  ticker_not_ends_with?: String | null
  dateFounded?: DateTime | null
  dateFounded_not?: DateTime | null
  dateFounded_in?: DateTime[] | DateTime | null
  dateFounded_not_in?: DateTime[] | DateTime | null
  dateFounded_lt?: DateTime | null
  dateFounded_lte?: DateTime | null
  dateFounded_gt?: DateTime | null
  dateFounded_gte?: DateTime | null
  memberCount?: Int | null
  memberCount_not?: Int | null
  memberCount_in?: Int[] | Int | null
  memberCount_not_in?: Int[] | Int | null
  memberCount_lt?: Int | null
  memberCount_lte?: Int | null
  memberCount_gt?: Int | null
  memberCount_gte?: Int | null
  isNPC?: Boolean | null
  isNPC_not?: Boolean | null
  allianceId?: AllianceWhereInput | null
  factionId?: FactionWhereInput | null
}

export interface CorporationWhereUniqueInput {
  id?: Int | null
}

export interface FactionCreateInput {
  name: String
  description?: String | null
  sizeFactor: Int
  stationCount: Int
  stationSystemCount: Int
}

export interface FactionCreateOneInput {
  create?: FactionCreateInput | null
  connect?: FactionWhereUniqueInput | null
}

export interface FactionSubscriptionWhereInput {
  AND?: FactionSubscriptionWhereInput[] | FactionSubscriptionWhereInput | null
  OR?: FactionSubscriptionWhereInput[] | FactionSubscriptionWhereInput | null
  NOT?: FactionSubscriptionWhereInput[] | FactionSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: FactionWhereInput | null
}

export interface FactionUpdateDataInput {
  name?: String | null
  description?: String | null
  sizeFactor?: Int | null
  stationCount?: Int | null
  stationSystemCount?: Int | null
}

export interface FactionUpdateInput {
  name?: String | null
  description?: String | null
  sizeFactor?: Int | null
  stationCount?: Int | null
  stationSystemCount?: Int | null
}

export interface FactionUpdateManyMutationInput {
  name?: String | null
  description?: String | null
  sizeFactor?: Int | null
  stationCount?: Int | null
  stationSystemCount?: Int | null
}

export interface FactionUpdateOneInput {
  create?: FactionCreateInput | null
  connect?: FactionWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: FactionUpdateDataInput | null
  upsert?: FactionUpsertNestedInput | null
}

export interface FactionUpsertNestedInput {
  update: FactionUpdateDataInput
  create: FactionCreateInput
}

export interface FactionWhereInput {
  AND?: FactionWhereInput[] | FactionWhereInput | null
  OR?: FactionWhereInput[] | FactionWhereInput | null
  NOT?: FactionWhereInput[] | FactionWhereInput | null
  id?: Int | null
  id_not?: Int | null
  id_in?: Int[] | Int | null
  id_not_in?: Int[] | Int | null
  id_lt?: Int | null
  id_lte?: Int | null
  id_gt?: Int | null
  id_gte?: Int | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  sizeFactor?: Int | null
  sizeFactor_not?: Int | null
  sizeFactor_in?: Int[] | Int | null
  sizeFactor_not_in?: Int[] | Int | null
  sizeFactor_lt?: Int | null
  sizeFactor_lte?: Int | null
  sizeFactor_gt?: Int | null
  sizeFactor_gte?: Int | null
  stationCount?: Int | null
  stationCount_not?: Int | null
  stationCount_in?: Int[] | Int | null
  stationCount_not_in?: Int[] | Int | null
  stationCount_lt?: Int | null
  stationCount_lte?: Int | null
  stationCount_gt?: Int | null
  stationCount_gte?: Int | null
  stationSystemCount?: Int | null
  stationSystemCount_not?: Int | null
  stationSystemCount_in?: Int[] | Int | null
  stationSystemCount_not_in?: Int[] | Int | null
  stationSystemCount_lt?: Int | null
  stationSystemCount_lte?: Int | null
  stationSystemCount_gt?: Int | null
  stationSystemCount_gte?: Int | null
}

export interface FactionWhereUniqueInput {
  id?: Int | null
}

export interface StaticCreateInput {
  name: String
  targetClass: Float
  lifetime: Float
  maxMass: Float
  massRegen: Float
  maxOnePass: Float
}

export interface StaticCreateManyInput {
  create?: StaticCreateInput[] | StaticCreateInput | null
  connect?: StaticWhereUniqueInput[] | StaticWhereUniqueInput | null
}

export interface StaticScalarWhereInput {
  AND?: StaticScalarWhereInput[] | StaticScalarWhereInput | null
  OR?: StaticScalarWhereInput[] | StaticScalarWhereInput | null
  NOT?: StaticScalarWhereInput[] | StaticScalarWhereInput | null
  id?: Int | null
  id_not?: Int | null
  id_in?: Int[] | Int | null
  id_not_in?: Int[] | Int | null
  id_lt?: Int | null
  id_lte?: Int | null
  id_gt?: Int | null
  id_gte?: Int | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  targetClass?: Float | null
  targetClass_not?: Float | null
  targetClass_in?: Float[] | Float | null
  targetClass_not_in?: Float[] | Float | null
  targetClass_lt?: Float | null
  targetClass_lte?: Float | null
  targetClass_gt?: Float | null
  targetClass_gte?: Float | null
  lifetime?: Float | null
  lifetime_not?: Float | null
  lifetime_in?: Float[] | Float | null
  lifetime_not_in?: Float[] | Float | null
  lifetime_lt?: Float | null
  lifetime_lte?: Float | null
  lifetime_gt?: Float | null
  lifetime_gte?: Float | null
  maxMass?: Float | null
  maxMass_not?: Float | null
  maxMass_in?: Float[] | Float | null
  maxMass_not_in?: Float[] | Float | null
  maxMass_lt?: Float | null
  maxMass_lte?: Float | null
  maxMass_gt?: Float | null
  maxMass_gte?: Float | null
  massRegen?: Float | null
  massRegen_not?: Float | null
  massRegen_in?: Float[] | Float | null
  massRegen_not_in?: Float[] | Float | null
  massRegen_lt?: Float | null
  massRegen_lte?: Float | null
  massRegen_gt?: Float | null
  massRegen_gte?: Float | null
  maxOnePass?: Float | null
  maxOnePass_not?: Float | null
  maxOnePass_in?: Float[] | Float | null
  maxOnePass_not_in?: Float[] | Float | null
  maxOnePass_lt?: Float | null
  maxOnePass_lte?: Float | null
  maxOnePass_gt?: Float | null
  maxOnePass_gte?: Float | null
}

export interface StaticSubscriptionWhereInput {
  AND?: StaticSubscriptionWhereInput[] | StaticSubscriptionWhereInput | null
  OR?: StaticSubscriptionWhereInput[] | StaticSubscriptionWhereInput | null
  NOT?: StaticSubscriptionWhereInput[] | StaticSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: StaticWhereInput | null
}

export interface StaticUpdateDataInput {
  name?: String | null
  targetClass?: Float | null
  lifetime?: Float | null
  maxMass?: Float | null
  massRegen?: Float | null
  maxOnePass?: Float | null
}

export interface StaticUpdateInput {
  name?: String | null
  targetClass?: Float | null
  lifetime?: Float | null
  maxMass?: Float | null
  massRegen?: Float | null
  maxOnePass?: Float | null
}

export interface StaticUpdateManyDataInput {
  name?: String | null
  targetClass?: Float | null
  lifetime?: Float | null
  maxMass?: Float | null
  massRegen?: Float | null
  maxOnePass?: Float | null
}

export interface StaticUpdateManyInput {
  create?: StaticCreateInput[] | StaticCreateInput | null
  connect?: StaticWhereUniqueInput[] | StaticWhereUniqueInput | null
  set?: StaticWhereUniqueInput[] | StaticWhereUniqueInput | null
  disconnect?: StaticWhereUniqueInput[] | StaticWhereUniqueInput | null
  delete?: StaticWhereUniqueInput[] | StaticWhereUniqueInput | null
  update?: StaticUpdateWithWhereUniqueNestedInput[] | StaticUpdateWithWhereUniqueNestedInput | null
  updateMany?: StaticUpdateManyWithWhereNestedInput[] | StaticUpdateManyWithWhereNestedInput | null
  deleteMany?: StaticScalarWhereInput[] | StaticScalarWhereInput | null
  upsert?: StaticUpsertWithWhereUniqueNestedInput[] | StaticUpsertWithWhereUniqueNestedInput | null
}

export interface StaticUpdateManyMutationInput {
  name?: String | null
  targetClass?: Float | null
  lifetime?: Float | null
  maxMass?: Float | null
  massRegen?: Float | null
  maxOnePass?: Float | null
}

export interface StaticUpdateManyWithWhereNestedInput {
  where: StaticScalarWhereInput
  data: StaticUpdateManyDataInput
}

export interface StaticUpdateWithWhereUniqueNestedInput {
  where: StaticWhereUniqueInput
  data: StaticUpdateDataInput
}

export interface StaticUpsertWithWhereUniqueNestedInput {
  where: StaticWhereUniqueInput
  update: StaticUpdateDataInput
  create: StaticCreateInput
}

export interface StaticWhereInput {
  AND?: StaticWhereInput[] | StaticWhereInput | null
  OR?: StaticWhereInput[] | StaticWhereInput | null
  NOT?: StaticWhereInput[] | StaticWhereInput | null
  id?: Int | null
  id_not?: Int | null
  id_in?: Int[] | Int | null
  id_not_in?: Int[] | Int | null
  id_lt?: Int | null
  id_lte?: Int | null
  id_gt?: Int | null
  id_gte?: Int | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  targetClass?: Float | null
  targetClass_not?: Float | null
  targetClass_in?: Float[] | Float | null
  targetClass_not_in?: Float[] | Float | null
  targetClass_lt?: Float | null
  targetClass_lte?: Float | null
  targetClass_gt?: Float | null
  targetClass_gte?: Float | null
  lifetime?: Float | null
  lifetime_not?: Float | null
  lifetime_in?: Float[] | Float | null
  lifetime_not_in?: Float[] | Float | null
  lifetime_lt?: Float | null
  lifetime_lte?: Float | null
  lifetime_gt?: Float | null
  lifetime_gte?: Float | null
  maxMass?: Float | null
  maxMass_not?: Float | null
  maxMass_in?: Float[] | Float | null
  maxMass_not_in?: Float[] | Float | null
  maxMass_lt?: Float | null
  maxMass_lte?: Float | null
  maxMass_gt?: Float | null
  maxMass_gte?: Float | null
  massRegen?: Float | null
  massRegen_not?: Float | null
  massRegen_in?: Float[] | Float | null
  massRegen_not_in?: Float[] | Float | null
  massRegen_lt?: Float | null
  massRegen_lte?: Float | null
  massRegen_gt?: Float | null
  massRegen_gte?: Float | null
  maxOnePass?: Float | null
  maxOnePass_not?: Float | null
  maxOnePass_in?: Float[] | Float | null
  maxOnePass_not_in?: Float[] | Float | null
  maxOnePass_lt?: Float | null
  maxOnePass_lte?: Float | null
  maxOnePass_gt?: Float | null
  maxOnePass_gte?: Float | null
}

export interface StaticWhereUniqueInput {
  id?: Int | null
}

export interface SystemCreateInput {
  constellationId?: Int | null
  starId?: Int | null
  regionId?: Int | null
  systemName: String
  security?: String | null
  trueSec: Float
  securityStatus: Float
  securityClass?: String | null
  effect?: String | null
  statics?: StaticCreateManyInput | null
}

export interface SystemSubscriptionWhereInput {
  AND?: SystemSubscriptionWhereInput[] | SystemSubscriptionWhereInput | null
  OR?: SystemSubscriptionWhereInput[] | SystemSubscriptionWhereInput | null
  NOT?: SystemSubscriptionWhereInput[] | SystemSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SystemWhereInput | null
}

export interface SystemUpdateInput {
  constellationId?: Int | null
  starId?: Int | null
  regionId?: Int | null
  systemName?: String | null
  security?: String | null
  trueSec?: Float | null
  securityStatus?: Float | null
  securityClass?: String | null
  effect?: String | null
  statics?: StaticUpdateManyInput | null
}

export interface SystemUpdateManyMutationInput {
  constellationId?: Int | null
  starId?: Int | null
  regionId?: Int | null
  systemName?: String | null
  security?: String | null
  trueSec?: Float | null
  securityStatus?: Float | null
  securityClass?: String | null
  effect?: String | null
}

export interface SystemWhereInput {
  AND?: SystemWhereInput[] | SystemWhereInput | null
  OR?: SystemWhereInput[] | SystemWhereInput | null
  NOT?: SystemWhereInput[] | SystemWhereInput | null
  id?: Int | null
  id_not?: Int | null
  id_in?: Int[] | Int | null
  id_not_in?: Int[] | Int | null
  id_lt?: Int | null
  id_lte?: Int | null
  id_gt?: Int | null
  id_gte?: Int | null
  constellationId?: Int | null
  constellationId_not?: Int | null
  constellationId_in?: Int[] | Int | null
  constellationId_not_in?: Int[] | Int | null
  constellationId_lt?: Int | null
  constellationId_lte?: Int | null
  constellationId_gt?: Int | null
  constellationId_gte?: Int | null
  starId?: Int | null
  starId_not?: Int | null
  starId_in?: Int[] | Int | null
  starId_not_in?: Int[] | Int | null
  starId_lt?: Int | null
  starId_lte?: Int | null
  starId_gt?: Int | null
  starId_gte?: Int | null
  regionId?: Int | null
  regionId_not?: Int | null
  regionId_in?: Int[] | Int | null
  regionId_not_in?: Int[] | Int | null
  regionId_lt?: Int | null
  regionId_lte?: Int | null
  regionId_gt?: Int | null
  regionId_gte?: Int | null
  systemName?: String | null
  systemName_not?: String | null
  systemName_in?: String[] | String | null
  systemName_not_in?: String[] | String | null
  systemName_lt?: String | null
  systemName_lte?: String | null
  systemName_gt?: String | null
  systemName_gte?: String | null
  systemName_contains?: String | null
  systemName_not_contains?: String | null
  systemName_starts_with?: String | null
  systemName_not_starts_with?: String | null
  systemName_ends_with?: String | null
  systemName_not_ends_with?: String | null
  security?: String | null
  security_not?: String | null
  security_in?: String[] | String | null
  security_not_in?: String[] | String | null
  security_lt?: String | null
  security_lte?: String | null
  security_gt?: String | null
  security_gte?: String | null
  security_contains?: String | null
  security_not_contains?: String | null
  security_starts_with?: String | null
  security_not_starts_with?: String | null
  security_ends_with?: String | null
  security_not_ends_with?: String | null
  trueSec?: Float | null
  trueSec_not?: Float | null
  trueSec_in?: Float[] | Float | null
  trueSec_not_in?: Float[] | Float | null
  trueSec_lt?: Float | null
  trueSec_lte?: Float | null
  trueSec_gt?: Float | null
  trueSec_gte?: Float | null
  securityStatus?: Float | null
  securityStatus_not?: Float | null
  securityStatus_in?: Float[] | Float | null
  securityStatus_not_in?: Float[] | Float | null
  securityStatus_lt?: Float | null
  securityStatus_lte?: Float | null
  securityStatus_gt?: Float | null
  securityStatus_gte?: Float | null
  securityClass?: String | null
  securityClass_not?: String | null
  securityClass_in?: String[] | String | null
  securityClass_not_in?: String[] | String | null
  securityClass_lt?: String | null
  securityClass_lte?: String | null
  securityClass_gt?: String | null
  securityClass_gte?: String | null
  securityClass_contains?: String | null
  securityClass_not_contains?: String | null
  securityClass_starts_with?: String | null
  securityClass_not_starts_with?: String | null
  securityClass_ends_with?: String | null
  securityClass_not_ends_with?: String | null
  effect?: String | null
  effect_not?: String | null
  effect_in?: String[] | String | null
  effect_not_in?: String[] | String | null
  effect_lt?: String | null
  effect_lte?: String | null
  effect_gt?: String | null
  effect_gte?: String | null
  effect_contains?: String | null
  effect_not_contains?: String | null
  effect_starts_with?: String | null
  effect_not_starts_with?: String | null
  effect_ends_with?: String | null
  effect_not_ends_with?: String | null
  statics_every?: StaticWhereInput | null
  statics_some?: StaticWhereInput | null
  statics_none?: StaticWhereInput | null
}

export interface SystemWhereUniqueInput {
  id?: Int | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateAlliance {
  count: Int
}

export interface AggregateCorporation {
  count: Int
}

export interface AggregateFaction {
  count: Int
}

export interface AggregateStatic {
  count: Int
}

export interface AggregateSystem {
  count: Int
}

export interface Alliance {
  id: Int
  name: String
  ticker: String
  dateFounded?: DateTime | null
  factionId?: Faction | null
}

/*
 * A connection to a list of items.

 */
export interface AllianceConnection {
  pageInfo: PageInfo
  edges: Array<AllianceEdge | null>
  aggregate: AggregateAlliance
}

/*
 * An edge in a connection.

 */
export interface AllianceEdge {
  node: Alliance
  cursor: String
}

export interface AlliancePreviousValues {
  id: Int
  name: String
  ticker: String
  dateFounded?: DateTime | null
}

export interface AllianceSubscriptionPayload {
  mutation: MutationType
  node?: Alliance | null
  updatedFields?: Array<String> | null
  previousValues?: AlliancePreviousValues | null
}

export interface BatchPayload {
  count: Long
}

export interface Corporation {
  id: Int
  name: String
  ticker: String
  dateFounded?: DateTime | null
  memberCount: Int
  isNPC: Boolean
  allianceId?: Alliance | null
  factionId?: Faction | null
}

/*
 * A connection to a list of items.

 */
export interface CorporationConnection {
  pageInfo: PageInfo
  edges: Array<CorporationEdge | null>
  aggregate: AggregateCorporation
}

/*
 * An edge in a connection.

 */
export interface CorporationEdge {
  node: Corporation
  cursor: String
}

export interface CorporationPreviousValues {
  id: Int
  name: String
  ticker: String
  dateFounded?: DateTime | null
  memberCount: Int
  isNPC: Boolean
}

export interface CorporationSubscriptionPayload {
  mutation: MutationType
  node?: Corporation | null
  updatedFields?: Array<String> | null
  previousValues?: CorporationPreviousValues | null
}

export interface Faction {
  id: Int
  name: String
  description?: String | null
  sizeFactor: Int
  stationCount: Int
  stationSystemCount: Int
}

/*
 * A connection to a list of items.

 */
export interface FactionConnection {
  pageInfo: PageInfo
  edges: Array<FactionEdge | null>
  aggregate: AggregateFaction
}

/*
 * An edge in a connection.

 */
export interface FactionEdge {
  node: Faction
  cursor: String
}

export interface FactionPreviousValues {
  id: Int
  name: String
  description?: String | null
  sizeFactor: Int
  stationCount: Int
  stationSystemCount: Int
}

export interface FactionSubscriptionPayload {
  mutation: MutationType
  node?: Faction | null
  updatedFields?: Array<String> | null
  previousValues?: FactionPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Static {
  id: Int
  name: String
  targetClass: Float
  lifetime: Float
  maxMass: Float
  massRegen: Float
  maxOnePass: Float
}

/*
 * A connection to a list of items.

 */
export interface StaticConnection {
  pageInfo: PageInfo
  edges: Array<StaticEdge | null>
  aggregate: AggregateStatic
}

/*
 * An edge in a connection.

 */
export interface StaticEdge {
  node: Static
  cursor: String
}

export interface StaticPreviousValues {
  id: Int
  name: String
  targetClass: Float
  lifetime: Float
  maxMass: Float
  massRegen: Float
  maxOnePass: Float
}

export interface StaticSubscriptionPayload {
  mutation: MutationType
  node?: Static | null
  updatedFields?: Array<String> | null
  previousValues?: StaticPreviousValues | null
}

export interface System {
  id: Int
  constellationId?: Int | null
  starId?: Int | null
  regionId?: Int | null
  systemName: String
  security?: String | null
  trueSec: Float
  securityStatus: Float
  securityClass?: String | null
  effect?: String | null
  statics?: Array<Static> | null
}

/*
 * A connection to a list of items.

 */
export interface SystemConnection {
  pageInfo: PageInfo
  edges: Array<SystemEdge | null>
  aggregate: AggregateSystem
}

/*
 * An edge in a connection.

 */
export interface SystemEdge {
  node: System
  cursor: String
}

export interface SystemPreviousValues {
  id: Int
  constellationId?: Int | null
  starId?: Int | null
  regionId?: Int | null
  systemName: String
  security?: String | null
  trueSec: Float
  securityStatus: Float
  securityClass?: String | null
  effect?: String | null
}

export interface SystemSubscriptionPayload {
  mutation: MutationType
  node?: System | null
  updatedFields?: Array<String> | null
  previousValues?: SystemPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string