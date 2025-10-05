/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ Netlify에서는 반드시 'export'를 끕니다 (API/SSR 살리기)
  // output: 'export',

  // GitHub Pages 전용 옵션도 제거
  // basePath: '/mypage',
  // assetPrefix: '/mypage/',
  // trailingSlash: true,

  images: {
    // 필요 시: Netlify에서도 기본 이미지 최적화 사용 가능
    // unoptimized: false,
  },
};

export default nextConfig;
