import { routes, type VercelConfig } from '@vercel/config/v1'

/**
 * Configuração da Vercel.
 *
 * O Vite gera o site com base em /portfolio/ (ver vite.config.ts),
 * mas a Vercel serve a pasta `dist` na raiz do domínio. Por isso:
 *  - "/" redirecciona para "/portfolio/";
 *  - "/portfolio/..." é reescrito internamente para os ficheiros em `dist`.
 */
export const config: VercelConfig = {
  framework: 'vite',
  installCommand: 'npm ci',
  buildCommand: 'npm run build',
  outputDirectory: 'dist',

  redirects: [{ source: '/', destination: '/portfolio/', permanent: false }],

  rewrites: [routes.rewrite('/portfolio/(.*)', '/$1')],

  headers: [
    // Ficheiros com hash no nome podem ficar em cache "para sempre"
    routes.cacheControl('/portfolio/assets/(.*)', {
      public: true,
      maxAge: '1year',
      immutable: true,
    }),
    routes.header('/(.*)', [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ]),
  ],
}
