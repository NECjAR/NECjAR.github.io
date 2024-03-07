<template>
  <aside id="﹟aside" class="≞">
    <nav id="﹟nav">
      <ul class="j-nav-menu">
        <li class="j-nav-list j-nav-gres j-nav-gres-s">
          <RouterLink to="/" class="text-nodecoration j-nav j-nav-link j-tooltip">
            <span class="⡯NECjAR">NEC<span class="⡯j">j</span>AR</span>
            <span class="j-tooltip j-tooltip-left">Our ambition is unlimited</span>
          </RouterLink>
          <span class="⬢⬡">
            <span class="⬢ ⬡¹"></span>
            <span class="⬢ ⬡⁴"></span>
            <span class="⬢ ⬡⁶"></span>
          </span>
        </li>
        <li class="j-nav-list j-nav-gres">
          <RouterLink to="/projects" class="text-nodecoration j-nav">Pro<span class="⡯j">j</span>ects</RouterLink>
          <div class="j-nav-xool">
            <ul class="j-nav-sub">
              <li class="j-nav-sub-list">
                <small>Started fundraising</small>
              </li>
              <li class="j-nav-sub-list">
                <RouterLink to="/adleiavde" class="j-nav-router">ADLEIAVDE <span class="j-nav-text">0/$2000</span></RouterLink>
              </li>
              <li class="j-nav-sub-list">
                <small>Artificial Intelligence</small>
              </li>
              <li class="j-nav-sub-list">
                <RouterLink to="/anna" class="j-nav-router">ANNA <span class="j-nav-text ⢸green">Online</span></RouterLink>
              </li>
              <li class="j-nav-sub-list">
                <small>Games</small>
              </li>
              <li class="j-nav-sub-list">
                <RouterLink to="/echo" class="j-nav-router">ECHO<span class="⡯⠃"><span class="j-nav-text">1</span></span></RouterLink>
              </li>
              <li class="j-nav-sub-list">
                <small>Graphic novels</small>
              </li>
              <li class="j-nav-sub-list">
                <RouterLink to="/headheldhigh" class="j-nav-router">HEAD HELD HIGH <span class="j-nav-text">HHH</span></RouterLink>
              </li>
              <li class="j-nav-sub-list">
                <RouterLink to="/headheldhigh/traveler" class="j-nav-router">HHH: TRAVELER <span class="j-nav-text ⢸blue">#<var>888</var></span></RouterLink>
              </li>
              <li class="j-nav-sub-list">
                <RouterLink to="/headheldhigh/digger" class="j-nav-router">HHH: DIGGER <span class="j-nav-text ⢸blue">#<var>888</var></span></RouterLink>
              </li>
              <li class="j-nav-sub-list">
                <small>Novels</small>
              </li>
              <li class="j-nav-sub-list">
                <RouterLink to="/gr8" class="j-nav-router">GREAT EIGHT <span class="j-nav-text">GR8</span></RouterLink>
              </li>
              <li class="j-nav-sub-list">
                <RouterLink to="/gr8/cascade" class="j-nav-router ⡯⠃">GR8: CASCADE <span class="j-nav-text">1</span></RouterLink>
              </li>
              <li class="j-nav-sub-list">
                <hr />
              </li>
              <li class="j-nav-sub-list">
                <small>Network &amp; Community</small>
              </li>
              <li class="j-nav-sub-list">
                <a class="j-nav-router" href="hive">HIVE<span class="j-nav-text">HIVE.café/bar</span></a>
              </li>
              <li class="j-nav-sub-list">
                <a class="j-nav-router ⡯⠃" href="necjx">NECjX<span class="j-nav-text">5x day</span></a>
              </li>
              <li class="j-nav-sub-list">
                <a class="j-nav-router ⡯⠃" href="score">SCØRE<span class="j-nav-text">12/ABC</span></a>
              </li>
              <li class="j-nav-sub-list">
                <a class="j-nav-router ⡯⠃" href="sun">SUN<span class="j-nav-text">NASA/SDO</span></a>
              </li>
              <li class="j-nav-sub-list">
                <hr />
              </li>
              <li class="j-nav-sub-list">
                <RouterLink to="/projects" class="j-nav-router">...</RouterLink>
              </li>
            </ul>
          </div>
          <span class="⬢⬡">
            <span class="⬢ ⬡²"></span>
            <span class="⬢ ⬡⁴"></span>
            <span class="⬢ ⬡⁷"></span>
          </span>
          <div class="j-nav-text"></div>
          <!--<?php if ($jPage_render == "necjarcom--adleiavde"): ?>
            <ul class="j-nav-ulac">
              <li>
                <a class="j-nav-ulac-link active" href="adleiavde">ADLEIAVDE</a>
              </li>
            </ul>
          <?php elseif ($jPage_render == "necjarcom--anna"): ?>
            <ul class="j-nav-ulac">
              <li>
                <a class="j-nav-ulac-link active" href="anna">ANNA</a>
              </li>
            </ul>
          <?php elseif (preg_match("(necjarcom--ics)", $jPage_render)): ?>
            <ul class="j-nav-ulac">
              <li>
                <a class="j-nav-ulac-link active" href="ics">ICS <?=$jPage_ICS_vol?></a>
              </li>
              <li>
                <a class="j-nav-ulac-link" href="javascript:;">#<var><?=$jComic_current?></var></a>
              </li>
            </ul>
          <?php elseif ($jPage_render == "necjarcom--headheldhigh"): ?>
            <ul class="j-nav-ulac">
              <li>
                <a class="j-nav-ulac-link active" href="headheldhigh">HEAD HELD HIGH</a>
              </li>
            </ul>
          <?php elseif (preg_match("(necjarcom--headheldhigh-traveler)", $jPage_render)): ?>
            <ul class="j-nav-ulac">
              <li>
                <a class="j-nav-ulac-link active" href="headheldhigh/traveler">HHH: Traveler</a>
              </li>
              <li>
                <a class="j-nav-ulac-link" href="javascript:;">#<var><?=$jComic_current?></var></a>
              </li>
            </ul>
          <?php elseif ($jPage_render == "necjarcom--headheldhigh-digger"): ?>
            <ul class="j-nav-ulac">
              <li>
                <a class="j-nav-ulac-link active" href="headheldhigh/digger">HHH: Digger</a>
              </li>
              <li>
                <a class="j-nav-ulac-link" href="javascript:;"><var><?=$jComic_current?></var></a>
              </li>
            </ul>
          <?php elseif (preg_match("(necjarcom--headheldhigh-travis)", $jPage_render)): ?>
            <ul class="j-nav-ulac">
              <li>
                <a class="j-nav-ulac-link active" href="headheldhigh/travis">HHH: Travis</a>
              </li>
              <li>
                <a class="j-nav-ulac-link" href="javascript:;">#<var><?=$jComic_current?></var></a>
              </li>
            </ul>
          <?php elseif ($jPage_render == "necjarcom--xlabs"): ?>
            <ul class="j-nav-ulac">
              <li>
                <a class="j-nav-ulac-link active" href="xlabs">XLABS</a>
              </li>
            </ul>
          <?php elseif ($jPage_render == "necjarcom--echo"): ?>
            <ul class="j-nav-ulac">
              <li>
                <a class="j-nav-ulac-link active" href="echo">ECHO</a>
              </li>
            </ul>
          <?php elseif (preg_match("(necjarcom--gr8)", $jPage_render)): ?>
            <ul class="j-nav-ulac">
              <li>
                <a class="j-nav-ulac-link active" href="gr8">GREAT EIGHT</a>
              </li>
            </ul>
          <?php elseif ($jPage_render == "necjarcom--gr8-cascade"): ?>
            <ul class="j-nav-ulac">
              <li>
                <a class="j-nav-ulac-link active" href="gr8/cascade">GR8: CASCADE</a>
              </li>
            </ul>
          <?php endif; ?>-->
        </li>
        <li class="j-nav-list j-nav-gres">
          <RouterLink to="/contact" class="text-nodecoration j-nav">Contact</RouterLink>
          <div class="j-nav-xool">
            <ul class="j-nav-sub">
              <li class="j-nav-sub-list">
                <small>The man behind the <span class="⡯NECjAR">NEC<span class="⡯j">j</span>AR</span></small>
              </li>
              <li class="j-nav-sub-list">
                <a class="j-nav-router" href="kadae">Kadae</a>
              </li>
              <li class="j-nav-sub-list">
                <hr />
              </li>
              <li class="j-nav-sub-list">
                <a class="j-nav-router" href="terms">Terms</a>
              </li>
            </ul>
          </div>
          <span class="⬢⬡">
            <span class="⬢ ⬡²"></span>
            <span class="⬢ ⬡³"></span>
          </span>
          <div class="j-nav-text"></div>
        </li>
        <li class="j-nav-list j-nav-gres">
          <RouterLink to="/blogs" class="text-nodecoration j-nav">Blogs</RouterLink>
          <div class="j-nav-xool">
            <ul class="j-nav-sub ⎋">
              <li class="j-nav-sub-list">
                <small>The man behind the <span class="⡯NECjAR">NEC<span class="⡯j">j</span>AR</span>"s blog</small>
              </li>
              <li class="j-nav-sub-list">
                <a class="j-nav-router" href="https://t.me/NECjAR">NECjAR</a>
              </li>
              <li class="j-nav-sub-list">
                <small>Head Held High на Acomics</small>
              </li>
              <li class="j-nav-sub-list">
                <a class="j-nav-router" href="out?http://acomics.ru/~traveler" target="_blank">HHH: Traveler<span class="j-nav-text">In Russian</span></a>
              </li>
            </ul>
          </div>
          <span class="⬢⬡">
            <span class="⬢ ⬡¹"></span>
            <span class="⬢ ⬡²"></span>
            <span class="⬢ ⬡⁵"></span>
          </span>
          <div class="j-nav-text"></div>
        </li>
        <li class="j-nav-list j-nav-gres">
          <a class="text-nodecoration j-nav" href="https://wiki.necjar.com" target="_blank"><i class="fab fa-wikipedia-w"></i> Wiki</a>
          <span class="⬢⬡">
            <span class="⬢ ⬡¹"></span>
            <span class="⬢ ⬡⁷"></span>
          </span>
          <div class="j-nav-text"></div>
        </li>
        <li class="j-nav-list j-nav-gres">
          <RouterLink to="/world" class="text-nodecoration j-nav">World</RouterLink>
          <div class="j-nav-xool">
            <ul class="j-nav-sub">
              <li class="j-nav-sub-list">
                <a class="j-nav-router" href="earth">Earth</a>
              </li>
              <li class="j-nav-sub-list">
                <a class="j-nav-router" href="sun">Sun</a>
              </li>
            </ul>
          </div>
          <span class="⬢⬡">
            <span class="⬢ ⬡³"></span>
            <span class="⬢ ⬡⁵"></span>
            <span class="⬢ ⬡⁸"></span>
          </span>
          <div class="j-nav-text"></div>
        </li>
        <li class="j-nav-list j-nav-gres">
          <RouterLink to="/sun" class="text-nodecoration j-nav">Sun</RouterLink>
          <span class="⬢⬡">
            <span class="⬢ ⬡¹"></span>
            <span class="⬢ ⬡²"></span>
            <span class="⬢ ⬡⁵"></span>
          </span>
          <div class="j-nav-text"></div>
        </li>
        <li class="j-nav-list j-nav-gres">
          <RouterLink to="/store" class="text-nodecoration j-nav">Store</RouterLink>
          <span class="⬢⬡">
            <span class="⬢ ⬡²"></span>
            <span class="⬢ ⬡³"></span>
          </span>
          <div class="j-nav-text"></div>
        </li>
        <li class="j-nav-list j-nav-gres">
          <hr />
        </li>
        <li class="j-nav-list j-nav-gres ⎋">
          <RouterLink to="/hive" class="text-nodecoration j-nav">⬢⬡ HIVE.café</RouterLink>
          <div class="j-nav-xool">
            <ul class="j-nav-sub">
              <li class="j-nav-sub-list">
                <small>Community</small>
              </li>
              <li class="j-nav-sub-list">
                <a class="j-nav-router ⡣⠟" href="out?https://forum.hive.cafe" target="_blank">FORUM | HIVE.café <span class="j-nav-text ⢸green">24/7</span></a>
              </li>
              <li class="j-nav-sub-list">
                <a class="j-nav-router" href="out?https://t.me/HiveCafe" target="_blank">CHAT <i class="fab fa-telegram"></i > @HiveCafe <span class="j-nav-text ⢸green">24/7</span></a>
              </li>
              <li class="j-nav-sub-list">
                <small>Telegram Channels</small>
              </li>
              <li class="j-nav-sub-list">
                <a class="j-nav-router" href="out?https://t.me/Entertainment" target="_blank">Entertainment Channel</a>
              </li>
            </ul>
          </div>
          <span class="⬢⬡">
            <span class="⬢ ⬡⁶"></span>
            <span class="⬢ ⬡⁸"></span>
          </span>
          <div class="j-nav-text"></div>
        </li>
        <li class="j-nav-list j-nav-gres">
          <RouterLink to="/achievements" class="text-nodecoration j-nav j-tooltip ⣲⡣ ⡣⠿">
            <i class="far fa-star"></i>
          </RouterLink>
          <span class="⬢⬡">
            <span class="⬢ ⬡²"></span>
            <span class="⬢ ⬡³"></span>
            <span class="⬢ ⬡⁶"></span>
          </span>
          <div class="j-nav-text"></div>
        </li>
      </ul>
    </nav>
  </aside>
  <a id="menu" class="≡ ≡🚩¹ ◭ 𖨳" href="javascript:;">
    <span class="≡¹">
      <span class="═¹"></span><br />
      <span class="═²"></span><br />
      <span class="═³"></span>
    </span>
  </a>
  <a class="≡² ≡🚩²" href="javascript:;"></a>
</template>

<style scoped>
/*
header,
footer {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
</style>

