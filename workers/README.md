# Flatiron Open Source Worker

This is a simple worker that can be used request data from Workers KV and send it to client side.
It is very fast and can be used to serve static files.

## Setup
To setup the worker install wrangler as global package
```bash
yarn global add @cloudflare/wrangler
```
or
```bash
npm install -g @cloudflare/wrangler
```
Then run
```bash
wrangler login
```
and follow the instructions.

Setup your Workers KV
```bash
wrangler kv:namespace create <YOUR_NAMESPACE>
```
and follow the instructions.

## Usage
To use the worker you need to create a KV namespace and upload the files you want to serve.
Then you need to add the namespace id to the `wrangler.toml` file.
```toml
kv-namespaces = [
    { binding = "your_binding_for_env", id = "your_namespace_id" }
]
```
Also change the account id with you account id in the `wrangler.toml` file.
```toml
account_id = "your_account_id"
```
Then you can run
```bash
wrangler publish
```

Congrats! You have now a worker that can serve static files.