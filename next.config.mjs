const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000", // localhost
        "foobar-3000.app.github.dev", // Codespaces
        "6ft71xh4-3000.asse.devtunnels.ms", // VS Code forward port
      ],
    },
  },
};

export default nextConfig;
