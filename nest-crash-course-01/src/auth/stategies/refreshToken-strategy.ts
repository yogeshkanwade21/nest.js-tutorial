import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class RefreshJwtStrategy extends PassportStrategy(Strategy, 'refresh-jwt') {
    
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
            ignoreExpiration: false,
            secretOrKey: `${process.env.jwt_secret}`,
        })
    }

    // validate function comes from passport-jwt
    async validate(payload: any) {
        return { user: payload.sub, email: payload.email }
    }
}