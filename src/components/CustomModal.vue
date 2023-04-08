<template>
  <div
    class="modal"
    id="customModal"
    tabindex="-1"
    aria-labelledby=""
    aria-hidden="true"
    ref="modalRef"
  >
    <div class="modal-dialog" :style="style">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Modal } from "bootstrap";

defineProps({
  title: String,
  style: String,
});

let modalRef = ref(null);
let thisModalObj = null;

onMounted(() => {
  thisModalObj = new Modal(modalRef.value);
});

function _show() {
  thisModalObj.show();
}

function _hide() {
  thisModalObj.hide();
}

defineExpose({ show: _show, hide: _hide });
</script>
