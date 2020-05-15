
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum AllianceOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    ticker_ASC = "ticker_ASC",
    ticker_DESC = "ticker_DESC",
    dateFounded_ASC = "dateFounded_ASC",
    dateFounded_DESC = "dateFounded_DESC"
}

export enum CorporationOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    ticker_ASC = "ticker_ASC",
    ticker_DESC = "ticker_DESC",
    dateFounded_ASC = "dateFounded_ASC",
    dateFounded_DESC = "dateFounded_DESC",
    memberCount_ASC = "memberCount_ASC",
    memberCount_DESC = "memberCount_DESC",
    isNPC_ASC = "isNPC_ASC",
    isNPC_DESC = "isNPC_DESC"
}

export enum FactionOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC",
    sizeFactor_ASC = "sizeFactor_ASC",
    sizeFactor_DESC = "sizeFactor_DESC",
    stationCount_ASC = "stationCount_ASC",
    stationCount_DESC = "stationCount_DESC",
    stationSystemCount_ASC = "stationSystemCount_ASC",
    stationSystemCount_DESC = "stationSystemCount_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum StaticOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    targetClass_ASC = "targetClass_ASC",
    targetClass_DESC = "targetClass_DESC",
    lifetime_ASC = "lifetime_ASC",
    lifetime_DESC = "lifetime_DESC",
    maxMass_ASC = "maxMass_ASC",
    maxMass_DESC = "maxMass_DESC",
    massRegen_ASC = "massRegen_ASC",
    massRegen_DESC = "massRegen_DESC",
    maxOnePass_ASC = "maxOnePass_ASC",
    maxOnePass_DESC = "maxOnePass_DESC"
}

export enum SystemOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    constellationId_ASC = "constellationId_ASC",
    constellationId_DESC = "constellationId_DESC",
    starId_ASC = "starId_ASC",
    starId_DESC = "starId_DESC",
    regionId_ASC = "regionId_ASC",
    regionId_DESC = "regionId_DESC",
    systemName_ASC = "systemName_ASC",
    systemName_DESC = "systemName_DESC",
    security_ASC = "security_ASC",
    security_DESC = "security_DESC",
    trueSec_ASC = "trueSec_ASC",
    trueSec_DESC = "trueSec_DESC",
    securityStatus_ASC = "securityStatus_ASC",
    securityStatus_DESC = "securityStatus_DESC",
    securityClass_ASC = "securityClass_ASC",
    securityClass_DESC = "securityClass_DESC",
    effect_ASC = "effect_ASC",
    effect_DESC = "effect_DESC"
}

export class AllianceCreateInput {
    name: string;
    ticker: string;
    dateFounded?: DateTime;
    factionId?: FactionCreateOneInput;
}

export class AllianceCreateOneInput {
    create?: AllianceCreateInput;
    connect?: AllianceWhereUniqueInput;
}

export class AllianceSubscriptionWhereInput {
    AND?: AllianceSubscriptionWhereInput[];
    OR?: AllianceSubscriptionWhereInput[];
    NOT?: AllianceSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: AllianceWhereInput;
}

export class AllianceUpdateDataInput {
    name?: string;
    ticker?: string;
    dateFounded?: DateTime;
    factionId?: FactionUpdateOneInput;
}

export class AllianceUpdateInput {
    name?: string;
    ticker?: string;
    dateFounded?: DateTime;
    factionId?: FactionUpdateOneInput;
}

export class AllianceUpdateManyMutationInput {
    name?: string;
    ticker?: string;
    dateFounded?: DateTime;
}

export class AllianceUpdateOneInput {
    create?: AllianceCreateInput;
    connect?: AllianceWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: AllianceUpdateDataInput;
    upsert?: AllianceUpsertNestedInput;
}

export class AllianceUpsertNestedInput {
    update: AllianceUpdateDataInput;
    create: AllianceCreateInput;
}

