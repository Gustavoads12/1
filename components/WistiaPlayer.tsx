"use client";

export default function WistiaPlayer() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <script src="https://fast.wistia.com/player.js" async></script>
          <script src="https://fast.wistia.com/embed/wz47cojpk6.js" async type="module"></script>
          <style>
            wistia-player[media-id='wz47cojpk6']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/wz47cojpk6/swatch');
              display: block;
              filter: blur(5px);
              padding-top:177.78%;
            }
          </style>
          <wistia-player media-id="wz47cojpk6" seo="false" aspect="0.5625"></wistia-player>
        `
      }}
    />
  );
}
