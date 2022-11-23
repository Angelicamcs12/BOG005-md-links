const mocks = {
    path: './Pruebas',
    objValidateFalse: [
        {
            file: '/Users/aeternum/Documents/Laboratoria/BOG005-md-links/lib/Pruebas/filePrueba/holamundo2.md',
            href: 'https://github.com/Laboratoria/BOG005-md-links',
            text: 'MdLinks'
          },
          {
            file: '/Users/aeternum/Documents/Laboratoria/BOG005-md-links/lib/Pruebas/prueba3.md',
            href: 'https://www.youtube.com&#39;]',
            text: 'https://www.youtube.com&#39;]'
          },
          {
            file: '/Users/aeternum/Documents/Laboratoria/BOG005-md-links/lib/Pruebas/prueba3.md',
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown'
          }
    ],
    objValidateTrue: [
        {
            file: '/Users/aeternum/Documents/Laboratoria/BOG005-md-links/lib/Pruebas/filePrueba/holamundo2.md',
            href: 'https://github.com/Laboratoria/BOG005-md-links',
            text: 'MdLinks',
            status: 200,
            ok: 'OK'
          },
          {
            file: '/Users/aeternum/Documents/Laboratoria/BOG005-md-links/lib/Pruebas/prueba3.md',
            href: 'https://www.youtube.com&#39;]',
            text: 'https://www.youtube.com&#39;]',
            status: 404,
            ok: 'Fail'
          },
          {
            file: '/Users/aeternum/Documents/Laboratoria/BOG005-md-links/lib/Pruebas/prueba3.md',
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown',
            status: 200,
            ok: 'OK'
          }
    ],
    statsTrue: { total: 3, unique: 3, broken: 1 },
}

module.exports = {mocks}