export class AllianceWhereInput {
    AND?: AllianceWhereInput[];
    OR?: AllianceWhereInput[];
    NOT?: AllianceWhereInput[];
    id?: number;
    id_not?: number;
    id_in?: number[];
    id_not_in?: number[];
    id_lt?: number;
    id_lte?: number;
    id_gt?: number;
    id_gte?: number;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    ticker?: string;
    ticker_not?: string;
    ticker_in?: string[];
    ticker_not_in?: string[];
    ticker_lt?: string;
    ticker_lte?: string;
    ticker_gt?: string;
    ticker_gte?: string;
    ticker_contains?: string;
    ticker_not_contains?: string;
    ticker_starts_with?: string;
    ticker_not_starts_with?: string;
    ticker_ends_with?: string;
    ticker_not_ends_with?: string;
    dateFounded?: DateTime;
    dateFounded_not?: DateTime;
    dateFounded_in?: DateTime[];
    dateFounded_not_in?: DateTime[];
    dateFounded_lt?: DateTime;
    dateFounded_lte?: DateTime;
    dateFounded_gt?: DateTime;
    dateFounded_gte?: DateTime;
    factionId?: FactionWhereInput;
}

export class AllianceWhereUniqueInput {
    id?: number;
}

export class CorporationCreateInput {
    name: string;
    ticker: string;
    dateFounded?: DateTime;
    memberCount: number;
    isNPC: boolean;
    allianceId?: AllianceCreateOneInput;
    factionId?: FactionCreateOneInput;
}

export class CorporationSubscriptionWhereInput {
    AND?: CorporationSubscriptionWhereInput[];
    OR?: CorporationSubscriptionWhereInput[];
    NOT?: CorporationSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: CorporationWhereInput;
}

export class CorporationUpdateInput {
    name?: string;
    ticker?: string;
    dateFounded?: DateTime;
    memberCount?: number;
    isNPC?: boolean;
    allianceId?: AllianceUpdateOneInput;
    factionId?: FactionUpdateOneInput;
}

export class CorporationUpdateManyMutationInput {
    name?: string;
    ticker?: string;
    dateFounded?: DateTime;
    memberCount?: number;
    isNPC?: boolean;
}

export class CorporationWhereInput {
    AND?: CorporationWhereInput[];
    OR?: CorporationWhereInput[];
    NOT?: CorporationWhereInput[];
    id?: number;
    id_not?: number;
    id_in?: number[];
    id_not_in?: number[];
    id_lt?: number;
    id_lte?: number;
    id_gt?: number;
    id_gte?: number;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    ticker?: string;
    ticker_not?: string;
    ticker_in?: string[];
    ticker_not_in?: string[];
    ticker_lt?: string;
    ticker_lte?: string;
    ticker_gt?: string;
    ticker_gte?: string;
    ticker_contains?: string;
    ticker_not_contains?: string;
    ticker_starts_with?: string;
    ticker_not_starts_with?: string;
    ticker_ends_with?: string;
    ticker_not_ends_with?: string;
    dateFounded?: DateTime;
    dateFounded_not?: DateTime;
    dateFounded_in?: DateTime[];
    dateFounded_not_in?: DateTime[];
    dateFounded_lt?: DateTime;
    dateFounded_lte?: DateTime;
    dateFounded_gt?: DateTime;
    dateFounded_gte?: DateTime;
    memberCount?: number;
    memberCount_not?: number;
    memberCount_in?: number[];
    memberCount_not_in?: number[];
    memberCount_lt?: number;
    memberCount_lte?: number;
    memberCount_gt?: number;
    memberCount_gte?: number;
    isNPC?: boolean;
    isNPC_not?: boolean;
    allianceId?: AllianceWhereInput;
    factionId?: FactionWhereInput;
}

export class CorporationWhereUniqueInput {
    id?: number;
}

export class FactionCreateInput {
    name: string;
    description?: string;
    sizeFactor: number;
    stationCount: number;
    stationSystemCount: number;
}

export class FactionCreateOneInput {
    create?: FactionCreateInput;
    connect?: FactionWhereUniqueInput;
}

export class FactionSubscriptionWhereInput {
    AND?: FactionSubscriptionWhereInput[];
    OR?: FactionSubscriptionWhereInput[];
    NOT?: FactionSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: FactionWhereInput;
}

export class FactionUpdateDataInput {
    name?: string;
    description?: string;
    sizeFactor?: number;
    stationCount?: number;
    stationSystemCount?: number;
}

export class FactionUpdateInput {
    name?: string;
    description?: string;
    sizeFactor?: number;
    stationCount?: number;
    stationSystemCount?: number;
}

export class FactionUpdateManyMutationInput {
    name?: string;
    description?: string;
    sizeFactor?: number;
    stationCount?: number;
    stationSystemCount?: number;
}

