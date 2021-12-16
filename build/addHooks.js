const path = require('path')
const fs = require('fs')
const hooks = ['pre-commit']

console.log('start add hooks')
function getHooks(callback) {
  fs.readdirSync(__dirname).forEach(file => {
    if (hooks.includes(file)) {
      callback(file)
    }
  })
}

function copyFile(srcPath, targetPath) {
  fs.copyFileSync(srcPath, targetPath)
}

getHooks(file => {
  const srcPath = path.resolve(__dirname, file)
  const targetPath = path.resolve(__dirname, '..', '.git', 'hooks', file)
  copyFile(srcPath, targetPath)
  console.log('add hook ' + file)
})

console.log('add all hooks done')
