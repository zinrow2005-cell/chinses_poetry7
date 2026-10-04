/* 胖超詩詞閱讀書寫系統｜PKG384 Service Worker kill switch
   目的：解除舊版 PWA 快取干擾，避免手機持續讀到舊版書寫頁。 */
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
      const clientsList = await self.clients.matchAll({type:'window', includeUncontrolled:true});
      for (const client of clientsList) client.postMessage({type:'DAOFA_SW_RESET', version:'384'});
      await self.registration.unregister();
    } catch(e) {}
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  // 不接管請求，全部交給 GitHub Pages 網路檔案。
});
