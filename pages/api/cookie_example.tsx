import { deleteCookie, getCookie, getCookies, setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    setCookie('server-key', 'value', { req, res, maxAge: 60 * 60 * 24 });
    getCookie('key', { req, res });
    getCookies({ req, res });
    deleteCookie('key', { req, res });

    console.log(res.req.rawHeaders);
    return res.status(200).json({ message: 'ok' });
}