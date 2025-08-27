/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/工程文件/Hexo/qingxuehu.github.io/public/404.html","a267edb16feee34c79fb02428e705b5d"],["D:/工程文件/Hexo/qingxuehu.github.io/public/archives/2025/03/index.html","213509eba82fb411291f5e9e66031119"],["D:/工程文件/Hexo/qingxuehu.github.io/public/archives/2025/04/index.html","046e3783ec6e9e2f27b55e6ef7ee3248"],["D:/工程文件/Hexo/qingxuehu.github.io/public/archives/2025/index.html","c8a3037d5a253da41f5f32b0fdc821b1"],["D:/工程文件/Hexo/qingxuehu.github.io/public/archives/index.html","a0a38cd6164b1bccaf8931be74b366a5"],["D:/工程文件/Hexo/qingxuehu.github.io/public/article/20250401/index.html","e72e7b6fa65733596d5fdc7dfd4de11c"],["D:/工程文件/Hexo/qingxuehu.github.io/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/工程文件/Hexo/qingxuehu.github.io/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/工程文件/Hexo/qingxuehu.github.io/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/工程文件/Hexo/qingxuehu.github.io/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/工程文件/Hexo/qingxuehu.github.io/public/categories/article/index.html","22108dddbb7b4396cb00c92545d94426"],["D:/工程文件/Hexo/qingxuehu.github.io/public/categories/index.html","efa50d318e3761a072414e09e221b6ac"],["D:/工程文件/Hexo/qingxuehu.github.io/public/categories/server/index.html","ac4c11f570f600f69b8e4c46c30e0393"],["D:/工程文件/Hexo/qingxuehu.github.io/public/css/index.css","465e9a892fe76bfab7cc784fc97bba42"],["D:/工程文件/Hexo/qingxuehu.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/工程文件/Hexo/qingxuehu.github.io/public/img/1520.jpg","20c3aedb132d8b360009ce7daf7d7106"],["D:/工程文件/Hexo/qingxuehu.github.io/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/工程文件/Hexo/qingxuehu.github.io/public/img/60082303_p0.jpg","f0c9b2ddcb58196f1deee6e7a3694b40"],["D:/工程文件/Hexo/qingxuehu.github.io/public/img/73424497_p0.png","a62861f719e65d5871980ad2890c2051"],["D:/工程文件/Hexo/qingxuehu.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/工程文件/Hexo/qingxuehu.github.io/public/img/alipay.jpg","d005ff65827e3f4972d31c4357bfcf18"],["D:/工程文件/Hexo/qingxuehu.github.io/public/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["D:/工程文件/Hexo/qingxuehu.github.io/public/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["D:/工程文件/Hexo/qingxuehu.github.io/public/img/favicon.png","c93f97276b089349ea9686b975c158ef"],["D:/工程文件/Hexo/qingxuehu.github.io/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/工程文件/Hexo/qingxuehu.github.io/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/工程文件/Hexo/qingxuehu.github.io/public/img/wechat.jpg","477419fcd688b83bc920e1ad08d47b2c"],["D:/工程文件/Hexo/qingxuehu.github.io/public/index.html","937edf4b3ee9d3a6321fcc44cb4636ff"],["D:/工程文件/Hexo/qingxuehu.github.io/public/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["D:/工程文件/Hexo/qingxuehu.github.io/public/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["D:/工程文件/Hexo/qingxuehu.github.io/public/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["D:/工程文件/Hexo/qingxuehu.github.io/public/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["D:/工程文件/Hexo/qingxuehu.github.io/public/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["D:/工程文件/Hexo/qingxuehu.github.io/public/link/index.html","c04e06981ad653920ca9600487842d14"],["D:/工程文件/Hexo/qingxuehu.github.io/public/server/about/index.html","0afad9a7eecb1cf4b80df637b0f729e8"],["D:/工程文件/Hexo/qingxuehu.github.io/public/tags/Hexo/index.html","cc5a8bcdaa3973662214b00633849736"],["D:/工程文件/Hexo/qingxuehu.github.io/public/tags/index.html","3d365515dc1a93fb691683f045e813e2"],["D:/工程文件/Hexo/qingxuehu.github.io/public/tags/博客/index.html","8771ffb3ee77edb1769df5cc322e4fd1"],["D:/工程文件/Hexo/qingxuehu.github.io/public/tags/文章/index.html","2e09b66d8a7a8e4b7da34474cbcfbfa2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







