<template>
  <div class="quotes">
    <h3>Введите текст для поиска по нему цитат</h3>
    <input
        class="form-control form-control-lg"
        type="text"
        v-model="searchText"
        placeholder="Жизнь"
    />
    <div class="quotes__container">
      <template v-for="quote in quotes" :key="quote.id">
        <!-- Начало -->
        <div class="quotes__quote-block" v-if="getVisibility(quote.text)">
          <p class="quotes__quote-text" v-html="quote.text"></p>
          <p class="quotes__quote-author">{{ quote.author }}</p>
        </div>
        <!-- Конец -->
      </template>
      <div class="quotes__quote-block" v-if="quotes.length > 0 && !filteredQuotes.length">
        <p>Цитат не найдено</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDirective",
  data() {
    return {
      searchText: "",
      quotes: [
        // ... ваш массив цитат
      ],
    };
  },
  computed: {
    filteredQuotes() {
      return this.quotes.filter((quote) => this.getVisibility(quote.text));
    },
  },
  methods: {
    getVisibility(text) {
      return text.includes(this.searchText);
    },
  },
  directives: {
    replace: {
      update: function (el, binding) {
        const searchText = binding.value.split("$")[0];
        const fullText = binding.value.split("$")[1];
        el.innerHTML = fullText.replace(
            searchText,
            '<span style="color: #1783b7; text-decoration: underline;">' +
            searchText +
            "</span>"
        );
      },
    },
  },
};
</script>

<style>
.quotes {
  margin: 50px auto;
  width: 700px;
}

.quotes h3 {
  margin-bottom: 15px;
}

.quotes__container {
  margin-top: 15px;
  padding-top: 15px;
}

.quotes__quote-block {
  margin-bottom: 15px;
  padding: 10px;
  box-shadow: 4px 4px 8px 2px rgba(34, 60, 80, 0.2);
  border-radius: 6px;
}

.quotes__quote-text {
  font-size: 20px;
}

.quotes__quote-author {
  margin-top: 5px;
  font-size: 16px;
}

.quotes__quote-text span {
  color: #1783b7;
  text-decoration: underline;
}
</style>
