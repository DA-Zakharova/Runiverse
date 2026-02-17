# Runiverse 🏃‍♀️

Runiverse is a fictional running club website created as a front-end project.  
It represents a community-driven platform where users can explore training plans, discover races, and browse running gear.
The project focuses on modern React development, state management, and UI/UX design.

## Navigation Structure

Home → Club → Plans → Races → Gear → Favorites ⭐️

## Features

- Fictional running club concept
- Training plans by experience level
- Race catalog with distance filters (5K, 10K, Half Marathon, Marathon)
- Running gear catalog with category filters
- Favorites system for races and gear
- Favorites counter in the navigation bar
- Persistent LocalStorage saving
- Responsive layout
- Smooth hover animations
- Client-side routing

## Tech Stack

- React
- Redux Toolkit
- React Router DOM
- CSS (Flexbox)
- LocalStorage API

## Pages

### Home
Introduction to the Runiverse club and quick navigation cards.

### Club
Information about the fictional running community and its values.

### Plans
Training programs filtered by difficulty level.

### Races
Race discovery page with distance filters and favorites support.

### Gear
Catalog of running apparel and accessories.

### Favorites ⭐️
Personal page where users can view saved races and gear.
Includes:
- Remove individual items
- Clear all favorites
- Persistent storage between sessions

## State Management

Redux Toolkit is used to manage:
- Favorites list
- Toggle add/remove logic
- Synchronization with LocalStorage

## Local Storage

Favorites are stored in the browser LocalStorage and restored automatically on reload.

## Author

Created as a final front-end project to practice React, Redux, routing, and UI design using a fictional running club concept.
