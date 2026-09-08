/**********************************************************************
  custom additions
**********************************************************************/
// Disable the about:config "voids your warranty" warning
user_pref("browser.aboutConfig.showWarning", false);
// Keep Firefox open after closing the last tab in a window
user_pref("browser.tabs.closeWindowWithLastTab", false);
// Disable trackpad swipe-left/right (back/forward navigation) gestures
user_pref("browser.gesture.swipe.left", "");
user_pref("browser.gesture.swipe.right", "");

/**********************************************************************
   Graphics
**********************************************************************/
// Force-enable WebRender GPU compositor + shader pre-caching (WebRender is mandatory/default on modern Firefox, so most of these are likely no-ops now)
user_pref("gfx.webrender.compositor", true);
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.layer-compositor", true);
user_pref("gfx.webrender.program-binary-disk", true);
user_pref("gfx.webrender.precache-shaders", true);
// Force GPU-accelerated layers and a dedicated GPU process
user_pref("layers.acceleration.force-enabled", true);
//user_pref("layers.gpu-process.enabled", true);
//user_pref("layers.gpu-process.force-enabled", true);
// Enable the WebGPU API (note: a significant fingerprinting/attack surface, in tension with the RFP hardening later in this file)
//user_pref("dom.webgpu.enabled", true);
// Force hardware (GPU) video decoding, including via Vulkan
user_pref("media.hardware-video-decoding.enabled", true);
//user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.hardware-video-decoding-vulkan.enabled", false);
// Disable AV1 video codec decoding
user_pref("media.av1.enabled", false);

/**********************************************************************
   STARTUP
**********************************************************************/
// Set startup page
user_pref("browser.startup.page", 0);
// Set HOME+NEWWINDOW page
user_pref("browser.startup.homepage", "chrome://browser/content/blanktab.html");
// Set NEWTAB page
user_pref("browser.newtabpage.enabled", false);
// Disable sponsored content on Firefox Home (Activity Stream)
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // [FF58+] Sponsored stories
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+] Sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false); // [FF140+] Support Firefox
// Clear default topsites
user_pref("browser.newtabpage.activity-stream.default.sites", "");

/**********************************************************************
   sidebar
**********************************************************************/
user_pref("sidebar.verticalTabs" , true);
user_pref("sidebar.revamp" , true);
user_pref("sidebar.main.tools","opentabs");

/**********************************************************************
   PIP
**********************************************************************/
// disable picture-in-picture
user_pref("media.videocontrols.picture-in-picture.enabled" , false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled" , false);

/**********************************************************************
   GEOLOCATION
**********************************************************************/
// Disable using the OS's geolocation service
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]
user_pref("geo.enabled", false);
user_pref("permissions.default.geo", 0);

/**********************************************************************
   QUIETER FOX
**********************************************************************/
// suggestion engine
user_pref("browser.urlbar.merino.enabled", false);
// -- RECOMMENDATIONS --
// Disable recommendation pane in about:addons (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
// Disable recommendations in about:addons' Extensions and Themes panes
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
// Disable personalized Extension Recommendations in about:addons and AMO
user_pref("browser.discovery.enabled", false);
// disable firefox from checking default browser
user_pref("browser.shell.checkDefaultBrowser" , false);
// -- ACTIVITY STREAM --
// Disable Firefox Home (Activity Stream) telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// -- STUDIES --
// Disable Studies
user_pref("app.shield.optoutstudies.enabled", false);
// Disable Normandy/Shield
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// -- CRASH REPORTS --
// Disable Crash Reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
  // user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+] [DEFAULT: false]
// Enforce no submission of backlogged Crash Reports
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]

// -- OTHER --
// Disable Captive Portal detection
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
// Disable Network Connectivity checks
user_pref("network.connectivity-service.enabled", false);
// -- update --
user_pref("app.update.auto" , false);
/**********************************************************************
   SAFE BROWSING (SB)
**********************************************************************/
// Disable SB (Safe Browsing)
  // user_pref("browser.safebrowsing.malware.enabled", false);
  // user_pref("browser.safebrowsing.phishing.enabled", false);
// Disable SB checks for downloads (both local lookups + remote)
  // user_pref("browser.safebrowsing.downloads.enabled", false);
// Disable SB checks for downloads (remote)
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
  // user_pref("browser.safebrowsing.downloads.remote.url", ""); // Defense-in-depth
// Disable SB checks for unwanted software
  // user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
  // user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
// Disable "ignore this warning" on SB warnings
  // user_pref("browser.safebrowsing.allowOverride", false);

