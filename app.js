const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted');
    },
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    setName(e, lastName) {
      this.name = e.target.value + ' ' + lastName;
    },
  },
});

app.mount('#events');
