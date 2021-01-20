# CSS规范

Fit2cloud UI使用scss编写样式，命名规范遵循BEM规范

### 命名规范: namespace-block__element--modifier

<details>
  <summary>namespace(命名空间) 为了区别控件库，避免与其他控件库冲突</summary>

  FIT2CLOUD UI 规定namespace为 fu，所以css的命名都符合 fu-block__element--modifier

</details>

<details>
  <summary>一个 block(块) 就是一个组件</summary>

  简单理解一个vue文件就是一个组件，当然可能是只一个子组件，但是不论是总组件还是子组件，
  我们规定block就以vue组件名称为准，例如：组件fu-speed-dial，那么block为speed-dial
  ```html
  <fu-speed-dial :items="items" @click="click"/>
  ```
  
  或者：子组件fu-speed-dial-button，那么block为speed-dial-button
  ```html
  <fu-speed-dial-button v-bind="buttonProps" :icon="icon" @click="click"/>
  ```

</details>

<details>
  <summary>element(元素) 是 block 的子节点</summary>

  如果一个组件由多部分构成，为了明确构成，一般将各个部分设为 element，例如
  ```html
  <div class="fu-speed-dial-action-button">
    <div class="fu-speed-dial-action-button__title">
  ```

</details>

<details>
  <summary>modifier(修饰符) 是改变某个块或元素的外观的标志</summary>

  一个组件或组件的一部分会根据参数设定来设置不同的样式，比如一个组件有多种主题可选，那么就需要用到 modifier
  例如：组件fu-speed-dial-button的主题样式
  ```scss
  .fu-speed-dial-button-default {
    ...
  }

  .fu-speed-dial-button-primary {
    ...
  } 
  ```

</details>

### 辅助命名规范: 状态

<details>
  <summary>状态使用独立的命名 is-xxx</summary>

  组件一般有不同的状态，例如disabled，active等状态，这些组件除了基础的BEM命名，还需要加上状态样式，
  例如：fu-speed-dial-button激活时添加is-active
  ```html
  <div
    :class="[
      'fu-speed-dial-button',
      {
        'is-disabled': props.disabled,
        'is-active': props.active,
      }
    ]"
  </div>
  ```

</details>