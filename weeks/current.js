/* ============================================================
   THE WEEKLY SWITCH. Point these at this week's folders, then upload.
   Midweek: weeks/<Monday date>/midweek of the coming week.
   Sunday: list each Watchtower study with the Sunday it is studied on.
   The app shows the first study whose Sunday is today or later, so on a
   Sunday it shows that day's study, and from Monday on it shows the next one.
   Changing this file also refreshes the offline copy (sw.js re-reads it).
   ============================================================ */
self.MMB_WEEK = {
  midweek: "weeks/2026-11-02/midweek",
  sundays: [
    {date: "2026-11-01", path: "weeks/2026-10-26/sunday"},
    {date: "2026-11-08", path: "weeks/2026-11-02/sunday"}
  ]
};
(function(w){
  var d = new Date();
  var today = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  var list = w.sundays.slice().sort(function(a, b){ return a.date < b.date ? -1 : 1; });
  var pick = list[list.length - 1];
  for(var i = 0; i < list.length; i++){ if(list[i].date >= today){ pick = list[i]; break; } }
  w.sunday = pick.path;          // read by index.html and sunday/index.html
  w.sundayDate = pick.date;
})(self.MMB_WEEK);
