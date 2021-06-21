# Quiz App

### Development

Create a `.env` file in the project root using the `.env.example` file.

```bash
npm install
npm run dev
```

TypeScript types can be automaticaly created with the following command. The tool scans the project for queries and mutations. Creates the types for the found ones. Re-run the command after adding or changing queries and mutations.

```bash
npm run codege:types
```

### Test

```bash
npm run test
```
