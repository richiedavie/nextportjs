# AGENTS.md — Portfolio Remaster

## 0. Mission

You are working on the remaster of Jerry's personal developer portfolio.

The existing portfolio has an older visual direction and a newer design direction generated in Google Stitch. The **newer design is the source of truth** for the visual language and should be reproduced in the real application with clean, maintainable Next.js/React code.

The goal is not to make a generic "developer portfolio". The goal is to make the implementation feel like the **second reference screenshot**:

- Minimal.
- Dark.
- Monochromatic.
- Premium but understated.
- Editorial / modern developer aesthetic.
- Large typography.
- Generous whitespace.
- Soft glass surfaces.
- Thin borders.
- Subtle glow.
- Extremely restrained animation.
- Strong visual hierarchy.
- No colorful SaaS-style gradients.
- No unnecessary cards everywhere.
- No visual clutter.

The first screenshot represents the old portfolio and must **not** become the implementation target again.

The second screenshot represents the intended remastered direction.

---

# 1. Project Context

## Stack

The project uses:

- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router when available in the repository structure
- OpenCode as the coding agent
- An OpenRouter-connected model (currently Ox Alpha) as the generation/reasoning model

The repository may evolve over time. Do not assume exact package versions. Always inspect the current `package.json`, lockfile, and existing project structure before making architectural decisions.

## Agent behavior

When working through OpenCode:

1. Inspect the repository before changing files.
2. Reuse existing components and utilities where they make sense.
3. Prefer incremental changes over replacing the whole project.
4. Do not blindly copy the Stitch HTML into production.
5. Translate the design into idiomatic React/Next.js.
6. Keep UI responsibilities separated into logical components.
7. Do not introduce a dependency only for a tiny visual effect.
8. Verify the result after meaningful changes.
9. Fix TypeScript, lint, build, and accessibility issues rather than hiding them.
10. Preserve the visual direction described in this file even when implementing later pages.

---

# 2. Primary Visual Reference

The new portfolio uses a dark "void" aesthetic.

Think:

> black canvas + white typography + subtle gray surfaces + precise spacing + quiet motion

Do NOT interpret the design as:

> cyberpunk + neon + gradients + glowing borders everywhere

That would be visually incorrect.

The design should feel closer to an editorial design system than a flashy template.

## Visual priorities

Rank visual decisions in this order:

1. Layout and whitespace.
2. Typography scale and weight.
3. Contrast hierarchy.
4. Surface/border treatment.
5. Image treatment.
6. Motion.
7. Decorative details.

Never let decorative effects interfere with the first five priorities.

---

# 3. Reference Screenshot Translation

The newer hero should preserve these major characteristics:

## Header

The header is:

- Floating rather than a traditional full-width bar.
- Positioned near the top.
- Centered within a max-width container.
- Mostly transparent.
- Slightly glassy.
- Rounded/pill shaped.
- Thinly bordered.
- Compact.
- Minimal.

The structure is visually similar to:

```text
        my port       [ Work  About  Skills  Experience  Contact ]     RESUME
```

Important details:

- Brand at the left.
- Navigation capsule near the center.
- Resume CTA at the right.
- Active navigation item appears as a white pill with dark text.
- Inactive navigation items are muted gray.
- Header should not dominate the page.
- On mobile, replace the desktop navigation with a compact menu trigger.

Do not convert this into a conventional rectangular navbar unless the design explicitly requires it.

---

# 4. Hero Layout

The hero is the primary visual statement.

## Desktop composition

Use a two-column composition.

Left:

- Eyebrow.
- Very large headline.
- Thin divider.
- Supporting text.
- Two CTA buttons.

Right:

- Large square/near-square visual card.
- Avatar/image inside.
- Soft surrounding glow.
- Rounded corners.
- Glass-like outer shell.

Approximate composition:

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   WEB DEVELOPER & CREATOR          ┌──────────────────────┐  │
│                                    │                      │  │
│   Hey Folks,                       │       AVATAR         │  │
│   I'm Jer!                         │                      │  │
│                                    │                      │  │
│   ─────────                        └──────────────────────┘  │
│                                                              │
│   welcome to my Portfolio :)                                  │
│   feel free to check my portfolio below here!                │
│                                                              │
│   [ SEE MORE! ] [ SEE FULL PORTFOLIO ]                       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

This structure is more important than exact pixel reproduction.

## Desktop spacing

Use generous vertical spacing.

Suggested conceptual rhythm:

- Header top offset: approximately 24–32px.
- Main top padding: approximately 100–140px.
- Hero section vertical breathing room: large.
- Text/image gap: approximately 48–80px depending on viewport.
- Footer separated from hero with substantial whitespace.

Avoid cramped layouts.

---

# 5. Typography System

Typography is one of the most important elements of this redesign.

## Font direction

The Stitch source uses **Google Sans Flex**.

Use the equivalent production-friendly implementation available in the project, preferably through `next/font/google` or a properly configured local font.

Do not keep a production dependency on:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

from the generated Stitch HTML.

The application should use the project's actual Tailwind build pipeline.

## Typography hierarchy

Use a compact, deliberate hierarchy.

### Display

The hero title should be extremely large on desktop.

Conceptually:

- Desktop: around 72–88px.
- Tablet: around 56–72px.
- Mobile: around 44–52px.

Adjust based on actual container width rather than blindly forcing a number.

Characteristics:

- Very heavy weight.
- Tight letter spacing.
- Tight line height.
- White.
- Strong contrast.
- Two-line composition.

Example:

```text
Hey Folks,
I'm Jer!
```

Do not add decorative gradients or colored text.

## Eyebrow

Characteristics:

- Small.
- Uppercase.
- Letter-spaced.
- Muted.
- Medium/semi-bold.
- "WEB DEVELOPER & CREATOR".

Use it as a secondary hierarchy marker, not as a visual headline.

## Body copy

Characteristics:

- Gray rather than pure white.
- Comfortable line-height.
- Approximately 16–18px.
- Limited line length.
- Quiet visual presence.

Do not make body text compete with the hero heading.

## Labels

Buttons, nav items, resume, and metadata can use:

- Uppercase.
- Medium/semi-bold weight.
- Slight tracking.
- Compact line-height.

---

# 6. Color System

The palette is intentionally monochromatic.

## Core colors

Use these as conceptual tokens:

```css
--background: #050505;
--surface: #0e0e0e;
--surface-soft: rgba(255, 255, 255, 0.05);
--surface-hover: rgba(255, 255, 255, 0.08);

--foreground: #ffffff;
--foreground-muted: #c4c7c8;
--foreground-subtle: rgba(255, 255, 255, 0.55);

--border: rgba(255, 255, 255, 0.10);
--border-strong: rgba(255, 255, 255, 0.20);

--glow: rgba(255, 255, 255, 0.10);
```

The implementation may use Tailwind classes instead of CSS variables, but maintain the same visual relationships.

## Hard rule

Do not introduce random accent colors.

No:

- Purple gradients.
- Blue/purple developer-template gradients.
- Cyan neon.
- Green highlights.
- Pink/purple glow.
- Rainbow backgrounds.
- Orange CTA buttons.

The interface should stay almost entirely black, white, and gray unless Jerry explicitly requests a future accent color.

---

# 7. Background Treatment

The background is not pure empty black.

Use extremely subtle texture.

The reference design includes a low-contrast dot/radial grid effect.

Acceptable approach:

```css
background-image:
  radial-gradient(
    circle at 1px 1px,
    rgba(255, 255, 255, 0.12) 1px,
    transparent 0
  );
background-size: 40px 40px;
```

Keep opacity low.

The pattern should be noticed only after looking for it.

Do not make the grid bright.

Do not use a giant gradient blob as the main background.

---

# 8. Surfaces, Borders, and Glass

The design uses restrained glassmorphism.

## Glass surface

Conceptually:

```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.10);
```

Use this sparingly.

Good places:

- Floating navbar.
- Avatar container.
- Small overlay elements.

Bad places:

- Every section.
- Every project card.
- Every paragraph.
- Every button.

The design should feel calm, not like a dashboard.

---

# 9. Borders

Borders are subtle.

Default:

```css
border: 1px solid rgba(255,255,255,0.10);
```

Stronger interaction border:

```css
border-color: rgba(255,255,255,0.20);
```

Avoid bright full-opacity white borders except where they are deliberately part of a CTA.

---

# 10. Shadows and Glow

The reference uses soft white glow rather than colored neon.

Conceptually:

```css
box-shadow: 0 0 40px rgba(255,255,255,0.10);
```

For subtle UI surfaces:

```css
box-shadow: 0 0 40px rgba(255,255,255,0.05);
```

Glow should create atmosphere, not look like an effect demo.

Do not stack huge shadows on every component.

---

# 11. Hero Image / Avatar

The hero visual is an important part of the composition.

## Outer shell

Use:

