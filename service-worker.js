/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ce43c9c997a8ca5e80998036369f8391"
  },
  {
    "url": "assets/css/0.styles.fb88f6cd.css",
    "revision": "395a50fa6ed7a868df8ca835fb6ffda1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0c06a5bc.js",
    "revision": "363febc17d80a969108315a93312c01d"
  },
  {
    "url": "assets/js/2.681ac018.js",
    "revision": "2760cc6630bcb5981a1274b7b7b9d1dc"
  },
  {
    "url": "assets/js/3.a8d90726.js",
    "revision": "94e15e9a3ddc6c3b593e64efe3798252"
  },
  {
    "url": "assets/js/4.c7eef264.js",
    "revision": "ba07c3eb7d0756aa2171f25df5050b65"
  },
  {
    "url": "assets/js/app.1f832b48.js",
    "revision": "d76754c50d985e71e87461943c871355"
  },
  {
    "url": "icon/zh-cn.html",
    "revision": "ff8023a54276e3fad7779342c6367821"
  },
  {
    "url": "index.html",
    "revision": "c80feefba6f57c20a91a43515da85462"
  },
  {
    "url": "login-wap/zh-cn.html",
    "revision": "7cd3297771b36f9dd8f7113506a5034f"
  },
  {
    "url": "login/zh-cn.html",
    "revision": "f5d031843bc947b948dbbd7929395f90"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