/**********************************************************************
   BLOCK IMPLICIT OUTBOUND [not explicitly asked for - e.g. clicked on]
**********************************************************************/
// Disable link prefetching
user_pref("network.prefetch-next", false);
// Disable DNS prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
// Disable link-mouseover opening connection to linked server
user_pref("network.http.speculative-parallel-limit", 0);
// Disable mousedown speculative connections on bookmarks and history
user_pref("browser.places.speculativeConnect.enabled", false);
// Enforce no "Hyperlink Auditing" (click tracking)
  // user_pref("browser.send_pings", false); // [DEFAULT: false]

/**********************************************************************
   DNS / DoH / PROXY / SOCKS
**********************************************************************/
// Set the proxy server to do any DNS lookups when using SOCKS
user_pref("network.proxy.socks_remote_dns", true);
// Disable using UNC (Uniform Naming Convention) paths
user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
// Disable GIO as a potential proxy bypass vector
user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF] [DEFAULT: ""]
// Disable proxy direct failover for system requests
  // user_pref("network.proxy.failover_direct", false);
// Disable proxy bypass for system request failures
  // user_pref("network.proxy.allow_bypass", false);
// Enable DNS-over-HTTPS (DoH)
user_pref("network.trr.mode", 5);
// Set DoH provider
  // user_pref("network.trr.uri", "https://example.dns");
  // user_pref("network.trr.custom_uri", "https://example.dns");

/**********************************************************************
   LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS
**********************************************************************/
// Disable location bar making speculative connections
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// Disable location bar contextual suggestions
user_pref("browser.urlbar.quicksuggest.enabled", false); // [FF92+]
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // [FF92+]
// Disable live search suggestions
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
// Disable urlbar trending search suggestions
user_pref("browser.urlbar.trending.featureGate", false);
// Disable urlbar suggestions
user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
user_pref("browser.urlbar.amp.featureGate", false); // [FF141+] adMarketplace
user_pref("browser.urlbar.importantDates.featureGate", false); // [FF143+]
user_pref("browser.urlbar.market.featureGate", false); // [FF143+] stock market
user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+]
user_pref("browser.urlbar.weather.featureGate", false); // [FF108+]
user_pref("browser.urlbar.wikipedia.featureGate", false); // [FF141+]
user_pref("browser.urlbar.yelp.featureGate", false); // [FF124+]
user_pref("browser.urlbar.yelpRealtime.featureGate", false); // [FF144+]
// Disable urlbar clipboard suggestions
user_pref("browser.urlbar.clipboard.featureGate", false);
// Disable recent searches
user_pref("browser.urlbar.recentsearches.featureGate", false);
// Disable search and form history
user_pref("browser.formfill.enable", false);
// Disable tab-to-search
user_pref("browser.urlbar.suggest.engines", false);
// Disable coloring of visited links
user_pref("layout.css.visited_links_enabled", false);
// Enable separate default search engine in Private Windows and its UI setting
user_pref("browser.search.separatePrivateDefault", true); // [FF70+]
user_pref("browser.search.separatePrivateDefault.ui.enabled", true); // [FF71+]

/**********************************************************************
   PASSWORDS / PASSKEYS
**********************************************************************/
// Disable auto-filling username & password form fields
user_pref("signon.autofillForms", false);
// Disable formless login capture for Password Manager
user_pref("signon.formlessCapture.enabled", false);
// Limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources
user_pref("network.auth.subresource-http-auth-allow", 1);
// Enforce no automatic authentication on Microsoft sites
  // user_pref("network.http.windows-sso.enabled", false); // [DEFAULT: false]
// Enforce no automatic authentication on Microsoft sites
  // user_pref("network.http.microsoft-entra-sso.enabled", false); // [DEFAULT: false]
// Enforce no direct attestation in passkeys
user_pref("security.webauthn.always_allow_direct_attestation", false); // [DEFAULT: false]

/**********************************************************************
   DISK AVOIDANCE
**********************************************************************/
// Disable disk cache
user_pref("browser.cache.disk.enable", true);
// Set media cache in Private Browsing to in-memory and increase its maximum size
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("media.memory_cache_max_size", 65536);
// Disable storing extra session data
user_pref("browser.sessionstore.privacy_level", 2);
// Disable automatic Firefox start and session restore after reboot
user_pref("toolkit.winRegisterApplicationRestart", false);
// Disable favicons in shortcuts
user_pref("browser.shell.shortcutFavicons", false);

/**********************************************************************
   HTTPS (SSL/TLS / OCSP / CERTS / HPKP)
**********************************************************************/

