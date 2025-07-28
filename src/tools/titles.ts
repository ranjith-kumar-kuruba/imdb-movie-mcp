import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { movies } from "../types.js";
export function registerTitleTools(server: McpServer) {

    server.tool(
        "get_movies_based_on_title",
        "Get list of movies based on title search",
        {
            title: z.string().describe("title of the movie to reterivew"),
            limit: z.number().optional().describe("pass limit to reterview set of records")

        },
        async ({ title, limit }) => {
            const baseUrl = "https://api.imdbapi.dev"
            const recordLimit = limit || 10
            console.log("recordLimit", recordLimit)
            const url = `${baseUrl}/search/titles?query=${title}&limit=${recordLimit}`
            console.error("url", url)
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            });

            if (!response.ok) {
                return {
                    content: [
                        {
                            type: "text",
                            text: `Failed to get movies: ${response.statusText}`,
                        },
                    ],
                };
            }

            const movies: movies = await response.json();

            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(movies),
                    },
                ],
            };
        }
    );
}