import { cookies, headers } from "next/headers";
import decodedTokenJWT from "../utils/decodedTokenJWT";
import genQuerySelectSql from "../mysql_gen/genQuerySelectSql";
import { pool } from "../models/db";
import wrappedCryptoToken from "../utils/wrappedCryptoToken";

export const verifyUser = async () => {
    const ref_tkn = cookies().get('ref_tkn')?.value;
    try {
        const tokenDecode: any = decodedTokenJWT({
            token: ref_tkn,
            tokenSecret: process.env.ADMIN_REFRESH_TOKEN
        });
        if (tokenDecode.success) {
            const { email, sessionToken, role } = tokenDecode?.data
            const getSalt = sessionToken?.split('####')?.[0];
            const getHash = sessionToken?.split('####')?.[1];

            const promisePool = pool.promise();
            const sql = genQuerySelectSql({
                table: 'user_password',
                condition: `email = ${JSON.stringify(email)}`
            })

            try {
                const [rows, fields]: any = await promisePool.query(sql);
                const hashedPass = rows?.[0]?.hashedPass;
                const salt = rows?.[0]?.salt;
                const checkPass = wrappedCryptoToken({
                    salt: getSalt,
                    wrappedCryptoString: hashedPass
                }).hash == getHash;
                if (checkPass) {
                    return {
                        check: true,
                        userID: rows?.[0]?.userID,
                        email: rows?.[0]?.email
                    }
                }
                else {
                    return {
                        check: false,
                        userID: null,
                        email: null
                    }
                }
            }
            catch (err) {
                return {
                    check: false,
                    userID: null,
                    email: null
                }
            }
        }
        else {
            return {
                check: false,
                userID: null,
                email: null
            }
        }
    }
    catch {
        return {
            check: false,
            userID: null,
            email: null
        }
    }
}