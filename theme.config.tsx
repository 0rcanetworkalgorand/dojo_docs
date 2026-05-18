import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 800 }}>0RCA SWARM DOJO</span>,
  project: { link: 'https://github.com/0rca-labs/swarm-dojo' },
  docsRepositoryBase: 'https://github.com/0rca-labs/swarm-dojo/tree/main/dojo-docs',
  footer: { text: '© 2026 0rca Labs — Built on Algorand' },
  primaryHue: 160,
  useNextSeoProps() {
    return { titleTemplate: '%s – 0rca Swarm Dojo Docs' };
  },
};

export default config;
