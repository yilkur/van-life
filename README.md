# VanLife

VanLife is a React-based web application that allows users to browse and view details of vans available for rent. Built with Vite for fast development and Firebase Firestore for data storage, it provides a seamless experience for exploring van rental options.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Browse Vans**: View a list of available vans with details like name, price, and type.
- **Van Details**: Access detailed information about a specific van, including description and images.
- **Dynamic Routing**: Navigate between van listings and details using React Router.
- **Firebase Integration**: Store and retrieve van data securely using Firestore.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Error Handling**: User-friendly error messages for invalid van IDs or failed data fetches.

## Tech Stack
- **Frontend**: React, React Router
- **Build Tool**: Vite
- **Backend**: Firebase Firestore (for storing van data)
- **Styling**: CSS (with class-based styling for components like `van-detail`)
- **Environment Management**: Vite’s `import.meta.env` for secure configuration

## Prerequisites
- **Node.js**: Version 16 or higher (`node --version` to check)
- **npm**: Included with Node.js (`npm --version` to check)
- **Firebase Account**: Required for Firestore integration
- **Git**: For cloning the repository
- **GitHub Account**: To resolve secret scanning alerts (if applicable)

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yilkur/van-life.git
   cd van-life
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Firebase**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a project named `vanlife-a1af5` (or use an existing one).
   - Add a web app to the project to get the Firebase configuration.
   - Enable Firestore in the Firebase Console and create a `vans` collection with sample data (e.g., documents with fields `name`, `price`, `imageUrl`, `type`, `description`).

## Environment Variables
Create a `.env` file in the project root (`/van-life/.env`) with the following Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=vanlife-a1af5.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=vanlife-a1af5
VITE_FIREBASE_STORAGE_BUCKET=vanlife-a1af5.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=803007000356
VITE_FIREBASE_APP_ID=1:803007000356:web:your_app_id
```

Replace `your_firebase_api_key` and `your_app_id` with values from your Firebase web app configuration.

**Note**: Ensure `.env` is listed in `.gitignore` to prevent committing sensitive data.

## Running the App
1. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   This starts the Vite dev server, typically at `http://localhost:5173`.

2. **Build for Production**:
   ```bash
   npm run build
   ```
   This generates a `dist` folder with optimized assets.

3. **Preview the Production Build**:
   ```bash
   npm run preview
   ```

## Usage
- **Home Page**: Navigate to `/` to view the app’s homepage.
- **Vans List**: Go to `/vans` to see a list of available vans (populated from Firestore).
- **Van Details**: Visit `/vans/:id` (e.g., `/vans/123`) to view details of a specific van.
- **Back Navigation**: Use the “Back to [type] vans” link on the van details page to return to the filtered vans list (e.g., `/vans?type=simple`).

### Example Firestore Data
The `vans` collection in Firestore should have documents with the following fields:
```json
{
  "name": "Modest Explorer",
  "price": 60,
  "imageUrl": "https://example.com/van-image.jpg",
  "type": "simple",
  "description": "A cozy van for weekend getaways."
}
```

## Project Structure
```
van-life/
├── src/
│   ├── components/
│   │   └── VanDetail.jsx   # Van details page component
│   ├── api.js              # Firebase configuration and data fetching functions
│   └── ...                 # Other components and assets
├── .env                    # Environment variables (not committed)
├── .gitignore              # Ignored files (e.g., .env, node_modules)
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

### Security Note
If you detect sensitive data (e.g., API keys) in the repository:
- Use `git filter-repo` to remove it from history:
  ```bash
  git filter-repo --replace-text <(echo 'old-api-key==>REDACTED')
  ```
- Resolve GitHub secret scanning alerts in the **Security** tab.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
