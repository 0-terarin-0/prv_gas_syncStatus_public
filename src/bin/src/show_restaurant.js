var url =
  "https://script.googleusercontent.com/a/macros/k12.muse.kansai-u.ac.jp/echo?user_content_key=FuJdi_b76zvQLDFjmGZu8LB41pnWjDMo39JQ1vInTXUODRRQEir6RevdWbiKxuVNVcQfYjVTGBcKSrJ1OnQfQipTsZSM8CHTOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKB_hBJV5WlOhfA94WaGlHKSA9aQ5h6yNrXV2OKoRIslidk-qB0GWTDUpa_aSooZBEu5Bu0E8u5yTqQXf38TPM5si3rWNRlAG7W6n3IKuz0N_vx6N_gjwHpg3diNI9_hD9HeBuIZzq-uuZPF0hqxPb_bsyAfw_fjazQ21SUX0JaSYQ&lib=MWalQ9ejAjj_0YHST5Cw9h1kL2vNjz42l";
fetch(url)
  .then((res) => res.json())
  .then((cont) => (document.getElementById("test").textContent = cont.status))
  .then((show) => {
    if (show == "オープニング") {
      document.getElementById("enterCheck").style.visibility = "visible";
    }
  });