export class FactionUpdateOneInput {
    create?: FactionCreateInput;
    connect?: FactionWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: FactionUpdateDataInput;
    upsert?: FactionUpsertNestedInput;
}

export class FactionUpsertNestedInput {
    update: FactionUpdateDataInput;
    create: FactionCreateInput;
}

export class FactionWhereInput {
    AND?: FactionWhereInput[];
    OR?: FactionWhereInput[];
    NOT?: FactionWhereInput[];
    id?: number;
    id_not?: number;
    id_in?: number[];
    id_not_in?: number[];
    id_lt?: number;
    id_lte?: number;
    id_gt?: number;
    id_gte?: number;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    description?: string;
    description_not?: string;
    description_in?: string[];
    description_not_in?: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
    sizeFactor?: number;
    sizeFactor_not?: number;
    sizeFactor_in?: number[];
    sizeFactor_not_in?: number[];
    sizeFactor_lt?: number;
    sizeFactor_lte?: number;
    sizeFactor_gt?: number;
    sizeFactor_gte?: number;
    stationCount?: number;
    stationCount_not?: number;
    stationCount_in?: number[];
    stationCount_not_in?: number[];
    stationCount_lt?: number;
    stationCount_lte?: number;
    stationCount_gt?: number;
    stationCount_gte?: number;
    stationSystemCount?: number;
    stationSystemCount_not?: number;
    stationSystemCount_in?: number[];
    stationSystemCount_not_in?: number[];
    stationSystemCount_lt?: number;
    stationSystemCount_lte?: number;
    stationSystemCount_gt?: number;
    stationSystemCount_gte?: number;
}

export class FactionWhereUniqueInput {
    id?: number;
}

export class StaticCreateInput {
    name: string;
    targetClass: number;
    lifetime: number;
    maxMass: number;
    massRegen: number;
    maxOnePass: number;
}

export class StaticCreateManyInput {
    create?: StaticCreateInput[];
    connect?: StaticWhereUniqueInput[];
}

export class StaticScalarWhereInput {
    AND?: StaticScalarWhereInput[];
    OR?: StaticScalarWhereInput[];
    NOT?: StaticScalarWhereInput[];
    id?: number;
    id_not?: number;
    id_in?: number[];
    id_not_in?: number[];
    id_lt?: number;
    id_lte?: number;
    id_gt?: number;
    id_gte?: number;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    targetClass?: number;
    targetClass_not?: number;
    targetClass_in?: number[];
    targetClass_not_in?: number[];
    targetClass_lt?: number;
    targetClass_lte?: number;
    targetClass_gt?: number;
    targetClass_gte?: number;
    lifetime?: number;
    lifetime_not?: number;
    lifetime_in?: number[];
    lifetime_not_in?: number[];
    lifetime_lt?: number;
    lifetime_lte?: number;
    lifetime_gt?: number;
    lifetime_gte?: number;
    maxMass?: number;
    maxMass_not?: number;
    maxMass_in?: number[];
    maxMass_not_in?: number[];
    maxMass_lt?: number;
    maxMass_lte?: number;
    maxMass_gt?: number;
    maxMass_gte?: number;
    massRegen?: number;
    massRegen_not?: number;
    massRegen_in?: number[];
    massRegen_not_in?: number[];
    massRegen_lt?: number;
    massRegen_lte?: number;
    massRegen_gt?: number;
    massRegen_gte?: number;
    maxOnePass?: number;
    maxOnePass_not?: number;
    maxOnePass_in?: number[];
    maxOnePass_not_in?: number[];
    maxOnePass_lt?: number;
    maxOnePass_lte?: number;
    maxOnePass_gt?: number;
    maxOnePass_gte?: number;
}

export class StaticSubscriptionWhereInput {
    AND?: StaticSubscriptionWhereInput[];
    OR?: StaticSubscriptionWhereInput[];
    NOT?: StaticSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: StaticWhereInput;
}

export class StaticUpdateDataInput {
    name?: string;
    targetClass?: number;
    lifetime?: number;
    maxMass?: number;
    massRegen?: number;
    maxOnePass?: number;
}

export class StaticUpdateInput {
    name?: string;
    targetClass?: number;
    lifetime?: number;
    maxMass?: number;
    massRegen?: number;
    maxOnePass?: number;
}

