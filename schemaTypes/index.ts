import { authorType } from './author'
import { blogType } from './blog'
import { announcementType } from './announcement'
import { organizationType } from './organization'

// Pages (Singletons)
import { homePageType } from './homePage'
import { aboutPageType } from './aboutPage'
import { contactPageType } from './contactPage'

export const schemaTypes = [
  // Collections
  authorType,
  blogType,
  announcementType,
  organizationType,
  
  // Singletons
  homePageType,
  aboutPageType,
  contactPageType
]
