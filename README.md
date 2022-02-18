# Sample UDP Server and Client for UDP packet time tracking

## Creating a sample test file fo 32kB

```bash
dd if=/dev/zero bs=32k count=1 of=test
```

## Install Node.Js

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts
```
## Start Server

```node
node server.js
```

## Start Client

```node
node client.js
```

## Results to Notice

- Packets send from client and received on the server
- Time Required for all packets to reach the destination
- Packet loss
