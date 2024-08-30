import { defineStore } from 'pinia';

export const useWorkTrackerStore = defineStore('workTracker', {
  state: () => ({
    checkInTime: null,
    checkOutTime: null,
    workingHours: '00:00:00',
    intervalId: null
  }),
  actions: {
    handleCheckIn() {
      this.checkInTime = new Date();
      this.intervalId = setInterval(this.updateWorkingHours, 1000);
    },
    handleCheckOut() {
      this.checkOutTime = new Date();
      clearInterval(this.intervalId);
    },
    updateWorkingHours() {
      if (this.checkInTime) {
        const now = new Date();
        const diff = new Date(now - this.checkInTime);
        const hours = String(diff.getUTCHours()).padStart(2, '0');
        const minutes = String(diff.getUTCMinutes()).padStart(2, '0');
        const seconds = String(diff.getUTCSeconds()).padStart(2, '0');
        this.workingHours = `${hours}:${minutes}:${seconds}`;
      }
    },
    formatTime(date) {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  },
  getters: {
    formattedCheckInTime(state) {
      return state.checkInTime ? this.formatTime(state.checkInTime) : '--:--';
    },
    formattedCheckOutTime(state) {
      return state.checkOutTime ? this.formatTime(state.checkOutTime) : '--:--';
    }
  }
});