export class StaticUpdateManyDataInput {
    name?: string;
    targetClass?: number;
    lifetime?: number;
    maxMass?: number;
    massRegen?: number;
    maxOnePass?: number;
}

export class StaticUpdateManyInput {
    create?: StaticCreateInput[];
    connect?: StaticWhereUniqueInput[];
    set?: StaticWhereUniqueInput[];
    disconnect?: StaticWhereUniqueInput[];
    delete?: StaticWhereUniqueInput[];
    update?: StaticUpdateWithWhereUniqueNestedInput[];
    updateMany?: StaticUpdateManyWithWhereNestedInput[];
    deleteMany?: StaticScalarWhereInput[];
    upsert?: StaticUpsertWithWhereUniqueNestedInput[];
}

export class StaticUpdateManyMutationInput {
    name?: string;
    targetClass?: number;
    lifetime?: number;
    maxMass?: number;
    massRegen?: number;
    maxOnePass?: number;
}

export class StaticUpdateManyWithWhereNestedInput {
    where: StaticScalarWhereInput;
    data: StaticUpdateManyDataInput;
}

export class StaticUpdateWithWhereUniqueNestedInput {
    where: StaticWhereUniqueInput;
    data: StaticUpdateDataInput;
}

export class StaticUpsertWithWhereUniqueNestedInput {
    where: StaticWhereUniqueInput;
    update: StaticUpdateDataInput;
    create: StaticCreateInput;
}

export class StaticWhereInput {
    AND?: StaticWhereInput[];
    OR?: StaticWhereInput[];
    NOT?: StaticWhereInput[];
    id?: number;
    id_not?: number;
    id_in?: number[];
    id_not_in?: number[];
    id_lt?: number;
    id_lte?: number;
    id_gt?: number;
    id_gte?: number;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    targetClass?: number;
    targetClass_not?: number;
    targetClass_in?: number[];
    targetClass_not_in?: number[];
    targetClass_lt?: number;
    targetClass_lte?: number;
    targetClass_gt?: number;
    targetClass_gte?: number;
    lifetime?: number;
    lifetime_not?: number;
    lifetime_in?: number[];
    lifetime_not_in?: number[];
    lifetime_lt?: number;
    lifetime_lte?: number;
    lifetime_gt?: number;
    lifetime_gte?: number;
    maxMass?: number;
    maxMass_not?: number;
    maxMass_in?: number[];
    maxMass_not_in?: number[];
    maxMass_lt?: number;
    maxMass_lte?: number;
    maxMass_gt?: number;
    maxMass_gte?: number;
    massRegen?: number;
    massRegen_not?: number;
    massRegen_in?: number[];
    massRegen_not_in?: number[];
    massRegen_lt?: number;
    massRegen_lte?: number;
    massRegen_gt?: number;
    massRegen_gte?: number;
    maxOnePass?: number;
    maxOnePass_not?: number;
    maxOnePass_in?: number[];
    maxOnePass_not_in?: number[];
    maxOnePass_lt?: number;
    maxOnePass_lte?: number;
    maxOnePass_gt?: number;
    maxOnePass_gte?: number;
}

export class StaticWhereUniqueInput {
    id?: number;
}

export class SystemCreateInput {
    constellationId?: number;
    starId?: number;
    regionId?: number;
    systemName: string;
    security?: string;
    trueSec: number;
    securityStatus: number;
    securityClass?: string;
    effect?: string;
    statics?: StaticCreateManyInput;
}

export class SystemSubscriptionWhereInput {
    AND?: SystemSubscriptionWhereInput[];
    OR?: SystemSubscriptionWhereInput[];
    NOT?: SystemSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: SystemWhereInput;
}

export class SystemUpdateInput {
    constellationId?: number;
    starId?: number;
    regionId?: number;
    systemName?: string;
    security?: string;
    trueSec?: number;
    securityStatus?: number;
    securityClass?: string;
    effect?: string;
    statics?: StaticUpdateManyInput;
}

export class SystemUpdateManyMutationInput {
    constellationId?: number;
    starId?: number;
    regionId?: number;
    systemName?: string;
    security?: string;
    trueSec?: number;
    securityStatus?: number;
    securityClass?: string;
    effect?: string;
}

