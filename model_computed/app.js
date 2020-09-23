new Vue({
    el: '#exercise',
    data: {
      currentClass: 'shrink',
      seconds: 2,
      assignedClass: '',
      otherAssignedClass: '',
      useClass4: false,
      assignedColor: 'none',
      progress: 0,
      interval: null
    },
    computed: {
      currentProgress: function() {
          if (this.progress == 100) {
              clearInterval(this.interval);
          }
          return this.progress;
      }
    },
    methods: {
      startEffect: function() {
        setInterval(
          () => this.currentClass = this.currentClass == 'shrink' ? 'highlight' : 'shrink',
          this.seconds * 1000
        );
      },
      startProgress: function() {
          this.progress = 0;
          this.interval = setInterval(() => this.progress += 5, this.seconds * 1000);
      }
    }
  });