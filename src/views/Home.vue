<template>
    <div class="home">
      <TopBarRes/>
    <InputTransactions/>
    <ListOfInputs/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBarRes from "@/components/TopBarRes.vue";
import InputTransactions from "@/components/InputTransactions.vue";
import ListOfInputs from "@/components/ListOfInputs.vue";

export default {
  name: 'Home',
  components: {
    ListOfInputs,
    InputTransactions,
    TopBarRes,
  }

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }

  body {
    color: #555;
    font-family: Open Sans;
    font-size: 16px;
    position: relative;
    height: 100vh;
    font-weight: 400;
  }

  .right { float: right; }
  .red { color: #FF5049 !important; }
  .red-focus:focus { border: 1px solid #FF5049 !important; }
</style>
