import { System } from '../eve/entity/system.entity';
import { Static } from 'src/eve/entity/static.entity';

export enum Class {
  C1 = 1,
  C2,
  C3,
  C4,
  C5,
  C6,
  HIGH,
  LOW,
  NULL,
  THERA = 12,
  SHATTERED,
}

export class SystemModel {
  regionID: number;
  constellationID: number;
  systemID: number;
  systemName: string;
  starId: number;
  security: string;
  trueSec: number;
  securityStatus: number;
  securityClass: string;
  effect: string;
  statics: Static[];

  id: number;
  alias: string;
  active: boolean;

  constructor(system: System) {
    this.systemID = system.id;
    this.constellationID = system.constellationId;
    this.regionID = system.regionId;
    this.systemName = system.systemName;
    this.starId = system.starId;
    this.security = system.security;
    this.trueSec = system.trueSec;
    this.securityStatus = system.securityStatus;
    this.securityClass = system.securityClass;
    this.effect = system.effect;
    this.statics = system.statics;
  }
}
