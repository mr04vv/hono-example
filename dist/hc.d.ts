import { hc } from "hono/client";
export type { ClientResponse } from "hono/client";
declare const client: {
    hoge: import("hono/client").ClientRequest<{
        $get: {
            input: {};
            output: "Hello Hono!";
            outputFormat: "text";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        };
    }>;
} & {
    hi: import("hono/client").ClientRequest<{
        $get: {
            input: {};
            output: "Hello Hono!";
            outputFormat: "text";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        };
    }>;
} & {
    bye: import("hono/client").ClientRequest<{
        $get: {
            input: {};
            output: "Hello Hono!";
            outputFormat: "text";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        };
    }>;
} & {
    good: import("hono/client").ClientRequest<{
        $get: {
            input: {};
            output: "Hello Hono!";
            outputFormat: "text";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        };
    }>;
};
export type Client = typeof client;
export declare const WcmBffClient: (...args: Parameters<typeof hc>) => Client;
