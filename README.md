# imdb-movie-mcp

Model Context Protocol (MCP) server for IMDB Movie data.

## Overview

This project implements an MCP server that provides tools to search for movies by title using the IMDB API. It is built with TypeScript and uses the [@modelcontextprotocol/sdk](https://www.npmjs.com/package/@modelcontextprotocol/sdk).

## Features

- Search for movies by title
- Limit the number of results
- Returns movie details such as id, title, year, rating, and image

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/ranjith-kumar-kuruba/imdb-movie-mcp.git
cd imdb-movie-mcp
npm install
```

### Build

```sh
npm run build
```

### Usage

You can run the MCP server using:

```sh
npx imdb-movie-mcp
```

or

```sh
node build/index.js
```

The server communicates over stdio and is designed to be used as a tool provider for AI assistants or other MCP-compatible clients.

## API

### Tool: `get_movies_based_on_title`

- **Description:** Get list of movies based on title search
- **Parameters:**
  - `title` (string, required): Title of the movie to retrieve
  - `limit` (number, optional): Limit the number of records returned (default: 10)
- **Returns:** List of movies with fields:
  - `id`, `type`, `primaryTitle`, `originalTitle`, `primaryImage`, `startYear`, `rating`

## Development

Source code is in the `src/` directory. Build output is in `build/`.

## License

ISC
