const score = Number(prompt("Balingizni kiriting"));
const paragraph = document.querySelector("#result");
const title = document.querySelector("#money");

if (score < 80) {
  paragraph.textContent = "O'qishga kira olmadingiz";
} else if (score >= 80 && score < 100) {
  paragraph.textContent =
    "Siz super-kontrakt asosida oqishga qabul qilindingiz";
  let value = Number(
    prompt("Qancha pulingiz bor? super-kontrakt miqdori yiliga 3000$ !!!")
  );
  if (value >= 3000) {
    title.textContent = "Pulingiz yetarli";
  } else if (value < 3000) {
    title.textContent = "Pulingiz yetarli emas";
  } else {
    alert("Iltimos summa kiriting ");
  }
} else if (score >= 100 && score < 130) {
  paragraph.textContent = "Siz kontrakt asosida oqishga qabul qilindingiz";
  let value = Number(
    prompt("Qancha pulingiz bor? Kontrakt miqdori yiliga 2000$ !!!")
  );
  if (value >= 2000) {
    title.textContent = "Pulingiz yetarli";
  } else if (value < 2000) {
    title.textContent = "Pulingiz yetarli emas";
  } else {
    alert("Iltimos summa kiriting ");
  }
} else if (score >= 130 && score < 180) {
  paragraph.textContent = "Siz Davlat Grandi asosida oqishga qabul qilindingiz";
} else {
  alert("Natogri qiymat kiritdingiz");
}
