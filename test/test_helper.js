const jsdom  = require('jsdom')
const chai = require('chai')
const chaiImmutable = require('chai-immutable')

const { window } = new jsdom.JSDOM('<!doctype html><html><body></body></html>').window
const document = window.document

global.document = document
global.window = window

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})

chai.use(chaiImmutable)