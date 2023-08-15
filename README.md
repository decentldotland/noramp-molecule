<p align="center">
  <a href="https://decent.land">
    <img src="https://raw.githubusercontent.com/decentldotland/ark-protocol/main/img/new-logo.png" height="200">
  </a>
  <h3 align="center"><code>@decentdotland/noramp-molecule</code></h3>
  <p align="center">Dedicated Molecule for NoRamp.io </p>
</p>

## Build & Run


```bash

git pull https://github.com/decentldotland/noramp-molecule.git

```

Then setup your `.env` file variables with your [NoRamp](noramp.io) AppID and API key

```env
NORAMP_APP_ID=...

NORAMP_API_KEY=...
```

Then run the following command

```bash
npm install && npm run start
```

## How to use
After hosting your instance and having the base endpoint, you can use it in your MEM smart contract to request the app's payments list and validate a certain payment.

Check the [contract example](./example-contract) to learn how to do a basic NoRamp payments validation in your MEM contract ***(please note the example contract is for educational purposes only, implement your own security checks)***

## License
This project is licensed under the [MIT License](./LICENSE).
