<template>
  <div class="code-block" :data-label="label">
    <div class="description" v-html="description" v-if="description">
      <!--描述-->
    </div>
    <div class="code-block-wrapper">
      <pre><code ref="block" :class="lang"><slot v-pre/></code></pre>
      <span class="copy-message" :class="{ active: showMessage }">Code copied!</span>
    </div>

    <el-button ref="copy" class="copy">Copy</el-button>
  </div>
</template>

<script>
import highlight from "highlight.js/lib/highlight.js";
import highlightSCSS from "highlight.js/lib/languages/scss";
import highlightXML from "highlight.js/lib/languages/xml";
import highlightJavascript from "highlight.js/lib/languages/javascript";
import highlightShell from "highlight.js/lib/languages/shell";
import Clipboard from "clipboard";
import codeSource from "../mixins/codeSource";

highlight.registerLanguage("scss", highlightSCSS);
highlight.registerLanguage("xml", highlightXML);
highlight.registerLanguage("javascript", highlightJavascript);
highlight.registerLanguage("shell", highlightShell);

export default {
  name: "CodeBlock",
  mixins: [codeSource],
  props: {
    description: String,
    lang: String,
    label: String,
    // height: {
    //   type: [Number, String],
    //   default: "450px",
    // },
  },
  data: () => ({
    showMessage: false,
  }),
  methods: {
    reindentSource: codeSource.reindentSource,
    enableCopy() {
      if (this.$refs.copy) {
        const clipboard = new Clipboard(this.$refs.copy.$el, {
          target: () => this.$refs.block,
        });
        let timer = null;

        clipboard.on("success", (event) => {
          event.clearSelection();
          this.showMessage = true;

          window.clearTimeout(timer);
          timer = window.setTimeout(() => {
            this.showMessage = false;
          }, 2000);
        });
      }
    },
  },
  mounted() {
    this.$nextTick().then(() => {
      this.reindentSource();
      this.enableCopy();

      highlight.highlightBlock(this.$refs.block);
    });
  },
};
</script>

<style lang="scss" scoped>
.code-block {
  max-width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #f5f9ff;

  ::selection {
    background-color: #3e3d3d;
    color: inherit;
  }

  + .code-block {
    margin-top: 24px;
  }

  &:after {
    position: absolute;
    top: 16px;
    right: 16px;
    transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    color: rgba(#fff, 0.38);
    content: attr(data-lang);
    font-size: 11px;
    line-height: 1em;
    text-transform: uppercase;
  }

  pre {
    max-width: 100%;
    margin: 0;
    white-space: pre-wrap;
  }

  code {
    padding: 0;
    background: none;
  }
  .description {
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #999999;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;
    /deep/keyword {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      padding: 1px 5px;
      border-radius: 3px;
    }
  }
}

.code-block-wrapper {
  // min-width: 100%;
  // max-height: 450px;
  min-height: 86px;
  padding: 25px;
  overflow: auto;
}
.copy {
  position: absolute;
  right: 26px;
  bottom: 26px;
}
.copy-message {
  padding: 8px 12px;
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #f4f4f5;
  border-radius: 2px;
  transform: translate3d(0, -48px, 0);
  transition: 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
  color: #909399;
  font-size: 14px;
  line-height: 1em;

  &.active {
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform: translate3d(0, 0, 0);
  }
}
</style>

<style lang="scss">
.hljs {
  color: #333333;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.5rem;
}

.hljs-comment,
.hljs-quote,
.hljs-meta {
  color: #7c7c7c;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name {
  color: #3182bd;
}

.hljs-tag,
.hljs-params {
  color: #3182bd;
}

.hljs-attribute {
  color: #a7bfc9;
}

.hljs-selector-class,
.hljs-selector-id,
.hljs-built_in {
  color: #31a354;
}

.hljs-attr,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-function {
  color: #bb8adb;
}

.hljs-string,
.hljs-addition {
  color: #666666;
}

.hljs-subst {
  color: #daefa3;
}

.hljs-regexp,
.hljs-link {
  color: #e9c062;
}

.hljs-title,
.hljs-section,
.hljs-type,
.hljs-doctag {
  color: #ffffb6;
}

.hljs-symbol,
.hljs-bullet,
.hljs-variable,
.hljs-template-variable,
.hljs-literal {
  color: #31a354;
}

.hljs-number,
.hljs-deletion {
  color: #ffab40;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: 500;
}

.scss,
.undefined {
  color: #89dcfe;
}

.javascript .hljs-attr {
  color: #3182bd;
}
</style>
