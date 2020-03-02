import { StaticMap } from '../models/staticMap.entity';

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

export type Effect = "Magnetar" | "Black Hole" | "Red Giant" | "Pulsar" | "Wolf-Rayet" | "Cataclysmic Variable";

export class Static {
  typeID: number;
  typeName: string;
  targetClass: Class;
  targetLifetime: number;
  targetMass: number;
  targetRegen: number;
  targetOneThrough: number;

  constructor(staticMap: StaticMap) {
    this.typeID = staticMap.typeID;
    this.typeName = staticMap.invType.typeName;
    const attributes = staticMap.invType.dgmTypeAttributes;
    this.targetClass = attributes.find(
      val => val.attributeID === 1381,
    ).valueFloat;
    this.targetLifetime = attributes.find(
      val => val.attributeID === 1382,
    ).valueFloat;
    this.targetMass = attributes.find(
      val => val.attributeID === 1383,
    ).valueFloat;
    this.targetRegen = attributes.find(
      val => val.attributeID === 1384,
    ).valueFloat;
    this.targetOneThrough = attributes.find(
      val => val.attributeID === 1385,
    ).valueFloat;
  }
}

export class System {
  regionID: number;
  constellationID: number;
  solarSystemID: number;
  solarSystemName: string;
  security: number;
  class: number;
  statics: Static[];
}