// -- SSL (Secure Sockets Layer) / TLS (Transport Layer Security) --
// Require safe negotiation
user_pref("security.ssl.require_safe_negotiation", true);
// Disable TLS1.3 0-RTT (round-trip time)
user_pref("security.tls.enable_0rtt_data", false);

// -- CERTS / HPKP (HTTP Public Key Pinning) --
// Enable strict PKP (Public Key Pinning)
user_pref("security.cert_pinning.enforcement_level", 2);
// Enable CRLite
user_pref("security.remote_settings.crlite_filters.enabled", true); // [DEFAULT: true]
user_pref("security.pki.crlite_mode", 2); // [DEFAULT: 2 FF142+]

// -- MIXED CONTENT --
// Disable insecure passive content (such as images) on https pages
  // user_pref("security.mixed_content.block_display_content", true); // Defense-in-depth (see 1244)
// Enable HTTPS-Only mode in all windows
user_pref("dom.security.https_only_mode", true); // [FF76+]
user_pref("dom.security.https_only_mode_pbm", true); // [FF80+]
// Enable HTTPS-Only mode for local resources
  // user_pref("dom.security.https_only_mode.upgrade_local", true);
// Disable HTTP background requests
user_pref("dom.security.https_only_mode_send_http_background_request", false);

// -- UI (User Interface) --
// Display warning on the padlock for "broken security" (if 1201 is false)
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// Display advanced information on Insecure Connection warning pages
user_pref("browser.xul.error_pages.expert_bad_cert", true);

/**********************************************************************
   REFERERS
**********************************************************************/
// Enforce no referer spoofing
user_pref("network.http.referer.spoofSource", false); // [DEFAULT: false]
// Control the amount of cross-origin information to send
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/**********************************************************************
   CONTAINERS
**********************************************************************/
// Enable Container Tabs and its UI setting
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
// Set behavior on "+ Tab" button to display container menu on left click
  // user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
// Set external links to open in site-specific containers
  // user_pref("browser.link.force_default_user_context_id_for_external_opens", true);

/**********************************************************************
   PLUGINS / MEDIA / WEBRTC
**********************************************************************/
// Force WebRTC inside the proxy
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
// Force a single network interface for ICE candidates generation
user_pref("media.peerconnection.ice.default_address_only", true);
// Force exclusion of private IPs from ICE candidates
  // user_pref("media.peerconnection.ice.no_host", true);
// Disable GMP (Gecko Media Plugins)
  // user_pref("media.gmp-provider.enabled", false);
user_pref("media.autoplay.default", 5);
user_pref("media.autoplay.blocking_policy", 0);
/**********************************************************************
   DOM (DOCUMENT OBJECT MODEL)
**********************************************************************/
// Prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);

/**********************************************************************
   MISCELLANEOUS
**********************************************************************/
// Remove temp files opened from non-PB windows with an external application
user_pref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+]
user_pref("browser.helperApps.deleteTempFileOnExit", true);
// Disable UITour backend so there is no chance that a remote page can use it
user_pref("browser.uitour.enabled", false);
  // user_pref("browser.uitour.url", ""); // Defense-in-depth
// Reset remote debugging to disabled
user_pref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]
// Disable websites overriding Firefox's keyboard shortcuts
user_pref("permissions.default.shortcuts", 2);
// Remove special permissions for certain mozilla domains
user_pref("permissions.manager.defaultsUrl", "");
// Use Punycode in Internationalized Domain Names to eliminate possible spoofing
user_pref("network.IDN_show_punycode", true);
// Enforce PDFJS, disable PDFJS scripting
user_pref("pdfjs.disabled", false); // [DEFAULT: false]
user_pref("pdfjs.enableScripting", false); // [FF86+]
// Disable middle click on new tab button opening URLs or searches using clipboard
user_pref("browser.tabs.searchclipboardfor.middleclick", false); // [DEFAULT: false NON-LINUX]
// Disable content analysis by DLP (Data Loss Prevention) agents
user_pref("browser.contentanalysis.enabled", false); // [FF121+] [DEFAULT: false]
user_pref("browser.contentanalysis.default_result", 0); // [FF127+] [DEFAULT: 0]
// Disable referrer and storage access for resources injected by content scripts
user_pref("privacy.antitracking.isolateContentScriptResources", true);
// Disable CSP Level 2 Reporting
user_pref("security.csp.reporting.enabled", false);

// -- DOWNLOADS --
// Enable user interaction for security by always asking where to download
user_pref("browser.download.useDownloadDir", false);
// Disable downloads panel opening on every download
user_pref("browser.download.alwaysOpenPanel", false);
// Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);
// Enable user interaction for security by always asking how to handle new mimetypes
user_pref("browser.download.always_ask_before_handling_new_types", true);

