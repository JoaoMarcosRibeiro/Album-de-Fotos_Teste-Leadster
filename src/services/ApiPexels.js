import { createClient } from "pexels";

const ApiPexels = () => {

    const AUTHORIZATION_API_KEY = '563492ad6f917000010000017bb20114516d46f68073ac631590e205';
    const client = createClient(AUTHORIZATION_API_KEY);

    return client;
}

export default ApiPexels