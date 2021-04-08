<template>
  <div>
    <fu-steps ref="steps" finish-status="success" :beforeLeave="beforeLeave" :isLoading="loading">
      <fu-step id="cluster" title="第1步">
        <div class="example">
          <el-form ref="ruleForm" label-width="80px" :model="ruleForm" :rules="rules">
            <el-form-item label="名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </fu-step>
      <fu-step id="network" title="第2步">
        <div class="example">
          <h1>Step 2</h1>
        </div>
      </fu-step>
      <fu-step id="storage" title="完成" :beforeActive="beforeActive">
        <div class="example">
          <h1>完成</h1>
        </div>
      </fu-step>
    </fu-steps>
  </div>
</template>

<script>
export default {
  name: "StepsHooksDemo",
  data() {
    return {
      validateCluster: false,
      ruleForm: {
        name: "",
      },
      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
      },
      loading: false,
    };
  },
  methods: {
    submitForm() {
      let bool;
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          bool = true;
        } else {
          bool = false;
        }
      });
      return bool;
    },
    beforeLeave({ id, title, index }) {
      if (index === 0) {
        // 第一步校验
        if (this.submitForm()) {
          // 校验成功
          if (this.validateCluster !== true) {
            // 异步校验，5秒后校验通过
            setTimeout(() => {
              this.validateCluster = true;
              this.loading = false;
              // 重新触发beforeLeave，但是validateCluster已经为true
              this.$refs.steps.next();
            }, 3000);
            this.loading = true;
            console.log(id + "异步校验执行中，需要loading");
            // 校验通过前先返回false
            return false;
          } else {
            console.log(id + " 异步校验通过");
            return true;
          }
        } else {
          return false;
        }
      }
      if (id === "network") {
        console.log(title + " 异步校验通过");
        return true; // 同步校验, 返回true
      }
      if (id === "storage") {
        console.log(index + " 异步校验通过");
        // 同步校验, 返回undefined
      }
      // return true;
    },
    beforeActive({ id, title, index }) {
      console.log(index + "激活前");
    },
  },
};
</script>
<style lang="scss" scoped>
.example {
  margin: 0 10%;
}
</style>
