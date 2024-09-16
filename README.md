# @s0cks/cmake-release

> [semantic-release](https://github.com/semantic-release/semantic-release) plugin for updating CMake project releases

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Usage](#usage)
  - [build.json Schema Validation](#buildjson-schema-validation)
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

```sh
cd /path/to/project
# create scripts directory if it doesn't exist
mkdir cmake/
# download BuildInfo.cmake
wget https://raw.githubusercontent.com/s0cks/cmake-release/main/cmake/BuildInfo.cmake
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

Finally, create a build.json:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "homepage": "https://github.com/me/my-project
}
```

### build.json Schema Validation

You can validate your build.json schema against: [build.schema.json](/build.schema.json)

Example:

```js
{
  "$schema": "build.schema.json",
  ...
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
