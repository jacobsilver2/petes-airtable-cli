oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g petes
$ petes COMMAND
running command...
$ petes (--version)
petes/0.0.0 darwin-x64 node-v16.13.2
$ petes --help [COMMAND]
USAGE
  $ petes COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`petes hello PERSON`](#petes-hello-person)
* [`petes hello world`](#petes-hello-world)
* [`petes help [COMMAND]`](#petes-help-command)
* [`petes plugins`](#petes-plugins)
* [`petes plugins:install PLUGIN...`](#petes-pluginsinstall-plugin)
* [`petes plugins:inspect PLUGIN...`](#petes-pluginsinspect-plugin)
* [`petes plugins:install PLUGIN...`](#petes-pluginsinstall-plugin-1)
* [`petes plugins:link PLUGIN`](#petes-pluginslink-plugin)
* [`petes plugins:uninstall PLUGIN...`](#petes-pluginsuninstall-plugin)
* [`petes plugins:uninstall PLUGIN...`](#petes-pluginsuninstall-plugin-1)
* [`petes plugins:uninstall PLUGIN...`](#petes-pluginsuninstall-plugin-2)
* [`petes plugins update`](#petes-plugins-update)

## `petes hello PERSON`

Say hello

```
USAGE
  $ petes hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/jacobsilver2/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `petes hello world`

Say hello world

```
USAGE
  $ petes hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `petes help [COMMAND]`

Display help for petes.

```
USAGE
  $ petes help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for petes.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `petes plugins`

List installed plugins.

```
USAGE
  $ petes plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ petes plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `petes plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ petes plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ petes plugins add

EXAMPLES
  $ petes plugins:install myplugin 

  $ petes plugins:install https://github.com/someuser/someplugin

  $ petes plugins:install someuser/someplugin
```

## `petes plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ petes plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ petes plugins:inspect myplugin
```

## `petes plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ petes plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ petes plugins add

EXAMPLES
  $ petes plugins:install myplugin 

  $ petes plugins:install https://github.com/someuser/someplugin

  $ petes plugins:install someuser/someplugin
```

## `petes plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ petes plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ petes plugins:link myplugin
```

## `petes plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ petes plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ petes plugins unlink
  $ petes plugins remove
```

## `petes plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ petes plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ petes plugins unlink
  $ petes plugins remove
```

## `petes plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ petes plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ petes plugins unlink
  $ petes plugins remove
```

## `petes plugins update`

Update installed plugins.

```
USAGE
  $ petes plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