export class SystemWhereInput {
    AND?: SystemWhereInput[];
    OR?: SystemWhereInput[];
    NOT?: SystemWhereInput[];
    id?: number;
    id_not?: number;
    id_in?: number[];
    id_not_in?: number[];
    id_lt?: number;
    id_lte?: number;
    id_gt?: number;
    id_gte?: number;
    constellationId?: number;
    constellationId_not?: number;
    constellationId_in?: number[];
    constellationId_not_in?: number[];
    constellationId_lt?: number;
    constellationId_lte?: number;
    constellationId_gt?: number;
    constellationId_gte?: number;
    starId?: number;
    starId_not?: number;
    starId_in?: number[];
    starId_not_in?: number[];
    starId_lt?: number;
    starId_lte?: number;
    starId_gt?: number;
    starId_gte?: number;
    regionId?: number;
    regionId_not?: number;
    regionId_in?: number[];
    regionId_not_in?: number[];
    regionId_lt?: number;
    regionId_lte?: number;
    regionId_gt?: number;
    regionId_gte?: number;
    systemName?: string;
    systemName_not?: string;
    systemName_in?: string[];
    systemName_not_in?: string[];
    systemName_lt?: string;
    systemName_lte?: string;
    systemName_gt?: string;
    systemName_gte?: string;
    systemName_contains?: string;
    systemName_not_contains?: string;
    systemName_starts_with?: string;
    systemName_not_starts_with?: string;
    systemName_ends_with?: string;
    systemName_not_ends_with?: string;
    security?: string;
    security_not?: string;
    security_in?: string[];
    security_not_in?: string[];
    security_lt?: string;
    security_lte?: string;
    security_gt?: string;
    security_gte?: string;
    security_contains?: string;
    security_not_contains?: string;
    security_starts_with?: string;
    security_not_starts_with?: string;
    security_ends_with?: string;
    security_not_ends_with?: string;
    trueSec?: number;
    trueSec_not?: number;
    trueSec_in?: number[];
    trueSec_not_in?: number[];
    trueSec_lt?: number;
    trueSec_lte?: number;
    trueSec_gt?: number;
    trueSec_gte?: number;
    securityStatus?: number;
    securityStatus_not?: number;
    securityStatus_in?: number[];
    securityStatus_not_in?: number[];
    securityStatus_lt?: number;
    securityStatus_lte?: number;
    securityStatus_gt?: number;
    securityStatus_gte?: number;
    securityClass?: string;
    securityClass_not?: string;
    securityClass_in?: string[];
    securityClass_not_in?: string[];
    securityClass_lt?: string;
    securityClass_lte?: string;
    securityClass_gt?: string;
    securityClass_gte?: string;
    securityClass_contains?: string;
    securityClass_not_contains?: string;
    securityClass_starts_with?: string;
    securityClass_not_starts_with?: string;
    securityClass_ends_with?: string;
    securityClass_not_ends_with?: string;
    effect?: string;
    effect_not?: string;
    effect_in?: string[];
    effect_not_in?: string[];
    effect_lt?: string;
    effect_lte?: string;
    effect_gt?: string;
    effect_gte?: string;
    effect_contains?: string;
    effect_not_contains?: string;
    effect_starts_with?: string;
    effect_not_starts_with?: string;
    effect_ends_with?: string;
    effect_not_ends_with?: string;
    statics_every?: StaticWhereInput;
    statics_some?: StaticWhereInput;
    statics_none?: StaticWhereInput;
}

export class SystemWhereUniqueInput {
    id?: number;
}

export interface Node {
    id: string;
}

export class AggregateAlliance {
    count: number;
}

export class AggregateCorporation {
    count: number;
}

export class AggregateFaction {
    count: number;
}

export class AggregateStatic {
    count: number;
}

export class AggregateSystem {
    count: number;
}

export class Alliance {
    id: number;
    name: string;
    ticker: string;
    dateFounded?: DateTime;
    factionId?: Faction;
}

export class AllianceConnection {
    pageInfo: PageInfo;
    edges: AllianceEdge[];
    aggregate: AggregateAlliance;
}

export class AllianceEdge {
    node: Alliance;
    cursor: string;
}

export class AlliancePreviousValues {
    id: number;
    name: string;
    ticker: string;
    dateFounded?: DateTime;
}

export class AllianceSubscriptionPayload {
    mutation: MutationType;
    node?: Alliance;
    updatedFields?: string[];
    previousValues?: AlliancePreviousValues;
}

export class BatchPayload {
    count: Long;
}

