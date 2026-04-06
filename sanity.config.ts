import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import { myStructure } from './lib/sanity/structure'

// Use environment variables or rely on fallback values
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'epcd0vtd'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Define which types are singletons so we can remove the 'duplicate' and 'delete' actions
const singletonTypes = new Set(['homePage', 'aboutPage', 'contactPage'])
const singletonActions = new Set(["publish", "discardChanges", "restore"])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Epworth Church CMS',

  plugins: [structureTool({ structure: myStructure })],

  schema: {
    types: schemaTypes,
  },
  
  // Custom document actions to restrict singletons
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
