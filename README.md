Easy Way to Install next-ui
npm i @nextui-org/react framer-motion

Configure tailwindConfig.js

```
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
```

### next.js app directory

## setup provider

in /app/provider.jsx

```
'use client'

import {NextUIProvider} from '@nextui-org/react'

export default function Provider({children}){
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}

```

## Add provider to Root

in /app/layout.jsx

```
import {Provider} from "./provider.jsx";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

##Now you can import any NextUI component directly in your Server Components without needing to use the use client; directive:

##page directory

in \_app.js

```
import {NextUIProvider} from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp;
```

#Now you can import any NextUI component wherever you want:
