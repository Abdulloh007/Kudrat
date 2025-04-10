import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pro.kudrat',
  appName: 'kudrat-pro',
  webDir: 'dist',
  plugins: {
    CapacitorHttp: {
      enabled: true
    },
  },
  server: {
    androidScheme: 'http',
    cleartext: true,
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
