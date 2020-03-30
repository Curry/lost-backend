import { Strategy as PassportStrategy } from 'passport-strategy';

interface IEveOptions {
    clientID: string;
    clientSecret: string;
    scope: string;
    callbackURL: string;
}

interface IEveProfile {
    CharacterID: number;
    CharacterName: string;
    ExpiresOn: Date;
    Scopes: string;
    TokenType: string;
    CharacterOwnerHash: string;
    IntellectualProperty: string;
}

interface IVerifyOptions {
    message: string;
}

interface VerifyFunction {
    (
        accessToken: string,
        refreshToken: string,
        profile: IEveProfile,
        done: (error: any, user?: any, options?: IVerifyOptions) => void
    ): void;
}

declare class Strategy implements PassportStrategy {
    constructor(options: IEveOptions, verify: VerifyFunction);

    name: string;
}