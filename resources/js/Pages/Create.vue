<script setup lang="ts">
import { useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
  name: null,
  price: null,
});

const onSubmit = () => {
  form.post(route("products.store"));
};
</script>
<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="d-flex justify-content-between">
          <div><h3>Product Create</h3></div>
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
                <button type="submit" class="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