// -- EXTENSIONS --
// Limit allowed extension directories
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
  // user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
// Disable bypassing 3rd party extension install prompts
user_pref("extensions.postDownloadThirdPartyPrompt", false);
// Disable webextension restrictions on certain mozilla domains (you also need 4503)
  // user_pref("extensions.webextensions.restrictedDomains", "");

/**********************************************************************
   ETP (ENHANCED TRACKING PROTECTION)
**********************************************************************/
// Enable ETP Strict Mode
user_pref("browser.contentblocking.category", "custom"); // [HIDDEN PREF]
// Disable ETP web compat features (about:compat)
  // user_pref("privacy.antitracking.enableWebcompat", false);
// Set ETP Strict/Custom exception lists (FF141+)
user_pref("privacy.trackingprotection.allow_list.baseline.enabled", false); // [DEFAULT: true]
user_pref("privacy.trackingprotection.allow_list.convenience.enabled", false); // [DEFAULT: true]

/**********************************************************************
   SHUTDOWN & SANITIZING
**********************************************************************/
// Enable Firefox to clear items on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

// -- SANITIZE ON SHUTDOWN: IGNORES "ALLOW" SITE EXCEPTIONS --
// Set/enforce clearOnShutdown items (if 2810 is true)
user_pref("privacy.clearOnShutdown_v2.cache", false); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown_v2.siteSettings", true); // [DEFAULT: false]
// Set/enforce clearOnShutdown items
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown_v2.downloads", true); // [HIDDEN]
user_pref("privacy.clearOnShutdown_v2.formdata", true);
// Set Session Restore to clear on shutdown (if 2810 is true)
user_pref("privacy.clearOnShutdown.openWindows", true);

// -- SANITIZE ON SHUTDOWN: RESPECTS "ALLOW" SITE EXCEPTIONS --
// Set "Cookies" and "Site Data" to clear on shutdown (if 2810 is true)
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", false);

// -- SANITIZE SITE DATA: IGNORES "ALLOW" SITE EXCEPTIONS --
// Set manual "Clear Data" items
user_pref("privacy.clearSiteData.cache", true); // [DEFAULT: true]
user_pref("privacy.clearSiteData.cookiesAndStorage", false); // keep false until it respects "allow" site exceptions
user_pref("privacy.clearSiteData.historyFormDataAndDownloads", false);
  // user_pref("privacy.clearSiteData.siteSettings", false);
// Set manual "Clear Data" items
user_pref("privacy.clearSiteData.browsingHistoryAndDownloads", false);
user_pref("privacy.clearSiteData.formdata", true);

// -- SANITIZE HISTORY: IGNORES "ALLOW" SITE EXCEPTIONS --
// Set manual "Clear History" items, also via Ctrl-Shift-Del
user_pref("privacy.clearHistory.cache", true); // [DEFAULT: true]
user_pref("privacy.clearHistory.cookiesAndStorage", false);
user_pref("privacy.clearHistory.historyFormDataAndDownloads", false); // [DEFAULT: true]
  // user_pref("privacy.clearHistory.siteSettings", false); // [DEFAULT: false]
// Set manual "Clear History" items
user_pref("privacy.clearHistory.browsingHistoryAndDownloads", false); // [DEFAULT: true]
user_pref("privacy.clearHistory.formdata", true);

// -- SANITIZE MANUAL: TIMERANGE --
// Set "Time range to clear" for "Clear Data" (2820+) and "Clear History" (2830+)
user_pref("privacy.sanitize.timeSpan", 0);

/**********************************************************************
   FPP (fingerprintingProtection)
**********************************************************************/
// Enable FPP in PB mode
user_pref("privacy.fingerprintingProtection.pbmode", true); // [DEFAULT: true]
// Set global FPP overrides
  // user_pref("privacy.fingerprintingProtection.overrides", "");
// Set granular FPP overrides
  // user_pref("privacy.fingerprintingProtection.granularOverrides", "");
// Disable remote FPP overrides
  // user_pref("privacy.fingerprintingProtection.remoteOverrides.enabled", false);
user_pref("dom.battery.enabled", false);

/**********************************************************************
   OPTIONAL RFP (resistFingerprinting)
**********************************************************************/
// Enable RFP
user_pref("privacy.resistFingerprinting", false); // [FF41+]
user_pref("privacy.resistFingerprinting.pbmode", true); // [FF114+]
// Set RFP new window size max rounded values
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("privacy.window.maxInnerHeight", 900);
// Disable mozAddonManager Web API
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
// Enable letterboxing
user_pref("privacy.resistFingerprinting.letterboxing", false); // [HIDDEN PREF]
  // user_pref("privacy.resistFingerprinting.letterboxing.dimensions", ""); // [HIDDEN PREF]
