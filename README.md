# Mehroj Tursunov — Portfolio

An interactive React portfolio combining front-end development and UI/UX design. Built with React 19, TypeScript, Vinext, Tailwind CSS, and accessible Base UI/Shadcn tabs.

## Experience

- A live design/code identity card and three accent palettes.
- A filterable selection of code and design projects.
- Experience, education, language skills, and contact information based on the supplied résumé.
- Responsive layouts, keyboard navigation, reduced-motion support, and print styling.
- Local fonts and no analytics, tracking, database, or external runtime API.

## Development

Requires Node.js 22.13+.

```sh
npm ci
npm run dev
npm run build
```

Follow the local URL printed by the development server. The standard deployment build targets Cloudflare Workers through Sites. `.openai/hosting.json` holds the existing Site identity; reuse it when publishing updates. Source credentials are never stored in this repository.

## Editing

`app/page.tsx` contains the content, project data, and interactions. `app/globals.css` defines the visual system, responsive behavior, and print layout. `app/layout.tsx` provides metadata. `public/favicon.svg` is the custom monogram.

Project illustrations are typographic and technical interface studies, not screenshots of deployed products. The résumé is summarized; the source PDF and telephone number are not included. This site was built with AI assistance. Project descriptions distinguish the earlier AI-assisted portfolio tools from existing work.

## Publishing workflow

Use a feature branch and a pull request for meaningful changes. Merge validated work into `main`; avoid artificial commits or backdated history. GitHub attribution depends on the commit email being linked to the account, qualifying repository/branch rules, and processing time.
