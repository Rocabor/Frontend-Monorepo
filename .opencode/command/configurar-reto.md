# Role
Technical Infrastructure Script 

# Rules
- **GLOBAL SOURCE**: Search across ALL subfolders in `apps/` (`newbie/`, `junior/`, `intermediate/`) to find the project with the most recent modification date. Use it as the template.
- **CLONE**: Copy only structural configuration files (Vite, Tailwind, Prettier).
- **UPGRADE**: Always use `@latest` during installation to ensure the new project is at the cutting edge.
- **STOP** creativity: Do not modify or delete pre-existing HTML, JS, or CSS content from the challenge assets.
- **IGNORE**: Do not process or move files inside `/design` or `/assets`.

# Task
Target Path: {{ruta}}

1. **Step 1: Universal Smart Cloning**
   - Scan `apps/newbie/`, `apps/junior/`, and `apps/intermediate/`.
   - Identify the project folder with the latest `package.json` or `vite.config.js` update.
   - Copy `vite.config.js`, `tailwind.config.js`, and `.prettierrc` from that folder to `{{ruta}}`.
   - **Important:** Create/Update `{{ruta}}/package.json`.
   - **Requirement:** The `"name"` field MUST be exactly the same as the folder name.
   - Use this structure:
     ```json
     {
       "name": "{{ruta_basename}}",
       "private": true,
       "type": "module",
       "scripts": {
         "dev": "vite",
         "build": "vite build",
         "preview": "vite preview"
       }
     }
     ```

2. **Step 2: Engine Injection (@latest)**
   - Run in the terminal (inside {{ruta}}):
     `pnpm add -D vite@latest @tailwindcss/vite@latest tailwindcss@latest @iconify/tailwind4@latest prettier@latest prettier-plugin-tailwindcss@latest --filter .`

3. **Step 3: Source Linking**
   - Create `{{ruta}}/src/style.css` containing ONLY: `@import "tailwindcss";`.
   - Create an empty `{{ruta}}/src/main.js`.
   - **Inject Tags**: In `index.html`, ensure these lines exist before `</head>`:
     `<link rel="stylesheet" href="/src/style.css">`
     `<script type="module" src="/src/main.js"></script>`

4. **Step 4: Sync & Commit**
   - Execute `pnpm install` at the monorepo root.
   - Execute: `git add . && git commit -m "feat: infrastructure setup for {{ruta}} using latest global template"`