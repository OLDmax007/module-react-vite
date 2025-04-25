const baseUrlDMJS = import.meta.env.VITE_DMJS_API_URL as string;

const urls = {
    carts: {
        allCarts: `${baseUrlDMJS}/carts`,
        byId: (id: number) => `${baseUrlDMJS}/${id}`,
        cartsOfUserById: (id: number) => `${baseUrlDMJS}/carts/user/${id}`
    },
}

export  {
    baseUrlDMJS,
    urls,
}