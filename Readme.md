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

![Selenium Grid](https://github.com/user-attachments/assets/90e6a488-5121-45d0-b989-787a20116291)
![Selenium Grid session](https://github.com/user-attachments/assets/a8dbde7c-4bc6-48ab-9f28-85b4dce2cf00)
<img width="1705" alt="image" src="https://github.com/user-attachments/assets/82711a5b-1a0b-4a0d-9ecb-c0c50007c0ce">
![image](https://github.com/user-attachments/assets/a7bd9458-b326-4bce-a982-657b2d209094)

## Features

- Automated the campaign page
- Added Docker support
- Support Selenium Grid
- Generating Allure and Spec reports
- Cross platform
