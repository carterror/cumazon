# Cumazon

## Project Overview
Cumazon is an e-commerce platform whose name is a playful combination of "Cuba" and "Amazon". The project was born from the fact that Amazon doesn't ship to Cuba, creating the need for an alternative platform for Cuban consumers. This application aims to provide a similar online shopping experience with localized features for the Cuban market.

The project is built using React with TypeScript for the frontend and Supabase for the backend services, authentication, and database needs.

## Architecture
The project follows a microservice architecture approach with the following components:

- **API Gateway**: Entry point for all client requests
- **Discovery Service**: Service registry using Eureka
- **Config Service**: Centralized configuration management
- **Product Service**: Manages product catalog and inventory
- **Order Service**: Handles order processing
- **User Service**: Manages user authentication and profiles
- **Shopping Cart Service**: Manages user shopping carts
- **Frontend**: Angular-based user interface

## Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: Zustand
- **UI Components**: Custom components with Tailwind CSS
- **Icons**: Lucide React
- **Form Validation**: Zod
- **Date Formatting**: date-fns

### Backend
- **Backend as a Service**: Supabase
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL (via Supabase)
- **Storage**: Supabase Storage for media files

### Development Tools
- **Package Manager**: Yarn (recommended), npm compatible
- **Testing**: Vitest with React Testing Library
- **Mocking**: MSW (Mock Service Worker)
- **Linting**: ESLint
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer

## Getting Started

### Prerequisites
- Node.js 16+ 
- Yarn or npm
- Supabase account

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/cumazon.git
cd cumazon

# Install dependencies
yarn install

# Start development server
yarn dev
```

### Environment Setup
Create a `.env` file in the root directory with your Supabase credentials:

## Services Overview

### Product Service
Manages the product catalog, including categories, inventory, and pricing.

### Order Service
Processes customer orders, manages order status, and coordinates with other services.

### User Service
Handles user registration, authentication, and profile management.

### Shopping Cart Service
Manages the user's shopping cart, including adding/removing items and checkout process.

## API Documentation
API endpoints are documented using Swagger/OpenAPI.

## Development Guidelines
- Follow RESTful API design principles
- Implement proper error handling and validation
- Write unit and integration tests for all services
- Use feature branches and pull requests for development

## Deployment
The application can be deployed using Docker containers orchestrated with Docker Compose or Kubernetes.

## Contributing
Please follow the standard Git workflow:
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Submit a pull request

## License
[License information not found in codebase]
