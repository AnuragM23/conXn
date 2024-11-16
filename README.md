## <a href="https://conxn.onrender.com">conXn</a>

**conXn** is a real-time messaging web application built with the MERN stack. It provides a seamless communication experience with features such as user authentication, real-time messaging, and a responsive design, ensuring accessibility across all devices. The application is secured using JWT (JSON Web Tokens) to ensure safe and secure communication.

## Features

### User Authentication
- Sign-up, login, and logout functionalities.
- Secured with JWT for token-based authentication and session management.

### Real-Time Messaging
- Instant message sending and receiving using Socket.IO.
- Persistent chat history for users.

### Responsive Design
- Optimized for various screen sizes, ensuring usability on both mobile and desktop devices.

### Secure Communication
- All endpoints are secured, and sensitive data is encrypted to protect user privacy.

## Tech Stack

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.IO
- **Authentication**: JWT (JSON Web Token)

## Installation Prerequisites

- Node.js installed on your system.
- MongoDB instance running locally or hosted

## Steps

### Clone the repository:
```javascript
git clone https://github.com/AnuragM23/conXn.git  
cd conXn
``` 


### Install dependencies:

For the server:
```
cd server  
npm install  
```

For the client:
```
cd ../client  
npm install  
```

### Set up environment variables:

Create a .env file in the server directory and add:
```
PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
```

### Run the application:

Start the server:
```
cd server  
npm start  
```

Start the client:
```
cd ../client  
npm start  
```

Open your browser and navigate to http://localhost:5173 to use the application.

## Folder Structure

realtime-messaging-app/  
├── frontend/         # React.js frontend  
├── backend/         # Express.js backend  
└── README.md       # Project documentation  

### Future Improvements

- Group chat functionality.
- File sharing support (images, documents, etc.).
- Push notifications for new messages.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your feature or bug fix.



Feel free to update and customize this as per your specific implementation!