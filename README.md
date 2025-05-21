# CollabWrite - Real-time Collaborative Writing Platform

CollabWrite is a modern, real-time collaborative writing platform built with Next.js, Liveblocks, and TipTap. It provides a Google Docs-like experience with rich text editing, real-time collaboration, and modern UI components.

## Features

- ✍️ Real-time collaborative editing
- 🎨 Rich text formatting with TipTap editor
- 👥 Multiple user cursors and presence
- 🔒 Authentication with Clerk
- 🎯 Modern UI with Radix UI components
- 🌙 Dark/Light mode support
- 📱 Responsive design
- 🎨 Customizable text styling
- 📊 Table support
- 📝 Task lists
- 🔗 Link management
- 🖼️ Image support

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Real-time Collaboration:** [Liveblocks](https://liveblocks.io/)
- **Rich Text Editor:** [TipTap](https://tiptap.dev/)
- **Authentication:** [Clerk](https://clerk.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Database:** [Convex](https://www.convex.dev/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/)
- **Validation:** [Zod](https://zod.dev/)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm
- Liveblocks account and API key
- Clerk account and API keys

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/collab-write.git
cd collab-write
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
collab-write/
├── src/              # Source files
├── public/           # Static assets
├── convex/           # Convex database functions
├── components/       # React components
├── styles/          # Global styles
└── app/             # Next.js app directory
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Liveblocks](https://liveblocks.io/) for real-time collaboration
- [TipTap](https://tiptap.dev/) for the rich text editor
- [Clerk](https://clerk.com/) for authentication
- [Radix UI](https://www.radix-ui.com/) for accessible components

## Deploy on Vercel

Working Link  : https://collab-write-zeta.vercel.app/
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Video Demo : - 



https://github.com/user-attachments/assets/48d7c267-eb08-4994-9d4c-6508329d1f29


