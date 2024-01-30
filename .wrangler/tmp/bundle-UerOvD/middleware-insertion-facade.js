				import worker, * as OTHER_EXPORTS from "D:\\Developer\\Application\\CodeEditorLand\\Environment\\NPM\\Ingress\\Target\\Variable\\Worker.js";
				import * as __MIDDLEWARE_0__ from "D:\\tools\\.pnpm-global\\5\\node_modules\\.pnpm\\wrangler@3.25.0\\node_modules\\wrangler\\templates\\middleware\\middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "D:\\Developer\\Application\\CodeEditorLand\\Environment\\NPM\\Ingress\\Target\\Variable\\Worker.js";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;