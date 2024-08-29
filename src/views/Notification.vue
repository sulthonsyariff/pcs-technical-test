<template>
  <div class="max-w-md h-screen mx-auto bg-white">
    <div class="fixed max-w-md top-0 bg-white w-full z-50 flex items-center p-4 shadow-lg">
      <font-awesome-icon
        :icon="['fas', 'arrow-left']"
        class="text-2xl cursor-pointer"
        @click="navigateToHome"
      />
      <h2 class="text-2xl font-bold text-primary ml-5">Notifications</h2>
    </div>

    <div class="h-16"></div>

    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="cursor-pointer p-4"
      :class="{ 'bg-blue-200': notification.isRead, 'bg-white': !notification.isRead }"
    >
      <div class="flex items-start mb-2">
        <div class="relative rounded-lg bg-gradient-to-r from-primary to-secondary icon-notification">
          <img
            :src="notification.icon"
            class="w-7"
            alt="icon notification"
          />
          <div
            class="text-white text-xs w-5 h-5 rounded-full bg-black absolute -bottom-1 -right-1 flex items-center justify-center"
            :class="{
              'bg-green-500': notification.status === 'approved',
              'bg-red-500': notification.status === 'rejected',
              'bg-blue-500': notification.status === 'pending',
            }"
          >
            <font-awesome-icon
              :icon="['fas', 'check']"
              v-if="notification.status === 'approved'"
            />
            <font-awesome-icon
              :icon="['fas', 'x']"
              v-if="notification.status === 'rejected'"
            />
            <font-awesome-icon
              :icon="['fas', 'right-long']"
              v-if="notification.status === 'pending'"
            />
          </div>
        </div>

        <div class="ml-4 text-sm">
          <h3 class="font-semibold">{{ notification.title }}</h3>
          <p v-html="notification.message" />
        </div>

        <span class="text-right text-xs text-gray-400 flex-none">
          {{ notification.date }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import coin from "@/assets/coin.png";
import medicine from "@/assets/medicine.png";
import overtime from "@/assets/overtime.png";

const router = useRouter();

const notifications = ref([
  {
    id: 1,
    title: "Reimbursement",
    message:
      "Your submission 'Lorem ipsum dolor sit amet...' with the total cost of 50,000 has been <strong>paid</strong>, please check your BRIMO application. Thank you.",
    date: "Today",
    status: "approved",
    isRead: true,
    icon: coin,
  },
  {
    id: 2,
    title: "Sickness",
    message:
      "Your submission is being <strong>reviewed</strong> to the Superior for the approval process, please wait.",
    date: "Yesterday",
    status: "pending",
    isRead: false,
    icon: medicine,
  },
  {
    id: 3,
    title: "Overtime",
    message:
      "Your submission has been <strong>approved</strong> by the superior.",
    date: "2022-10-06",
    status: "rejected",
    isRead: true,
    icon: overtime,
  },
  {
    id: 4,
    title: "Reimbursement",
    message:
      "Your submission 'Lorem ipsum dolor sit amet...' with the total cost of 50,000 has been <strong>paid</strong>, please check your BRIMO application. Thank you.",
    date: "2022-10-05",
    status: "approved",
    isRead: true,
    icon: coin,
  },
  {
    id: 5,
    title: "Sickness",
    message:
      "Your submission is being <strong>reviewed</strong> to the Superior for the approval process, please wait.",
    date: "2022-10-04",
    status: "pending",
    isRead: false,
    icon: medicine,
  },
  {
    id: 6,
    title: "Overtime",
    message:
      "Your submission has been <strong>approved</strong> by the superior.",
    date: "2022-10-03",
    status: "rejected",
    isRead: false,
    icon: overtime,
  },
  {
    id: 7,
    title: "Reimbursement",
    message:
      "Your submission 'Lorem ipsum dolor sit amet...' with the total cost of 50,000 has been <strong>paid</strong>, please check your BRIMO application. Thank you.",
    date: "2022-10-02",
    status: "approved",
    isRead: true,
    icon: coin,
  },
  {
    id: 8,
    title: "Sickness",
    message:
      "Your submission is being <strong>reviewed</strong> to the Superior for the approval process, please wait.",
    date: "2022-10-01",
    status: "pending",
    isRead: false,
    icon: medicine,
  },
  {
    id: 9,
    title: "Overtime",
    message:
      "Your submission has been <strong>approved</strong> by the superior.",
    date: "2022-09-06",
    status: "rejected",
    isRead: false,
    icon: overtime,
  },    
]);

const navigateToHome = () => {
  router.push({ name: "home" });
};
</script>

<style lang="scss" scoped>
.icon-notification {
  width: 50px;
  height: 50px;
  flex: 0 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
