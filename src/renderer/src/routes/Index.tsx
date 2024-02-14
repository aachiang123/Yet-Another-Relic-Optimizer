import starRailBackground from "../assets/StarRailRes/icon/logo/bg.png"

function Index(): JSX.Element {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${starRailBackground})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Yet Another Relic Optimizer</h1>
          <p className="mb-5">Click on one of the sidebars to get started</p>
        </div>
      </div>
    </div>
  )
}

export default Index