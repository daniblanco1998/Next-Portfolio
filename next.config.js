/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"]
  }
}

module.exports = nextConfig

module.exports = {
  env: {
    URI: "mongodb+srv://daniel_tasks:tasks3.14159265@tasksdb.a7ztf4v.mongodb.net/tasks-lists",
  },
};
