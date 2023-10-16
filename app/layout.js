import { ProjectTheme } from "@/context/Theme";
import "./globals.css";

export const metadata = {
  title: "Alonso Mtz",
  description: "Software Engineer, Full-Stack Developer, UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <ProjectTheme>
        <body>{children}</body>
      </ProjectTheme>
    </html>
  );
}