- Square/near-square dimensions.
- Rounded corners.
- Thin border.
- Glass background.
- Small internal padding.
- Soft glow.
- Responsive width.

Suggested conceptual maximum:

```text
~400px × ~400px
```

## Image behavior

Use:

```css
object-fit: cover;
```

The source image should fill the frame without stretching.

## Grayscale treatment

The Stitch design initially uses a grayscale/low-saturation treatment and reveals more natural color on hover.

Implement a tasteful version of that idea.

For example:

```css
filter: grayscale(1);
transition:
  filter 700ms ease,
  transform 500ms ease;
```

On hover:

```css
filter: grayscale(0);
```

Do not create a sudden or aggressive transformation.

## Image source

Do not keep the generated Stitch `lh3.googleusercontent.com/...` image URL as the permanent production asset.

Move the desired image into the project's own assets, for example:

```text
public/images/avatar.webp
```

or an equivalent location appropriate for the current Next.js project.

Use `next/image` where practical.

---

# 12. Image Overlay

The reference contains a subtle black gradient over the lower portion of the image.

Use it to blend the image into the dark interface.

Concept:

```css
background:
  linear-gradient(
    to top,
    rgba(0,0,0,0.60),
    transparent
  );
```

Keep the effect subtle.

---

# 13. Buttons

There are two distinct CTA styles.

## Primary CTA

White pill.

Properties:

- White background.
- Black text.
- Rounded full.
- Medium/strong weight.
- Compact uppercase label.
- Subtle white glow on hover.

Example visual:

```text
[ SEE MORE! ]
```

## Secondary CTA

Transparent/black surface with white border.

Properties:

- Transparent background.
- White text.
- Soft border.
- Same height/radius as primary button.
- Slight background tint on hover.

Example:

```text
[ SEE FULL PORTFOLIO ]
```

Both buttons should feel like members of one system.

Do not make the secondary CTA tiny.

---

# 14. Navigation Behavior

The active item should appear as a white pill.

Inactive items:

- Muted gray.
- Slight hover brightness.
- Optional subtle translucent background on hover.

The navigation capsule should remain compact.

Do not add:

- Huge nav spacing.
- Underline animations.
- Colorful active states.
- Excessive bouncing transitions.

A tiny amount of motion is enough.

---

# 15. Motion and Interactions

The original Stitch HTML includes a subtle mouse-follow 3D transform.

Keep the interaction restrained.

## Parallax concept

The hero card may respond slightly to mouse position.

The original effect is approximately:

```js
const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
```

Do not copy this literally if it creates poor behavior.

A React implementation should:

- Use a client component only where interaction is actually necessary.
- Prefer `requestAnimationFrame` or throttled pointer handling if needed.
- Keep rotation small.
- Reset smoothly on pointer exit.
- Avoid causing excessive React re-renders.
- Avoid hydration mismatch.

Suggested visual range:

```text
roughly -2deg to +2deg
```

rather than extreme 3D movement.

## Reduced motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

- Disable parallax.
- Minimize transitions.
- Avoid pulsing decorative elements.
- Keep the layout fully usable.

---

# 16. Decorative Element

The reference contains a very small play-triangle-like decorative element.

Treat it as optional atmosphere, not content.

Rules:

- Very low opacity.
- Desktop only if necessary.
- Pointer-events disabled.
- Must never interfere with navigation or reading.
- Do not add dozens of decorative shapes.

One or two intentional details are enough.

---

# 17. Layout Containers

Use a centralized container system.

Conceptual values from the Stitch design:

```text
container max-width: ~1200px
horizontal gutter: ~24px
mobile gutter: ~20px
large section gap: ~160px
```

These values are guides, not rigid requirements.

Use a responsive container such as:

```css
width: min(100% - 40px, 1200px);
margin-inline: auto;
```

or the equivalent Tailwind implementation.

Do not let the hero content touch the viewport edges.

---

# 18. Responsive Design

The reference is desktop-first visually but must be properly responsive.

## Desktop

At large widths:

- Two-column hero.
- Centered container.
- Large heading.
- Full navigation capsule.
- Resume button visible.
- Avatar aligned toward the right.

## Tablet

Reduce:

- Heading size.
- Horizontal gap.
- Avatar size.
- Navigation spacing.

Maintain the two-column composition when space allows.

## Mobile

Switch to a single column.

Order:

1. Header.
2. Hero text.
3. CTAs.
4. Avatar.
5. Remaining sections.
6. Footer.

Mobile nav:

