# webdriverio-assignment

Volvocars has saved more than a million lives with its three-point seat belt and we are on a mission
now to save a million more lives, starting with this campaign. You are the test lead for the campaign
team and you need to setup a set of automated test suite using webdriverio.

## Tech Stack

**Client:** Webdriver.io, Cucumber, Typescript, Javascript

**Server:** Node

## Run Locally

Clone the project

```bash
  git clone https://github.com/priyankasoni1723/webdriverio-assignment
```

Go to the project directory

```bash
  cd webdriverio-assignment
```

Install dependencies

```bash
  npm install
```

comment out the host setup in `wdio.conf.ts`

```bash
  hostname: "localhost", // Selenium Hub hostname
  port: 4444, // Selenium Hub port
  path: "/wd/hub",
```

To run tests, run the following command

```bash
  npm run wdio
```

## Run Using Docker Image

```bash
  npm run build-docker-image
```

To run tests, run the following command

```bash
  npm run wdio
```

## Generate Reports

```bash
  npm run allure:report
  npm run allure:open
```

## Demo

![Selenium Grid]()
![Selenium Grid]()
![Allure Report]()
![Spec Report]()

## Features

- Automated the campaign page
- Added Docker support
- Support Selenium Grid
- Generating Allure and Spec reports
- Cross platform
