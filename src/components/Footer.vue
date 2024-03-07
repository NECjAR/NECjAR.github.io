<script setup>
import Donate from './Donate.vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <footer class="﹟footer">
    <div class="⇹ ⇔ ⇕">
      <!--<div class="⇓ ⇔">
        <ul class="j-footer-link-container ⎋ ⢸white">
          <li class="j-footer-link-item">
            <a href="/" class="j-logo ⡯j">j</a>
          </li>
          <li class="j-footer-link-item ⎚📱">
            <a class="j-menu-link j-menu-nectar active ⡯NECjAR" href="/"><span class="j-menu-nectar-c">NEC<span class="⡯j">j</span>AR</span></a>
          </li>
          <li class="j-footer-link-item">
            <a class="j-menu-link j-menu-nectar" href="projects"><span class="j-menu-nectar-c">Pro<span class="⡯j">j</span>ects</span></a>
            <span class="j-menu-link-container">
              <a class="j-menu-link j-menu-nectar" href="adleiavde"><span class="j-menu-nectar-c">ADLEIAVDE</span></a>
              <a class="j-menu-link j-menu-nectar" href="anna"><span class="j-menu-nectar-c">ANNA</span></a>
              <a class="j-menu-link j-menu-nectar" href="echo"><span class="j-menu-nectar-c">ECHO</span></a>
              <a class="j-menu-link j-menu-nectar" href="gr8"><span class="j-menu-nectar-c">GR8</span></a>
              <a class="j-menu-link j-menu-nectar" href="headheldhigh"><span class="j-menu-nectar-c">HEAD HELD HIGH</span></a>
              <a class="j-menu-link j-menu-nectar" href="projects"><span class="j-menu-nectar-c">...</span></a>
            </span>
          </li>
          <li class="j-footer-link-item">
            <a class="j-menu-link j-menu-nectar" href="contact"><span class="j-menu-nectar-c">Contact</span></a>
            <span class="j-menu-link-container">
              <a class="j-menu-link j-menu-nectar" href="kadae"><span class="j-menu-nectar-c">Kadae</span></a>
              <a class="j-menu-link j-menu-nectar" href="terms"><span class="j-menu-nectar-c">Terms</span></a>
            </span>
          </li>
          <li class="j-footer-link-item">
            <a class="j-menu-link j-menu-nectar" href="blogs"><span class="j-menu-nectar-c">Blogs</span></a>
            <span class="j-menu-link-container">
              <a class="j-menu-link j-menu-nectar" href="out?http://acomics.ru/~traveler" target="_blank"><span class="j-menu-nectar-c">HHH: TRAVELER #<var>888</var></span></a>
              <a class="j-menu-link j-menu-nectar" href="out?http://acomics.ru/~digger" target="_blank"><span class="j-menu-nectar-c">HHH: DIGGER #<var>888</var></span></a>
              <a class="j-menu-link j-menu-nectar" href="necjx"><span class="j-menu-nectar-c">NECjX</span></a>
              <a class="j-menu-link j-menu-nectar" href="score"><span class="j-menu-nectar-c">SCØRE</span></a>
            </span>
          </li>
          <li class="j-footer-link-item">
            <a class="j-menu-link j-menu-nectar ✧" href="https://wiki.necjar.com" target="_blank"><span class="j-menu-nectar-c"><i class="fab fa-wikipedia-w"></i> Wiki</span></a>
          </li>
          <li class="j-footer-link-item">
            <a class="j-menu-link j-menu-nectar ✧" href="world"><span class="j-menu-nectar-c">World</span></a>
            <span class="j-menu-link-container">
              <a class="j-menu-link j-menu-nectar" href="earth"><span class="j-menu-nectar-c">Earth</span></a>
              <a class="j-menu-link j-menu-nectar" href="sun"><span class="j-menu-nectar-c">Sun</span></a>
            </span>
          </li>
          <li class="j-footer-link-item">
            <a class="j-menu-link j-menu-nectar" href="store"><span class="j-menu-nectar-c">Store</span></a>
          </li>
          <li class="j-footer-link-item">
            <a class="j-menu-link j-menu-nectar" href="hive"><span class="j-menu-nectar-c">⬢⬡ HIVE.café</span></a>
            <span class="j-menu-link-container">
              <a class="j-menu-link j-menu-nectar" href="out?<?=$jPage_NECjAR_TelegramChat_link?>" target="_blank"><span class="j-menu-nectar-c">CHAT <i class="fab fa-telegram"></i> @HiveCafe</span></a>
            </span>
          </li>
          <li class="j-footer-link-item">
            <a class="j-menu-link j-menu-nectar ✧ ⣲⡣ ⡣⠿" href="achievements">
              <span class="j-menu-nectar-c">
                <i class="far fa-star"></i>
                <span class="j-menu-link-container"><span class="═²"></span> + <span class="═³"></span></span>
              </span>
            </a>
          </li>
        </ul>
      </div>-->
      <div class="⇓ ⇔">
        <div class="∅"></div>
        <div class="j-footer-copyright">
          <p>&copy; 2011&ndash;2111 <span class="⡯NECjAR">NEC<span class="⡯j">j</span>AR</span>, all right reserved.</p>
          <!--<p>ADLEIAVDE, AETHEOPTERA, ANNA, CATAE, ECHO, GR8, HEAD HELD HIGH, HIVE.CAFÉ/BAR, KADAE, TRAVIS TRAVELER, NECjAR, NECjX, "OUR AMBITION IS UNLIMITED" and all related logos, character design, novels, games, movies, ideas and/or concepts are created by the man behind the NECjAR and/or trademarks of NECjAR (Nectar, a Kadae production, NECjAR Corporation on planet Earth and Solar System). All other trademarks are property of their respective owners.</p>
          <p>Creating timeless interactive entertainment that makes positive change to the human psyche worldwide.<br />Nectar makes everything better. Our ambition is unlimited.</p>
          <div class="⡔ ⎋">
            <a class="🇹🇳 j-tooltip-parent" href="out?https://twitter.com/NECjAR" target="_blank" style="color:#1da1f2"><i class="fab fa-twitter"></i><span class="j-tooltip j-tooltip-top ⢸white">@NECjAR<small><br />Twitter.</small></span></a>
            <a class="🇹🇳 j-tooltip-parent" href="out?https://telegram.me/NECjAR" target="_blank" style="color:#32afed"><i class="fab fa-telegram"></i><span class="j-tooltip j-tooltip-top ⢸white">@NECjAR<small><br />Telegram.</small></span></a>
            <a class="🇹🇳 j-tooltip-parent" href="out?https://github.com/NECjAR" target="_blank" style="color:#c6cbd1"><i class="fab fa-github"></i><span class="j-tooltip j-tooltip-top ⢸white">NECjAR<small><br />GitHub.</small></span></a>
            <a class="🇹🇳 j-tooltip-parent" href="out?https://reddit.com/r/NECjAR" target="_blank" style="color:#ff4500"><i class="fab fa-reddit"></i><span class="j-tooltip j-tooltip-top ⢸white">r/NECjAR<small><br />Reddit.</small></span></a>
            <a class="🇹🇳 j-tooltip-parent" href="out?https://www.linkedin.com/company/necjar" target="_blank" style="color:#0077b5"><i class="fab fa-linkedin"></i><span class="j-tooltip j-tooltip-top ⢸white">NECjAR<small><br />LinkedIn.</small></span></a>
            <a class="🇹🇳 j-tooltip-parent" href="out?https://www.youtube.com/c/NECjAR?sub_confirmation=1" target="_blank" style="color:#ff0000"><i class="fab fa-youtube"></i><span class="j-tooltip j-tooltip-top ⢸white">NECjAR<small><br />Subscribe.</small></span></a>
            <a class="🇹🇳 j-tooltip-parent" rel="me" href="https://social.vivaldi.net/@NECjAR" target="_blank" style="display:none; color:#595aff"><i class="fab fa-mastodon"></i><span class="j-tooltip j-tooltip-top ⢸white">NECjAR<small><br />Mastodon.</small></span></a>
            <a class="🇹🇳 j-tooltip-parent" rel="me" href="https://social.vivaldi.net/@Kadae" target="_blank" style="display:none; color:#595aff"><i class="fab fa-mastodon"></i><span class="j-tooltip j-tooltip-top ⢸white">Kadae<small><br />Mastodon.</small></span></a>
            <a class="🇹🇳 j-tooltip-parent" rel="me" href="https://social.vivaldi.net/@Anna" target="_blank" style="display:none; color:#595aff"><i class="fab fa-mastodon"></i><span class="j-tooltip j-tooltip-top ⢸white">Anna<small><br />Mastodon.</small></span></a>
          </div>-->
        </div>
        <div class="🇧🇧">
          <p class="⡔ ⡻ ⤄"><q>Our ambition is unlimited</q></p>
        </div>
      </div>
      <!--<div class="⇓ ⤄">
        <div class="𝈷𝈶">
          <Donate />
        </div>
        <div class="∅"></div>
      </div>-->
    </div>
  </footer>
</template>

<style scoped>
</style>