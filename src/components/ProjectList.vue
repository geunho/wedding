<template>
<div class="row">
  <div class="col-md-9">
    <h4 class="page-header">Projects</h4>
    <feed
      v-for="feed in feeds"
      :feed="feed">
    </feed>
  </div>
</div>
</template>

<script>
import Feed from '../components/Feed'

export default {
  name: 'ProjectList',

  components: {
    Feed
  },

  data () {
    return {
      title: '',
      content: '',
      projects: [],
      feeds: []
    }
  },

  created () {
    this.$http.get('http://geunho-mikyeong.com/api/feeds').then(response => {
      this.feeds = response.data
    })
  }
}
</script>
