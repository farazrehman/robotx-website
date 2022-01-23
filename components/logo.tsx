const Logo = ({ className }: { className?: string }) => (
    <>
        <svg viewBox="0 0 2250 2250" className={className}>
            <path
                d="M2058.75,1125l-466.875,799.024l-933.75,0l-466.875,-799.024l466.875,-799.024l933.75,-0l466.875,799.024Z"
                className="outer"
            />
            <path
                d="M1746.88,1125l-310.938,532.15l-621.878,0l-310.938,-532.15l310.938,-532.15l621.878,-0l310.938,532.15Z"
                className="inner"
            />
            <path
                d="M1018.03,1169.5l-89.467,-210.396l-54.825,-135.455c-19.237,-47.074 -42.812,-98.955 -70.725,-155.643c-36.57,-77.823 -58.223,-123.94 -64.959,-138.352c-52.914,-122.972 -105.444,-184.5 -157.591,-184.585c-94.638,-0.153 -174.938,90.44 -240.899,271.782c-30.89,-7.731 -46.308,-27.917 -46.255,-60.558c0.148,-91.204 44.729,-189.057 133.742,-293.557c89.014,-104.5 173.114,-156.686 252.301,-156.557c62.77,0.102 119.204,36.195 169.303,108.28c50.099,72.085 122.765,221.97 217.998,449.656l113.99,273.798l49.391,-86.324l92.971,-162.577c222.737,-386.536 445.643,-579.623 668.718,-579.26c74.358,0.12 144.345,15.595 209.962,46.423l-208.926,207.03c-40.521,-23.107 -75.75,-34.684 -105.687,-34.733c-87.878,-0.143 -175.351,47.717 -262.419,143.58c-87.068,95.863 -201.303,269.926 -342.704,522.188l-45.035,80.571l115.433,276.681l64.946,146.992l62.05,145.548c86.58,204.63 167.049,307.006 241.407,307.127c108.158,0.176 186.996,-82.26 236.514,-247.308c35.706,15.419 53.537,36.089 53.495,62.01c-0.068,42.242 -29.146,107.958 -87.232,197.148c-87.129,133.305 -185.738,199.868 -295.827,199.689c-79.187,-0.129 -149.853,-43.446 -212,-129.951c-62.146,-86.505 -149.495,-263.775 -262.046,-531.811l-79.358,-191.658l-31.968,61.871c-278.01,526.613 -559.454,789.688 -844.333,789.225c-60.838,-0.099 -126.961,-16.527 -198.369,-49.284l213.269,-205.584c37.629,20.222 78.172,30.369 121.628,30.439c126.505,0.206 257.995,-95.585 394.469,-287.372c114.211,-159.182 200.869,-299.688 259.974,-421.518l29.064,-57.555Z"
                className="glyph"
            />
        </svg>
        <style>{`
                .outer {
                    fill: #c0c0c0;
                }

                .inner {
                    fill: #e1e1e1;
                }

                .glyph {
                    fill: #d6544b;
                }

                @media (prefers-color-scheme: dark) {
                    .outer {
                        fill: #565656;
                    }
    
                    .inner {
                        fill: #252525;
                    }
                }
            `}</style>
    </>
);

export { Logo };
