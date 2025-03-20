module.exports = {
  apps: [
    {
      name: "Myweb-erukim",
      script: "node_modules/react-scripts/scripts/start.js",
      node_args: "--enable-source-maps",
      restart_delay: 5000,
      env: {
        PORT: 5000 // 원하는 포트 번호로 변경
      }
    }
  ]
};
