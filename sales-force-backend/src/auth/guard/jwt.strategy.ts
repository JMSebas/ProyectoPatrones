import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtSecret } from "src/utils/constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super(
            {
                jwtFromRequest: ExtractJwt.fromExtractors(
                    [
                        JwtStrategy.extractJWT,
                        ExtractJwt.fromAuthHeaderAsBearerToken(),
                    ]
                ),
                secretOrkey: jwtSecret,
            }
        );
    }
    private static extractJWT(req: Request): string | null {
        if (req.cookies && 'token' in req.cookies) {
            return req.cookies.token;
        }
    return null;
    }

    async validate(payload: {id: number; username: string; role: string}){
        return payload
    }
}