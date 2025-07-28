import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerTitleTools } from "./tools/titles.js"

const server = new McpServer({
    name: "imdb-movie-mcp",
    version: "1.0.0",
    capabilities: {
        tools: {},
    },
});

registerTitleTools(server);

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Imdb Movie MCP Server running on stdio");
}

main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});