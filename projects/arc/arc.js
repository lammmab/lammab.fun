window.onload = function() {
    let base = "{\\\"packageName\\\":\\\"REPLACE\\\",\\\"installType\\\":\\\"AVAILABLE\\\"}"
    let button = document.getElementById("press")
    let output = document.getElementById("output")
    let defApps = "com.instagram.android,com.snapchat.android,com.zhiliaoapp.musically,com.lemon.lvoverseas,com.netflix.mediaclient,com.amazon.avod.thirdpartyclient,com.hbo.hbonow,com.roblox.client,com.innersloth.spacemafia,com.squareup.cash,com.spotify.music,com.amazon.mp3,com.amazon.mShop.android.shopping,com.discord,tv.twitch.android.app,com.disney.disneyplus,com.google.android.youtube.tv,com.android.chrome,com.chrome.beta,com.chrome.dev,com.google.chromeremotedesktop,org.mozilla.firefox,org.mozilla.focus,com.pinterest,com.espn.score_center,com.google.android.apps.subscriptions.red,com.google.android.apps.docs.editors.docs,com.google.android.apps.docs.editors.sheets,com.facebook.orca,com.security.xvpn.z35kb,com.nordvpn.android,com.google.android.apps.youtube.music,com.microblink.photomath,com.moviesanywhere.goo,com.twitter.android,com.bandlab.bandlab,com.soundcloud.twa"
    
    function giveOutput() {
      let input = document.getElementById("apps")
      let arrayed = input.value.split(",")
      let defAppsPush = defApps.split(",")
      let combined = arrayed.concat(defAppsPush)
      let buildOutput = []
      
      if (input.value !== "") {
      
      if (document.getElementById("includeDefaultApps").checked) {
      for (let counts = 0; counts < combined.length; counts++) {
       
        buildOutput.push(base.replace('REPLACE',combined[counts]))
      }} else {
        for (let counts = 0; counts < arrayed.length; counts++) {
       
        buildOutput.push(base.replace('REPLACE',arrayed[counts]))
      }
      }
      console.log(buildOutput.join(','))
      output.innerHTML = "\"ArcPolicy\": \"{\\\"applications\\\":[" + buildOutput.join(',') +"],\\\"availableAppSetPolicy\\\":\\\"BLACKLIST\\\",\\\"apkCacheEnabled\\\":true,\\\"apkCacheForWhitelistedAppsEnabled\\\":true,\\\"playDeviceLocalPolicyEnabled\\\":true,\\\"playLocalPolicyEnabled\\\":true,\\\"playDirectInstallDisabled\\\":true,\\\"playDeviceLocalPolicyDisabled\\\":true,\\\"playStoreMode\\\":\\\"WHITELIST_NOT_ENFORCED\\\"}\""
    } else {
      output.innerHTML = "You must not have an empty value"
    }}
    
    button.onclick = function() {
      giveOutput();
    }
  }