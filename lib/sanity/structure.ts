import type { StructureResolver } from 'sanity/structure'

export const myStructure: StructureResolver = (S) =>
  S.list()
    .title('Content Management')
    .items([
      S.listItem()
        .title('Home Page')
        .id('homePage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
            .title('Home Page Configurations')
        ),
      S.listItem()
        .title('About Page')
        .id('aboutPage')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
            .title('About Page Configurations')
        ),
      S.listItem()
        .title('Contact Page')
        .id('contactPage')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
            .title('Contact Page Configurations')
        ),
      S.divider(),
      
      // Filter out singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) => !['homePage', 'aboutPage', 'contactPage'].includes(listItem.getId()!)
      ),
    ])
