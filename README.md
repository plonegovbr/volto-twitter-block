# Twitter Blocks for Volto (@plonegovbr/volto-twitter-block)

Addon implementing blocks integrating Twitter elements to [Plone](https://plone.org) projects with [Volto](https://github.com/plone/volto).

[![npm](https://img.shields.io/npm/v/@plonegovbr/volto-twitter-block)](https://www.npmjs.com/package/@plonegovbr/volto-twitter-block)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://plonegovbr.github.io/volto-twitter-block/)
[![Code analysis checks](https://github.com/plonegovbr/volto-twitter-block/actions/workflows/code.yml/badge.svg)](https://github.com/plonegovbr/volto-twitter-block/actions/workflows/code.yml)
[![Unit tests](https://github.com/plonegovbr/volto-twitter-block/actions/workflows/unit.yml/badge.svg)](https://github.com/plonegovbr/volto-twitter-block/actions/workflows/unit.yml)

## Examples

@plonegovbr/volto-twitter-block can be seen in action at the following sites:

- [Plone Brasil](https://plone.org.br)

You can also check its [Storybook](https://plonegovbr.github.io/volto-twitter-block/).

## Install

### New Volto Project

Create a Volto project

```shell
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @plonegovbr/volto-twitter-block
cd my-volto-project
```

Install new add-on and restart Volto:

```shell
yarn install
yarn start
```

### Existing Volto Project

If you already have a Volto project, just update `package.json`:

```JSON
"addons": [
    "@plonegovbr/volto-twitter-block"
],

"dependencies": {
    "@plonegovbr/volto-twitter-block": "*"
}
```

### Test it

Go to http://localhost:3000/

## Credits

The development of this add on was sponsored by the Brazilian Plone Community

[![PloneGov-Br](docs/plonegovbr.png)](https://plone.org.br/)
