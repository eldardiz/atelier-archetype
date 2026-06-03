export default function InfiniteScrollBanner() {
  return (
    <div className="marquee" data-speed="55">
      <div className="marquee-track">
        <span className="word script">Welcome</span>
        <span className="dot"></span>
        <span className="word"><em>Breakfast</em></span>
        <span className="dot alt"></span>
        <span className="word script">Lunch</span>
        <span className="dot cream"></span>
        <span className="word"><em>Aperitif</em></span>
        <span className="dot"></span>
        <span className="word script">Dinner</span>
        <span className="dot alt"></span>
        <span className="word"><em>Sunday&nbsp;brunch</em></span>
        <span className="dot cream"></span>
      </div>
    </div>
  )
}
