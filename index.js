#! /usr/bin/env node

fetch(`https://api.pop1.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${process.argv[2]}`)
  .then(res => res.json())
  .then(res => console.log(res.did))
  .catch(console.error);
