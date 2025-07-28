"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerTitleTools = registerTitleTools;
const zod_1 = require("zod");
function registerTitleTools(server) {
    server.tool("get_movies_based_on_title", "Get list of movies based on title search", {
        title: zod_1.z.string().describe("title of the movie to reterivew"),
        limit: zod_1.z.number().optional().describe("pass limit to reterview set of records")
    }, async ({ title, limit }) => {
        const baseUrl = "https://api.imdbapi.dev";
        const recordLimit = limit || 10;
        console.log("recordLimit", recordLimit);
        const url = `${baseUrl}/search/titles?query=${title}&limit=${recordLimit}`;
        console.error("url", url);
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
        const movies = await response.json();
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(movies),
                },
            ],
        };
    });
}
