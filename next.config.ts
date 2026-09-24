import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Make the apex the canonical/primary domain: www -> apex.
      // The member welcome emails already link to /members; the directory now
      // lives on the community page.
      {
        source: "/members",
        destination: "/community#members",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lafrenchtech-cambodge.com" }],
        destination: "https://lafrenchtech-cambodge.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
