import { hc } from "hono/client";
import type { AppType } from "./index.ts";

export type { ClientResponse } from "hono/client";

// see: https://hono.dev/docs/guides/rpc#compile-your-code-before-using-it-recommended
const client = hc<AppType>("");

export type Client = typeof client;

export const WcmBffClient = (...args: Parameters<typeof hc>): Client =>
  hc<AppType>(...args);
