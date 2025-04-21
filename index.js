import fetch from "node-fetch";

(async () => {
  try {
    const res = await fetch("https://coinspire.vercel.app/create");
    console.log("Ping success:", res.status);
  } catch (err) {
    console.error("Ping failed", err);
  }
})();
