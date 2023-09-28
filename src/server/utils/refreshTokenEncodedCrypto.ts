
import wrappedCryptoToken from './wrappedCryptoToken'
import generateTokenJWT from './generateTokenJWT'

export default function refreshTokenEncodedCrypto({ email, hashedPass, role = "user" }: {
    email?: string | any, hashedPass?: any, role?: any
}) {
    // (B1) GENERATE RANDOM SALT
    const { hash, salt } = wrappedCryptoToken({
        wrappedCryptoString: hashedPass
    })

    const ref_tkn = {
        email: email,
        sessionToken: `${salt}####${hash}`,
        role: role,
    }

    const refreshTokenGen = generateTokenJWT({
        data: ref_tkn,
        expiresIn: (role == 'user' ? '7 days' : '3 days'),
        tokenSecret: process.env.ADMIN_REFRESH_TOKEN
    }).token
    return refreshTokenGen
}


