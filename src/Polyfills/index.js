if (!HTMLInputElement.valueAsDate) {
  Object.defineProperty(HTMLInputElement.prototype, "valueAsDate", {
    get: function () {
      if (this.value === "") {
        return null;
      }
      const d = this.value.split("-");
      return new Date(Date.UTC(Number(d[0]), Number(d[1]) - 1, Number(d[2])));
    },
    set: function (d) {
      if (d === null) {
        this.value = "";
        return;
      }
      const day = ("0" + d.getUTCDate()).slice(-2);
      const month = ("0" + (d.getUTCMonth() + 1)).slice(-2);
      this.value = d.getUTCFullYear() + "-" + month + "-" + day;
    },
  });
}