- Hide desktop pill navigation.
- Show menu button.
- Do not allow content overflow horizontally.

Hero title should still feel large but must not overflow.

Buttons may stack vertically.

---

# 19. Page Architecture

The homepage should eventually support the following major areas:

```text
Home
├── Hero
├── Work / Portfolio
├── About
├── Skills
├── Experience
├── Contact
└── Footer
```

The hero is the first priority, but the visual system must be reusable across the rest of the site.

Do not build every section as a completely separate design language.

---

# 20. Suggested Component Structure

Use a structure similar to:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── ...
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx
│   │   └── SiteFooter.tsx
│   ├── navigation/
│   │   ├── DesktopNav.tsx
│   │   └── MobileNav.tsx
│   ├── hero/
│   │   ├── HeroSection.tsx
│   │   ├── HeroCopy.tsx
│   │   ├── HeroActions.tsx
│   │   └── HeroVisual.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── GlassPanel.tsx
│   │   └── ...
│   └── sections/
│       ├── WorkSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ExperienceSection.tsx
│       └── ContactSection.tsx
├── data/
│   └── ...
└── public/
    └── images/
```

Do not create dozens of micro-components for simple static markup.

Componentize around:

- Reuse.
- Semantics.
- Interaction.
- Layout responsibility.

---

# 21. Next.js Rules

## Prefer Server Components

Use Server Components by default.

Only add:

```tsx
"use client";
```

when required for:

- Pointer interaction.
- Mobile menu state.
- Client-side animation.
- Browser APIs.
- Other genuine client behavior.

Do not mark the entire page as a client component simply because one small component needs interaction.

## Image

Prefer `next/image` for local images.

Configure remote image domains only when a remote source is truly necessary.

## Links

Use semantic navigation and `next/link` for internal routes where appropriate.

## Metadata

Keep the document metadata meaningful:

- Title.
- Description.
- Open Graph when the project supports it.

Do not leave the application as:

```text
my port - Developer Portfolio
```

unless that is intentionally the final brand.

---

# 22. Tailwind Rules

The provided Stitch HTML uses CDN Tailwind and custom theme values.

Do not copy the CDN setup.

Instead, map the design into the project's Tailwind configuration or CSS variable system.

Useful conceptual tokens:

```text
background
foreground
muted
surface
surface-soft
border
border-strong
```

Keep spacing coherent.

Avoid giant walls of arbitrary utility values when a reusable class/token would be clearer.

Good:

```tsx
className="mx-auto w-full max-w-[1200px] px-6"
```

Better when repeatedly used:

```tsx
className="container-shell"
```

Avoid:

```tsx
className="px-[17px] pt-[117px] ml-[13px] ..."
```

unless there is a strong visual reason.

---

# 23. CSS Guidance

Global CSS should establish:

- Background.
- Foreground.
- Font family.
- Selection color.
- Overflow behavior.
- Core design tokens.

Example concept:

```css
:root {
  --background: #050505;
  --foreground: #ffffff;
  --muted: #c4c7c8;
  --border: rgba(255,255,255,0.1);
}
```

Be careful with global effects.

Do not add:

```css
* {
  transition: all ...
}
```

This is too broad and can cause performance and usability problems.

Apply transitions only to interactive properties.

---

# 24. Accessibility Requirements

Visual fidelity does not excuse poor accessibility.

Must include:

- Semantic `nav`, `main`, `section`, `footer`.
- Correct heading hierarchy.
- Meaningful image `alt`.
- Keyboard-accessible navigation.
- Visible focus states.
- Sufficient contrast for primary text.
- Buttons that are actually buttons when they trigger behavior.
- Links that are actually links when they navigate.
- Mobile menu usable with keyboard.
- Reduced-motion support.

Do not create clickable `div`s.

Avoid patterns like:

```tsx
<div onClick={...}>
```

when a real button or link is appropriate.

---

# 25. Performance Requirements

The page should feel extremely fast.

Priorities:

1. Avoid unnecessary client-side JavaScript.
2. Use optimized local images.
3. Lazy-load content that is not immediately visible.
4. Avoid huge background assets.
5. Avoid animation libraries for tiny effects.
6. Avoid giant dependency additions.
7. Keep hydration limited to interactive components.

Do not introduce a full animation framework just to create a 2-degree hero rotation.

CSS transitions or a tiny client component are preferable.

---

# 26. Content Guidelines

The current hero copy is:

```text
WEB DEVELOPER & CREATOR

Hey Folks,
I'm Jer!