// Disable RFP by domain
  // user_pref("privacy.resistFingerprinting.exemptedDomains", "*.example.invalid");
// Disable RFP spoof english prompt
user_pref("privacy.spoof_english", 1);
// Skip browser.startup.blankWindow if RFP is used
  // user_pref("privacy.resistFingerprinting.skipEarlyBlankFirstPaint", true); // [DEFAULT: true]
// Enforce Contrast Control off
  // user_pref("browser.display.document_color_use", 1); // [DEFAULT: 1 NON-WINDOWS]
// Disable using system accent colors
user_pref("widget.non-native-theme.use-theme-accent", false); // [DEFAULT: false WINDOWS]
// Enforce links targeting new windows to open in a new tab instead
user_pref("browser.link.open_newwindow", 3); // [DEFAULT: 3]
// Set all open window methods to abide by "browser.link.open_newwindow" (4512)
user_pref("browser.link.open_newwindow.restriction", 0);
// Disable WebGL (Web Graphics Library)
// user_pref("webgl.disabled", true);

/**********************************************************************
   OPTIONAL OPSEC
**********************************************************************/
// Start Firefox in PB (Private Browsing) mode
  // user_pref("browser.privatebrowsing.autostart", true);
// Disable memory cache
  // user_pref("browser.cache.memory.enable", false);
  // user_pref("browser.cache.memory.capacity", 0);
// Disable saving passwords
user_pref("signon.rememberSignons", false);
// Disable permissions manager from writing to disk
  // user_pref("permissions.memory_only", true); // [HIDDEN PREF]
// Disable intermediate certificate caching
  // user_pref("security.nocertdb", true);
// Disable favicons in history and bookmarks
  // user_pref("browser.chrome.site_icons", false);
// Exclude "Undo Closed Tabs" in Session Restore
  // user_pref("browser.sessionstore.max_tabs_undo", 0);
// Disable resuming session from crash
user_pref("browser.sessionstore.resume_from_crash", false);
// Disable "open with" in download dialog
  // user_pref("browser.download.forbid_open_with", true);
// Disable location bar suggestion types
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
// Disable location bar dropdown
  // user_pref("browser.urlbar.maxRichResults", 0);
// Disable location bar autofill
user_pref("browser.urlbar.autoFill", false);
// Disable browsing and download history
user_pref("places.history.enabled", false);
// Disable Windows jumplist
  // user_pref("browser.taskbar.lists.enabled", false);
  // user_pref("browser.taskbar.lists.frequent.enabled", false);
  // user_pref("browser.taskbar.lists.recent.enabled", false);
  // user_pref("browser.taskbar.lists.tasks.enabled", false);
// Discourage downloading to desktop
  // user_pref("browser.download.folderList", 2);
// Disable Form Autofill
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
// Limit events that can cause a pop-up
  // user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
// Disable page thumbnail collection
  // user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
// Disable Windows native notifications and use app notications instead
  // user_pref("alerts.useSystemBackend.windows.notificationserver.enabled", false);

/**********************************************************************
   OPTIONAL HARDENING
**********************************************************************/
// Disable MathML (Mathematical Markup Language)
  // user_pref("mathml.disabled", true); // 1173199
// Disable in-content SVG (Scalable Vector Graphics)
  // user_pref("svg.disabled", true); // 1216893
// Disable graphite
  // user_pref("gfx.font_rendering.graphite.enabled", false);
// Disable asm.js
  // user_pref("javascript.options.asmjs", false);
// Disable Ion and baseline JIT to harden against JS exploits
  // user_pref("javascript.options.ion", false);
  // user_pref("javascript.options.baselinejit", false);
  // user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]
// Disable WebAssembly
  // user_pref("javascript.options.wasm", false);
// Disable rendering of SVG OpenType fonts
  // user_pref("gfx.font_rendering.opentype_svg.enabled", false);
// Disable all DRM (Digital Rights Management) content (EME: Encryption Media Extension)
user_pref("media.eme.enabled", false);
  //user_pref("browser.eme.ui.enabled", false);
// Disable IPv6 if using a VPN
  // user_pref("network.dns.disableIPv6", true);
// Control when to send a cross-origin referer
  // user_pref("network.http.referer.XOriginPolicy", 2);
// Set DoH bootstrap address
  // user_pref("network.trr.bootstrapAddr", "10.0.0.1"); // [HIDDEN PREF]

