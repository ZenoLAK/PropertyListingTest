# Property Listings App

This is a React-based web application that displays property listings with sorting, filtering, and pagination functionality. Users can switch between table view and card view for listing presentation.

## Getting Started

To get a copy of this project up and running on your local machine, follow these steps.

### Prerequisites

You'll need to have the following software installed on your machine:

- Node.js and npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/your-username/property-listings-app.git
   ```

````

2. Navigate to the project directory:

   ```sh
   cd property-listings-app
   ```

3. Install the project dependencies:

   ```sh
   npm install
   ```

### Running the React App

1. Open a new terminal window/tab.

2. Navigate back to the root directory of the project:

   ```sh
   cd path/to/property-listings-app
   ```

3. Start the development server for the React app:

   ```sh
   npm run dev
   ```

   The app will be accessible at [http://127.0.0.1:5173/](http://127.0.0.1:5173/).

4. Open your web browser and visit the above URL to use the app. You can switch between "Table View" and "Card View" to see property listings in different formats.

### Customization

- Property listings data is fetched from the `data.json` file. If you have a real API, you can replace the API calls in the components with your API endpoints.
- To modify the property listings data, update the `data.json` file located in the `public` directory.

## Built With

- Vite - Fast and lightweight build tool for modern web development
- React - JavaScript library for building user interfaces
- react-router-dom - Routing library for React applications
- Tailwind CSS - CSS framework for building modern and responsive designs
- JSON Server - Simulated backend for serving JSON data

Make sure to adjust paths and file references based on your project's structure. This guide provides instructions for running JSON Server alongside your Vite app to simulate a backend API using the `data.json` file.
````
