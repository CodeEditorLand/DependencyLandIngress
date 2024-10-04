// import type Token from "../Interface/Token.js";
import type Interface from "../Interface/Worker.js";

/**
 * @module Worker
 *
 */
export default {
	fetch: async (...[Request, Environment]: Parameters<Interface["fetch"]>) =>
		await (
			await import("itty-router/Router")
		)
			.Router()
			.get(
				"*",
				async () =>
					await Response(
						{
							Error: "Not Found.",
						},
						404,
					),
			)
			.handle(Request, Environment),
} satisfies Interface as Interface;

// import type { JsonWebKey } from "@cloudflare/workers-types/experimental/index.js";

export const { default: Redirect } = await import(
	"@codeeditorland/common/Target/Function/Redirect.js"
);

export const { default: Response } = await import(
	"@codeeditorland/common/Target/Function/Response.js"
);
