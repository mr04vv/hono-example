declare const hoge: import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
    "/hoge": {
        $get: {
            input: {};
            output: "Hello Hono!";
            outputFormat: "text";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        };
    };
}, "/">;
declare const fuga: import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
    "/fuga": {
        $get: {
            input: {};
            output: "Hello Hono!";
            outputFormat: "text";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        };
    };
}, "/">;
declare const piyo: import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
    "/piyo": {
        $get: {
            input: {};
            output: "Hello Hono!";
            outputFormat: "text";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        };
    };
}, "/">;
declare const hello: import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
    "/hello": {
        $get: {
            input: {};
            output: "Hello Hono!";
            outputFormat: "text";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        };
    };
}, "/">;
declare const hi: import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
    "/hi": {
        $get: {
            input: {};
            output: "Hello Hono!";
            outputFormat: "text";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        };
    };
}, "/">;
declare const bye: import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
    "/bye": {
        $get: {
            input: {};
            output: "Hello Hono!";
            outputFormat: "text";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        };
    };
}, "/">;
declare const good: import("hono/hono-base").HonoBase<import("hono/types").BlankEnv, {
    "/good": {
        $get: {
            input: {};
            output: "Hello Hono!";
            outputFormat: "text";
            status: import("hono/utils/http-status").ContentfulStatusCode;
        };
    };
}, "/">;
export type AppType = typeof hoge & typeof fuga & typeof piyo & typeof hello & typeof hi & typeof bye & typeof good;
export declare const a: AppType;
export {};
