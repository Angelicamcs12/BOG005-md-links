const fetch = require('node-fetch')

const httpFunction = (links) => {
    const promiseFetch = links.map(hrefLinks =>
        fetch(hrefLinks.href)
        .then(res => {
            if (res.status >= 200 && res.status <= 299) {
                return ({ href: hrefLinks.href, File: hrefLinks.File, Text: hrefLinks.text, status: res.status, OK: res.statusText })
            } else if (res.status >= 400 && res.status <= 499) {
                return ({href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text, status: res.status, OK: 'Fail'})
            }
        })
        .catch(() => {
            return ({ href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text, status: 404, OK: 'Fail' })
        })
        )
        return Promise.all(promiseFetch)
}

module.exports = {httpFunction};