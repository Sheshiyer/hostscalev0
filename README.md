# HostScale

![HostScale Logo](/public/images/hostscalelogo.png)

HostScale is an intelligent property portfolio management platform designed to help short-term rental operators scale from dozens to hundreds of properties without proportionally increasing operational complexity or sacrificing guest experience quality. The platform centralizes operations, automates workflows, and leverages AI to maintain consistent guest experiences across growing property portfolios.

## Features

### Central Intelligence Hub
- **Unified Dashboard**: Single-view access to all properties across platforms with customizable widgets
- **Property Master Database**: Structured data with 16-category property checklist system
- **Analytics Engine**: Real-time performance metrics and predictive analytics
- **Integration Layer**: Bidirectional sync with major OTAs (Airbnb, VRBO, Booking.com)

### AI-Powered Guest Experience
- **Intelligent Response System**: Natural language processing for personalized guest communications
- **Smart Escalation Framework**: Criticality assessment and automatic routing of guest needs
- **Guest Preference Engine**: Profile development and personalized recommendations
- **Local Recommendations**: AI-curated suggestions based on guest preferences

### Operational Workflow Automation
- **Task Management System**: Automated task generation and assignment based on bookings
- **Quality Control Framework**: Digital checklists with vision-based verification
- **Vendor Management**: Performance tracking and automated work order generation
- **Inventory Management**: Supply tracking and optimization across properties

### Portfolio Scaling Tools
- **Property Onboarding System**: Template-based setup for consistent configuration
- **Resource Optimization**: Staff allocation and service territory mapping
- **Standardization Tools**: Consistent processes and quality across all properties
- **Growth Analytics**: Scaling readiness assessment and benchmarking

### Marketing Performance Hub
- **Marketing Automation**: Guest journey orchestration across pre, during, and post-stay
- **UGC Generation System**: Property-specific photo guides and content request automation
- **Remarketing Audience Builder**: Guest segmentation and automated audience refreshing
- **Referral Network**: Guest referral program and local business partnerships

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Frontend**: React 18, TypeScript 5
- **Styling**: Tailwind CSS 3, CSS Modules
- **UI Components**: Custom component system with Radix UI primitives
- **Animations**: Framer Motion
- **Data Visualization**: Recharts
- **State Management**: React Context API
- **Icons**: React Icons
- **Date Handling**: date-fns

## Design System

HostScale uses a comprehensive design system featuring:

- **Color Palette**: Cyan primary (#00CFFD), Indigo secondary (#6366f1), with deep purple backgrounds
- **Typography**: Manrope for headings, Inter for body text
- **UI Elements**: Glassmorphism effect with consistent elevation system
- **Components**: Bento grid layout system for dashboard panels
- **Animations**: Subtle, purposeful animations to enhance user experience

For more details, see the [Design Manual](docs/hostscale-design-manual.md).

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/hostscale.git
cd hostscale
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router
  - `(auth)/`: Authentication routes (login, signup)
  - `dashboard/`: Dashboard pages
  - `marketing/`: Marketing pages
  - `api/`: API routes
- `src/components/`: Shared components
  - `ui/`: UI primitives (buttons, cards, etc.)
  - `bento/`: Bento grid components for dashboard layout
  - `dashboard/`: Dashboard-specific components
    - Property management panels
    - Analytics panels
    - Task management panels
  - `marketing/`: Marketing site components
    - Hero, Features, Pricing sections
    - Navigation and Footer
  - `shared/`: Components used across multiple sections
- `src/lib/`: Utility functions and hooks
  - `context/`: React Context providers
  - `hooks/`: Custom React hooks
  - `utils/`: Helper functions
- `src/styles/`: Global styles and Tailwind configuration
- `public/`: Static assets
  - `images/`: Images and graphics
  - `fonts/`: Custom fonts
- `docs/`: Project documentation
  - Design documents
  - Product requirements
  - Development guides
- `types/`: TypeScript type definitions

## Documentation

For more detailed information, see the documentation in the `docs/` folder:

- [Product Requirements Document](docs/prd.md)
- [Design Manual](docs/hostscale-design-manual.md)
- [Design Handover](docs/hostscale-design-handover.md)

## Deployment

The application can be deployed using Vercel, Netlify, or any other Next.js-compatible hosting service.

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.
