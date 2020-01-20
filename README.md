# nutil
Handy standalone node based utilities.
- Zero dependency
- 2 modules (Please contribute) see: [how to contribute](./getting-started)
- Package size < 100KB

## Usage
```bash
npx nutil [module] [args]
```
You can use --help flag as module argument to find all the options for the module.

```bash
# help for http.server
npx nutil http.server --help
```

### Available Modules:
- [http.server](#httpserver)
- [digest](#digest)

### http.server
Start a simple http server for quick local testing or file sharing.

```bash
npx nutil http.server
```

### digest
Generate hex digest from a string. (also known as checksum)

```bash
npx nutil digest -a md5 'sample text input'
```

## Contribute
Please read the contribution doc for [getting started](./getting-started).

## Contributors
- [Tilak Sasmal](https://github.com/Tilak999/)

## License
MIT
