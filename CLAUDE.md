# Creative React Template — Development Rules

## Stack
- React 19+, TypeScript (strict: true), Vite, Tailwind CSS
- Animations: `motion/react` (formerly Framer Motion)
- Package manager: pnpm (fallback: npm)

## Architecture
- Feature-based structure: group by feature, not by file type
- Atomic components: each component does one thing
- Logic in custom hooks, UI in components — never mix
- Layout: Flexbox and CSS Grid only, no fixed margins for responsive layouts
- Mobile-first: use Tailwind breakpoints (`sm:`, `md:`, `lg:`)

## TypeScript
- `strict: true` always, no `any` without written justification
- Prefer `interface` for object shapes, `type` for unions/intersections
- Export types alongside their components

## Animation Rules (motion/react)

### Mandatory
- ALL UI animations use `motion/react` — no CSS transitions/keyframes for interactive elements
- Use `variants` for orchestration with `staggerChildren` for sequential reveals
- Every interactive button/card MUST have micro-feedback:
  ```tsx
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  ```
- Exit animations: wrap in `<AnimatePresence>` with unique `key` on each child
- Page transitions: `<AnimatePresence mode="wait">` at router level

### Physics
- Menus, modals, drawers: spring physics (`type: "spring"`)
- Recommended spring defaults: `stiffness: 300, damping: 24`
- NEVER use `type: "linear"` for UI elements — linear motion feels robotic
- Subtle elements (opacity fades): `type: "tween", duration: 0.2` is acceptable

### Patterns
```tsx
// Container with staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
}

// Child item
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}
```

## UI/UX Patterns
- Skeleton loaders for content blocks, not spinners
- Optimistic updates for user actions (likes, deletes, toggles)
- Error boundaries per section — one crash doesn't break the page
- Lazy load heavy components: `React.lazy` + `Suspense`

## HTML & Accessibility
- Semantic tags: `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` — no div soup
- ARIA attributes where semantics aren't enough
- Focus management for modals and drawers
- Color contrast: WCAG AA minimum
- All interactive elements keyboard-accessible

## Performance
- `useMemo`/`useCallback` only when profiler shows a problem, not preventively
- Images: lazy loading, proper `width`/`height`, WebP/AVIF where possible
- Bundle splitting per route

## Process
- Before writing UI code, propose an interaction thesis (animation concept) for approval
- Comments in code: English only
- No comments explaining WHAT — only WHY when non-obvious
- Commit before any risky change

## Do NOT
- Use CSS `transition` or `@keyframes` for interactive UI (use motion/react)
- Use `any` type without justification
- Use fixed pixel values for responsive layouts
- Use linear easing for UI motion
- Add spinners where skeletons fit better
- Over-engineer: no premature abstractions, no unused utilities