/**********************************************************************
   DON'T TOUCH
**********************************************************************/
// Enforce Firefox blocklist
user_pref("extensions.blocklist.enabled", true); // [DEFAULT: true]
// Enforce a security delay on some confirmation dialogs such as install, open/save
user_pref("security.dialog_enable_delay", 1000); // [DEFAULT: 1000]
// Enforce no First Party Isolation
user_pref("privacy.firstparty.isolate", false); // [DEFAULT: false]
// Enforce SmartBlock shims (about:compat)
user_pref("extensions.webcompat.enable_shims", true); // [HIDDEN PREF] [DEFAULT: true]
// Enforce no TLS 1.0/1.1 downgrades
user_pref("security.tls.version.enable-deprecated", false); // [DEFAULT: false]
// Enforce disabling of Web Compatibility Reporter
user_pref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]
// Enforce Quarantined Domains
user_pref("extensions.quarantinedDomains.enabled", true); // [DEFAULT: true]
// PrefsCleaner: reset previously active items removed from arkenfox FF140+
  // user_pref("browser.display.use_system_colors", "");
  // user_pref("browser.urlbar.fakespot.featureGate", "");
  // user_pref("security.OCSP.enabled", "");
  // user_pref("security.OCSP.require", "");

/**********************************************************************
   DON'T BOTHER
**********************************************************************/
// Disable APIs
  // user_pref("full-screen-api.enabled", false);
// Set default permissions
user_pref("permissions.default.camera", 0);
user_pref("permissions.default.microphone", 0);
user_pref("permissions.default.desktop-notification", 0);
user_pref("permissions.default.xr", 0); // Virtual Reality
// Disable non-modern cipher suites
  // user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
  // user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
  // user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
  // user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
  // user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false); // no PFS
  // user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false); // no PFS
  // user_pref("security.ssl3.rsa_aes_128_sha", false); // no PFS
  // user_pref("security.ssl3.rsa_aes_256_sha", false); // no PFS
// Control TLS versions
  // user_pref("security.tls.version.min", 3); // [DEFAULT: 3]
  // user_pref("security.tls.version.max", 4);
// Disable SSL session IDs
  // user_pref("security.ssl.disable_session_identifiers", true);
// Referers
user_pref("network.http.sendRefererHeader", 2);
  // user_pref("network.http.referer.trimmingPolicy", 0);
// Set the default Referrer Policy
  // user_pref("network.http.referer.defaultPolicy", 2); // [DEFAULT: 2]
  // user_pref("network.http.referer.defaultPolicy.pbmode", 2); // [DEFAULT: 2]
// Disable HTTP Alternative Services
  // user_pref("network.http.altsvc.enabled", false);
// Disable website control over browser right-click context menu
  // user_pref("dom.event.contextmenu.enabled", false);
// Disable icon fonts (glyphs) and local fallback rendering
  // user_pref("gfx.downloadable_fonts.enabled", false); // [FF41+]
  // user_pref("gfx.downloadable_fonts.fallback_delay", -1);
// Disable Clipboard API
  // user_pref("dom.event.clipboardevents.enabled", false);
// Disable System Add-on updates
  // user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
  // user_pref("extensions.systemAddon.update.url", ""); // [FF44+]
// Enable the DNT (Do Not Track) HTTP header
  // user_pref("privacy.donottrackheader.enabled", true);
// Customize ETP settings
user_pref("network.cookie.cookieBehavior", 5); // [DEFAULT: 5]
user_pref("network.cookie.cookieBehavior.optInPartitioning", true); // [ETP FF132+]
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); // [FF100+]
user_pref("privacy.bounceTrackingProtection.mode", 1); // [FF131+] [ETP FF133+]
user_pref("privacy.fingerprintingProtection", true); // [FF114+] [ETP FF119+]
user_pref("privacy.partition.network_state.ocsp_cache", true); // [DEFAULT: true]
user_pref("privacy.query_stripping.enabled", true); // [FF101+]
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true); // [DEFAULT: true]
user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // [DEFAULT: true]
// Disable service workers
user_pref("dom.serviceWorkers.enabled", false);
// Disable Web Notifications
user_pref("dom.webnotifications.enabled", false);
// Disable Push Notifications
user_pref("dom.push.enabled", false);
// Disable WebRTC (Web Real-Time Communication)
user_pref("media.peerconnection.enabled", false);
// Enable GPC (Global Privacy Control) in non-PB windows
  // user_pref("privacy.globalprivacycontrol.enabled", true);
// bFPP (baselineFingerprintingProtection, FF139+) -- commented reference only;
// arkenfox leaves this off since ETP Strict already enables FPP browser-wide
  // user_pref("privacy.baselineFingerprintingProtection", true);
  // user_pref("privacy.baselineFingerprintingProtection.granularOverrides", "");
  // user_pref("privacy.baselineFingerprintingProtection.overrides", "");
