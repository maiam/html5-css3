const fse = require('fs-extra')
const { promisify } = require('util')
const ejsRenderFile = promisify(require('ejs').renderFile)
const globP = promisify(require('glob'))

const srcPath = './'
const destPath = './dist/public'

fse.mkdirs(destPath)
        .then(() => {
          // render page
          return ejsRenderFile(`${srcPath}views/cities/saopaulo.ejs`, Object.assign({}))
        })
        .then((pageContents) => {
          // render layout with page contents
          return ejsRenderFile(`${srcPath}views/cities/saopaulo.ejs`, Object.assign({}, { body: pageContents }))
        })
        .then((layoutContent) => {
          // save the html file
          fse.writeFile(`${destPath}/saopaulo.html`, layoutContent)
        })
        .catch((err) => { console.error(err) })
//
//
// ejs.RenderFile('index.ejs', {
//
// },(err, html) => {
//     fs.writeFile('./dist/docs/index.html', html, (err) => {
//
//     })
// })

// const fse = require('fs-extra')
// const path = require('path')
// const { promisify } = require('util')
// const ejsRenderFile = promisify(require('ejs').renderFile)
// const globP = promisify(require('glob'))
// const config = require('../site.config')
//
// const srcPath = './'
// const distPath = './dist/docs'
//
// // clear destination folder
// //fse.emptyDirSync(distPath)
//
// // copy assets folder
// fse.copy(`${srcPath}docs`, `${distPath}docs`)
//
// // read page templates
// globP('**/*.ejs', { cwd: `${srcPath}views` })
//   .then((files) => {
//     files.forEach((file) => {
//       const fileData = path.parse(file)
//       const destPath = path.join(distPath, fileData.dir)
//
//       // create destination directory
//       fse.mkdirs(destPath)
//         .then(() => {
//           // render page
//           return ejsRenderFile(`${srcPath}views/cities${file}`, Object.assign({}, config))
//         })
//         .then((pageContents) => {
//           // render layout with page contents
//           return ejsRenderFile(`${srcPath}views/cities/cidades`, Object.assign({}, config, { body: pageContents }))
//         })
//         .then((layoutContent) => {
//           // save the html file
//           fse.writeFile(`${destPath}/${fileData.name}.html`, layoutContent)
//         })
//         .catch((err) => { console.error(err) })
//     })
//   })
//   .catch((err) => { console.error(err) })
