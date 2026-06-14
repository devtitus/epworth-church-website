# Refactor Organizations Page Sections

## Goal

Refactor the organization detail page section components so presentation, layout, and data are separated cleanly:

1. Move organization section components out of `components/sections/organizations/` into `components/sections/`.
2. Extract reusable UI pieces into `components/ui/`.
3. Move organization page content out of section components and into a dedicated `data/` file.

## Current findings

### Existing organization section files

Current folder: `components/sections/organizations/`

Files found:

- `index.ts`
- `OrgAbout.tsx`
- `OrgActivities.tsx`
- `OrgActivitiesGrid.tsx`
- `OrgGallery.tsx`
- `OrgLeaders.tsx`

`OrgHero` is already located at `components/sections/OrgHero.tsx`, not inside the nested organizations folder.

### Current imports

`app/organizations/[slug]/page.tsx` imports organization sections directly:

- `OrgHero` from `@/components/sections/OrgHero`
- `OrgAbout` from `@/components/sections/organizations/OrgAbout`
- `OrgActivities` from `@/components/sections/organizations/OrgActivities`
- `OrgNote` from `@/components/sections/organizations/OrgLeaders`
- `OrgActivitiesGrid` from `@/components/sections/organizations/OrgActivitiesGrid`
- `OrgGallery` from `@/components/sections/organizations/OrgGallery`

Important naming issue: `components/sections/organizations/OrgLeaders.tsx` has a default export named `OrgNote`, while the file name is `OrgLeaders`. The plan should resolve this naming mismatch to avoid confusion.

### Existing data

Organization content currently lives in:

- `lib/data/organizations.ts`

Organization hero content already lives in:

- `data/heroSection.ts`

The organization detail page uses `organizations[slug]` from `lib/data/organizations.ts`, so the refactor should update this file to consume or re-export the new data file instead of duplicating content.

### Existing UI pattern

Reusable UI components are stored in `components/ui/`, for example:

- `components/ui/Button.tsx`
- `components/ui/MinistryCard.tsx`
- `components/ui/FormInput.tsx`

The organization section components contain repeated Tailwind classes and layout patterns that can be extracted.

## Recommended target structure

```txt
components/
  sections/
    OrgHero.tsx
    OrgAbout.tsx
    OrgActivities.tsx
    OrgActivitiesGrid.tsx
    OrgGallery.tsx
    OrgNote.tsx
    index.ts

  ui/
    SectionShell.tsx
    SectionHeader.tsx
    HighlightedTitle.tsx
    GlassMediaFrame.tsx
    ParagraphList.tsx
    ActivitiesList.tsx
    BentoGrid.tsx
    GalleryGrid.tsx

data/
  organizationSections.ts

lib/data/
  organizations.ts
```

`components/sections/organizations/` should be removed after all imports are updated and the refactor is verified.

## Component extraction plan

### Keep in `components/sections/`

These are page-level semantic sections and should remain section components:

- `OrgHero`
- `OrgAbout`
- `OrgActivities`
- `OrgActivitiesGrid`
- `OrgGallery`
- `OrgNote`

### Move or rename

Rename `OrgLeaders.tsx` to `OrgNote.tsx` because the component represents a note/message from an organization leader, not a leaders list. The current data field is `noteTitle`, `noteContent`, and `noteAuthor`.

### Extract to `components/ui/`

Reusable UI pieces:

1. `SectionShell`
   - Wraps the repeated section structure:
     - `section`
     - `max-w-7xl`
     - `px-4 sm:px-6 lg:px-8`
     - `py-20 lg:py-24`
     - optional `aria-labelledby`

2. `SectionHeader`
   - Extracts the small uppercase label and heading.
   - Supports centered or left-aligned layouts.

3. `HighlightedTitle`
   - Extracts the repeated `title.split(" ")` logic.
   - Supports two-part and three-part titles if needed.
   - Current sections use first words plus highlighted last word.

4. `GlassMediaFrame`
   - Extracts the repeated glassmorphism frame:
     - `rounded-3xl`
     - border
     - `backdrop-blur-md`
     - `background: var(--card-shade)`
     - inner placeholder with `aspect-[4/3]`

5. `ParagraphList`
   - Extracts repeated paragraph rendering from `OrgAbout` and `OrgNote`.

6. `ActivitiesList`
   - Extracts the repeated activity list from `OrgActivities`.

7. `BentoGrid`
   - Extracts the placeholder bento grid from `OrgActivitiesGrid`.

8. `GalleryGrid`
   - Extracts the placeholder gallery grid from `OrgGallery`.

## Data extraction plan

Create `data/organizationSections.ts`.

Suggested shape:

```ts
export interface OrganizationActivity {
  title: string;
  description: string;
}

export interface OrganizationNote {
  title: string;
  content: string[];
  authorName: string;
}

export interface OrganizationSections {
  aboutTitle: string;
  aboutContent: string[];
  activitiesTitle: string;
  activities: OrganizationActivity[];
  noteTitle: string;
  noteContent: string[];
  noteAuthor: string;
  activitiesGridTitle: string;
  galleryTitle: string;
}

export const organizationSections: Record<string, OrganizationSections> = {
  "sunday-school": {
    // content currently inside lib/data/organizations.ts
  },
  emteens: {
    // ...
  },
};
```

Then update `lib/data/organizations.ts`:

```ts
import { organizationSections, type OrganizationActivity } from "@/data/organizationSections";

export interface Leader {
  name: string;
  title: string;
  image?: string;
}

export interface Organization extends OrganizationSections {
  slug: string;
  leadersTitle: string;
  leaders: Leader[];
}

export const organizations: Record<string, Organization> = {
  "sunday-school": {
    slug: "sunday-school",
    ...organizationSections["sunday-school"],
    leadersTitle: "Our Team",
    leaders: [
      { name: "Teacher Name", title: "Sunday School Superintendent" },
      { name: "Teacher Name", title: "Class Teacher - Ages 4-6" },
      { name: "Teacher Name", title: "Class Teacher - Ages 7-12" },
    ],
  },
  // repeat for other organizations
};

export const organizationList = Object.values(organizations);
```

This keeps the organization list and leader-specific data in `lib/data/organizations.ts`, while moving general page section content into `data/organizationSections.ts`.

Alternative: move the entire `organizations` object into `data/organizationSections.ts` and re-export it from `lib/data/organizations.ts`. This is simpler but less clean because `lib/data/organizations.ts` also owns organization list semantics. Recommended approach is the split above.

## Implementation steps

### Phase 1: Create UI components

Create reusable UI components in `components/ui/`:

1. `SectionShell.tsx`
2. `SectionHeader.tsx`
3. `HighlightedTitle.tsx`
4. `GlassMediaFrame.tsx`
5. `ParagraphList.tsx`
6. `ActivitiesList.tsx`
7. `BentoGrid.tsx`
8. `GalleryGrid.tsx`

Keep styling consistent with current sections and avoid changing visible output.

### Phase 2: Move organization sections

Move files from `components/sections/organizations/` to `components/sections/`:

- `OrgAbout.tsx` -> `components/sections/OrgAbout.tsx`
- `OrgActivities.tsx` -> `components/sections/OrgActivities.tsx`
- `OrgActivitiesGrid.tsx` -> `components/sections/OrgActivitiesGrid.tsx`
- `OrgGallery.tsx` -> `components/sections/OrgGallery.tsx`
- `OrgLeaders.tsx` -> `components/sections/OrgNote.tsx`

Remove `components/sections/organizations/` after imports are updated.

### Phase 3: Update section components to use UI components

Update each organization section:

- `OrgAbout`
  - use `SectionShell`
  - use `SectionHeader`
  - use `HighlightedTitle`
  - use `ParagraphList`
  - use `GlassMediaFrame`

- `OrgActivities`
  - use `SectionShell`
  - use `SectionHeader`
  - use `HighlightedTitle`
  - use `GlassMediaFrame`
  - use `ActivitiesList`

- `OrgActivitiesGrid`
  - use `SectionShell`
  - use `SectionHeader`
  - use `HighlightedTitle`
  - use `BentoGrid`

- `OrgGallery`
  - use `SectionShell`
  - use `SectionHeader`
  - use `HighlightedTitle`
  - use `GalleryGrid`

- `OrgNote`
  - use `SectionShell`
  - use `SectionHeader`
  - use `HighlightedTitle`
  - use `ParagraphList`
  - use `GlassMediaFrame`

- `OrgHero`
  - optionally use `SectionShell`, `HighlightedTitle`, and `GlassMediaFrame`
  - keep hero-specific logic inside `OrgHero`

### Phase 4: Extract data

Create `data/organizationSections.ts` with all organization section content currently inside `lib/data/organizations.ts`.

Update `lib/data/organizations.ts` to import and merge `organizationSections`.

Update `app/organizations/[slug]/page.tsx` imports to use the new section paths:

```ts
import OrgAbout from "@/components/sections/OrgAbout";
import OrgActivities from "@/components/sections/OrgActivities";
import OrgNote from "@/components/sections/OrgNote";
import OrgActivitiesGrid from "@/components/sections/OrgActivitiesGrid";
import OrgGallery from "@/components/sections/OrgGallery";
```

### Phase 5: Update exports

Update `components/sections/index.ts` to export organization sections:

```ts
export { default as OrgHero } from "./OrgHero";
export { default as OrgAbout } from "./OrgAbout";
export { default as OrgActivities } from "./OrgActivities";
export { default as OrgNote } from "./OrgNote";
export { default as OrgActivitiesGrid } from "./OrgActivitiesGrid";
export { default as OrgGallery } from "./OrgGallery";
```

The old `components/sections/organizations/index.ts` should be removed.

### Phase 6: Cleanup

After all references are updated:

- delete `components/sections/organizations/`
- run import/reference search for:
  - `components/sections/organizations`
  - `OrgLeaders`
  - `OrgNote`
- confirm no stale imports remain

## Verification checklist

Before marking complete:

1. TypeScript check passes:
   - run `npm run build`
   - or, if too heavy, run `npx tsc --noEmit`

2. Lint passes:
   - run `npm run lint`

3. Import check passes:
   - no imports point to `components/sections/organizations`
   - no imports use `OrgLeaders`

4. Visual check:
   - open `/organizations`
   - open at least one dynamic route such as `/organizations/sunday-school`
   - confirm section spacing, typography, image frame, and placeholder grids match the current layout

## Risks and decisions

- `OrgLeaders.tsx` currently exports `OrgNote`; rename during the move to reduce confusion.
- Data split should avoid duplicating organization content between `lib/data/organizations.ts` and `data/organizationSections.ts`.
- Do not move data-only hero content again; `data/heroSection.ts` already owns organization hero data.
- Do not extract too much into `components/ui/`; keep organization-specific layout decisions inside section components.
