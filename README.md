# Niraj Kumar | Personal Portfolio

A modern, high-performance personal portfolio built with React 19, Vite, and Bun. This project is containerized using Docker and Docker Compose, featuring a robust Nginx configuration for optimized static asset delivery and SPA routing.

## 🚀 Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Dynamic Content**: Data-driven components for projects, education, and certifications.
- **LeetCode Integration**: Custom heatmap and statistics, proxied via Nginx to bypass CORS issues.
- **Github Activity**: Integration with `react-github-calendar` to showcase development activity.
- **Technical Skills**: Visualized skill blocks organized by proficiency.
- **Visit Counter**: Track portfolio engagement.
- **Modern Typography**: Elegant design using the `Outfit` font family.
- **Production-Ready Containerization**: Multi-stage Dockerfile for minimized image size.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visualization**: `react-activity-calendar`, `react-github-calendar`
- **Deployment**: [Docker](https://www.docker.com/), [Nginx](https://www.nginx.com/), [Vercel](https://vercel.com/) (optional)

## 📦 Project Structure

```text
├── src/
│   ├── components/       # UI Components (Hero, Navbar, LeetCode, etc.)
│   ├── data/             # JSON datasets for projects and certs
│   ├── assets/           # Images and SVG icons
│   └── App.tsx           # Main application entry
├── Dockerfile            # Multi-stage Bun build
├── docker-compose.yml    # Container orchestration
├── nginx.conf            # Nginx config with proxy support
├── vercel.json           # Vercel-specific routing
└── bun.lock              # Bun lockfile
```

## 🚀 Getting Started

### Local Development

1. **Install Bun** (if not already installed):
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. **Clone and Install**:
   ```bash
   git clone https://github.com/nirajkr26/portfolio
   cd portfolio
   bun install
   ```

3. **Start Development Server**:
   ```bash
   bun run dev
   ```

### Docker Deployment

You can containerize the application using the included `Dockerfile` and `nginx.conf`.

#### Option 1: Direct Build (Docker CLI)

1. **Build the image**:
   ```bash
   docker build -t portfolio .
   ```

2. **Run the container**:
   ```bash
   docker run -d -p 8080:80 portfolio
   ```

#### Option 2: Docker Compose (Recommended)

Docker Compose abstracts the configuration and makes management simpler:

1. **Build and Start Container**:
   ```bash
   docker compose up -d --build
   ```

2. **Stop Container**:
   ```bash
   docker compose down
   ```

### Accessing the Portfoilo
Once the container is running, the portfolio will be accessible at:
[**http://localhost:8080**](http://localhost:8080)

## ⚙️ Configuration

### Nginx Proxy (LeetCode API)
The portfolio uses Nginx as a reverse proxy for the LeetCode GraphQL API to bypass CORS:
```nginx
location /api/leetcode {
    proxy_pass https://leetcode.com/graphql;
    proxy_set_header Host leetcode.com;
    # ... additional headers
}
```

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---
Designed and Developed with ❤️ by [Niraj Kumar](https://github.com/nirajkr26)
