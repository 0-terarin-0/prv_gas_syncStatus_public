var url =
  "https://script.googleusercontent.com/a/macros/k12.muse.kansai-u.ac.jp/echo?user_content_key=g2fBKmOQo09sGyF5oTpt0V6E0pInkSUR0ayX-ZKMVL7Asmxpu1n-u90zgpETWO4Fw4u0jhMgA9hBhoTwm6tjOjn8timCr2_aOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKB_hBJV5WlOhfA94WaGlHKSA9aQ5h6yNrXV2OKoRIslidk-qB0GWTDUpa_aSooZBEu5Bu0E8u5yTqQXf38TPM5si3rWNRlAG7W6n3IKuz0N_vx6N_gjwHpg3diNI9_hD9HeBuIZzq-uuZPF0hqxPb_b7iWQ0oMh3Wo&lib=MWalQ9ejAjj_0YHST5Cw9h1kL2vNjz42l";
fetch(url)
  .then((res) => res.json())
  .then((cont) => (document.getElementById("test").textContent = cont.status))
  .then((show) => {
    if(show =="オープニング"){document.getElementById("enterCheck").style.visibility = "visible";}});

