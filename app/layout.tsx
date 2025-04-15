// app/layout.tsx or app/layout.js
export const metadata = {
    title: 'Pomodoro SaaS',
    description: 'Boost your productivity with a clean Pomodoro timer',
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  