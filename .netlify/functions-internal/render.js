const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.ico","favicon.png","logo-256.png","manifest.json","robots.txt"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".json":"application/json",".txt":"text/plain"},
	_: {
		entry: {"file":"start-0c28abcc.js","js":["start-0c28abcc.js","chunks/index-4cc24504.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js')),
			() => Promise.resolve().then(() => require('../server/nodes/11.js')),
			() => Promise.resolve().then(() => require('../server/nodes/12.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "tags.tson",
				pattern: /^\/tags\.tson$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/tags.tson.ts.js'))
			},
			{
				type: 'endpoint',
				id: "articles.tson",
				pattern: /^\/articles\.tson$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/articles.tson.ts.js'))
			},
			{
				type: 'endpoint',
				id: "article.json",
				pattern: /^\/article\.json$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/article/index.json.ts.js'))
			},
			{
				type: 'page',
				id: "editor",
				pattern: /^\/editor\/?$/,
				names: [],
				types: [],
				path: "/editor",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				path: "/login",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "profile",
				pattern: /^\/profile\/?$/,
				names: [],
				types: [],
				path: "/profile",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "register",
				pattern: /^\/register\/?$/,
				names: [],
				types: [],
				path: "/register",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "settings",
				pattern: /^\/settings\/?$/,
				names: [],
				types: [],
				path: "/settings",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "auth/save",
				pattern: /^\/auth\/save\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/save.ts.js'))
			},
			{
				type: 'endpoint',
				id: "auth/register",
				pattern: /^\/auth\/register\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/register.ts.js'))
			},
			{
				type: 'endpoint',
				id: "auth/logout",
				pattern: /^\/auth\/logout\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/logout.ts.js'))
			},
			{
				type: 'endpoint',
				id: "auth/login",
				pattern: /^\/auth\/login\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/login.ts.js'))
			},
			{
				type: 'endpoint',
				id: "profile/%40[user].tson",
				pattern: /^\/profile\/@([^/]+?)\.tson$/,
				names: ["user"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/profile/%40_user_/index.tson.ts.js'))
			},
			{
				type: 'page',
				id: "profile/%40[user]",
				pattern: /^\/profile\/@([^/]+?)\/?$/,
				names: ["user"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,8,9],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "profile/%40[user]/follow",
				pattern: /^\/profile\/@([^/]+?)\/follow\/?$/,
				names: ["user"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/profile/%40_user_/follow.ts.js'))
			},
			{
				type: 'endpoint',
				id: "profile/%40[user]/favorites.tson",
				pattern: /^\/profile\/@([^/]+?)\/favorites\.tson$/,
				names: ["user"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/profile/%40_user_/favorites.tson.ts.js'))
			},
			{
				type: 'endpoint',
				id: "profile/%40[user]/articles.tson",
				pattern: /^\/profile\/@([^/]+?)\/articles\.tson$/,
				names: ["user"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/profile/%40_user_/articles.tson.ts.js'))
			},
			{
				type: 'page',
				id: "profile/%40[user]/favorites",
				pattern: /^\/profile\/@([^/]+?)\/favorites\/?$/,
				names: ["user"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,8,10],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "article/[slug].json",
				pattern: /^\/article\/([^/]+?)\.json$/,
				names: ["slug"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/article/_slug_/index.json.ts.js'))
			},
			{
				type: 'page',
				id: "article/[slug]",
				pattern: /^\/article\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "editor/[slug]",
				pattern: /^\/editor\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,12],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "article/[slug]/comments.json",
				pattern: /^\/article\/([^/]+?)\/comments\.json$/,
				names: ["slug"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/article/_slug_/comments/index.json.ts.js'))
			},
			{
				type: 'endpoint',
				id: "article/[slug]/comments/[id].json",
				pattern: /^\/article\/([^/]+?)\/comments\/([^/]+?)\.json$/,
				names: ["slug","id"],
				types: [null,null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/article/_slug_/comments/_id_.json.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
