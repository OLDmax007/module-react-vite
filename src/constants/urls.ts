const baseUrlDMJS = import.meta.env.VITE_DMJS_API_URL as string;
const baseUrlJSPH = import.meta.env.VITE_JSPH_API_URL as string;

const unionEndpoints = {
    users: `users`,
    posts: `posts`,
    comments: `comments`
}

const urls = {
    dmjs: unionEndpoints,
    jsph: unionEndpoints
}

export  {
    baseUrlDMJS,
    baseUrlJSPH,
    urls
}