# @s0cks/cmake-release

> [semantic-release](https://github.com/semantic-release/semantic-release) plugin for updating CMake project releases

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Usage](#usage)
- [Build & Install](#build--install)
  - [Prerequisites](#prerequisites)
  - [Install Locally](#install-locally)
- [Changelog](#changelog)
- [License](#license)
- [Contributing](#contributing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

Add the following to your .releaserc

```js
{
  ...
  "plugins": [
    ...
    "@s0cks/cmake-release"
  ]
}
```

## Build & Install

### Prerequisites

- node & npm
- cmake

### Install Locally

```bash
# clone the repository
git clone https://github.com/s0cks/cmake-release
# install npm dependencies & link
npm i
npm link
```

## Changelog

See [CHANGELOG.md](/CHANGELOG)

## License

See [LICENSE](/LICENSE)

## Contributing

See [CONTRIBUTING.md](/CONTRIBUTING.md)
