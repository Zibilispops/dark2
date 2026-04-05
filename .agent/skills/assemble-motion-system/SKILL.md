---
name: assemble-motion-system
description: High-fidelity "Assemble Motion" system for premium brand experiences. Use this skill when implementing orchestrated top-to-bottom loading sequences, kinetic hero text assembly with extreme horizontal offsets, staggered row-based grid reveals, and high-contrast intentional hover states that flip typography and background colors. Triggers on "assemble motion", "high-contrast hover", "top-to-bottom sequence", "kinetic slide", "architectural load", "standardize grid effect".
---

# Assemble Motion System (Bigorna Patterns)

## Overview
The "Assemble Motion" system is a motion philosophy designed for premium, industrial, and handmade brand identities. Instead of simple fades or slides, elements "assemble" into position with extreme kinetic energy, mimicking the construction of an architectural or manufactured object.

This skill orchestrates multiple animation libraries (GSAP for timelines/triggers, Framer Motion for component-level states) into a unified, high-performance sequence.

---

## 🏗️ Core Principles

### 1. The Strict Top-to-Bottom Sequence
Loading must feel like a "fall-down" assembly. Each tier of the UI reveals only after the preceding tier has established its presence.
- **T1: Navbar** (0.0s) - Direct slide from top.
- **T2: Eyebrow/Meta** (0.6s) - Vertical drop.
- **T3: Kinetic Hero** (1.0s) - Extreme horizontal "whip-pan" slash.
- **T4: Background Details** (1.4s) - Scale/growth transitions for decorative lines.
- **T5: Subtitle/CTAs** (1.8s) - Vertical lift into position.
- **T6: Content Sections** (Scroll-triggered) - Smooth 200px lifts.
- **T7: The Anchor (Footer)** (3.5s+) - The final element to resolve.

### 2. High-Contrast Intentional Hover
Hover states are not subtle; they are "state changes."
- **Inversion**: Swap dark transparent backgrounds (`bg-white/5`) for solid bright backgrounds (`bg-white`).
- **Typography Flip**: Reverse text colors (White -> Black) to create a high-impact visual "snap."
- **Focus**: Interactive elements (like "+" buttons) should reverse their own internal color logic on the parent's hover.

### 3. Row-Based Staggered Reveals
Grid items should not appear simultaneously.
- **Pattern**: Stagger by column index (`delay = (i % columns) * 0.15s`).
- **Motion**: 40px - 60px vertical lift (`y: 40`).
- **Standardization**: Ensure the same motion profile applies to category cards, product grids, and gallery items to maintain design system cohesion.

---

## 🛠️ Implementation Patterns

### Pattern 1: Kinetic Hero "Whip-Pan" (GSAP)
Use `fromTo` with extreme viewport units (`vw`) to guarantee elements start completely outside the frame and strike their target position over exactly 1 second.

```javascript
// page.tsx
gsap.fromTo(".hero-word-left", 
  { x: "-120vw", opacity: 0 },
  { x: "0vw", opacity: 1, duration: 1, ease: "power3.out", delay: 1.0 }
);
gsap.fromTo(".hero-word-right", 
  { x: "120vw", opacity: 0 },
  { x: "0vw", opacity: 1, duration: 1, ease: "power3.out", delay: 1.2 }
);
```

### Pattern 2: Component-Level Stagger (Framer Motion)
Refactor card components to accept a dynamic `delay` prop to enable row-based timing.

```tsx
// ProductCard.tsx
export default function ProductCard({ delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative p-16 bg-white/5 hover:bg-white transition-all duration-700"
    >
      <h3 className="text-white group-hover:text-black transition-colors duration-700">
        Product Name
      </h3>
    </motion.div>
  );
}
```

### Pattern 3: Hydraulic Footer Delay
The footer is used as a temporal anchor. Use a long initial delay to ensure the page "settles" before the final brand block appears.

```tsx
// Footer.tsx
<motion.footer
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, delay: 3.5, ease: "expo.out" }}
>
  {/* Footer content */}
</motion.footer>
```

---

## ⚡ Performance & Safety

- **Hydration Sync**: Always wrap GSAP `useEffect` blocks in a `gsap.context()` and ensure they only execute once the component is mounted to prevent Next.js hydration errors.
- **Mix-Blend-Difference**: For large hero text, use `mix-blend-difference` to maintain visibility over any decorative background lines or noise patterns.
- **Viewport Selection**: Use `once: true` on scroll triggers to prevent repetitive assembly motion for secondary visits to the section.

---
**Maintained by Antigravity IDE Agents.**
