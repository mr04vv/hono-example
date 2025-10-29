import { hc } from "hono/client";
// see: https://hono.dev/docs/guides/rpc#compile-your-code-before-using-it-recommended
const client = hc("");
export const WcmBffClient = (...args) => hc(...args);
