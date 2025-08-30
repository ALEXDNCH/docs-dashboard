## APP CONFIG
```ts
// src/app.config.ts
const DELAY_FOR_QUERY = 1000;
const IS_ERROR_FOR_QUERY = false;
```

## Start the Project

### Install Dependencies

```bash
npm install
```

## Development

### Run locally (no Docker)

```bash
npm run dev
```

Open in your browser: [http://localhost:3010](http://localhost:3010)

---

### Run with Docker (Dev Mode)

```bash
npm run dev:docker
```

## Build the Project (no Docker)

```bash
npm run build
```

## Run in Production

### Preview mode (no Docker)

```bash
npm run preview
```

Open in your browser: [http://localhost:3020](http://localhost:3020)

---

### Run with Docker (Prod Mode)

Build image:

```bash
npm run prod:docker:build
```

Run container:

```bash
npm run prod:docker:run
```

Open in your browser: [http://localhost:8080](http://localhost:8080)

