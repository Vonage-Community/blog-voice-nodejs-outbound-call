# How to Make an Outbound Text-to-Speech Phone Call with Node.js Sample

This repository shows you how to use the Vonage Voice API to create a text-to-speech outbound phone call securely. For more information, please see the blog post located [here](https://developer.vonage.com/en/blog/how-to-make-an-outbound-text-to-speech-phone-call-with-node-js).

- [How to Make an Outbound Text-to-Speech Phone Call with Node.js Sample](#how-to-make-an-outbound-text-to-speech-phone-call-with-nodejs-sample)
  - [Requirements](#requirements)
  - [Installation and Usage](#installation-and-usage)
    - [API Credentials](#api-credentials)
    - [Setting the Phone Numbers](#setting-the-phone-numbers)
    - [Running the Application](#running-the-application)
  - [Contributing](#contributing)
  - [License](#license)

## Requirements

This application requires that you have the following installed locally:

* [Node.js](https://nodejs.org/en/download/) installed. Node.js is an open-source, cross-platform JavaScript runtime environment. 
* [OPTIONAL - Vonage CLI](https://www.npmjs.com/package/@vonage/cli) Once Node.js is installed, install the CLI by typing `npm install -g @vonage/cli`. This tool allows you to create and manage your Vonage applications from a command-line interface vs. the Vonage Developer Portal.

Additionally, to test the application, you must have a Vonage account. You can create a Vonage account for free or manage your Vonage account details at the [Vonage Dashboard](https://developer.vonage.com).

## Installation and Usage

You can run this application by first cloning this repository locally and opening it inside of an editor such as Visual Studio Code. 

Once you have downloaded a local copy, change into the directory of the application and you can now set up the API credentials for your Vonage account as well as supply the numbers that the application uses.

### API Credentials

Inside of `index.js`, replace the **VONAGE_APPLICATION_ID** with the **Application ID** provided for the Vonage application you created in the developer dashboard. Ensure that the **privateKey** has the path to the private key downloaded earlier. 

As always, make sure not to commit your sensitive API credential data to any public version control. 

### Setting the Phone Numbers

You'll need to set the `to` and `from` phone numbers that the application uses. You can find this by going to the `index.js` file. 

### Running the Application

Once you have your API credentials incorporated and your desired phone numbers, run `node index.js` to load the app. 

Once the web application loads, you should get a phone call provided the number is correct with the text that you specified in the application.

## Contributing

We ❤️ contributions from everyone! If you see something that needs fixed, then please follow the [GitHub Flow](https://guides.github.com/introduction/flow/index.html) and we'll try to incorporate it.

## License

This project is under the [Apache 2.0 License](LICENSE)


