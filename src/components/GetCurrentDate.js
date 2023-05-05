function getMonthName(month) {
  const d = new Date();
  d.setMonth(month - 1);
  const monthName = d.toLocaleString("default", { month: "long" });
  return monthName;
}

export function getCurrentDate() {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const currentDate = `${getMonthName(month)}${" "}${
    date < 10 ? `0${date}` : `${date}`
  }${", "}${year}`;

  return currentDate;
}
