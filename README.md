<div align="center">

# 🎨 Hall Management System - Frontend

### Modern React Application for Sheikh Russel Hall

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-10.11.1-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payment-008CDD?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)

_A beautiful, responsive, and feature-rich frontend for hall management_

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Available Scripts](#-available-scripts)
- [Key Components](#-key-components)
- [Routing](#-routing)
- [State Management](#-state-management)

---

## 🌟 Overview

This is the frontend application for Sheikh Russel Hall Management System, built with React and modern web technologies. It provides an intuitive interface for students to order meals, make payments, and manage their hall activities.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔐 **Authentication**

- Firebase Email/Password Auth
- Email Verification
- Protected Routes
- Role-Based UI
- Persistent Sessions

### 🍽️ **Menu System**

- Category-based Browsing
- Search & Filter
- Dynamic Menu Display
- Real-time Updates
- Image Gallery

</td>
<td width="50%">

### 🛒 **Shopping Experience**

- Add to Cart
- Cart Management
- Quantity Control
- Price Calculation
- Order Summary

### 💳 **Payment**

- Stripe Integration
- Secure Checkout
- Payment History
- Invoice Download
- Transaction Tracking

</td>
</tr>
<tr>
<td width="50%">

### 👤 **User Dashboard**

- Profile Management
- Order History
- Payment Records
- Review System
- Personal Information

</td>
<td width="50%">

### 📊 **Admin Panel**

- User Management
- Menu CRUD Operations
- Analytics Dashboard
- Revenue Charts
- Order Statistics

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

### Core Technologies

|                                                       Technology                                                       | Version | Purpose    |
| :--------------------------------------------------------------------------------------------------------------------: | :-----: | :--------- |
|           ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white)            | 18.2.0  | UI Library |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) | 6.22.3  | Routing    |
|   ![TailwindCSS](https://img.shields.io/badge/-Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)    |  3.4.3  | Styling    |
|        ![DaisyUI](https://img.shields.io/badge/-DaisyUI-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)         |  4.9.0  | Components |

### State & Data Management

|                                                     Technology                                                      | Version  | Purpose      |
| :-----------------------------------------------------------------------------------------------------------------: | :------: | :----------- |
| ![React Query](https://img.shields.io/badge/-React_Query-FF4154?style=flat-square&logo=react-query&logoColor=white) |  5.35.5  | Server State |
|          ![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)          |  1.6.8   | HTTP Client  |
|    ![Context API](https://img.shields.io/badge/-Context_API-61DAFB?style=flat-square&logo=react&logoColor=white)    | Built-in | Global State |

### Authentication & Payment

|                                                 Technology                                                 | Version | Purpose        |
| :--------------------------------------------------------------------------------------------------------: | :-----: | :------------- |
| ![Firebase](https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black) | 10.11.1 | Authentication |
|    ![Stripe](https://img.shields.io/badge/-Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white)    |  3.4.1  | Payments       |

### UI & UX Libraries

|       Library       | Version | Purpose            |
| :-----------------: | :-----: | :----------------- |
| **React Hook Form** | 7.51.3  | Form Management    |
|   **SweetAlert2**   | 11.10.8 | Alerts & Modals    |
|   **React Icons**   |  5.2.1  | Icon Library       |
|    **Recharts**     | 2.12.3  | Data Visualization |
|     **Swiper**      | 11.1.0  | Carousels          |
|  **React Rating**   |  1.5.0  | Star Ratings       |
|  **React Helmet**   |  2.0.4  | SEO Management     |

---

## 📁 Project Structure

```
📦 Hall-Copon-Managment-Frontend
├── 📂 public
│   ├── 📄 index.html
│   ├── 📄 Menu.json                    # Menu data
│   └── 🖼️ favicon.ico
│
├── 📂 src
│   │
│   ├── 📂 assets                       # Static Resources
│   │   └── 📂 Images
│   │       └── 📂 Julogo               # University logo
│   │
│   ├── 📂 Context                      # React Context
│   │   └── 📄 AuthProvider.jsx         # Authentication context
│   │
│   ├── 📂 Firebase                     # Firebase Configuration
│   │   └── 📄 firebase.config.js
│   │
│   ├── 📂 hooks                        # Custom React Hooks
│   │   ├── 📄 useAdmin.jsx             # Admin role verification
│   │   ├── 📄 useAuth.jsx              # Authentication hook
│   │   ├── 📄 useAxiosPublic.jsx       # Public API calls
│   │   ├── 📄 useAxiosSecure.jsx       # Authenticated API calls
│   │   ├── 📄 useCart.jsx              # Cart management
│   │   ├── 📄 useMenu.jsx              # Menu data fetching
│   │   ├── 📄 useModerator.jsx         # Moderator verification
│   │   ├── 📄 usePayment.jsx           # Payment data
│   │   └── 📄 useVerifyAdmin.jsx       # User authorization check
│   │
│   ├── 📂 pages                        # Main Application Pages
│   │   ├── 📂 Home                     # Homepage
│   │   ├── 📂 Login                    # Login page
│   │   ├── 📂 SignUp                   # Registration page
│   │   ├── 📂 Menu                     # Menu browsing
│   │   ├── 📂 Order                    # Order management
│   │   ├── 📂 Banner                   # Hero section
│   │   ├── 📂 Feature                  # Features showcase
│   │   ├── 📂 Graph                    # Analytics graphs
│   │   ├── 📂 PopularMenu              # Popular items
│   │   └── 📂 Testimonial              # User reviews
│   │
│   ├── 📂 Dashboard                    # Dashboard Pages
│   │   ├── 📂 AdminHome                # Admin dashboard
│   │   ├── 📂 ModeratorHome            # Moderator dashboard
│   │   ├── 📂 UserHome                 # User dashboard
│   │   ├── 📂 AddItems                 # Add menu items
│   │   ├── 📂 AddUsers                 # Add authorized users
│   │   ├── 📂 AddReview                # Submit reviews
│   │   ├── 📂 ManageItem               # Menu management
│   │   ├── 📂 UpdateItem               # Edit menu items
│   │   ├── 📂 Payment                  # Payment processing
│   │   ├── 📂 PaymentHistory           # Transaction history
│   │   └── 📂 UserProfile              # Profile management
│   │
│   ├── 📂 Layout                       # Layout Components
│   │   ├── 📄 Main.jsx                 # Main layout wrapper
│   │   └── 📄 Dashboard.jsx            # Dashboard layout
│   │
│   ├── 📂 Router                       # Routing Configuration
│   │   ├── 📄 Router.jsx               # Main router
│   │   ├── 📄 PrivateRoute.jsx         # Protected routes
│   │   └── 📄 AdminRoute.jsx           # Admin-only routes
│   │
│   ├── 📂 SharePages                   # Shared Components
│   │   ├── 📂 Navbar                   # Navigation bar
│   │   ├── 📂 Footer                   # Footer component
│   │   ├── 📂 CartTitle                # Page titles
│   │   ├── 📂 Cover                    # Cover images
│   │   ├── 📂 FoodCard                 # Food item cards
│   │   ├── 📂 MenuItem                 # Menu item display
│   │   ├── 📂 SectionTitle             # Section headers
│   │   └── 📂 SocialLogin              # Social auth buttons
│   │
│   ├── 📄 App.js                       # Main App component
│   ├── 📄 App.css                      # App styles
│   ├── 📄 index.js                     # Entry point
│   └── 📄 index.css                    # Global styles
│
├── 📄 package.json                     # Dependencies
├── 📄 tailwind.config.js               # Tailwind configuration
├── 📄 postcss.config.js                # PostCSS configuration
├── 📄 .gitignore                       # Git ignore rules
└── 📄 README.md                        # This file
```

---

## 🚀 Installation

### Prerequisites

```bash
✅ Node.js (v14 or higher)
✅ npm or yarn
✅ Firebase account
✅ Stripe account
✅ ImgBB API key
```

### Step-by-Step Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Hall-Copon-Managment-Frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment** (see [Configuration](#-configuration))

4. **Start development server**

   ```bash
   npm start
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

---

## ⚙️ Configuration

### Firebase Setup

Create `src/Firebase/firebase.config.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

export default firebaseConfig;
```

### API Configuration

Update `src/hooks/useAxiosPublic.jsx` and `useAxiosSecure.jsx`:

```javascript
const axiosPublic = axios.create({
  baseURL: "http://localhost:5000", // Your backend URL
});
```

### Stripe Configuration

Update Stripe publishable key in payment components:

```javascript
const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY");
```

### ImgBB API

Update in `src/pages/SignUp/Signup.jsx`:

```javascript
const imgHostApi = `https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY`;
```

---

## 📜 Available Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm start`     | Runs the app in development mode |
| `npm run build` | Builds the app for production    |
| `npm test`      | Launches the test runner         |
| `npm run eject` | Ejects from Create React App     |

---

## 🧩 Key Components

### Authentication Components

- **`AuthProvider.jsx`** - Manages authentication state
- **`Login.jsx`** - User login interface
- **`SignUp.jsx`** - User registration with validation
- **`PrivateRoute.jsx`** - Route protection wrapper

### Dashboard Components

- **`AdminHome`** - Admin analytics dashboard
- **`ModeratorHome`** - Moderator statistics
- **`UserHome`** - User profile and information
- **`ManageItem`** - Menu item management table

### Shared Components

- **`Navbar`** - Responsive navigation with role-based menu
- **`FoodCard`** - Reusable food item card
- **`MenuItem`** - Menu item display component
- **`SectionTitle`** - Consistent section headers

---

## 🗺️ Routing

### Public Routes

| Path      | Component | Description       |
| --------- | --------- | ----------------- |
| `/`       | Home      | Homepage          |
| `/login`  | Login     | User login        |
| `/signup` | SignUp    | User registration |
| `/menu`   | Menu      | Browse menu       |

### Protected Routes (Requires Login)

| Path                         | Component      | Description         |
| ---------------------------- | -------------- | ------------------- |
| `/order`                     | Order          | Order management    |
| `/dashboard/user-home`       | UserHome       | User dashboard      |
| `/dashboard/payment`         | Payment        | Payment processing  |
| `/dashboard/payment-history` | PaymentHistory | Transaction history |
| `/dashboard/add-review`      | AddReview      | Submit reviews      |

### Admin Routes (Admin Only)

| Path                    | Component | Description     |
| ----------------------- | --------- | --------------- |
| `/dashboard/admin-home` | AdminHome | Admin dashboard |
| `/dashboard/all-users`  | AllUsers  | User management |

### Moderator Routes (Moderator Only)

| Path                         | Component     | Description         |
| ---------------------------- | ------------- | ------------------- |
| `/dashboard/moderator-home`  | ModeratorHome | Moderator dashboard |
| `/dashboard/add-items`       | AddItems      | Add menu items      |
| `/dashboard/manage-items`    | ManageItem    | Manage menu         |
| `/dashboard/update-item/:id` | UpdateItem    | Edit menu item      |

---

## 🔄 State Management

### Context API

- **AuthContext** - Global authentication state
  - User information
  - Login/Logout functions
  - Loading states

### TanStack Query (React Query)

Used for server state management:

```javascript
// Example: Fetching menu data
const { data: menu, isLoading } = useQuery({
  queryKey: ["menu"],
  queryFn: async () => {
    const res = await axiosPublic.get("/menu");
    return res.data;
  },
});
```

### Custom Hooks

- **`useAuth()`** - Access authentication context
- **`useCart()`** - Manage cart state
- **`useMenu()`** - Fetch menu data
- **`useAdmin()`** - Check admin status
- **`useModerator()`** - Check moderator status

---

## 🎨 Styling

### Tailwind CSS

Utility-first CSS framework for rapid UI development.

**Configuration:** `tailwind.config.js`

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
```

### DaisyUI

Component library built on Tailwind CSS.

**Available Themes:**

- Light
- Dark
- Cupcake
- And more...

---

## 🔒 Security Features

- ✅ Firebase Authentication
- ✅ JWT Token Management
- ✅ Protected Routes
- ✅ Role-Based Access Control
- ✅ Secure API Calls
- ✅ Input Validation
- ✅ XSS Protection

---

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Tablet optimized
- ✅ Desktop enhanced
- ✅ Touch-friendly UI
- ✅ Adaptive layouts

**Breakpoints:**

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

---

## 🏗️ Build for Production

```bash
# Create optimized production build
npm run build

# The build folder will contain optimized files
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

## 👨‍💻 Developed By

**Sheikh Russel Hall Management Team**  
_Jahangirnagar University_

[![Email](https://img.shields.io/badge/Email-jucse389@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jucse389@gmail.com)

---

**Made with ❤️ using React & TailwindCSS**

⭐ Star this repo if you find it helpful!

</div>
