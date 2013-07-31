/* 
 * proxy.pac
 * Copyright (c) 2006 Yahoo! Inc. All rights reserved.
 */
function FindProxyForURL(url,host) {
    var proxyString  = 'SOCKS 127.0.0.1:1080';
    var directString = 'DIRECT';
    var proxyFile    = 'yahoo.pac';
    var debugEnabled = false;

    debug(debugEnabled, proxyFile, "URL is " + url);
    debug(debugEnabled, proxyFile, "host is " + host);

    /* if it's something like www.cnn.com, we can go direct */
    if (!dnsDomainIs(host, ".yahoo.com")
        && !dnsDomainIs(host, ".p4pnet.net")
        && !dnsDomainIs(host, ".inktomi.com")
        && !dnsDomainIs(host, ".inktomisearch.com")
        && !dnsDomainIs(host, ".yahoo-inc.com")
        && !dnsDomainIs(host, ".yahoo.net")
        ) {
        debug(debugEnabled, proxyFile, "DIRECT (1)");
        return directString;
    }

    /* exceptions */
    if (shExpMatch(host, "*.gh.corp.yahoo.com")
        || host == "guesthouse.corp.yahoo.com"
        || host == "frontyard.corp.yahoo.com"
        || host == "frontyard.yahoo.com"
        || host == "www.inktomi.com"
        || host == "support.inktomi.com"
        || host == "support-search.inktomi.com"
        || host == "www.inktomisearch.com"
        || host == "builder.search.yahoo.com"
        || host == "us.ws.mail.mud.yahoo.com"
        || shExpMatch(host, "*.gh.corp.yahoo-inc.com")
        ) {
        debug(debugEnabled, proxyFile, "DIRECT (2)");
        return directString;
    }

    /* check list of colos */
    var colos = new Array(
        "ac2",
        "ac4",
        "ads",
        "amsterdam",
        "ar",
        "atl",
        "bangalore",
        "bjs-office",
        "boston",
        "br",
        "bro",
        "ch1",
        "chicago-office",
        "cnb",
        "corp",
        "cph",
        "dal",
        "data",
        "dce",
        "dcn",
        "due",
        "europe",
        "fin",
        "ham",
        "hki",
        "hongkong",
        "in",
        "in2",
        "ird",
        "jp1",
        "jp2",
        "krn",
        "krs",
        "kr2",
        "lng",
        "logs",
        "lon",
        "madrid",
        "miami-office",
        "milano",
        "mud",
        "mumbai",
        "mun",
        "mx-office",
        "ny-office",
        "ops",
        "pao",
        "paris",
        "re1",
        "re2",
        "re3",
        "re4",
        "s1s",
        "san",
        "sc5",
        "sc8",
        "scd",
        "sci",
        "sd-office",
        "seaopaulo",
        "seoul",
        "sf-office",
        "sfsoma",
        "sg",
        "sg-office",
        "sk1",
        "smca",
        "snv",
        "sp1",
  "sp2",
        "spo",
        "syd",
        "syd-office",
        "taipei",
        "toronto",
        "tpe",
        "tw1",
        "ukl"
        );

    var i;
    for (i = 0; i < colos.length; i++) {
        if (shExpMatch(host, "*." + colos[i] + ".yahoo.com")
            || shExpMatch(host, "*." + colos[i] + ".yahoo.net")) {
               debug(debugEnabled, proxyFile, "SOCKS (3)");
               return proxyString;
        }
    }

    /* other internal host patterns */
    if (shExpMatch(host, "*.vip.*.yahoo.com")
        || shExpMatch(host, "*.inktomi.com")
        || shExpMatch(host, "*.inktomisearch.com")
        || shExpMatch(host, "*.crawl.yahoo.net")
        || shExpMatch(host, "*.yst.yahoo.net")
        || shExpMatch(host, "*.p4pnet.net")
        || shExpMatch(host, "build*.yahoo.com")
        || shExpMatch(host, "*jake*.yahoo.com")
        || shExpMatch(host, "feed*.yahoo.com")
        || shExpMatch(host, "*.ygrid.yahoo.com")
        || shExpMatch(host, "*.ynoc.yahoo.com")
        || shExpMatch(host, "alpha.*.yahoo.com")
        || shExpMatch(host, "qa.*.yahoo.com")
        || shExpMatch(host, "gold.*.yahoo.com")
        || shExpMatch(host, "preview.news.yahoo.com")
        || shExpMatch(host, "backyard.*.yahoo.com")
        || shExpMatch(host, "api.ncr.media.yahoo.com")
        || shExpMatch(host, "*.yahoo-inc.com")
        || shExpMatch(host, "beta.*.yahoo.com")
        || shExpMatch(host, "qa.*.yahoo.com")) {
        debug(debugEnabled, proxyFile, "SOCKS (4)");
        return proxyString;
    }

    /* internal hosts that don't match the colo list */
    var internal_hosts = new Array(
        "aclviewer.yahoo.com",
        "amt.yahoo.com",
        "api.backyard.yahoo.com",
        "api.local.yahoo.com",
        "api.search.yahoo.com",
        "backyard.yahoo.com",
        "bugs.yahoo.com",
        "checker.yahoo.com",
        "cvs.kelkoo.net",
        "data.yahoo.com",
        "dev1.biz.yahoo.com",
        "devel.yahoo.com",
        "diego.yahoo.com",
        "edit.www.yahoo.com",
        "editjake.news.yahoo.com",
        "gooey.yahoo.com",
        "helpdesk.yahoo.com",
        "html.yahoo.com",
        "html-new.yahoo.com",
        "ilist.yahoo.com",
        "im.paranoid.yahoo.com",
        "intl.my.yahoo.com",
        "jane.shopping.yahoo.com",
        "jobs.hiresystems.com",
        "logs.yahoo.com",
        "mosh.yahoo.com",
        "mrtg1.yahoo.com",
        "my-stats.yahoo.com",
        "mybackyard.yahoo.com",
        "netops.yahoo.com",
        "ops.yahoo.com",
        "ora-doc.yahoo.com",
        "outage.yahoo.com",
        "page-checker.yahoo.com",
        "produce.yahoo.com",
        "research.yahoo.com",
        "rt-eng.yahoo.com",
        "rt-is.yahoo.com",
        "sds.yahoo.com",
        "security.yahoo.com",
        "seuss.yahoo.com",
        "smtp.yahoo.com",
        "stats.yahoo.com",
        "surf.yahoo.com",
        "twiki.ads.yahoo.com",
        "twiki.abuse.yahoo.com",
        "webevent8bsd.bcst.yahoo.com",
        "vault.yahoo.com",
        "vipviewer.yahoo.com",
        "yhardware.yahoo.com",
        "ynoc.yahoo.com",
        "act.udb.yahoo.com",
        "ops.messenger.yahoo.com", 
        "by.bouncer.login.yahoo.com"  
        );

    for (i = 0; i < internal_hosts.length; i++) {
        if (host == internal_hosts[i]) {
           debug(debugEnabled, proxyFile, "SOCKS (5)");
           return proxyString;
        }
    }

    /* server-status URLs */
    if (shExpMatch(url, "http://*.yahoo.com/status*")
        || shExpMatch(url, "http://*.yahoo.com/ystatus*")
        || shExpMatch(url, "http://*.yahoo.com/ysar*")
        || shExpMatch(url, "http://*.yahoo.com/yahoo-phpinfo*")
        || shExpMatch(url, "http://*.yahoo.com:9999/*")
        || shExpMatch(url, "http://*.yahoo.com:4080/*")
        || shExpMatch(url, "https://*.yahoo.com/status*")
        || shExpMatch(url, "https://*.yahoo.com/ystatus*")
        || shExpMatch(url, "https://*.yahoo.com/ysar*")
        || shExpMatch(url, "https://*.yahoo.com/yahoo-phpinfo*")
        || shExpMatch(url, "https://*.yahoo.com:9999/*")
        || shExpMatch(url, "http://e.my.yahoo.com/config/dump_cookies*")
        || shExpMatch(url, "http://edit.yahoo.com/config/dump_cookies*")) {
      debug(debugEnabled, proxyFile, "SOCKS (6)");
      return proxyString;
    }

    debug(debugEnabled, proxyFile, "DIRECT (7)");
    return directString;
}

function debug(debugEnabled, proxyFile, message) {
    if(true == debugEnabled) {
        alert(proxyFile + ": " + message);
    }
}
