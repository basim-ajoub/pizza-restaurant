<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@300&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@50&family=Fruktur&display=swap"
      rel="stylesheet"
    />
    <div id="icon-nav" class="icon-nav">
      <div class="icon">
        <img src="logo.png" alt="" />
      </div>
      <div @click="viewMobileMenu" id="mobile-btn" class="mobile-btn">
        <fontawesome-icon class="menu-icon" :icon="['fas', 'utensils']" />
      </div>
      <div id="nav">
        <div class="nav-2">
          <ul class="nav-2-elements">
            <li class="nav-shift">
              <a href="#app"> StartSeite </a>
            </li>
            <li>
              <a href="#angebot">Angebot</a>
            </li>
            <li>
              <a href="#contact-scroll">Kontakt</a>
            </li>
            <li>
              <a href="#menu-scroll">Speisekarte</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-header">
      <router-view />
    </div>
    <div id="angebot" class="mid-slider-1">
      <h1 class="angebot-title">Angebot</h1>
      <div class="left-part part">
        <div class="part-disc">
          <h2><span>Kunstige Preis</span></h2>
          <h4><span>Pepperoni nur 4.5 €</span></h4>
        </div>
        <img class="left-img" src="pizza-wb-1.png" alt="" />
      </div>

      <div class="mid-part part">
        <div class="row-lr">
          <img src="row-left.png" alt="" />
        </div>
        <div class="box-offer">
          <h1>2 Für</h1>
          <h2>5 €</h2>
        </div>
        <div class="row-lr row-right">
          <img src="row-right.png" alt="" />
        </div>
      </div>

      <div class="right-part part">
        <img class="right-img" src="pizza-wb-2.png" alt="" />
        <div class="part-disc">
          <h4><span>Meatballs nur 3.0 €</span></h4>
          <h2><span>Kunstige Preis</span></h2>
        </div>
      </div>
    </div>
    <div class="delivery-part">
      <div class="delivery-img-box">
        <img src="pizza-delivery.jpg" alt="" />
      </div>
      <div class="delivery-box-disc">
        <h3 class="delivery-note-1">
          Schnell
          <fontawesome-icon
            class="delivery-icon"
            :icon="['fas', 'shipping-fast']"
          />
        </h3>
        <h3 class="delivery-note-2">
          Kostenlos
          <fontawesome-icon
            class="delivery-icon"
            :icon="['fas', 'euro-sign']"
          />
        </h3>
        <h3 class="delivery-note-3">
          Frische Pizza<fontawesome-icon
            class="delivery-icon"
            :icon="['fas', 'pizza-slice']"
          />
        </h3>
      </div>
    </div>
    <div id="contact-main-box" class="contact-main-box">
      <div class="contact-box"></div>
      <div id="contact-scroll" class="contact-disc-box">
        <h2>
          <fontawesome-icon
            class="delivery-icon"
            :icon="['fas', 'mobile-alt']"
          />
          Rufen Sie Uns
        </h2>
        <div class="disc">
          <h4>+49-1226597877</h4>
          <p>
            <fontawesome-icon
              class="location-icon"
              :icon="['fas', 'map-marker-alt']"
            />Oder
          </p>
          <h6>Charlottenburg 7 - Berlin - Deutschland 10325</h6>
        </div>
      </div>
    </div>
    <div class="menu-box" id="menu">
      <h2 id="menu-scroll">
        Unsere Speisekarte
        <fontawesome-icon class="menu-icon" :icon="['fas', 'utensils']" />
      </h2>
      <div class="vegan-list menu-list">
        <h3>Vegane Pizza</h3>
        <div class="list">
          <ul>
            <li>
              <p>Spinach Artichoke Pizza.</p>
              <span>3 €</span>
            </li>
            <li>
              <p>Vegan Caprese Pizza.</p>
              <span>3 €</span>
            </li>
            <li>
              <p>BBQ Pizza with Crispy Cauliflower.</p>
              <span>3 €</span>
            </li>
            <li>
              <p>Vegan Deep Dish Pizza.</p>
              <span>3 €</span>
            </li>
            <li>
              <p>Socca Pizza.</p>
              <span>3 €</span>
            </li>
            <li>
              <p>Hummus Pizza with Veggies.</p>
              <span>3 €</span>
            </li>
            <li>
              <p>Vegan Broccoli Cheese Pizza.</p>
              <span>3 €</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="meat-list menu-list">
        <h3>Fleische Pizza</h3>
        <ul>
          <li>
            <p>Pepperoni Pizza.</p>
            <span>4.5 €</span>
          </li>
          <li>
            <p>Hot Soppressata Pizza.</p>
            <span>4.5 €</span>
          </li>
          <li>
            <p>Bacon Pizza.</p>
            <span>4.5 €</span>
          </li>
          <li>
            <p>Meatballs Pizza.</p>
            <span>4.5 €</span>
          </li>
          <li>
            <p>Prosciutto Pizza.</p>
            <span>4.5 €</span>
          </li>
          <li>
            <p>Buffalo Chicken Pizza.</p>
            <span>4.5 €</span>
          </li>
        </ul>
      </div>
      <div class="drinks menu-list">
        <h3>Kalte Getränke</h3>
        <div class="list">
          <ul>
            <li>
              <p>Pepsi.</p>
              <span>2 €</span>
            </li>
            <li>
              <p>Diet Pepsi.</p>
              <span>2 €</span>
            </li>
            <li>
              <p>Fanta.</p>
              <span>2 €</span>
            </li>
            <li>
              <p>Orangensaft.</p>
              <span>3 €</span>
            </li>
            <li>
              <p>Red Bull.</p>
              <span>2.5 €</span>
            </li>
            <li>
              <p>Wasser.</p>
              <span>1.5 €</span>
            </li>
            <li>
              <p>Lemonade.</p>
              <span>3 €</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-disc">
        <div class="logo-box fotter-box">
          <img src="logo.png" alt="" />
          <p>All Right Reserved to © <a href="#"> Pizza </a></p>
        </div>
        <div class="map-box fotter-box">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310846.42013233475!2d13.14455454370644!3d52.50651327269696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sen!2sde!4v1635248017380!5m2!1sen!2sde"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div class="social-box fotter-box">
          <h4>Wir Sind Verfügbar</h4>
          <ul>
            <li>
              <a href="#"><fontawesome-icon :icon="['fab', 'facebook-f']" /></a>
            </li>
            <li>
              <a href="#"> <fontawesome-icon :icon="['fab', 'instagram']" /></a>
            </li>
            <li>
              <a href="#"><fontawesome-icon :icon="['fab', 'twitter']" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  methods: {
    viewMobileMenu: function () {
      var x = document.getElementById("icon-nav").className;
      if (x == "icon-nav") {
        document.getElementById("nav").style.display = "block";
        document.getElementById("icon-nav").className = "icon-nav-show";
        document.getElementById("mobile-btn").style.background = "rgb(20, 20, 20)";
      } else {
        document.getElementById("nav").style.display = "none";
        document.getElementById("icon-nav").className = "icon-nav";
        document.getElementById("mobile-btn").style.background = "#f38339";
      }
    },
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
//for scroll bar Start
/* Works on Firefox */
* {
  scrollbar-width: 8px;
  scrollbar-color: #f58031 rgb(20, 20, 20);
  scroll-behavior: auto;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 20px;
}

*::-webkit-scrollbar-track {
  background: rgb(20, 20, 20);
}

*::-webkit-scrollbar-thumb {
  background-color: #f38339;
  border-radius: 20px;
  border: 3px solid rgb(20, 20, 20);
}
//End Scroll bar
#app {
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  background: #000;
  font-family: "Kalam", cursive;
}
.icon-nav {
  width: 100%;
  height: 150px;
  z-index: 5;
  background: linear-gradient(
    to bottom right,
    #000 5%,
    rgb(32, 32, 32) 90%,
    #252323
  );

  transform: skewY(-3deg);
  bottom: 50px;
  position: relative;
}
.icon {
  width: 25%;
  height: 85px;
  float: left;
  transform: skewY(3deg);
  margin-top: 50px;
  position: relative;

  img {
    margin-left: 12%;
    float: left;
    width: 130px;
    height: 80px;
  }
}
.mobile-btn {
  width: 10%;
  height: 30px;
  background: #f38339;
  border: 2px solid wheat;
  z-index: 10;
  position: absolute;
  top: 80px;
  padding-top: 5px;
  right: 5%;
  color: wheat;
  cursor: pointer;
  display: none;
}
#nav {
  height: 100px;
  width: 80%;
  z-index: 5;
  margin-left: 20%;
  position: relative;
  top: 75px;
  display: block;
  font-family: "Fruktur", cursive;
  letter-spacing: 0.08em;
  .nav-1 {
    width: 40%;
    margin-left: auto;
    height: 20px;
    margin-right: 2%;
    transform: skewY(3deg);
    position: relative;
    justify-content: flex-end;
    display: flex;
    top: 20px;
    color: wheat;
    .nav-1-elements {
      width: 65%;
      list-style: none;
      text-align: right;

      li {
        float: left;
        margin-left: 10%;
        
      }
    }
  }
  .nav-2 {
    width: 65%;
    height: 65px;
    margin-top: 20px;
    list-style: none;
    margin-left: 21%;
    transform: skewY(1deg);
  }

  .nav-2-elements {
    width: 90%;
    height: 65px;
    list-style: none;
    overflow: hidden;
    position: relative;
    transform: skewY(2deg);
    left: 25%;
    top: 42px;
    .nav-shift {
      margin-left: 19%;
    }
    li {
      margin-top: 5px;
      text-align: left;
      margin-right: 3%;
      display: flex;
      transform: skewX(-47deg);
      float: left;
      width: 17%;
      height: 40px;
      text-align: center;
      font-size: 14px;
    }

    a {
      height: 30px;
      width: 100%;
      text-decoration: none;
      color: #ffff;
      background: #f48135;
      transform: skewX(45deg);
      border-top-left-radius: 10%;
      border-bottom-right-radius: 10%;

      padding-top: 10px;
      padding-left: 5%;
      padding-right: 5%;
      &:hover:active {
        color: #000;
        box-shadow: -8px -3.5px 10px -2px #f38339;
      }
    }
  }

  a {
    &.router-link-exact-active {
      color: #000;
      box-shadow: -8px -3.5px 10px -2px #f38339;
    }
  }
}
.main-header {
  width: 100%;
  height: 600px;

  bottom: 86px;
  position: relative;

  z-index: 1;
}
.mid-slider-1 {
  width: 100%;
  height: 750px;
  background: linear-gradient(to bottom right, rgb(2, 2, 2), rgb(17, 16, 16));
  transform: skewY(2deg);
  z-index: 5;
  position: relative;
  bottom: 110px;

  .part {
    width: 30%;
    height: 500px;

    float: left;
    img {
      width: 100%;
      height: 70%;
    }
    .left-img {
      position: relative;
      bottom: 78px;
    }
  }
  .part-disc {
    width: 60%;
    height: 150px;
    margin-left: 20%;
    h2 {
      color: wheat;
      padding: 3px;
      background: linear-gradient(to bottom right, #f48135 50%, #f61b2f);
    }
    h4 {
      background: linear-gradient(to bottom right, #f61b2f 50%, #f48135);

      padding: 3px;
    }
  }
  .left-part {
    .part-disc {
      margin-top: 60px;
      h2 {
        margin-bottom: -1px;
        transform: skewX(-15deg);
        z-index: 7;
      }
      h4 {
        transform: skewX(15deg);
        z-index: 6;
        box-shadow: 0px 15px 45px -1px rgba(255, 255, 255, 0.815);
      }
    }
  }
  .mid-part {
    height: 600px;
    width: 40%;
    margin-top: 50px;
    .row-lr {
      width: 50%;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .box-offer {
      width: 100%;
      margin-top: 150px;
      margin-bottom: 150px;
      h1 {
        width: 50%;
        margin-left: 25%;

        background: linear-gradient(to bottom right, #f61b2f 50%, #f48135);
        transform: skewX(15deg);
        margin-bottom: -1px;
        color: wheat;
      }
      h2 {
        width: 50%;
        margin-left: 25%;
        background: linear-gradient(to bottom right, #f48135 50%, #f61b2f);
        transform: skewX(-15deg);
        font-family: "Fruktur", cursive;
        font-weight: lighter;
      }
    }
    .row-right {
      margin-left: 50%;
    }
  }
  .right-part {
    position: absolute;
    right: 0;
    bottom: 60px;
    .part-disc {
      h2 {
        transform: skewX(15deg);
      }
      h4 {
        box-shadow: 0px 5px 50px 0px rgba(255, 255, 255, 0.815);
        transform: skewX(-15deg);
      }
    }
  }
  .angebot-title {
    width: 15%;
    position: absolute;
    top: -30px;
    left: 5%;
    font-family: "Fruktur", cursive;
    background: rgba(255, 255, 255, 0.863);
    transform: skewY(2.5deg);
    letter-spacing: 0.05em;
    border-top-right-radius: 10%;
    border-bottom-left-radius: 10%;
  }
}
.delivery-part {
  width: 100%;
  height: 600px;
  bottom: 170px;
  transform: skewY(-2.5deg);
  position: relative;
  z-index: 8;
  overflow: hidden;
  background: #f38339;
  .delivery-img-box {
    position: absolute;
    transform: skew(-11deg, -3deg);
    float: left;
    width: 50%;
    height: 550px;
    top: -20px;
    left: -6%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .delivery-box-disc {
    position: relative;
    top: 100px;
    margin-left: 55%;
    width: 40%;
    height: 300px;
    padding-top: 100px;
    h3 {
      color: #f48135;
      padding-top: 20px;
      width: 50%;
      height: 45px;
      background: linear-gradient(
        to bottom right,
        rgba(2, 2, 2, 0.938),
        rgb(17, 16, 16)
      );
      margin-bottom: 15px;
      border-bottom-left-radius: 25%;
      border-top-right-radius: 25%;
      .delivery-icon {
        margin-left: 5%;
        color: white;
      }
    }
    .delivery-note-2 {
      margin-left: 25%;
    }
    .delivery-note-3 {
      margin-left: 45%;
    }
  }
}
.contact-main-box {
  width: 100%;
  height: 470px;
  position: relative;
  .contact-disc-box {
    width: 40%;
    height: 100%;
    position: absolute;
    top: -90px;
    left: 0;

    h2 {
      padding-top: 12px;
      width: 50%;
      height: 50px;
      margin-left: 25%;
      background: rgba(255, 255, 255, 0.685);
      font-family: "Fruktur", cursive;
      letter-spacing: 0.05em;
      margin-bottom: 20px;
      margin-top: 90px;
      transform: skewY(3deg);
      font-weight: normal;
    }
    .disc {
      margin-top: 40px;
      color: rgba(255, 255, 255, 0.685);
      font-size: 30px;

      h6 {
        font-family: "Arima Madurai", cursive;
      }
      h4 {
        font-family: "Fruktur", cursive;
        font-weight: normal;
        font-size: 25px;
      }
      .location-icon {
        margin-right: 5%;
      }
    }
    p {
      width: 15%;
      margin-left: 42%;
      height: 30px;
      padding-top: 5px;
      margin-top: 50px;
      margin-bottom: 30px;
      text-align: center;
      font-size: 18px;

      color: #000;
      transform: skewY(-2.5deg);
      background: rgba(255, 255, 255, 0.685);
      font-family: "Fruktur", cursive;
      letter-spacing: 0.05em;
    }
  }
  .contact-box {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    z-index: 0;
    background-image: url("../public/contact-background.jpg");
    background-position: center;
    background-size: cover;
  }
}
.menu-box {
  width: 100%;
  height: 800px;
  background: #f38339e0;

  position: relative;
  color: white;

  transform: scaleY(5deg);
  margin-top: -30px;
  h2 {
    width: 25%;
    height: 50px;
    margin-bottom: 75px;
    padding-top: 15px;
    margin-left: 37%;
    position: relative;
    top: -25px;
    transform: skewY(-4deg);
    border-top-right-radius: 10%;
    border-bottom-left-radius: 10%;
    background: linear-gradient(
      to bottom right,
      rgba(2, 2, 2, 0.938),
      rgb(17, 16, 16)
    );
    font-family: "Fruktur", cursive;
    letter-spacing: 0.06em;
    font-weight: normal;
  }
  .menu-list {
    width: 33%;
    height: 750px;
    float: left;
    h3 {
      width: 50%;
      height: 35px;
      background: linear-gradient(
        to bottom right,
        rgba(2, 2, 2, 0.76),
        rgb(17, 16, 16)
      );
      letter-spacing: 0.1em;
      margin-bottom: 60px;
      position: relative;
      transform: skewY(-3deg);
      padding-top: 7px;
      margin-left: 25%;
      color: #f38339;
    }
    ul {
      width: 80%;
      margin-left: 12%;
      list-style-type: none;
      text-align: left;
      margin-top: 15px;
      li {
        width: 100%;
        height: 25px;
        margin-bottom: 40px;
        font-family: "Arima Madurai", cursive;
        p {
          height: 25px;
          width: 80%;
          margin-right: 5%;
          float: left;
          color: #000;
          font-weight: lighter;
          font-size: 17px;
        }

        span {
          height: 25px;
          font-weight: bold;

          width: 19%;
          text-align: center;
          color: #000;
        }
      }
    }
  }
}
.footer {
  width: 100%;
  height: 250px;
  margin-top: 25px;
  background: #000;
  position: relative;
  .footer-disc {
    height: 220px;
    background: #000;
    width: 100%;
    position: relative;
    transform: skewY(2.5deg);
    margin-top: -25px;
    .fotter-box {
      width: 32%;
      height: 200px;
      float: left;
      margin-top: -75px;
      margin-left: 1%;
      overflow: hidden;
    }
    .logo-box {
      padding-right: 1%;
      margin-left: 0;
      height: 200px;

      img {
        width: 30%;
        height: 150px;

        position: relative;
        margin-right: 4%;
        margin-top: 8px;
        transform: skewY(-2.5deg);
      }
      p {
        color: white;
        position: relative;
        transform: skewY(-2.5deg);
        width: 100%;
        height: 20px;
        a {
          text-decoration: none;
          font-size: 17px;
          color: #f38339;

          font-family: "Fruktur", cursive;
        }
      }
    }
    .map-box {
      .map {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        border-radius: 10%;
      }
    }
    .social-box {
      h4 {
        width: 50%;
        height: 30px;
        padding-top: 8px;
        margin-left: 25%;
        position: relative;
        background: white;
        color: black;
        transform: skewY(-2.5deg);
        margin-top: 20px;
        margin-bottom: 40px;
        border-top-right-radius: 30%;
        border-bottom-left-radius: 40%;
      }
      ul {
        list-style-type: none;
        padding-left: 22%;
        width: 100%;
        li {
          width: 12%;
          height: 35px;
          padding-top: 10px;
          background: white;
          margin-left: 5%;
          float: left;
          transition: ease-in-out 0.4s;
          cursor: pointer;
          font-size: 20px;
          border-top-left-radius: 20%;
          border-bottom-right-radius: 20%;

          a {
            color: black;

            text-decoration: none;
          }
          &:hover {
            background: #000;
            a {
              font-size: 24px;
              color: white;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 530px) {
  .icon-nav-show {
    width: 100%;
    height: 900px;
    z-index: 5;
    background: linear-gradient(
      to bottom right,
      #000 5%,
      rgb(32, 32, 32) 90%,
      #252323
    );

    bottom: 50px;
    position: relative;

    position: fixed;
    z-index: 200;
    top: -60px;
    transform: skewY(-3deg);
  }
  .mobile-btn {
    display: block;
  }
  #nav {
    position: fixed;
    top: 0;
    left: 0;
    margin-left: 0;
    height: 740px;
    width: 100%;
    display: none;
    background: #f38339;
    padding-top: 120px;
    .nav-2 {
      width: 100%;
      height: 100%;
      margin-left: 0;
    }
    .nav-2-elements {
      width: 90%;
      height: 100%;
      left: 0;
      overflow: hidden;
      a {
        background-color: rgba(245, 222, 179, 0);
        margin-left: 0%;
        width: 50%;
        font-size: 14px;
        padding-top: 40px;
      }

      li {
        width: 60%;
        height: 100px;
        float: none;
        margin-left: 40%;
        border-bottom: 1px solid white;
        text-align: left;
      }
      .nav-shift {
        margin-left: 40%;
      }
    }
  }
}
@media only screen and (max-width:1110px){
  #nav .nav-2-elements a{
    font-size: 10px;
  }
}
@media only screen and (max-width: 1015px) {
 
  .menu-box h2 {
    font-size: 18px;
  }
  .contact-main-box .contact-disc-box{
    h2{
      width: 78%;
    }
    p {
      padding-top: 10px;
      width: 25%;
      font-size: 14px;
    }
    h6{
      font-size: 13px;
    }
    h4,h6{
      margin-left: 2%;
    }
  }
}
@media only screen and (max-width: 900px) {
  .menu-list {
    font-size: 12px;
  }

  .menu-list {
    ul {
      li {
        p {
          font-size: 12px;
        }
      }
    }
  }
}

@media only screen and (max-width: 790px) {
  #nav .nav-2-elements a{
    font-size: 10px;
  }
  .menu-list {
    font-size: 10px;
  }

  .menu-box {
    h2 {
      padding-top: 20px;
      font-size: 14px;
    }
    .menu-list {
      ul {
        li {
          p {
            font-size: 11px;
          }
        }
      }
    }
  }
  .part .part-disc {
    h4 {
      font-size: 12px;
    }
    h2 {
      font-size: 15px;
    }
  }
}
@media only screen and (max-width: 850px) {
  #nav {
    a {
      font-size: 10px;
    }
  }
  .part .part-disc {
    h4 {
      font-size: 14px;
    }
    h2 {
      font-size: 17px;
    }
  }
  .footer .footer-disc .social-box h4{
    font-size: 11.5px;
  }
}
@media only screen and (max-width: 720px) {
  //start nav
   #nav .nav-2-elements a{
    font-size: 7px;
  }
}
@media only screen and (max-width: 600px) {
 
  //start offer
  .mid-slider-1 {
    height: 680px;

    .angebot-title {
      width: 25%;
      top: -15px;
      font-size: 17px;
    }
    .right-part {
      bottom: 0px;
    }
    .part {
      img {
        height: 54%;
      }
      .box-offer {
        margin-top: 100px;
        margin-bottom: 100px;
        h1 {
          font-size: 19px;
        }
        h2 {
          font-size: 16px;
        }
      }
      .part-disc {
        h4 {
          font-size: 13px;
        }
        h2 {
          display: none;
        }
      }
    }
  }
  //end offer
  //start  delivery
  .delivery-part {
    height: 540px;
    .delivery-img-box img {
      height: 60%;
    }
    .delivery-box-disc {
      padding-top: 160px;
      h3 {
        width: 63%;
        font-size: 14px;
      }
    }
  }
  //end delivery
  //start contact
  .contact-main-box .contact-disc-box {
    width: 50%;
    h2 {
      width: 80%;
      height: 33px;
      margin-left: 11%;
      font-size: 14px;
    }
    .disc {
      font-size: 14px;

      p {
        font-size: 14px;
        width: 40%;
        margin-left: 30%;
        margin-top: 150px;
      }
    }
  }
  //end contact
  //start menu
  .menu-box {
    height: 1900px;
    h2 {
      width: 35%;
      height: 40px;
      font-size: 12px;
      padding-top: 17px;
      margin-left: 34%;
    }
    .menu-list {
      width: 100%;
      height: 570px;
      float: none;
      h3 {
        width: 35%;
        height: 25px;
        padding-top: 9px;
        margin-left: 33%;
        color: #f38339;
      }
    }
  }
  //end menu

  //start fotter
  .footer {
    height: 670px;
    padding-top: 110px;
    margin-top: 0px;
    .footer-disc .fotter-box {
      width: 96%;
      float: none;
      margin-top: 40px;
    }
  }

  .logo-box {
    position: absolute;
    top: 380px;
  }
  //end fotter
}
</style>
