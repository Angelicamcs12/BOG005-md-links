#!/usr/bin/env nodo
// con lo anterior Convierto el archivo JavaScript en un script de línea de comandos de NodeJS

const { mdLinks } = require("../index");
const { validateLinks, statsLinks } = require("./functions");


const pathTerminal = process.argv[2];
const argv = process.argv

const cli = (pathTerminal, argv) => {
    if (pathTerminal && argv.includes('--stats') && argv.includes('--validate')) {
        mdLinks(pathTerminal, { validate: true }).then((res) => { console.log('validate links', validateLinks(res)) })
    } else if (pathTerminal && argv.includes('--validate')) {
        mdLinks(pathTerminal, { validate: true }).then((res) => { console.log('validate true', res) })
    } else if (pathTerminal && argv.includes('--stats')) {
        mdLinks(pathTerminal, { validate: true }).then((res) => { console.log('stats true', statsLinks(res)) })
    } else if (pathTerminal && argv[3] == undefined) {
        mdLinks(pathTerminal, { validate: false }).then((res) => { console.log('validate false', res) })
    }
    if (argv[3] !== '--stats' && argv[3] !== '--validate' && argv[3] !== undefined) {
        console.log('La opción es inválida, intente con --validate o --stats')
    } else if (argv[4] !== '--stats' && argv[4] !== '--validate' && argv[4] !== undefined) {
        console.log('La opción es invalida, intente con --validate  o --stats')
    }
}

cli(pathTerminal, argv)