export class Corporation {
    id: number;
    name: string;
    ticker: string;
    dateFounded?: DateTime;
    memberCount: number;
    isNPC: boolean;
    allianceId?: Alliance;
    factionId?: Faction;
}

export class CorporationConnection {
    pageInfo: PageInfo;
    edges: CorporationEdge[];
    aggregate: AggregateCorporation;
}

export class CorporationEdge {
    node: Corporation;
    cursor: string;
}

export class CorporationPreviousValues {
    id: number;
    name: string;
    ticker: string;
    dateFounded?: DateTime;
    memberCount: number;
    isNPC: boolean;
}

export class CorporationSubscriptionPayload {
    mutation: MutationType;
    node?: Corporation;
    updatedFields?: string[];
    previousValues?: CorporationPreviousValues;
}

export class Faction {
    id: number;
    name: string;
    description?: string;
    sizeFactor: number;
    stationCount: number;
    stationSystemCount: number;
}

export class FactionConnection {
    pageInfo: PageInfo;
    edges: FactionEdge[];
    aggregate: AggregateFaction;
}

export class FactionEdge {
    node: Faction;
    cursor: string;
}

export class FactionPreviousValues {
    id: number;
    name: string;
    description?: string;
    sizeFactor: number;
    stationCount: number;
    stationSystemCount: number;
}

export class FactionSubscriptionPayload {
    mutation: MutationType;
    node?: Faction;
    updatedFields?: string[];
    previousValues?: FactionPreviousValues;
}

export abstract class IMutation {
    abstract createSystem(data: SystemCreateInput): System | Promise<System>;

    abstract createCorporation(data: CorporationCreateInput): Corporation | Promise<Corporation>;

    abstract createStatic(data: StaticCreateInput): Static | Promise<Static>;

    abstract createFaction(data: FactionCreateInput): Faction | Promise<Faction>;

    abstract createAlliance(data: AllianceCreateInput): Alliance | Promise<Alliance>;

    abstract updateSystem(data: SystemUpdateInput, where: SystemWhereUniqueInput): System | Promise<System>;

    abstract updateCorporation(data: CorporationUpdateInput, where: CorporationWhereUniqueInput): Corporation | Promise<Corporation>;

    abstract updateStatic(data: StaticUpdateInput, where: StaticWhereUniqueInput): Static | Promise<Static>;

    abstract updateFaction(data: FactionUpdateInput, where: FactionWhereUniqueInput): Faction | Promise<Faction>;

    abstract updateAlliance(data: AllianceUpdateInput, where: AllianceWhereUniqueInput): Alliance | Promise<Alliance>;

    abstract deleteSystem(where: SystemWhereUniqueInput): System | Promise<System>;

    abstract deleteCorporation(where: CorporationWhereUniqueInput): Corporation | Promise<Corporation>;

    abstract deleteStatic(where: StaticWhereUniqueInput): Static | Promise<Static>;

    abstract deleteFaction(where: FactionWhereUniqueInput): Faction | Promise<Faction>;

    abstract deleteAlliance(where: AllianceWhereUniqueInput): Alliance | Promise<Alliance>;

    abstract upsertSystem(where: SystemWhereUniqueInput, create: SystemCreateInput, update: SystemUpdateInput): System | Promise<System>;

    abstract upsertCorporation(where: CorporationWhereUniqueInput, create: CorporationCreateInput, update: CorporationUpdateInput): Corporation | Promise<Corporation>;

    abstract upsertStatic(where: StaticWhereUniqueInput, create: StaticCreateInput, update: StaticUpdateInput): Static | Promise<Static>;

    abstract upsertFaction(where: FactionWhereUniqueInput, create: FactionCreateInput, update: FactionUpdateInput): Faction | Promise<Faction>;

    abstract upsertAlliance(where: AllianceWhereUniqueInput, create: AllianceCreateInput, update: AllianceUpdateInput): Alliance | Promise<Alliance>;