welcome to my Portfolio :)
feel free to check my portfolio below here!
```

The informal tone is intentional.

Do not automatically rewrite the copy into corporate language.

The portfolio should communicate that Jerry is:

- A web developer.
- A creator.
- A technology-focused person.
- Interested in building practical digital experiences.

Avoid generic copy such as:

> "I am a passionate full-stack developer who loves transforming ideas into digital experiences."

unless explicitly requested.

The copy should sound like a real person, not a generated template.

---

# 27. Footer Direction

The footer should remain visually quiet.

Reference structure:

```text
my port                         © ...                         Github LinkedIn Twitter Email
```

Use:

- Thin top border.
- Dark transparent background.
- Muted typography.
- Compact spacing.
- Small uppercase metadata.

Do not turn the footer into another giant content block.

---

# 28. Brand Direction

The current visual brand is:

```text
my port
```

Use the lowercase presentation where appropriate because it matches the reference.

Do not automatically convert it to:

```text
MY PORTFOLIO
JERRY'S PORTFOLIO
JERRY DEV
```

unless explicitly requested.

Typography itself provides much of the branding.

---

# 29. Important Anti-Patterns

Do NOT:

- Revert to the old navbar.
- Recreate the first screenshot.
- Add excessive neon effects.
- Add colorful gradients.
- Turn every element into a rounded card.
- Add random floating blobs.
- Use excessive blur.
- Add unnecessary 3D depth.
- Make the page look like a generic AI-generated SaaS landing page.
- Replace the large hero typography with normal-sized headings.
- Put the avatar inside a tiny card.
- Overcrowd the hero.
- Use a giant hero gradient.
- Add irrelevant icons to every menu item.
- Use arbitrary animations everywhere.
- Use external generated HTML as the production architecture.
- Keep CDN Tailwind in production.
- Keep placeholder `href="#"` for real navigation when routes exist.
- Leave React warnings unresolved.
- Silence lint errors rather than fixing their cause.

---

# 30. Stitch HTML Translation Rules

The Google Stitch HTML is a **visual reference and implementation clue**, not a final codebase.

When translating it:

### Keep

- Overall layout.
- Typography hierarchy.
- Spacing relationships.
- Monochrome palette.
- Rounded pill navigation.
- Hero image card.
- Soft glow.
- Ghost borders.
- Subtle grid.
- Two-button CTA pattern.
- Small decorative accent.
- Footer structure.
- Overall visual density.

### Change

- CDN Tailwind → actual project Tailwind.
- Plain HTML → React components.
- Raw `<img>` → `next/image` when appropriate.
- Inline style chaos → reusable classes/tokens.
- External placeholder image → repository asset.
- Raw DOM event listeners → React-friendly client component.
- `href="#"` placeholders → actual site links/routes.
- Static duplicate markup → reusable components/data.
- `<script>` tags → proper Next.js architecture.

---

# 31. Implementation Strategy

When asked to remaster or continue the portfolio, follow this sequence.

## Phase 1 — Inspect

Read:

```text
package.json
tsconfig.json
next.config.*
tailwind.config.*
postcss.config.*
src/app/*
src/components/*
public/*
```

Determine the current architecture before editing.

## Phase 2 — Establish design tokens

Create or normalize:

- Background.
- Foreground.
- Muted text.
- Surface colors.
- Borders.
- Spacing.
- Radii.
- Typography.

## Phase 3 — Build shell

Implement:

- Global background.
- Container system.
- Site header.
- Footer.
- Base typography.

## Phase 4 — Build hero

Implement in this order:

1. Grid.
2. Hero typography.
3. Divider.
4. Body copy.
5. CTA buttons.
6. Image shell.
7. Image.
8. Glow.
9. Decorative detail.
10. Pointer/parallax effect.

## Phase 5 — Responsive pass

Test:

- Desktop.
- Laptop.
- Tablet.
- Mobile.

Do not simply shrink the desktop version.

## Phase 6 — QA

Run the appropriate project checks, such as:

```bash
npm run lint
npm run build
```

and any repository-specific checks.

Fix actual issues instead of suppressing them.

---

# 32. Visual QA Checklist

Before declaring the remaster finished, compare the browser result against the second screenshot.

Check:

## Header

- Is the header floating?
- Is the nav pill-shaped?
- Is the active item white?
- Is Resume separate from the nav?
- Is the header visually lightweight?

## Hero

- Is the heading huge?
- Is it left aligned?
- Is the image prominent?
- Is there enough empty space?
- Are the CTAs aligned and balanced?
- Is the entire hero vertically centered?

## Image

- Does it feel like a large editorial visual rather than a tiny profile image?
- Is there a subtle glow?
- Is the card border quiet?
- Does grayscale hover feel natural?

## Background

- Is it nearly black?
- Is the grid subtle?
- Is the page free from distracting gradients?

## Typography

- Is the heading the strongest element?
- Is supporting copy muted?
- Are labels properly tracked?
- Is the font modern and clean?

## Motion

- Is the movement subtle?
- Does it feel premium?
- Does anything jump, stutter, or feel gimmicky?

---

# 33. Acceptance Criteria

A successful implementation should satisfy all of the following:

- [ ] The hero visually resembles the second reference screenshot.
- [ ] The first/old screenshot is no longer the design target.
- [ ] The page uses a dark monochromatic visual system.
- [ ] The heading is very large and visually dominant.
- [ ] The navigation is a compact floating pill.
- [ ] The active nav item uses a white pill treatment.
- [ ] The Resume action is visually distinct.
- [ ] The hero uses a two-column layout on desktop.
- [ ] The avatar/image is large and visually important.
- [ ] The avatar shell uses a subtle glass/border/glow treatment.
- [ ] The background may contain a faint grid/dot pattern.
- [ ] The buttons have primary and secondary variants.
- [ ] The design remains clean at mobile widths.
- [ ] The implementation uses React/Next.js rather than raw standalone HTML.
- [ ] No CDN Tailwind script is used in production.
- [ ] The Stitch image URL is not treated as a permanent production asset.
- [ ] Interactive behavior is isolated to client components.
- [ ] Accessibility basics are satisfied.
- [ ] Lint and build checks pass.
- [ ] No obvious hydration warnings remain.
- [ ] No gratuitous dependency was added for tiny effects.
- [ ] The design does not drift into colorful "AI portfolio template" aesthetics.

---

# 34. OpenCode Working Rules

When receiving a task related to this portfolio, reason in terms of the design system above.

Before changing visual code, ask internally:

> "Will this make the site look more like the second screenshot or less like it?"

If the answer is less, do not do it unless the user explicitly asks for the change.

When uncertain between two valid UI options, prefer:

- Simpler.
- Darker.
- More spacious.
- More typographic.
- Less decorative.
- More maintainable.
- More accessible.

When modifying an existing section:

1. Preserve content unless requested otherwise.
2. Preserve routing.
3. Preserve functional interactions.
4. Improve implementation quality.
5. Maintain the established visual language.
6. Avoid unrelated refactors.

---

# 35. Debugging Rules

If the visual result is incorrect:

### Layout issue

Inspect:

- Container width.
- Grid/flex sizing.
- Gap.
- Padding.
- Alignment.
- Min-height.
- Overflow.

Do not immediately add absolute positioning.

### Typography issue

Inspect:

- Font loading.
- Weight.
- Line-height.
- Letter-spacing.
- Responsive font size.
- Max-width.

### Image issue

Inspect:

- Intrinsic dimensions.
- Object fit.
- Aspect ratio.
- Parent overflow.
- Image loading strategy.
- Local asset path.

### Animation issue

Inspect:

- Client/server boundaries.
- Pointer event frequency.
- Transform composition.
- Transition conflicts.
- Reduced-motion support.

### Mobile issue

Inspect:

- Horizontal overflow.
- Fixed widths.
- Text wrapping.
- Button stacking.
- Navigation visibility.
- Hero ordering.

---

# 36. Avoid Overengineering

The portfolio is a visual website, not a framework experiment.

Prefer:

```text
small components + clear tokens + simple CSS + excellent spacing
```

over:

```text
many abstractions + many dependencies + complicated animation system
```

A simple implementation that matches the design is better than a sophisticated implementation that does not.

---

# 37. Final Instruction to the Agent

Your job is to make the real Next.js portfolio feel like the **second screenshot**, not to reproduce the generated HTML line-for-line.

Treat the screenshot's composition, typography, spacing, monochrome palette, floating navigation, large hero image, glass surfaces, and restrained interactions as the visual contract.

Treat the Stitch HTML as a reference implementation.

Treat the Next.js repository as the production system.

The final result should feel like:

> a deliberately designed personal portfolio by a developer who cares about typography, spacing, performance, and details.

It should never feel like:

> a pasted Google Stitch export.

When making future changes, preserve this visual identity unless the user explicitly asks to change the design direction.