// PrefsCleaner: reset items useless for anti-fingerprinting
  // user_pref("browser.display.use_document_fonts", "");
  // user_pref("browser.zoom.siteSpecific", "");
  // user_pref("device.sensors.enabled", "");
  // user_pref("dom.enable_performance", "");
  // user_pref("dom.enable_resource_timing", "");
  // user_pref("dom.gamepad.enabled", "");
  // user_pref("dom.maxHardwareConcurrency", "");
  // user_pref("dom.w3c_touch_events.enabled", "");
  // user_pref("dom.webaudio.enabled", "");
  // user_pref("font.system.whitelist", "");
  // user_pref("general.appname.override", "");
  // user_pref("general.appversion.override", "");
  // user_pref("general.buildID.override", "");
  // user_pref("general.oscpu.override", "");
  // user_pref("general.platform.override", "");
  // user_pref("general.useragent.override", "");
  // user_pref("media.navigator.enabled", "");
  // user_pref("media.video_stats.enabled", "");
  // user_pref("media.webspeech.synth.enabled", "");
  // user_pref("ui.use_standins_for_native_colors", "");
  // user_pref("webgl.enable-debug-renderer-info", "");

/**********************************************************************
   TELEMETRY
**********************************************************************/
// Disable new data submission
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// Disable Health Reports
user_pref("datareporting.healthreport.uploadEnabled", false);
// Disable telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
// Disable Telemetry Coverage
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");

/**********************************************************************
   NON-PROJECT RELATED
**********************************************************************/
// Disable welcome notices
user_pref("browser.startup.homepage_override.mstone", "ignore"); // [HIDDEN PREF]
// Disable General>Browsing>Recommend extensions/features as you browse
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
// Disable search terms
user_pref("browser.urlbar.showSearchTerms.enabled", false);

/**********************************************************************
   DEPRECATED / RENAMED
**********************************************************************/

// ESR140.x-only predictor/prefetch prefs -- inactive in the source file (wrapped in a
// block comment there), kept here as commented-out reference only
  // user_pref("network.predictor.enabled", false); // [DEFAULT: false FF144+]
  // user_pref("network.predictor.enable-prefetch", false); // [FF48+] [DEFAULT: false]

/**********************************************************************
   NEW TAB PAGE: ADDITIONAL AD/FEED/PROMO CONTROLS  (custom additions, not in arkenfox base)
**********************************************************************/
// Disable individual New Tab content/ad/recommendation feeds
user_pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false);
user_pref("browser.newtabpage.activity-stream.feeds.adsfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.places", false);
user_pref("browser.newtabpage.activity-stream.feeds.recommendationprovider", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
// Disable sponsored stories (legacy/alternate pref name)
user_pref("browser.newtabpage.activity-stream.system.showSponsored", false);
// Disable the newer "unified ads" system on New Tab (tiles, sponsored content, endpoint)
user_pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.spocs.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.tiles.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.endpoint", "");
user_pref("browser.newtabpage.activity-stream.unifiedAds.spocs.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.tiles.enabled", false);
// Disable the New Tab trending-search widget and its ad-block list
user_pref("browser.newtabpage.activity-stream.trendingSearch.blockedAds", "");
user_pref("browser.newtabpage.activity-stream.trendingSearch.enabled", false);
user_pref("browser.newtabpage.activity-stream.trendingSearch.variant", "");
// Disable New Tab telemetry pings and event tracking
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", 0);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.event", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);

/**********************************************************************
   IN-APP PROMOTIONAL PANELS  (custom additions, not in arkenfox base)
**********************************************************************/
// Hide Mozilla VPN / mobile-app / Lockwise / Monitor promos in the Privacy Protections report
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.mobile-android.url", "");
user_pref("browser.contentblocking.report.mobile-ios.url", "");
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.proxy.enabled", false);
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.contentblocking.report.vpn-android.url", "");
user_pref("browser.contentblocking.report.vpn-ios.url", "");
user_pref("browser.contentblocking.report.vpn-promo.url", "");
user_pref("browser.contentblocking.report.vpn.url", "");
// Clear the VPN promo link shown in Private Browsing windows
user_pref("browser.privatebrowsing.vpnpromourl", "");
// Disable assorted in-browser upsell promos (cookie-banner handling, Focus, pin-to-taskbar, VPN)
user_pref("browser.promo.cookiebanners.enabled", false);
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.promo.pin.enabled", false);
user_pref("browser.vpn_promo.enabled", false);
// Mark the protections panel's info callout as already seen so it doesn't pop up
user_pref("browser.protections_panel.infoMessage.seen", true);
// Disable the "cookie banner blocking" onboarding callout
user_pref("cookiebanners.ui.desktop.showCallout", false);

