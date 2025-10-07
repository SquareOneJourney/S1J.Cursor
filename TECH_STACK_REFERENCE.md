# S1J.Bolt - Tech Stack Reference

## 📋 Project Overview
**SquareOneJourney** - A React-based web application that guides small business owners into AI adoption through interactive tiles and journeys.

---

## 🎯 Core Tech Stack

### **Frontend Framework & Language**
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **React Router DOM 7.9.1** - Client-side routing and navigation

### **Build Tools & Development**
- **Vite 5.4.2** - Fast build tool and development server
- **@vitejs/plugin-react** - React plugin for Vite
- **ES Modules** - Modern JavaScript module system

### **Styling & UI**
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS processing tool
- **Autoprefixer 10.4.18** - Automatic vendor prefixing
- **Custom Fonts**: 
  - Poppins (headings)
  - PT Serif (body text)
  - Lato (serif/banner text)

### **Backend & Database**
- **Supabase 2.57.4** - Backend-as-a-Service (database, auth, real-time)

### **UI Components & Icons**
- **Lucide React 0.544.0** - Beautiful icon library
- **Custom Components** - Built with React + TypeScript

### **Utilities & Libraries**
- **Zod 3.25.76** - TypeScript-first schema validation
- **html2pdf.js 0.12.1** - PDF generation from HTML
- **DOMPurify** - HTML sanitization (security)

### **Code Quality & Linting**
- **ESLint 9.9.1** - JavaScript/TypeScript linting
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting rules
- **React Hooks ESLint Plugin** - React hooks linting
- **React Refresh ESLint Plugin** - Hot reload optimization

---

## 🏗️ Project Architecture

### **Application Structure**
```
src/
├── api/                    # API integrations
├── components/             # React components
│   ├── auth/              # Authentication components
│   ├── journeys/          # Journey-specific components
│   ├── pages/             # Page components
│   ├── seo/               # SEO tools components
│   ├── tiles/             # Tile components
│   ├── ui/                # Reusable UI components
│   └── worksheet/         # Worksheet components
├── contexts/              # React Context providers
├── data/                  # Static data and configurations
├── lib/                   # Utility libraries
├── types/                 # TypeScript type definitions
└── utils/                 # Helper functions
```

### **State Management**
- **React Context API** for global state:
  - `AuthContext` - User authentication state
  - `ToastContext` - Notification system
  - `WorksheetContext` - Worksheet data management

### **Routing Structure**
- **React Router DOM** for client-side routing
- Dynamic routes for tiles and journeys
- Protected routes for authenticated users

---

## 🎨 Design System

### **Color Palette**
- **Brand Green**: `#014421`
- **Tailwind CSS** utility classes for consistent spacing, colors, and typography

### **Typography**
- **Headings**: Poppins font family
- **Body Text**: PT Serif font family
- **Banner/Serif**: Lato font family

### **Responsive Design**
- **Mobile-first** approach with Tailwind breakpoints
- **Responsive grid** layouts
- **Adaptive components** for different screen sizes

---

## 🛠️ Development Workflow

### **Available Scripts**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### **Build Process**
1. **Vite** processes TypeScript/React code
2. **Tailwind CSS** compiles utility classes
3. **PostCSS** processes CSS with Autoprefixer
4. **ESLint** validates code quality
5. **TypeScript** compiles and type-checks

### **Output Structure**
```
dist/
├── assets/               # Optimized production files
│   ├── index-*.js       # Main application bundle
│   ├── index-*.css      # Compiled CSS
│   └── *.js             # Third-party libraries
└── index.html           # Production HTML
```

---

## 🔧 Configuration Files

### **TypeScript Configuration**
- `tsconfig.json` - Main TypeScript config
- `tsconfig.app.json` - Application-specific config
- `tsconfig.node.json` - Node.js environment config

### **Build Configuration**
- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

### **Code Quality**
- `eslint.config.js` - ESLint configuration
- `.vscode/settings.json` - VS Code workspace settings
- `.vscode/css_custom_data.json` - CSS IntelliSense for Tailwind

---

## 📦 Key Dependencies

### **Production Dependencies**
```json
{
  "@supabase/supabase-js": "^2.57.4",
  "html2pdf.js": "^0.12.1",
  "lucide-react": "^0.544.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.9.1",
  "zod": "^3.25.76"
}
```

### **Development Dependencies**
```json
{
  "@eslint/js": "^9.9.1",
  "@types/react": "^18.3.5",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "autoprefixer": "^10.4.18",
  "eslint": "^9.9.1",
  "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  "eslint-plugin-react-refresh": "^0.4.11",
  "globals": "^15.9.0",
  "postcss": "^8.4.35",
  "tailwindcss": "^3.4.1",
  "typescript": "^5.5.3",
  "typescript-eslint": "^8.3.0",
  "vite": "^5.4.2"
}
```

---

## 🚀 Deployment & Production

### **Build Output**
- **Optimized bundles** with code splitting
- **Minified CSS** with Tailwind utilities
- **Tree-shaken JavaScript** for optimal bundle size
- **Hash-based filenames** for cache busting

### **Performance Features**
- **Code splitting** for third-party libraries
- **Lazy loading** for route-based components
- **Optimized assets** in `/dist/assets/`
- **Modern ES modules** for better browser support

---

## 🔒 Security & Best Practices

### **Security Measures**
- **DOMPurify** for HTML sanitization
- **Zod** for input validation
- **Supabase** for secure authentication
- **TypeScript** for type safety

### **Code Quality**
- **ESLint** with React and TypeScript rules
- **TypeScript** strict mode enabled
- **Consistent code formatting**
- **Component-based architecture**

---

## 📱 Features & Functionality

### **Core Features**
- **Interactive Tile System** - Guided AI adoption paths
- **User Authentication** - Supabase-powered auth
- **Worksheet Management** - Save and export functionality
- **SEO Tools** - Built-in SEO analysis tools
- **Responsive Design** - Mobile-first approach

### **User Experience**
- **Toast Notifications** - User feedback system
- **Loading States** - Smooth loading indicators
- **Modal Dialogs** - Clean UI interactions
- **PDF Export** - Worksheet download capability

---

*This reference document provides a comprehensive overview of the S1J.Bolt project's technology stack, architecture, and development practices.*