    abstract updateManySystems(data: SystemUpdateManyMutationInput, where?: SystemWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyCorporations(data: CorporationUpdateManyMutationInput, where?: CorporationWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyStatics(data: StaticUpdateManyMutationInput, where?: StaticWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyFactions(data: FactionUpdateManyMutationInput, where?: FactionWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyAlliances(data: AllianceUpdateManyMutationInput, where?: AllianceWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManySystems(where?: SystemWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyCorporations(where?: CorporationWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyStatics(where?: StaticWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyFactions(where?: FactionWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyAlliances(where?: AllianceWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract systems(where?: SystemWhereInput, orderBy?: SystemOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): System[] | Promise<System[]>;

    abstract corporations(where?: CorporationWhereInput, orderBy?: CorporationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Corporation[] | Promise<Corporation[]>;

    abstract statics(where?: StaticWhereInput, orderBy?: StaticOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Static[] | Promise<Static[]>;

    abstract factions(where?: FactionWhereInput, orderBy?: FactionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Faction[] | Promise<Faction[]>;

    abstract alliances(where?: AllianceWhereInput, orderBy?: AllianceOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Alliance[] | Promise<Alliance[]>;

    abstract system(where: SystemWhereUniqueInput): System | Promise<System>;

    abstract corporation(where: CorporationWhereUniqueInput): Corporation | Promise<Corporation>;

    abstract static(where: StaticWhereUniqueInput): Static | Promise<Static>;

    abstract faction(where: FactionWhereUniqueInput): Faction | Promise<Faction>;

    abstract alliance(where: AllianceWhereUniqueInput): Alliance | Promise<Alliance>;

    abstract systemsConnection(where?: SystemWhereInput, orderBy?: SystemOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): SystemConnection | Promise<SystemConnection>;

    abstract corporationsConnection(where?: CorporationWhereInput, orderBy?: CorporationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): CorporationConnection | Promise<CorporationConnection>;

    abstract staticsConnection(where?: StaticWhereInput, orderBy?: StaticOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): StaticConnection | Promise<StaticConnection>;

    abstract factionsConnection(where?: FactionWhereInput, orderBy?: FactionOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): FactionConnection | Promise<FactionConnection>;

    abstract alliancesConnection(where?: AllianceWhereInput, orderBy?: AllianceOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): AllianceConnection | Promise<AllianceConnection>;

    abstract node(id: string): Node | Promise<Node>;
}

export class Static {
    id: number;
    name: string;
    targetClass: number;
    lifetime: number;
    maxMass: number;
    massRegen: number;
    maxOnePass: number;
}

export class StaticConnection {
    pageInfo: PageInfo;
    edges: StaticEdge[];
    aggregate: AggregateStatic;
}

export class StaticEdge {
    node: Static;
    cursor: string;
}

export class StaticPreviousValues {
    id: number;
    name: string;
    targetClass: number;
    lifetime: number;
    maxMass: number;
    massRegen: number;
    maxOnePass: number;
}

export class StaticSubscriptionPayload {
    mutation: MutationType;
    node?: Static;
    updatedFields?: string[];
    previousValues?: StaticPreviousValues;
}

export abstract class ISubscription {
    abstract system(where?: SystemSubscriptionWhereInput): SystemSubscriptionPayload | Promise<SystemSubscriptionPayload>;

    abstract corporation(where?: CorporationSubscriptionWhereInput): CorporationSubscriptionPayload | Promise<CorporationSubscriptionPayload>;

    abstract static(where?: StaticSubscriptionWhereInput): StaticSubscriptionPayload | Promise<StaticSubscriptionPayload>;

    abstract faction(where?: FactionSubscriptionWhereInput): FactionSubscriptionPayload | Promise<FactionSubscriptionPayload>;

    abstract alliance(where?: AllianceSubscriptionWhereInput): AllianceSubscriptionPayload | Promise<AllianceSubscriptionPayload>;
}

export class System {
    id: number;
    constellationId?: number;
    starId?: number;
    regionId?: number;
    systemName: string;
    security?: string;
    trueSec: number;
    securityStatus: number;
    securityClass?: string;
    effect?: string;
    statics?: Static[];
}

export class SystemConnection {
    pageInfo: PageInfo;
    edges: SystemEdge[];
    aggregate: AggregateSystem;
}

export class SystemEdge {
    node: System;
    cursor: string;
}

export class SystemPreviousValues {
    id: number;
    constellationId?: number;
    starId?: number;
    regionId?: number;
    systemName: string;
    security?: string;
    trueSec: number;
    securityStatus: number;
    securityClass?: string;
    effect?: string;
}

export class SystemSubscriptionPayload {
    mutation: MutationType;
    node?: System;
    updatedFields?: string[];
    previousValues?: SystemPreviousValues;
}

export type DateTime = any;
export type Long = any;
