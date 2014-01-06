({
  appDir: "app",
  dir: "app-optimized",
  baseUrl: ".",
  optimize: "none",
  
  mainConfigFile: 'app/js/requirejs-config.js', 
  modules: [
    {
      name: "js/main",
    }
  ]
})