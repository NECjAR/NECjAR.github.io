<template>
  <aside id="﹟aside" class="≞">
    <nav id="﹟nav">
      <ul class="nav-ul">
        <li class="⠗⡦ ⡷ ⡷⡠">
          <RouterLink to="/" class="⠗⠴ ⡟ ⡟⢖ ⠭">
            <span class="⡯NECjAR">NEC<span class="⡯j">j</span>AR</span>
            <span class="⠭ ⠭⠃">Our ambition is unlimited</span>
          </RouterLink>
          <span class="⡷⠮">
            <span class="⢙ ⢙¹"></span>
            <span class="⢙ ⢙⁴"></span>
            <span class="⢙ ⢙⁶"></span>
          </span>
        </li>
        <li class="⠗⡦ ⡷">
          <RouterLink to="/projects" class="⠗⠴ ⡟">Pro<span class="⡯j">j</span>ects</RouterLink>
          <div class="⡶">
            <ul class="⡶⡥">
              <li class="⡶⡦">
                <small>Started fundraising</small>
              </li>
              <li class="⡶⡦">
                <RouterLink to="/adleiavde" class="⡶⠴ ⡣⠇">ADLEIAVDE <span class="⡟⠵">0/$2000</span></RouterLink>
              </li>
              <li class="⡶⡦">
                <small>Artificial Intelligence</small>
              </li>
              <li class="⡶⡦">
                <RouterLink to="/anna" class="⡶⠴">ANNA <span class="⡟⠵ ⢸green">Online</span></RouterLink>
              </li>
              <li class="⡶⡦">
                <small>Games</small>
              </li>
              <li class="⡶⡦">
                <RouterLink to="/echo" class="⡶⠴ ⡣⠁">ECHO<span class="⡯⠃"><span class="⡟⠵">1</span></span></RouterLink>
              </li>
              <li class="⡶⡦">
                <small>Graphic novels</small>
              </li>
              <li class="⡶⡦">
                <RouterLink to="/headheldhigh" class="⡶⠴">HEAD HELD HIGH <span class="⡟⠵">HHH</span></RouterLink>
              </li>
              <li class="⡶⡦">
                <RouterLink to="/headheldhigh/traveler" class="⡶⠴ ⡣⠁">HHH: TRAVELER <span class="⡟⠵ ⢸blue">#<var>888</var></span></RouterLink>
              </li>
              <li class="⡶⡦">
                <RouterLink to="/headheldhigh/digger" class="⡶⠴ ⡣⠁">HHH: DIGGER <span class="⡟⠵ ⢸blue">#<var>888</var></span></RouterLink>
              </li>
              <li class="⡶⡦">
                <small>Novels</small>
              </li>
              <li class="⡶⡦">
                <RouterLink to="/gr8" class="⡶⠴ ⡣⠁">GREAT EIGHT <span class="⡟⠵">GR8</span></RouterLink>
              </li>
              <li class="⡶⡦">
                <RouterLink to="/gr8/cascade" class="⡶⠴ ⡯⠃">GR8: CASCADE <span class="⡟⠵">1</span></RouterLink>
              </li>
              <li class="⡶⡦">
                <hr />
              </li>
              <li class="⡶⡦">
                <small>Network &amp; Community</small>
              </li>
              <li class="⡶⡦">
                <a class="⡶⠴" href="hive">HIVE<span class="⡟⠵">HIVE.café/bar</span></a>
              </li>
              <li class="⡶⡦">
                <a class="⡶⠴ ⡯⠃" href="necjx">NECjX<span class="⡟⠵">5x day</span></a>
              </li>
              <li class="⡶⡦">
                <a class="⡶⠴ ⡯⠃" href="score">SCØRE<span class="⡟⠵">12/ABC</span></a>
              </li>
              <li class="⡶⡦">
                <a class="⡶⠴ ⡯⠃" href="sun">SUN<span class="⡟⠵">NASA/SDO</span></a>
              </li>
              <li class="⡶⡦">
                <hr />
              </li>
              <li class="⡶⡦">
                <RouterLink to="/projects" class="⡶⠴">...</RouterLink>
              </li>
            </ul>
          </div>
          <span class="⡷⠮">
            <span class="⢙ ⢙²"></span>
            <span class="⢙ ⢙⁴"></span>
            <span class="⢙ ⢙⁷"></span>
          </span>
          <div class="⡟⠵"></div>
          <!--<?php if ($jPage_render == "necjarcom--adleiavde"): ?>
            <ul class="⢓">
              <li>
                <a class="⡲ ⠶" href="adleiavde">ADLEIAVDE</a>
              </li>
            </ul>
          <?php elseif ($jPage_render == "necjarcom--anna"): ?>
            <ul class="⢓">
              <li>
                <a class="⡲ ⠶" href="anna">ANNA</a>
              </li>
            </ul>
          <?php elseif (preg_match("(necjarcom--ics)", $jPage_render)): ?>
            <ul class="⢓">
              <li>
                <a class="⡲ ⠶" href="ics">ICS <?=$jPage_ICS_vol?></a>
              </li>
              <li>
                <a class="⡲" href="javascript:;">#<var><?=$jComic_current?></var></a>
              </li>
            </ul>
          <?php elseif ($jPage_render == "necjarcom--headheldhigh"): ?>
            <ul class="⢓">
              <li>
                <a class="⡲ ⠶" href="headheldhigh">HEAD HELD HIGH</a>
              </li>
            </ul>
          <?php elseif (preg_match("(necjarcom--headheldhigh-traveler)", $jPage_render)): ?>
            <ul class="⢓">
              <li>
                <a class="⡲ ⠶" href="headheldhigh/traveler">HHH: Traveler</a>
              </li>
              <li>
                <a class="⡲" href="javascript:;">#<var><?=$jComic_current?></var></a>
              </li>
            </ul>
          <?php elseif ($jPage_render == "necjarcom--headheldhigh-digger"): ?>
            <ul class="⢓">
              <li>
                <a class="⡲ ⠶" href="headheldhigh/digger">HHH: Digger</a>
              </li>
              <li>
                <a class="⡲" href="javascript:;"><var><?=$jComic_current?></var></a>
              </li>
            </ul>
          <?php elseif (preg_match("(necjarcom--headheldhigh-travis)", $jPage_render)): ?>
            <ul class="⢓">
              <li>
                <a class="⡲ ⠶" href="headheldhigh/travis">HHH: Travis</a>
              </li>
              <li>
                <a class="⡲" href="javascript:;">#<var><?=$jComic_current?></var></a>
              </li>
            </ul>
          <?php elseif ($jPage_render == "necjarcom--xlabs"): ?>
            <ul class="⢓">
              <li>
                <a class="⡲ ⠶" href="xlabs">XLABS</a>
              </li>
            </ul>
          <?php elseif ($jPage_render == "necjarcom--echo"): ?>
            <ul class="⢓">
              <li>
                <a class="⡲ ⠶" href="echo">ECHO</a>
              </li>
            </ul>
          <?php elseif (preg_match("(necjarcom--gr8)", $jPage_render)): ?>
            <ul class="⢓">
              <li>
                <a class="⡲ ⠶" href="gr8">GREAT EIGHT</a>
              </li>
            </ul>
          <?php elseif ($jPage_render == "necjarcom--gr8-cascade"): ?>
            <ul class="⢓">
              <li>
                <a class="⡲ ⠶" href="gr8/cascade">GR8: CASCADE</a>
              </li>
            </ul>
          <?php endif; ?>-->
        </li>
        <li class="⠗⡦ ⡷">
          <RouterLink to="/contact" class="⠗⠴ ⡟">Contact</RouterLink>
          <div class="⡶">
            <ul class="⡶⡥">
              <li class="⡶⡦">
                <small>The man behind the <span class="⡯NECjAR">NEC<span class="⡯j">j</span>AR</span></small>
              </li>
              <li class="⡶⡦">
                <a class="⡶⠴" href="kadae">Kadae</a>
              </li>
              <li class="⡶⡦">
                <hr />
              </li>
              <li class="⡶⡦">
                <a class="⡶⠴" href="terms">Terms</a>
              </li>
            </ul>
          </div>
          <span class="⡷⠮">
            <span class="⢙ ⢙²"></span>
            <span class="⢙ ⢙³"></span>
          </span>
          <div class="⡟⠵"></div>
        </li>
        <li class="⠗⡦ ⡷">
          <RouterLink to="/blogs" class="⠗⠴ ⡟">Blogs</RouterLink>
          <div class="⡶">
            <ul class="⡶⡥ ⎋">
              <li class="⡶⡦">
                <small>The man behind the <span class="⡯NECjAR">NEC<span class="⡯j">j</span>AR</span>"s blog</small>
              </li>
              <li class="⡶⡦">
                <a class="⡶⠴" href="https://t.me/NECjAR">NECjAR</a>
              </li>
              <li class="⡶⡦">
                <small>Head Held High на Acomics</small>
              </li>
              <li class="⡶⡦">
                <a class="⡶⠴" href="out?http://acomics.ru/~traveler" target="_blank">HHH: Traveler<span class="⡟⠵">In Russian</span></a>
              </li>
            </ul>
          </div>
          <span class="⡷⠮">
            <span class="⢙ ⢙¹"></span>
            <span class="⢙ ⢙²"></span>
            <span class="⢙ ⢙⁵"></span>
          </span>
          <div class="⡟⠵"></div>
        </li>
        <li class="⠗⡦ ⡷">
          <a class="⠗⠴ ⡟" href="https://wiki.necjar.com" target="_blank"><i class="fab fa-wikipedia-w"></i> Wiki</a>
          <span class="⡷⠮">
            <span class="⢙ ⢙¹"></span>
            <span class="⢙ ⢙⁷"></span>
          </span>
          <div class="⡟⠵"></div>
        </li>
        <li class="⠗⡦ ⡷">
          <RouterLink to="/world" class="⠗⠴ ⡟">World</RouterLink>
          <div class="⡶">
            <ul class="⡶⡥">
              <li class="⡶⡦">
                <a class="⡶⠴" href="earth">Earth</a>
              </li>
              <li class="⡶⡦">
                <a class="⡶⠴" href="sun">Sun</a>
              </li>
            </ul>
          </div>
          <span class="⡷⠮">
            <span class="⢙ ⢙³"></span>
            <span class="⢙ ⢙⁵"></span>
            <span class="⢙ ⢙⁸"></span>
          </span>
          <div class="⡟⠵"></div>
        </li>
        <li class="⠗⡦ ⡷">
          <RouterLink to="/sun" class="⠗⠴ ⡟">Sun</RouterLink>
          <span class="⡷⠮">
            <span class="⢙ ⢙¹"></span>
            <span class="⢙ ⢙²"></span>
            <span class="⢙ ⢙⁵"></span>
          </span>
          <div class="⡟⠵"></div>
        </li>
        <li class="⠗⡦ ⡷">
          <RouterLink to="/store" class="⠗⠴ ⡟">Store</RouterLink>
          <span class="⡷⠮">
            <span class="⢙ ⢙²"></span>
            <span class="⢙ ⢙³"></span>
          </span>
          <div class="⡟⠵"></div>
        </li>
        <li class="⠗⡦ ⡷">
          <hr />
        </li>
        <li class="⠗⡦ ⡷ ⎋">
          <RouterLink to="/hive" class="⠗⠴ ⡟">⬢⬡ HIVE.café</RouterLink>
          <div class="⡶">
            <ul class="⡶⡥">
              <li class="⡶⡦">
                <small>Community</small>
              </li>
              <li class="⡶⡦">
                <a class="⡶⠴ ⡣⠟" href="out?https://forum.hive.cafe" target="_blank">FORUM | HIVE.café <span class="⡟⠵ ⢸green">24/7</span></a>
              </li>
              <li class="⡶⡦">
                <a class="⡶⠴" href="out?https://t.me/HiveCafe" target="_blank">CHAT <i class="fab fa-telegram"></i > @HiveCafe <span class="⡟⠵ ⢸green">24/7</span></a>
              </li>
              <li class="⡶⡦">
                <small>Telegram Channels</small>
              </li>
              <li class="⡶⡦">
                <a class="⡶⠴" href="out?https://t.me/Entertainment" target="_blank">Entertainment Channel</a>
              </li>
            </ul>
          </div>
          <span class="⡷⠮">
            <span class="⢙ ⢙⁶"></span>
            <span class="⢙ ⢙⁸"></span>
          </span>
          <div class="⡟⠵"></div>
        </li>
        <li class="⠗⡦ ⡷">
          <RouterLink to="/achievements" class="⠗⠴ ⡟ ⠭ ⣲⡣ ⡣⠿">
            <i class="far fa-star"></i>
          </RouterLink>
          <span class="⡷⠮">
            <span class="⢙ ⢙²"></span>
            <span class="⢙ ⢙³"></span>
            <span class="⢙ ⢙⁶"></span>
          </span>
          <div class="⡟⠵"></div>
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

