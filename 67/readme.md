# curl transport

`index.mjs` is loaded by the main `index.html`.

For the curl transport to become active, place the matching `libcurl.wasm` file at:

`/curl/libcurl.wasm`

If that file is not present, the browser automatically uses the pox transport with `wss://anura.pro/` instead of hanging during startup.
