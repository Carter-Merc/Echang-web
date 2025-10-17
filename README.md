# Project Structure

This project uses a conventional React + Vite structure.

- public: Static assets served as-is
- src: Application source code
  - assets: Images, fonts, static files imported in code
  - components: Reusable UI components
  - pages: Route-level screens
  - layouts: Page layouts/wrappers
  - routes: Routing config and helpers
  - features: Feature-oriented modules (self-contained UI + logic)
  - widgets: Composite UI blocks
  - hooks: Reusable React hooks
  - context: React context providers
  - store: State management (Redux/Zustand/etc.)
  - services: Non-HTTP services (analytics, auth adapters)
  - api: HTTP clients and API modules
  - utils: Generic utilities/helpers
  - types: Global TypeScript types
  - styles: Global styles, tokens, CSS utilities
  - lib: Shared libraries/helpers not tied to React
- tests: Test utilities and integration tests
- scripts: Automation scripts
- config: Build/test/tooling configs
- .vscode: Recommended workspace settings

## Color Scheme

- Deep Navy Blue – #1E1B54
  - Use: Top navigation bar, “Contact Us” button background, text highlights.
  - Purpose: Professionalism, authority, trust.
- Green – #00703C (hover #00894E)
  - Use: “Learn More” button background, highlights like “WELCOME TO”.
  - Purpose: Growth, safety, sustainability, forward movement.
- White – #FFFFFF
  - Use: Page background and body text areas.
  - Purpose: Neutral space, readability.
- Black – #000000
  - Use: Standard body text.
  - Purpose: Strong contrast.
- Dark Gray – #333333
  - Use: Sub-headings and paragraph text (lighter than full black).
  - Purpose: Softer on the eyes, readable.
- Ocean Aqua Blue – #2E8BC0
  - Use: Large background image/sections of the sea.
  - Purpose: Thematic ocean/energy context.

Implementation:
- CSS tokens in `src/styles/colors.css`
- Base styles in `src/styles/index.css`
- TypeScript theme in `src/styles/theme.ts`


