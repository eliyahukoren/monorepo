# **My Monorepo**

This is a TypeScript monorepo containing:
- `@myorg/lib`: A shared library with reusable functions.
- `@myorg/api`: A backend API using Express that depends on `@myorg/lib`.

## **Project Structure**
```
monorepo/
│── packages/
│   ├── lib/   # Shared library
│   ├── api/   # Express backend
│── package.json
│── pnpm-workspace.yaml
```

## **Prerequisites**
- Install [pnpm](https://pnpm.io/installation)
- Install [Node.js](https://nodejs.org/)

## **Setup**
### **1. Clone the Repository**
```sh
git clone <repo-url> monorepo
cd monorepo
```

### **2. Install Dependencies**
```sh
pnpm install
```

## **Library (`@myorg/lib`)**
A TypeScript library with reusable functions.

### **Build the Library**
```sh
pnpm --filter @myorg/lib run build
```

## **API (`@myorg/api`)**
An Express backend that imports `@myorg/lib`.

### **Run API in Development Mode**
```sh
pnpm --filter @myorg/api run dev
```

### **Build API**
```sh
pnpm --filter @myorg/api run build
```

### **Test API**
Run the API and visit:
- **GET** `http://localhost:3000/`

Expected Response:
```json
{ "message": "Hello, World!" }
```

## **Adding New Dependencies**
To add a package to a specific workspace, use:
```sh
pnpm --filter @myorg/api add <package-name>
pnpm --filter @myorg/lib add <package-name>
```

## **Troubleshooting**
- If the API cannot find `@myorg/lib`, ensure the library is built:
  ```sh
  pnpm --filter @myorg/lib run build
  ```
- If changes in `lib` are not reflected, delete `node_modules` and re-install:
  ```sh
  rm -rf node_modules
  pnpm install
  ```

---

This README covers everything needed to set up, run, and manage the monorepo. 🚀
