import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tuempresa.tuapp',
  appName: 'cubeflix',
  server: {
    url: 'https://vercel.com/jacubgons-projects/cubeflix/2HMT4WNgbSSLcdwuPzT2tpMu6HYA', // Aquí debes poner la URL de tu app en Vercel
    cleartext: true  // Esto es útil durante el desarrollo si tienes conexiones no seguras
  },
  webDir: 'out'
};

export default config;
