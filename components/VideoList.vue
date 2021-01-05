<template>
    <div class="video-list">
        <div class="video-desktop">
            <div v-for="(src, index) in videos_src" :key="index" class="youtube-player" :data-id="src"></div>
        </div>

        <!-- <div v-else class="video-mobile">
          <Video v-for="(src, index) in videos_src" :key="index" :src="src" />
        </div> -->
    </div>
</template>

<script>
export default {
    props: {
        videos_src: {
            type: Array
        },
    },
    mounted () {
      this.initYouTubeVideos();
    },
    methods: {
      initYouTubeVideos() {
        var playerElements = document.getElementsByClassName('youtube-player');
        for (var n = 0; n < playerElements.length; n++) {
          var videoId = playerElements[n].dataset.id;
          var div = document.createElement('div');
          div.setAttribute('data-id', videoId);
          var thumbNode = document.createElement('img');
          thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace(
            'ID',
            videoId
          );
          thumbNode.setAttribute('loading', 'lazy');
          div.appendChild(thumbNode);
          var playButton = document.createElement('div');
          playButton.setAttribute('class', 'play');
          div.appendChild(playButton);
          div.onclick = function() {
              console.log(this)
            // this.labnolIframe(this);
    
              var iframe = document.createElement('iframe');
              iframe.setAttribute(
                'src',
                'https://www.youtube.com/embed/' + this.dataset.id + '?autoplay=1&rel=0'
              );
              iframe.setAttribute('frameborder', '0');
              iframe.setAttribute('allowfullscreen', '1');
              iframe.setAttribute(
                'allow',
                'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              );
              this.parentNode.replaceChild(iframe, this);
          };
          playerElements[n].appendChild(div);
        }       
      },
      labnolIframe(div) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute(
          'src',
          'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0'
        );
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '1');
        iframe.setAttribute(
          'allow',
          'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        );
        div.parentNode.replaceChild(iframe, div);
      }
    }

}
</script>

<style lang="sass">

.youtube-player 
  position: relative
  padding-bottom: 56.25%
  height: 0
  overflow: hidden
  background: #000
  width: 90%
  margin-bottom: 25px
  max-width: 600px
  display: block
  &::last-child
    margin-bottom: 0

.youtube-player iframe 
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 10
  background: transparent


.youtube-player img
  object-fit: cover
  display: block
  left: 0
  bottom: 0
  margin: auto
  max-width: 100%
  width: 100%
  position: absolute
  right: 0
  top: 0
  border: none
  height: auto
  cursor: pointer
  -webkit-transition: 0.4s all
  -moz-transition: 0.4s all
  transition: 0.4s all


.youtube-player img:hover
  -webkit-filter: brightness(75%)

.youtube-player .play 
  height: 72px
  width: 72px
  left: 50%
  top: 50%
  margin-left: -36px
  margin-top: -36px
  position: absolute
  background: url('//i.imgur.com/TxzC70f.png') no-repeat
  cursor: pointer
  transition: .4s ease all
  &:hover
    transform: scale(1.1)
  
</style>