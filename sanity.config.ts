import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

// Use environment variables or rely on fallback values
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'epcd0vtd'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Epworth Church CMS',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
