const baseUrlDMJS = import.meta.env.VITE_DMJS_API_URL as string;

const unionEndpoints = {
    users: `users`,
    posts: `posts`,
}

const urls = {
    dmjs: unionEndpoints,
}

export  {
    baseUrlDMJS,
    urls
}