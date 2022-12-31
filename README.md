# Nuxt 3 + Bootstrap 5 + OpenAI API

## Setup

Make sure to install the dependencies:

```bash

# npm
npm install
```

In your ```nuxt.config.ts``` file, add your OpenAI API key:

```js
runtimeConfig: {
    // The private keys which are only available server-side
    OPENAI_API_KEY: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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