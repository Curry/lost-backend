import { SystemModel } from "src/entity/models/system";
import { Map } from "../data/map.db";
import { Connection } from "../data/connection.db";

export class ConnectionNode {
    system: number;
    connections: ConnectionNode[];

    constructor(system: number) {
        this.system = system;
    }
}

export const newTree = (list: ConnectionModel[], top: number) => {
    const lookup: { [id: string]: ConnectionNode } = {};

    list.forEach(val => {
        if (!lookup[val.systemId]) {
            const node = new ConnectionNode(val.systemId);
            node.connections = [];
            lookup[val.systemId] = node;
        }
        lookup[val.systemId].connections.push(new ConnectionNode(val.linkedSystemId))
        if (!lookup[val.linkedSystemId]) {
            const node = new ConnectionNode(val.linkedSystemId);
            node.connections = [];
            lookup[val.linkedSystemId] = node;
        }
        lookup[val.linkedSystemId].connections.push(new ConnectionNode(val.systemId))
    });
    console.log(JSON.stringify(lookup, null, '\t'));
    return lookup[top];
}


export class ConnectionModel {
    mapId: number;
    created: Date;
    updated: Date;
    systemId: number;
    linkedSystemId: number;

    constructor(conn: Connection) {
        this.mapId = conn.mapId;
        this.created = conn.created;
        this.updated = conn.updated;
        this.systemId = conn.source;
        this.linkedSystemId = conn.target;
    }
}

export class MapModel {
    mapId: number;
    created: Date;
    updated: Date;
    connection: ConnectionNode;

    constructor(map: Map) {
        this.mapId = map.mapId;
        this.created = map.created;
        this.updated = map.updated;
        this.connection = newTree(map.connections.map(conn => new ConnectionModel(conn)), 31002356);
    }
}

