<template>
  <b-card
    header-tag="header"
    footer-tag="footer"
    bg-variant="secondary"
    class="footer"
  >
    <b-card-text>Header and footers using slots.</b-card-text>
    <b-button href="#" variant="">Go somewhere</b-button>
    <template #footer>
      <em>Footer Slot</em>
    </template>
  </b-card>
</template>

<script></script>

<style scoped>
.link {
  text-decoration: none;
  color: white;
}

.footer {
  border-radius: 0;
}
</style>
