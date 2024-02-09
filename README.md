<p align="center">
  <img src="https://media.discordapp.net/attachments/692710914310537257/1205367467501686854/image.png?ex=65d81cee&is=65c5a7ee&hm=6e6e0a74883346f387814b3d4381dca41f827a22a34a6ed78b31d2b03c966e32&=&format=webp&quality=lossless&width=1357&height=858" alt="Screenshot of app feed" height="auto" width="500" style="border-radius:15px; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7);"/>
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
