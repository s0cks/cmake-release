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

Add the following to your .releaserc:

```js
{
  ...
  "plugins": [
    ...
    "@s0cks/cmake-release"
  ]
}
```

Download [BuildInfo.cmake](/cmake/BuildInfo.cmake) and place it in your CMake scripts directory:

Ex:

```bash
cd /path/to/project
# create scripts directory if it doesn't exist
mkdir cmake/
# download BuildInfo.cmake
wget 
```

Add the following to your CMakeLists.txt:

```cmake
include(BuildInfo)
project(
  ${BUILD_JSON_NAME}
  VERSION ${BUILD_JSON_VERSION}
  HOMEPAGE_URL ${BUILD_JSON_HOMEPAGE}
  LANGUAGES C CXX)
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
