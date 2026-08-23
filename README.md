# FocusQuest

**An interactive learning platform that turns education into a game-like adventure.**

FocusQuest gamifies learning through matching games, progress tracking, and interactive levels. Designed to make studying engaging and motivating, the app helps users track their progress while playing educational matching games across multiple levels.

## Features

- **Study Match Game** - Interactive matching game with 3 progressive levels covering various subjects (science, biology, physics, chemistry)
- **Progress Tracking** - Visual charts showing moves and time spent across levels
- **User Authentication** - Login/Register system with username storage
- **Settings Management** - Manage student, parent, and teacher email profiles
- **Educational Gallery** - Beautifully displayed educational images
- **Responsive Sidebar** - Collapsible navigation for easy access

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Recharts** - Data visualization for progress tracking
- **Lucide React** - Icon library
- **ESLint** - Code linting

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build production bundle |
| `npm run lint` | Run ESLint on all source files |
| `npm run preview` | Preview production build locally |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost://5173
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── LevelMap.jsx   # Level selection buttons
│   ├── StudyMatch.jsx # Matching game component
│   ├── Sidebar.jsx    # Collapsible navigation
│   └── componentGallary.jsx  # Educational image gallery
├── screens/          # Page-level components
│   ├── homepage.jsx   # Main dashboard
│   ├── LoginRegister.jsx  # Authentication
│   ├── settings.jsx   # User profile management
│   ├── progress.jsx   # Progress tracking with charts
│   ├── Level1.jsx     # Level 1 content
│   ├── Level2.jsx     # Level 2 content
│   └── Level3.jsx     # Level 3 content
├── App.jsx           # Root component with routing
└── main.jsx          # Application entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.