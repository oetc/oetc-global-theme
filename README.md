# oetc-global-theme

A Bootstrap 3 theme for [OETC.org](https://oetc.org).

## Installation

This theme **requires** that it be installed as a [Bower](https://bower.io/) dependency (otherwise it will not build properly). So run the following from within an existing project:

    bower install oetc/oetc-global-theme

You can then include the theme within other LESS files; e.g.:

    @import "bower_components/oetc-global-theme/oetc-bootstrap-theme";

Or build the theme directly via LESS on the commandline (or otherwise):

    lessc oetc-bootstrap-theme.less oetc-bootstrap-theme.css

All fonts are hosted via cdn.oetc.org, so there is no need to set up any font assets for this project.