/**********************************************************************
   NEWER FIREFOX FEATURES: AI / AGENTIC / MISC  (custom additions, not yet in arkenfox base)
**********************************************************************/
// Disable Firefox's built-in IP-masking ("IP Protection") feature and its backend endpoint
user_pref("browser.ipProtection.enabled", false);
user_pref("browser.ipProtection.guardian.endpoint", "");
user_pref("browser.ipProtection.variant", "");
// Disable the built-in AI chatbot sidebar and AI-generated link-preview summaries
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.page", false);
user_pref("browser.ml.enable", false);
user_pref("browser.ml.linkPreview.enabled", false);
// Disable data-driven in-browser feature recommendations
user_pref("browser.dataFeatureRecommendations.enabled", false);
// Disable recording of page-interaction data used to power suggestions
user_pref("browser.places.interactions.enabled", false);
// Disable AI-suggested/"smart" automatic tab grouping
user_pref("browser.tabs.groups.smart.userEnabled", false);
// Disable the "Review Checker" AI shopping sidebar
user_pref("browser.shopping.experience2023.enabled", false);
// Disable the on-device content relevancy/recommendation service
user_pref("toolkit.contentRelevancy.enabled", false);
// Disable Firefox Relay email-masking suggestions in forms
user_pref("signon.firefoxRelay.feature", "disabled");
// Disable the Privacy-Preserving Attribution API report submission
user_pref("dom.private-attribution.submission.enabled", false);
// Blank the UITour backend URL (defense-in-depth alongside disabling UITour itself)
user_pref("browser.uitour.url", "");
// Clear the locale list used by "Send tab to device"
user_pref("browser.send_to_device_locales", "");
// Disable auto-updates of the bundled OpenH264 video codec plugin
user_pref("media.gmp-gmpopenh264.autoupdate", false);

/**********************************************************************
   SEARCH & URLBAR: ADDITIONAL SUGGESTION CONTROLS  (custom additions, complements SECTION 0800)
**********************************************************************/
// Don't suggest extensions from AMO in the address bar
user_pref("browser.urlbar.suggest.addons", false);
// Disable Fakespot review suggestions and top-site suggestions in Firefox Suggest
user_pref("browser.urlbar.suggest.quicksuggest.fakespot", false);
user_pref("browser.urlbar.suggest.quicksuggest.topsites", false);
// Disable trending-search suggestions in the address bar
user_pref("browser.urlbar.suggest.trending", false);
// Disable the Fakespot and Pocket address-bar suggestion features outright
user_pref("browser.urlbar.fakespot.featureGate", false);
user_pref("browser.urlbar.pocket.featureGate", false);
// Disable automatic search-engine updates
user_pref("browser.search.update", false);
// Disable search-results-page telemetry categorization
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
user_pref("browser.search.serpEventTelemetryCategorization.regionEnabled", false);

/**********************************************************************
   EXTENSIONS: ADDITIONAL CONTROLS  (custom additions, complements SECTION 2660)
**********************************************************************/
// Disable the built-in Pocket integration
user_pref("extensions.pocket.enabled", false);
// Disable the "report extension" abuse-reporting feature and blank its endpoint
user_pref("extensions.abuseReport.enabled", false);
user_pref("extensions.addonAbuseReport.url", "");
// Disable local caching of AMO (addons.mozilla.org) recommendation data
user_pref("extensions.getAddons.cache.enabled", false);

/**********************************************************************
   TELEMETRY: ADDITIONAL CONTROLS  (custom additions, complements SECTION 8500)
**********************************************************************/
// Disable usage-ping uploads
user_pref("datareporting.usage.uploadEnabled", false);
// Clear cached telemetry client/profile identifiers
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.cachedProfileGroupID", "");
// Disable Ping Centre telemetry (used by some in-browser messaging systems)
user_pref("browser.ping-centre.telemetry", false);
// Disable the built-in network traffic analyzer telemetry
user_pref("network.traffic_analyzer.enabled", false);
// Disable telemetry from DoH connectivity confirmation checks
user_pref("network.trr.confirmation_telemetry_enabled", false);
// Disable telemetry recorded on certificate-error warning pages
user_pref("security.certerrors.recordEventTelemetry", false);
// Disable telemetry for unexpected system-level resource loads
user_pref("dom.security.unexpected_system_load_telemetry_enabled", false);
