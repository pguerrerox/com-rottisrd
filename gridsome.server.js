// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
	})
}

const fs = require('fs')
let redirects = [
		from = "/a/b",
		to = "/",
		status = 200
]
module.exports = {
  afterBuild ({ redirects }) {
    for (const rule of redirects) {
			// rule.from   - The dynamic path
			// rule.to     - The HTML file path
      // rule.status - 200 if rewrite rule
    }
  }
}