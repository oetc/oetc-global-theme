# oetc-global-theme

A Bootstrap 3 theme for [OETC.org](https://oetc.org).

## Installation

This theme could be installed as a NPM package:

    npm install oetc/oetc-global-theme --save

You can then include the theme within other LESS files; e.g.:

    @import "node_modules/oetc-global-theme/oetc-bootstrap-theme";

Or build the theme directly via LESS on the commandline (or otherwise):

    lessc oetc-bootstrap-theme.less oetc-bootstrap-theme.css

All fonts are hosted via cdn.oetc.org, so there is no need to set up any font assets for this project.


## Development

Do not forget to build before publishing:

```
npm install
npx grunt
```