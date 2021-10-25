import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from 'single-spa';

Vue.config.productionTip = false

async function loadScript(url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

registerApplication(
  'myVueApp',
  async () => {
    console.log('加载模块');
    // systemJS
    await loadScript('http://localhost:10002/js/chunk-vendors.js');
    await loadScript('http://localhost:10002/js/app.js');
    return window.singleVue;
  },
  // 用户切换到/child-vue 的路径下，我需要加载刚才定义的子应用
  location => location.pathname.startsWith('/child-vue'),
  {
    a: 'aaaaaa'
  }
);

start();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
