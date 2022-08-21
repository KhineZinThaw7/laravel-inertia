<script setup lang="ts">
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from 'vue'

var photRef = ref();

const props = defineProps<{
  product: any;
}>();

const form = useForm({
  name: props.product.name ?? null,
  price: props.product.price ?? null,
  photo: '',
  file: '',
});

const chooseFile = () => {
    photRef.value.click();
};

// アイコン選択イベント
const onPreviewImage = (event: any) => {
    const file = event.target.files[0];
    form.photo = file;
    form.file = URL.createObjectURL(file);
};

const onSubmit = () => {
  form.post(route("products.update", { product: props.product.id }));
};
</script>
<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="d-flex">
          <div><h3>Product Edit</h3></div>
          <a :href="route('products.index')" class="btn btn-primary float-end"
            >Back</a
          >
        </div>
        <div class="table-responsive my-3">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="onSubmit">
                <input type="text" class="form-control" v-model="form.name" />
                <div v-if="form.errors.name" class="text-danger">
                  {{ form.errors.name }}
                </div>
                <br />
                <input type="text" class="form-control" v-model="form.price" />
                <div v-if="form.errors.price" class="text-danger">
                  {{ form.errors.price }}
                </div>
                <br />
                <input ref="photRef" type="file" accept="image/jpeg, image/jpg, image/png" @change="onPreviewImage" style="display: none" />
                <a class="btn btn-info" @click.prevent="chooseFile">Choose Photo</a>
                <div v-if="form.file">
                    <img :src="form.file" width="100" height="100" />
                </div>
                <div v-else>
                    <img :src="`/storage/${props.product.photo}`" width="100" height="100" />
                </div>
                 <div v-if="form.errors.photo" class="text-danger">
                  {{ form.errors.photo }}
                </div>
                <br><br>
                <br>
                <button type="submit" class="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
