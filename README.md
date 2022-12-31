# Nuxt 3 + Bootstrap 5 + OpenAI API

## Setup

Make sure to install the dependencies:

```bash

# npm
npm install
```

In your ```.env``` file, add your OpenAI API key:
```bash
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

And in your ```nuxt.config.ts``` file, access the environment variable for the key:

```js
runtimeConfig: {
    // The private keys which are only available server-side
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    // Keys within public are also exposed client-side
    public: { }
},
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Disclaimer

This is a demo application and is not intended for production use.
All instructions are provided by OpenAI.
