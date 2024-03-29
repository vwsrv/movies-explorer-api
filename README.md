<br/>
<p align="center">
  <a href="https://github.com/vwsrv/movies-explorer-api">
    <img src="https://d1ka0itfguscri.cloudfront.net/AoR1/2024/02/16/08/54/cZnDjLVdd7c/preview.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Movies-Explorer project</h3>

  <p align="center">
    Backend part of Movies-Explorer project
    <br/>
    <br/>
    <a href="https://github.com/vwsrv/movies-explorer-api"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/vwsrv/movies-explorer-api">View Demo</a>
    .
    <a href="https://github.com/vwsrv/movies-explorer-api/issues">Report Bug</a>
    .
    <a href="https://github.com/vwsrv/movies-explorer-api/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/vwsrv/movies-explorer-api/total) ![Contributors](https://img.shields.io/github/contributors/vwsrv/movies-explorer-api?color=dark-green) ![Stargazers](https://img.shields.io/github/stars/vwsrv/movies-explorer-api?style=social) ![Issues](https://img.shields.io/github/issues/vwsrv/movies-explorer-api) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

This project was made using the ExpressJS library and deployed on Ubuntu 20.04 LTS.
Each stage of the project was discussed in PR with a mentor.

## Built With

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=mongodb" height="40" alt="mongodb logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/npm/CB3837" height="40" alt="npm logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=express" height="40" alt="express logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=dotnet" height="40" alt="dot-net logo"  />
</div>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm

```sh
npm install latest --g
```

### Installation

1. Get a frontend part of project [https://github.com/vwsrv/movies-explorer-frontend](https://github.com/vwsrv/movies-explorer-frontend)

2. Clone the repo

```sh
git clone https://github.com/vwsrv/movies-explorer-api
```

3. Get a backend part (current repository) [https://github.com/vwsrv/movies-explorer-api](https://github.com/vwsrv/movies-explorer-api)

4. Install NPM packages in backend part

```sh
npm install
```

5. Install Yarn packages in frontend part

```sh
yarn install
```

6. Change baseUrl in `utils/MainApi.js`

```JS
export const userApi = new MainApi({
  baseUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
});
```

## Roadmap

See the [open issues](https://github.com/vwsrv/movies-explorer-api/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/vwsrv/movies-explorer-api/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/vwsrv/movies-explorer-api/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Authors

* **Vaslily Vissarov** - *Frontend Developer* - [Vaslily Vissarov](https://github.com/vwsrv) - *Github*

## Acknowledgements

* [ShaanCoding](https://github.com/ShaanCoding/)
* [Othneil Drew](https://github.com/othneildrew/Best-README-Template)
* [ImgShields](https://shields.io/)
