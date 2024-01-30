var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// .wrangler/tmp/bundle-UerOvD/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-UerOvD/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../../../../../../tools/.pnpm-global/5/node_modules/.pnpm/wrangler@3.25.0/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../../../../../tools/.pnpm-global/5/node_modules/.pnpm/wrangler@3.25.0/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../../node_modules/.pnpm/itty-router@4.0.27/node_modules/itty-router/Router.mjs
var Router_exports = {};
__export(Router_exports, {
  Router: () => e
});
var e;
var init_Router = __esm({
  "../../node_modules/.pnpm/itty-router@4.0.27/node_modules/itty-router/Router.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    e = ({ base: e2 = "", routes: r3 = [], ...o2 } = {}) => ({ __proto__: new Proxy({}, { get: (o3, t3, a2, p) => "handle" == t3 ? a2.fetch : (o4, ...l) => r3.push([t3.toUpperCase?.(), RegExp(`^${(p = (e2 + o4).replace(/\/+(\/|$)/g, "$1")).replace(/(\/?\.?):(\w+)\+/g, "($1(?<$2>*))").replace(/(\/?\.?):(\w+)/g, "($1(?<$2>[^$1/]+?))").replace(/\./g, "\\.").replace(/(\/?)\*/g, "($1.*)?")}/*$`), l, p]) && a2 }), routes: r3, ...o2, async fetch(e3, ...o3) {
      let t3, a2, p = new URL(e3.url), l = e3.query = { __proto__: null };
      for (let [e4, r4] of p.searchParams)
        l[e4] = l[e4] ? [].concat(l[e4], r4) : r4;
      for (let [l2, c, s2, f] of r3)
        if ((l2 == e3.method || "ALL" == l2) && (a2 = p.pathname.match(c))) {
          e3.params = a2.groups || {}, e3.route = f;
          for (let r4 of s2)
            if (null != (t3 = await r4(e3.proxy ?? e3, ...o3)))
              return t3;
        }
    } });
  }
});

// ../../node_modules/.pnpm/@cloudflare+workers-types@4.20240129.0/node_modules/@cloudflare/workers-types/experimental/index.ts
var experimental_exports = {};
var init_experimental = __esm({
  "../../node_modules/.pnpm/@cloudflare+workers-types@4.20240129.0/node_modules/@cloudflare/workers-types/experimental/index.ts"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../Common/Target/Function/Redirect.js
var Redirect_exports = {};
__export(Redirect_exports, {
  Response: () => t,
  default: () => r
});
var r, t;
var init_Redirect = __esm({
  async "../Common/Target/Function/Redirect.js"() {
    init_checked_fetch();
    init_modules_watch_stub();
    r = async (...e2) => t.redirect(e2[0] ?? "", e2[1] ?? 302);
    ({ Response: t } = await Promise.resolve().then(() => (init_experimental(), experimental_exports)));
  }
});

// ../Common/Target/Function/Response.js
var Response_exports = {};
__export(Response_exports, {
  Response: () => s,
  default: () => t2
});
var t2, s;
var init_Response = __esm({
  async "../Common/Target/Function/Response.js"() {
    init_checked_fetch();
    init_modules_watch_stub();
    t2 = async (...e2) => new s(JSON.stringify(e2[0]), { status: e2[1] ?? 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
    ({ Response: s } = await Promise.resolve().then(() => (init_experimental(), experimental_exports)));
  }
});

// .wrangler/tmp/bundle-UerOvD/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-UerOvD/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// Target/Variable/Worker.js
init_checked_fetch();
init_modules_watch_stub();
var r2 = { fetch: async (...[t3, e2]) => await (await Promise.resolve().then(() => (init_Router(), Router_exports))).Router().get("*", async () => await a({ Error: "Not Found." }, 404)).handle(t3, e2) };
var { default: o } = await init_Redirect().then(() => Redirect_exports);
var { default: a } = await init_Response().then(() => Response_exports);

// ../../../../../../tools/.pnpm-global/5/node_modules/.pnpm/wrangler@3.25.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e2) {
  return {
    name: e2?.name,
    message: e2?.message ?? String(e2),
    stack: e2?.stack,
    cause: e2?.cause === void 0 ? void 0 : reduceError(e2.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e2) {
    const error = reduceError(e2);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;

// .wrangler/tmp/bundle-UerOvD/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...r2,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...r2.middleware ? r2.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// ../../../../../../tools/.pnpm-global/5/node_modules/.pnpm/wrangler@3.25.0/node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-UerOvD/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  o as Redirect,
  a as Response,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

@cloudflare/workers-types/experimental/index.ts:
  (*! *****************************************************************************
  Copyright (c) Cloudflare. All rights reserved.
  Copyright (c) Microsoft Corporation. All rights reserved.
  
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
//# sourceMappingURL=Worker.js.map
