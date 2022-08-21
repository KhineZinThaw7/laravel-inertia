<script setup lang="ts">
import { Link, useForm } from "@inertiajs/inertia-vue3";

const props = defineProps<{
  products: any;
}>();

const form = useForm({});

const onDelete = (id: any) => {
  form.delete(route("products.destroy", { product: id }));
};
</script>
<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="d-flex justify-content-between">
          <div><h3>Product List</h3></div>
          <a :href="route('products.create')" class="btn btn-primary"
            >Add New</a
          >
        </div>
        <div class="table-responsive my-3">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in props.products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td> <img :src="`/storage/${product.photo}`" width="100" height="100"></td>
                <td>
                  <Link
                    :href="route('products.edit', { product: product.id })"
                    class="btn btn-info me-2"
                    >Edit</Link
                  >
                  <button
                    type="submit"
                    @click="onDelete(product.id)"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
