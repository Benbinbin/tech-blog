module.exports = (options, ctx) => {

  return {
    additionalPages: [
      {
        path: '/web/',
        frontmatter:{
          layout: 'ListLayout'
        }

      }
    ],
  }
}