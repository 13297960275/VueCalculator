<template>
  <div>
    <h3>网页计算器</h3>
    <el-input v-model="result" placeholder="开始计算" @focus="dialogVisible = true"></el-input>
    <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
    <input 

    <el-dialog title="计算器" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <calculator v-on:calculate="getResult"></calculator>
    </el-dialog>
</div>
</template>

<script>
  import Calculator from './Calculator'

  export default {
    name: 'InputBox',
    data() {
      return {
        dialogVisible: false,
        result: ''
      }
    },
    components: {
      Calculator
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
      },
      getResult(result) {
        // console.log('result=='+result)
        this.result = result
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
