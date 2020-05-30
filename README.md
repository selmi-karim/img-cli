![release](https://github.com/selmi-karim/img-cli/workflows/release/badge.svg)

# Images Downloader

An interactive Command-Line Interface Build in NodeJS for downloading a single or multiple images to disk from URL. 


## Prerequisites

To build and run this cli locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [NPM](https://www.npmjs.com/)


# Install

-  From npm
```

yarn add global img-cli

```

-  From GPR
```

npm install @selmi-karim/img-cli -g
```

# Command Topics
### img all

```
USAGE
  $ img all 

Required
  URL: website target

OPTIONS
  -d, --directory          choose a specific directory name and/or path 
  -t, --type               Choose a image type (png, jpg, gif..)
  
EXAMPLES
  $ img all http://karimation.com
  
  $ img all http://karimation.com -d myDir -t png

```

### img solo

```
USAGE
  $ img solo 

Required
  URL:                     image URL target

OPTIONS
  -d, --directory          choose a specific directory name and/or path 
  
EXAMPLES
  $ img solo https://avatars1.githubusercontent.com/u/21101482
  
  $ img solo https://avatars1.githubusercontent.com/u/21101482 -d myImg
  
```

## NPM scripts

 - `npm run release`: release new version
 - `npm run lint`: Lints code
 - `npm run lint:fix`: Lints auto-fix code
 - `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

## Git Hooks

There is already set a `precommit` hook for formatting your code with Prettier :nail_care:

By default, there are two disabled git hooks. They're set up when you run the `npm run semantic-release-prepare` script. They make sure:
 - You follow a [conventional commit message](https://github.com/conventional-changelog/conventional-changelog)

This makes more sense in combination with [automatic releases](#automatic-releases)


## Built With

* [Github Actions](https://github.com/actions) - CI & CD
* [npm](https://www.npmjs.com) - Dependency Management
* [nodejs](https://nodejs.org/en/)



## Versioning and Release

### Semantic Versioning

We follow the [**Semantic Versioning**](https://semver.org/#summary]) scheme.
> set of rules and requirements that dictate how version numbers are assigned and incremented. These rules are based on but not necessarily limited to pre-existing widespread common practices in use in both closed and open-source software... Under this scheme, version numbers and the way they change convey meaning about the underlying code and what has been modified from one version to the next.

Reading the semantic versioning docs more than once will get you a solid understanding on how we version and tag our software releases. 

### Semantic Release

We use **[semantic-release](https://github.com/semantic-release/semantic-release)** to manage and automate complex release workflows.
>**semantic-release** automates the whole package release workflow including: determining the next version number, generating the release notes and publishing the package.
This removes the immediate connection between human emotions and version numbers, strictly following the [Semantic Versioning](http://semver.org/) specification.

As a SWE you will not be versioning nor releasing manually software, as everything is automated. But a solid insight on how we do things will make your vision and sense of understanding match your teammate's.



# Questions?

Feel free to contact <a href="http://www.karimation.com">me</a> or create an issue.

# Author

kerim selmi <a href="http://www.karimation.com">karimation</a>

# License

<a href="LICENSE">MIT License</a>
