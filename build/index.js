"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const titles_js_1 = require("./tools/titles.js");
const server = new mcp_js_1.McpServer({
    name: "imdb-movie-mcp",
    version: "1.0.0",
    capabilities: {
        tools: {},
    },
});
(0, titles_js_1.registerTitleTools)(server);
async function main() {
    const transport = new stdio_js_1.StdioServerTransport();
    await server.connect(transport);
    console.error("Imdb Movie MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
