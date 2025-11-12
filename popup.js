document.addEventListener("DOMContentLoaded", async () => {
    const reportEl = document.getElementById("report");
    const blockedList = document.getElementById("blockedList");
  
    const data = await chrome.storage.local.get(["usage", "blocked"]);
    const usage = data.usage || {};
    const blocked = data.blocked || [];
  
    for (const [site, time] of Object.entries(usage)) {
      const p = document.createElement("p");
      p.textContent = `${site}: ${Math.round(time / 60)} min`;
      reportEl.appendChild(p);
    }
  
    blocked.forEach(site => {
      const li = document.createElement("li");
      li.textContent = site;
      blockedList.appendChild(li);
    });
  
    document.getElementById("addBlock").addEventListener("click", async () => {
      const input = document.getElementById("blockSite");
      const site = input.value.trim();
      if (site) {
        const updated = [...blocked, site];
        await chrome.storage.local.set({ blocked: updated });
        location.reload(); // reload to reflect changes
      }
    });
  });
  