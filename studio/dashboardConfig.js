export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6012f8ad2013824b8c784e19',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nx1amdyy',
                  apiId: 'fd88b576-1131-43ce-9fd2-bf64eea67f97'
                },
                {
                  buildHookId: '6012f8aebe125f77fd489649',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4ytciepa',
                  apiId: 'e5ac70f8-19d8-441e-9554-25ce65e61801'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fozzieblue/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4ytciepa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
