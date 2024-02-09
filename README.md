<p align="center">
  <img src="https://media.discordapp.net/attachments/692710914310537257/1205371643833090079/image.png?ex=65d820d2&is=65c5abd2&hm=a0966b27755cb5a0b15c2bc5b232ab78bf2db8077440427fc4173b9e9425cfe0&=&format=webp&quality=lossless&width=1357&height=858" alt="Screenshot of app feed" height="auto" width="500"/>
</p>

# Real-Time Angular Application

This project is a test Angular application integrated with MongoDB with a Node.js backend. Designed as a simplified X (formerly Twitter) feed clone, the application uses Socket\.IO to deliver real-time updates. As users interact with the application, posts seamlessly appear in real-time.

## Getting Started

Follow these steps to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

[Node.js](https://nodejs.org/en) (with npm)
[Angular CLI](https://angular.io/cli)

### Installation

1. Clone the repository

```sh
git clone https://github.com/EbaaCode/nxgen-int-app.git
```

2. Navigate to the `angular-client` directory and install the dependencies

```sh
cd angular-client
npm install
```

3. Navigate to the `node-server` directory and install the dependencies

```sh
cd ../node-server
npm install
```

### Running the Application

1. Start the Angular application

```sh
cd ../angular-client
ng serve
```

2. Start the Node.js server

```sh
cd ../node-server
node index.js
```

## Built With

- [Angular v17](https://angular.io/) - The web framework used
- [Node.js v18](https://nodejs.org/) - The server environment
- [MongoDB Atlas](https://www.mongodb.com/) - The database used
- [Socket.IO](https://socket.io/) - Enables real-time, bidirectional and event-based communication.

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details
