# Kadooli Tea Palace - Digital Menu

## Overview

This is a digital menu application for Kadooli Tea Palace, a tea and food establishment. The project is a React-based single-page application that displays menu items with bilingual support (English and Arabic), including images, prices, and organized categories such as Tea & Coffee, Breakfast, and Burgers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with Vite as the build tool
- **Styling**: Custom CSS with CSS variables for theming (dark theme with gold accents)
- **Fonts**: Google Fonts (Playfair Display for headings, Poppins for body text)
- **Design Pattern**: Component-based architecture with centralized menu data

### Data Management
- **Menu Data**: Static JavaScript file (`menuData.js`) containing all menu items
- **Structure**: Categories contain items with properties: name, Arabic name (nameAr), price, and image path
- **Bilingual Support**: Each item includes both English and Arabic text

### Build & Development
- **Dev Server**: Vite configured to run on port 5000 with host 0.0.0.0 for external access
- **Module System**: ES Modules (type: module in package.json)

### Design Decisions
1. **Static Data Over Database**: Menu data is hardcoded in JavaScript for simplicity - suitable for a menu that doesn't change frequently
2. **CSS Variables for Theming**: Enables consistent styling and easy theme modifications
3. **Image-Heavy Design**: Each menu item has an associated image for visual appeal
4. **Responsive Design**: Uses viewport meta tag and flexible CSS for mobile compatibility

### Performance Optimizations (Dec 2024)
1. **OptimizedImage Component**: Custom lazy-loading with IntersectionObserver, WebP format with fallback
2. **Virtualized Menu Items**: Only renders items near viewport (first 9 immediate, rest lazy-loaded)
3. **Priority Loading**: Above-the-fold content loads immediately with high fetch priority
4. **Shimmer Placeholders**: Animated loading states while images load
5. **Smooth Transitions**: CSS fade-in effects when images become visible

## External Dependencies

### Production Dependencies
- `react` (^18.2.0) - UI library
- `react-dom` (^18.2.0) - React DOM rendering

### Development Dependencies
- `vite` (^5.0.8) - Build tool and dev server
- `@vitejs/plugin-react` (^4.2.1) - React support for Vite
- `@types/react` and `@types/react-dom` - TypeScript type definitions

### External Resources
- Google Fonts API (Playfair Display, Poppins)
- Local image assets in `/images/` directory