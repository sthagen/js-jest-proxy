# js-jest-proxy

Experimental third party proxy of jest.

## Install / Use

This is a helper repository for bootstrapping projects that do use javascript but do not yet employ `package.json` mechanisms or similar.

### Existing packaged sources

In case there already exists a `package.json` in the system to test fodler tree, better use a different approach like:
```bash
$ npm install --save-dev jest
```

### Bootstrap of Unpackaged System to Test

Clone the repo, copy your unpackaged source tree below into the src folder and execute:
```bash
$ npm install
```

For test execution you can call:
```bash
$ npm test
```

## Status

Experimental.

**Note**: The default branch is default.
